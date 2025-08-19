#!/usr/bin/env node

// 数据更新执行脚本
const AIDataUpdater = require('./ai-data-updater');
const fs = require('fs');
const path = require('path');

async function runUpdate() {
    console.log('🚀 启动AI数据库定期更新...');
    console.log('⏰ 更新时间:', new Date().toLocaleString('zh-CN'));
    
    try {
        const updater = new AIDataUpdater();
        await updater.update();
        
        // 记录更新日志
        const logEntry = {
            timestamp: new Date().toISOString(),
            status: 'success',
            message: '数据更新成功完成'
        };
        
        await logUpdate(logEntry);
        console.log('✅ 数据更新完成！');
        
    } catch (error) {
        console.error('❌ 数据更新失败:', error);
        
        const logEntry = {
            timestamp: new Date().toISOString(),
            status: 'error',
            message: error.message,
            stack: error.stack
        };
        
        await logUpdate(logEntry);
        process.exit(1);
    }
}

// 记录更新日志
async function logUpdate(entry) {
    const logFile = path.join(__dirname, '../logs/update-log.json');
    const logDir = path.dirname(logFile);
    
    // 确保日志目录存在
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }
    
    let logs = [];
    if (fs.existsSync(logFile)) {
        try {
            const content = fs.readFileSync(logFile, 'utf8');
            logs = JSON.parse(content);
        } catch (error) {
            console.warn('读取日志文件失败，创建新日志');
        }
    }
    
    logs.push(entry);
    
    // 只保留最近100条日志
    if (logs.length > 100) {
        logs = logs.slice(-100);
    }
    
    fs.writeFileSync(logFile, JSON.stringify(logs, null, 2));
}

// 如果直接运行此脚本
if (require.main === module) {
    runUpdate();
}

module.exports = runUpdate;