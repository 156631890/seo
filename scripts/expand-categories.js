/**
 * 扩展数据库分类到15个
 */

const fs = require('fs');

console.log('🏷️ 开始扩展分类...');

// 15个完整分类
const fullCategories = {
    'text-generation': { name: '文本生成', icon: '✍️', description: 'AI写作、内容创作工具' },
    'image-generation': { name: '图像生成', icon: '🎨', description: 'AI绘画、图片创作工具' },
    'code-assistant': { name: '代码助手', icon: '💻', description: '编程辅助、代码生成工具' },
    'productivity': { name: '效率工具', icon: '⚡', description: '提升工作效率的AI工具' },
    'data-analysis': { name: '数据分析', icon: '📊', description: 'AI数据处理和分析工具' },
    'voice-audio': { name: '语音音频', icon: '🎵', description: '语音合成、音频处理工具' },
    'video-creation': { name: '视频创作', icon: '🎬', description: 'AI视频生成和编辑工具' },
    'automation': { name: '自动化', icon: '🤖', description: 'AI自动化和工作流工具' },
    'research': { name: '研究助手', icon: '🔍', description: 'AI研究和信息收集工具' },
    'design': { name: '设计工具', icon: '🎯', description: 'AI设计和创意工具' },
    'education': { name: '教育学习', icon: '📚', description: 'AI教育和学习辅助工具' },
    'marketing': { name: '营销工具', icon: '📣', description: 'AI营销和广告工具' },
    'customer-service': { name: '客户服务', icon: '🤝', description: 'AI客服和用户支持工具' },
    'translation': { name: '翻译工具', icon: '🌐', description: 'AI翻译和语言处理工具' },
    'music': { name: '音乐创作', icon: '🎹', description: 'AI音乐生成和编辑工具' }
};

try {
    let content = fs.readFileSync('ai-tools-database.js', 'utf8');
    
    // 替换categories部分
    const categoriesStr = JSON.stringify(fullCategories, null, 8);
    content = content.replace(
        /categories:\s*{[^}]*}/s,
        `categories: ${categoriesStr}`
    );
    
    fs.writeFileSync('ai-tools-database.js', content);
    console.log(`✅ 成功扩展到 ${Object.keys(fullCategories).length} 个分类`);
    
} catch (error) {
    console.error('❌ 扩展分类失败:', error.message);
}