#!/usr/bin/env node

/**
 * 快速更新所有页面的Google Analytics ID
 * 使用方法: node scripts/update-analytics-id.js G-YOUR-ACTUAL-ID
 */

const fs = require('fs');
const path = require('path');

// 获取命令行参数
const newAnalyticsId = process.argv[2];

if (!newAnalyticsId) {
    console.error('❌ 请提供Google Analytics ID');
    console.log('使用方法: node scripts/update-analytics-id.js G-YOUR-ACTUAL-ID');
    process.exit(1);
}

// 验证ID格式
if (!newAnalyticsId.match(/^G-[A-Z0-9]+$/)) {
    console.error('❌ 无效的Google Analytics ID格式');
    console.log('正确格式: G-XXXXXXXXXX');
    process.exit(1);
}

// 需要更新的文件列表
const filesToUpdate = [
    'index.html',
    'tools.html',
    'articles.html',
    'search.html',
    'about.html',
    'contact.html',
    'posts/midjourney-complete-guide-2025.html',
    'posts/claude-vs-chatgpt-comparison-2025.html',
    'posts/ai-coding-tools-2025.html',
    'posts/chatgpt-beginner-prompts.html',
    'posts/gpt4o-guide.html'
];

let updatedCount = 0;
let errorCount = 0;

console.log(`🚀 开始更新Google Analytics ID为: ${newAnalyticsId}`);
console.log('─'.repeat(50));

filesToUpdate.forEach(filePath => {
    try {
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            
            // 替换Analytics ID
            const updatedContent = content.replace(/G-XXXXXXXXXX/g, newAnalyticsId);
            
            if (content !== updatedContent) {
                fs.writeFileSync(filePath, updatedContent, 'utf8');
                console.log(`✅ 已更新: ${filePath}`);
                updatedCount++;
            } else {
                console.log(`⚠️  未找到需要更新的内容: ${filePath}`);
            }
        } else {
            console.log(`❌ 文件不存在: ${filePath}`);
            errorCount++;
        }
    } catch (error) {
        console.error(`❌ 更新失败 ${filePath}: ${error.message}`);
        errorCount++;
    }
});

console.log('─'.repeat(50));
console.log(`🎉 更新完成!`);
console.log(`✅ 成功更新: ${updatedCount} 个文件`);
if (errorCount > 0) {
    console.log(`❌ 失败: ${errorCount} 个文件`);
}

// 创建验证脚本
console.log('\n📋 验证步骤:');
console.log('1. 检查所有页面是否正确加载Analytics代码');
console.log('2. 在Google Analytics中验证实时数据');
console.log('3. 测试自定义事件跟踪功能');
console.log('\n🔗 有用的链接:');
console.log(`- Google Analytics: https://analytics.google.com/analytics/web/#/p${newAnalyticsId.replace('G-', '')}`);
console.log('- 实时报告: 在GA4中查看实时用户数据');
console.log('- 调试: 使用浏览器开发者工具检查gtag调用');