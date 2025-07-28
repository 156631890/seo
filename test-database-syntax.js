// 测试数据库文件语法
const fs = require('fs');

// 读取数据库文件内容
const content = fs.readFileSync('./ai-tools-database.js', 'utf8');

// 模拟浏览器环境
global.window = global;

try {
    // 执行数据库文件
    eval(content);
    
    // 检查数据结构
    const db = global.window.aiToolsDatabase;
    
    if (!db) {
        console.error('❌ aiToolsDatabase 未定义');
        process.exit(1);
    }
    
    console.log('✅ 数据库文件语法正确');
    console.log(`📊 数据统计:`);
    console.log(`   工具数量: ${db.tools ? db.tools.length : 0}`);
    console.log(`   模型数量: ${db.models ? db.models.length : 0}`);
    console.log(`   Agent数量: ${db.agents ? db.agents.length : 0}`);
    console.log(`   分类数量: ${db.categories ? Object.keys(db.categories).length : 0}`);
    
    // 检查数据完整性
    if (db.tools && db.tools.length > 0) {
        console.log(`✅ 工具数据正常`);
    } else {
        console.error(`❌ 工具数据异常`);
    }
    
    if (db.models && db.models.length > 0) {
        console.log(`✅ 模型数据正常`);
    } else {
        console.error(`❌ 模型数据异常`);
    }
    
    if (db.agents && db.agents.length > 0) {
        console.log(`✅ Agent数据正常`);
    } else {
        console.error(`❌ Agent数据异常`);
    }
    
} catch (error) {
    console.error('❌ 语法错误:', error.message);
    console.error('错误位置:', error.stack);
    process.exit(1);
}