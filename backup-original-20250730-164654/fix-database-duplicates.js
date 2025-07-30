/**
 * 修复数据库中的重复工具和孤立定义
 */

const fs = require('fs');

// 读取数据库文件
const databasePath = 'ai-tools-database.js';
let content = fs.readFileSync(databasePath, 'utf8');

console.log('🔍 开始分析数据库文件...');

// 查找主要的tools数组结束位置
const toolsArrayStart = content.indexOf('tools: [');
if (toolsArrayStart === -1) {
    console.error('❌ 找不到tools数组');
    process.exit(1);
}

// 查找tools数组的结束位置（寻找对应的闭合括号）
let bracketCount = 0;
let toolsArrayEnd = -1;
let inString = false;
let stringChar = '';

for (let i = toolsArrayStart + 8; i < content.length; i++) {
    const char = content[i];
    const prevChar = i > 0 ? content[i - 1] : '';
    
    // 处理字符串
    if ((char === '"' || char === "'") && prevChar !== '\\') {
        if (!inString) {
            inString = true;
            stringChar = char;
        } else if (char === stringChar) {
            inString = false;
            stringChar = '';
        }
    }
    
    if (!inString) {
        if (char === '[') {
            bracketCount++;
        } else if (char === ']') {
            if (bracketCount === 0) {
                toolsArrayEnd = i;
                break;
            }
            bracketCount--;
        }
    }
}

if (toolsArrayEnd === -1) {
    console.error('❌ 找不到tools数组的结束位置');
    process.exit(1);
}

console.log(`✅ 找到tools数组: ${toolsArrayStart} - ${toolsArrayEnd}`);

// 提取tools数组内容
const toolsArrayContent = content.substring(toolsArrayStart, toolsArrayEnd + 1);

// 查找tools数组之后的孤立对象
const afterToolsArray = content.substring(toolsArrayEnd + 1);
const orphanedObjectsStart = afterToolsArray.indexOf('// ===== 音频和音乐工具 =====');

if (orphanedObjectsStart !== -1) {
    console.log('🔍 发现孤立的工具对象定义');
    
    // 查找孤立对象的结束位置（寻找下一个主要结构）
    const nextStructurePatterns = [
        'agents: [',
        'utils: {',
        '// 导出数据库',
        'if (typeof module'
    ];
    
    let orphanedObjectsEnd = afterToolsArray.length;
    for (const pattern of nextStructurePatterns) {
        const pos = afterToolsArray.indexOf(pattern);
        if (pos !== -1 && pos < orphanedObjectsEnd) {
            orphanedObjectsEnd = pos;
        }
    }
    
    const orphanedContent = afterToolsArray.substring(orphanedObjectsStart, orphanedObjectsEnd);
    console.log(`📊 孤立内容长度: ${orphanedContent.length} 字符`);
    
    // 移除孤立的对象定义
    const cleanedContent = content.substring(0, toolsArrayEnd + 1) + 
                          afterToolsArray.substring(orphanedObjectsEnd);
    
    // 备份原文件
    const backupPath = `${databasePath}.backup.${Date.now()}`;
    fs.writeFileSync(backupPath, content);
    console.log(`💾 原文件已备份到: ${backupPath}`);
    
    // 写入清理后的内容
    fs.writeFileSync(databasePath, cleanedContent);
    console.log('✅ 已移除孤立的工具对象定义');
    
    // 显示移除的内容摘要
    const orphanedLines = orphanedContent.split('\n').filter(line => line.trim());
    const orphanedIds = orphanedLines
        .filter(line => line.includes("id: '"))
        .map(line => line.match(/id: '([^']+)'/)?.[1])
        .filter(Boolean);
    
    console.log('🗑️  移除的工具ID:', orphanedIds);
} else {
    console.log('✅ 没有发现孤立的工具对象定义');
}

// 分析重复的工具ID
console.log('\n🔍 分析重复的工具ID...');

// 使用正则表达式提取所有工具ID
const idMatches = content.match(/id:\s*'([^']+)'/g) || [];
const ids = idMatches.map(match => match.match(/id:\s*'([^']+)'/)[1]);

// 统计重复
const idCounts = {};
ids.forEach(id => {
    idCounts[id] = (idCounts[id] || 0) + 1;
});

const duplicates = Object.entries(idCounts)
    .filter(([id, count]) => count > 1)
    .sort((a, b) => b[1] - a[1]);

if (duplicates.length > 0) {
    console.log('⚠️  发现重复的工具ID:');
    duplicates.forEach(([id, count]) => {
        console.log(`  - ${id}: ${count}次`);
    });
    
    console.log('\n💡 建议手动检查并移除重复的工具定义');
} else {
    console.log('✅ 没有发现重复的工具ID');
}

console.log('\n🎉 数据库清理完成！');