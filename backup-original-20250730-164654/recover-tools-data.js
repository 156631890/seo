/**
 * 从备份文件中恢复工具数据
 * 修复编码问题并重建完整的数据库
 */

const fs = require('fs');

console.log('🔄 开始从备份文件恢复工具数据...');

try {
    // 读取备份文件
    const backupContent = fs.readFileSync('ai-tools-database.js.broken', 'utf8');
    
    // 查找tools数组的开始和结束位置
    const toolsStart = backupContent.indexOf('tools: [');
    const toolsArrayStart = backupContent.indexOf('[', toolsStart);
    
    if (toolsStart === -1 || toolsArrayStart === -1) {
        throw new Error('无法找到tools数组');
    }
    
    // 查找tools数组的结束位置
    let bracketCount = 0;
    let toolsArrayEnd = -1;
    let inString = false;
    let stringChar = '';
    
    for (let i = toolsArrayStart; i < backupContent.length; i++) {
        const char = backupContent[i];
        const prevChar = i > 0 ? backupContent[i - 1] : '';
        
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
                bracketCount--;
                if (bracketCount === 0) {
                    toolsArrayEnd = i;
                    break;
                }
            }
        }
    }
    
    if (toolsArrayEnd === -1) {
        throw new Error('无法找到tools数组的结束位置');
    }
    
    console.log(`✅ 找到tools数组: ${toolsArrayStart} - ${toolsArrayEnd}`);
    
    // 提取tools数组内容
    const toolsArrayContent = backupContent.substring(toolsArrayStart, toolsArrayEnd + 1);
    
    // 修复常见的编码问题
    const fixedContent = toolsArrayContent
        .replace(/工具�\?/g, '工具')
        .replace(/�\?/g, '')
        .replace(/月�\?/g, '月')
        .replace(/处理�\?/g, '处理')
        .replace(/\?/g, '')
        .replace(/�/g, '');
    
    // 尝试解析JSON来验证结构
    let toolsArray;
    try {
        toolsArray = JSON.parse(fixedContent);
        console.log(`✅ 成功解析 ${toolsArray.length} 个工具`);
    } catch (parseError) {
        console.log('⚠️ JSON解析失败，尝试手动修复...');
        
        // 手动修复一些常见的语法问题
        let manualFixed = fixedContent
            .replace(/,\s*}/g, '}')  // 移除对象末尾的多余逗号
            .replace(/,\s*]/g, ']')  // 移除数组末尾的多余逗号
            .replace(/'/g, '"')      // 统一使用双引号
            .replace(/(\w+):/g, '"$1":'); // 为属性名添加引号
        
        try {
            toolsArray = JSON.parse(manualFixed);
            console.log(`✅ 手动修复后成功解析 ${toolsArray.length} 个工具`);
        } catch (secondError) {
            console.error('❌ 无法修复JSON格式，使用正则表达式提取工具');
            
            // 使用正则表达式提取工具对象
            const toolMatches = fixedContent.match(/{\s*id:\s*['"]\w+['"][^}]+}/g);
            if (toolMatches) {
                console.log(`✅ 通过正则表达式找到 ${toolMatches.length} 个工具对象`);
                
                // 创建基本的工具数组
                toolsArray = [];
                toolMatches.forEach((toolMatch, index) => {
                    try {
                        // 尝试提取基本信息
                        const idMatch = toolMatch.match(/id:\s*['"](\w+)['"]/);
                        const nameMatch = toolMatch.match(/name:\s*['"]([^'"]+)['"]/);
                        const providerMatch = toolMatch.match(/provider:\s*['"]([^'"]+)['"]/);
                        const categoryMatch = toolMatch.match(/category:\s*['"]([^'"]+)['"]/);
                        const descriptionMatch = toolMatch.match(/description:\s*['"]([^'"]+)['"]/);
                        
                        if (idMatch && nameMatch) {
                            const tool = {
                                id: idMatch[1],
                                name: nameMatch[1],
                                provider: providerMatch ? providerMatch[1] : 'Unknown',
                                category: categoryMatch ? categoryMatch[1] : 'text-generation',
                                description: descriptionMatch ? descriptionMatch[1] : '暂无描述',
                                features: ['基本功能'],
                                pricing: '详情请查看官网',
                                tags: ['AI工具'],
                                rating: 4.0,
                                users: '未知',
                                url: '#',
                                pros: ['功能实用'],
                                cons: ['需要进一步了解'],
                                lastUpdated: '2024-12-20'
                            };
                            toolsArray.push(tool);
                        }
                    } catch (toolError) {
                        console.log(`⚠️ 跳过第${index + 1}个工具对象: ${toolError.message}`);
                    }
                });
            } else {
                throw new Error('无法提取任何工具数据');
            }
        }
    }
    
    // 读取当前的干净数据库文件
    const currentContent = fs.readFileSync('ai-tools-database.js', 'utf8');
    
    // 替换tools数组
    const newContent = currentContent.replace(
        /tools:\s*\[[^\]]*\]/s,
        `tools: ${JSON.stringify(toolsArray, null, 8)}`
    );
    
    // 备份当前文件
    fs.copyFileSync('ai-tools-database.js', 'ai-tools-database.js.backup');
    
    // 写入新内容
    fs.writeFileSync('ai-tools-database.js', newContent);
    
    console.log(`✅ 成功恢复 ${toolsArray.length} 个工具到数据库`);
    
    // 验证语法
    const { execSync } = require('child_process');
    try {
        execSync('node -c ai-tools-database.js');
        console.log('✅ 新数据库文件语法正确');
    } catch (syntaxError) {
        console.error('❌ 语法错误，恢复备份文件');
        fs.copyFileSync('ai-tools-database.js.backup', 'ai-tools-database.js');
        throw syntaxError;
    }
    
    console.log('🎉 工具数据恢复完成！');
    
} catch (error) {
    console.error('❌ 恢复失败:', error.message);
    console.log('💡 建议手动检查备份文件并逐步恢复数据');
}