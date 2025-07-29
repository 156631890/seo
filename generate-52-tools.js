/**
 * 生成52个AI工具数据
 */

const fs = require('fs');

console.log('🛠️ 开始生成52个AI工具...');

// 工具模板生成函数
function generateTool(id, name, provider, category, description, features, pricing, tags, rating, users, url) {
    return {
        id,
        name,
        provider,
        category,
        description,
        features,
        pricing,
        tags,
        rating,
        users,
        url,
        pros: ['功能强大', '易于使用', '效果良好'],
        cons: ['需要学习', '可能有限制', '依赖网络'],
        lastUpdated: '2024-12-20'
    };
}

// 52个AI工具
const tools52 = [
    // 文本生成类 (15个)
    generateTool('chatgpt', 'ChatGPT', 'OpenAI', 'text-generation', '最受欢迎的AI聊天机器人', ['对话交互', '文本生成', '代码编写', '翻译'], '免费/Plus $20/月', ['聊天', '写作', '编程'], 4.8, '100M+', 'https://chat.openai.com'),
    generateTool('claude', 'Claude', 'Anthropic', 'text-generation', 'Anthropic开发的AI助手', ['长文本处理', '代码分析', '创意写作'], '免费/Pro $20/月', ['聊天', '分析', '写作'], 4.7, '10M+', 'https://claude.ai'),
    generateTool('jasper', 'Jasper', 'Jasper AI', 'text-generation', '专业的AI内容创作平台', ['营销文案', '博客写作', '社交媒体'], '$39-125/月', ['营销', '文案', '博客'], 4.5, '1M+', 'https://jasper.ai'),
    generateTool('copy-ai', 'Copy.ai', 'Copy.ai', 'text-generation', 'AI文案生成工具', ['广告文案', '产品描述', '邮件模板'], '免费/Pro $36/月', ['文案', '营销', '广告'], 4.3, '2M+', 'https://copy.ai'),
    generateTool('writesonic', 'Writesonic', 'Writesonic', 'text-generation', 'AI写作助手', ['文章写作', 'SEO优化', '广告文案'], '免费/Pro $12.67/月', ['写作', 'SEO', '内容营销'], 4.4, '1.5M+', 'https://writesonic.com'),
    generateTool('rytr', 'Rytr', 'Rytr', 'text-generation', '经济实惠的AI写作工具', ['博客写作', '邮件营销', '社交媒体'], '免费/Premium $9/月', ['写作', '经济实惠', '多用途'], 4.2, '800K+', 'https://rytr.me'),
    generateTool('wordtune', 'Wordtune', 'AI21 Labs', 'text-generation', 'AI文本改写和优化工具', ['文本改写', '语调调整', '长度控制'], '免费/Premium $9.99/月', ['改写', '优化', '语法'], 4.6, '3M+', 'https://wordtune.com'),
    generateTool('quillbot', 'QuillBot', 'QuillBot', 'text-generation', 'AI释义和写作工具', ['文本释义', '语法检查', '抄袭检测'], '免费/Premium $4.17/月', ['释义', '语法', '学术'], 4.5, '50M+', 'https://quillbot.com'),
    generateTool('character-ai', 'Character.AI', 'Character Technologies', 'text-generation', '创建和对话AI角色的平台', ['角色创建', '个性化对话', '情感交互'], '免费/Plus $9.99/月', ['角色', '对话', '娱乐'], 4.4, '20M+', 'https://character.ai'),
    generateTool('poe-by-quora', 'Poe by Quora', 'Quora', 'text-generation', 'Quora的AI聊天平台', ['多模型访问', '自定义机器人', '订阅制'], '免费/订阅 $19.99/月', ['多模型', '聊天', '订阅'], 4.2, '8M+', 'https://poe.com'),
    generateTool('huggingface-chat', 'Hugging Face Chat', 'Hugging Face', 'text-generation', '开源AI模型聊天平台', ['开源模型', '免费使用', '社区驱动'], '免费', ['开源', '免费', '社区'], 4.3, '5M+', 'https://huggingface.co/chat'),
    generateTool('bard', 'Bard', 'Google', 'text-generation', 'Google的AI聊天助手', ['实时信息', '多语言支持', '搜索集成'], '免费', ['搜索', '实时', '多语言'], 4.1, '50M+', 'https://bard.google.com'),
    generateTool('bing-chat', 'Bing Chat', 'Microsoft', 'text-generation', '微软的AI聊天助手', ['搜索集成', '图像生成', '实时信息'], '免费', ['搜索', '集成', '实时'], 4.0, '30M+', 'https://bing.com/chat'),
    generateTool('perplexity', 'Perplexity AI', 'Perplexity', 'research', 'AI驱动的搜索引擎', ['AI搜索', '实时信息', '引用来源'], '免费/Pro $20/月', ['搜索', '研究', '引用'], 4.5, '10M+', 'https://perplexity.ai'),
    generateTool('you-com', 'You.com', 'You.com', 'research', 'AI驱动的搜索引擎和聊天助手', ['AI搜索', '聊天模式', '代码生成'], '免费/Pro $15/月', ['搜索', '聊天', '多功能'], 4.3, '5M+', 'https://you.com'),

    // 图像生成类 (10个)
    generateTool('midjourney', 'Midjourney', 'Midjourney Inc.', 'image-generation', '顶级AI图像生成工具', ['文本到图像', '图像编辑', '风格控制'], '$10-60/月', ['绘画', '艺术', '设计'], 4.9, '20M+', 'https://midjourney.com'),
    generateTool('dalle-3', 'DALL-E 3', 'OpenAI', 'image-generation', 'OpenAI最新的图像生成模型', ['文本到图像', '图像编辑', '风格多样'], 'ChatGPT Plus $20/月', ['绘画', 'AI艺术', '创意'], 4.6, '50M+', 'https://openai.com/dall-e-3'),
    generateTool('stable-diffusion', 'Stable Diffusion', 'Stability AI', 'image-generation', '开源的图像生成模型', ['开源免费', '本地部署', '高度定制'], '免费/云服务付费', ['开源', '本地', '定制'], 4.4, '5M+', 'https://stability.ai/stable-diffusion'),
    generateTool('leonardo-ai', 'Leonardo.AI', 'Leonardo.AI', 'image-generation', '专注于游戏和创意资产的AI图像生成', ['游戏资产', '角色设计', '场景生成'], '免费/付费 $10-48/月', ['游戏', '角色', '场景'], 4.6, '2M+', 'https://leonardo.ai'),
    generateTool('adobe-firefly', 'Adobe Firefly', 'Adobe', 'image-generation', 'Adobe的AI图像生成工具', ['文字效果', '图像填充', '颜色变换'], '免费/Creative Cloud订阅', ['Adobe', '创意', '专业'], 4.5, '10M+', 'https://firefly.adobe.com'),
    generateTool('ideogram', 'Ideogram', 'Ideogram', 'image-generation', 'AI图像生成工具，擅长文字渲染', ['文字渲染', 'Logo设计', '海报制作'], '免费/Plus $7/月', ['文字', 'Logo', '海报'], 4.3, '1M+', 'https://ideogram.ai'),
    generateTool('flux-ai', 'Flux AI', 'Black Forest Labs', 'image-generation', '新兴的开源图像生成模型', ['开源模型', '高质量生成', '快速渲染'], '免费/云服务付费', ['开源', '高质量', '快速'], 4.7, '500K+', 'https://blackforestlabs.ai'),
    generateTool('artbreeder', 'Artbreeder', 'Artbreeder', 'image-generation', 'AI图像混合和生成平台', ['图像混合', '风格迁移', '角色生成'], '免费/Pro $8.99/月', ['混合', '协作', '角色'], 4.2, '3M+', 'https://artbreeder.com'),
    generateTool('canva-ai', 'Canva AI', 'Canva', 'design', 'Canva集成的AI设计工具', ['设计模板', 'AI生成', '品牌工具'], '免费/Pro $12.99/月', ['设计', '模板', '品牌'], 4.4, '100M+', 'https://canva.com'),
    generateTool('figma-ai', 'Figma AI', 'Figma', 'design', 'Figma的AI设计助手', ['设计生成', '自动布局', '内容填充'], '免费/付费版', ['设计', '协作', 'UI/UX'], 4.3, '50M+', 'https://figma.com'),

    // 代码助手类 (8个)
    generateTool('github-copilot', 'GitHub Copilot', 'GitHub/OpenAI', 'code-assistant', 'AI代码助手', ['代码自动完成', '函数生成', '注释生成'], '$10/月', ['编程', 'IDE', '自动完成'], 4.6, '5M+', 'https://github.com/features/copilot'),
    generateTool('cursor', 'Cursor', 'Anysphere', 'code-assistant', '专为AI设计的代码编辑器', ['AI聊天', '代码生成', '重构建议'], '免费/Pro $20/月', ['编辑器', 'AI编程', '聊天'], 4.5, '500K+', 'https://cursor.sh'),
    generateTool('codeium', 'Codeium', 'Codeium', 'code-assistant', '免费的AI代码助手', ['代码补全', '聊天助手', '代码解释'], '免费/团队版付费', ['免费', '代码补全', '多IDE'], 4.3, '1M+', 'https://codeium.com'),
    generateTool('tabnine', 'Tabnine', 'Tabnine', 'code-assistant', 'AI代码补全工具', ['智能补全', '本地部署', '团队训练'], '免费/Pro $12/月', ['补全', '本地', '隐私'], 4.4, '1M+', 'https://tabnine.com'),
    generateTool('amazon-codewhisperer', 'Amazon CodeWhisperer', 'Amazon', 'code-assistant', 'AWS的AI代码助手', ['代码生成', 'AWS集成', '安全扫描'], '免费/Professional $19/月', ['AWS', '企业', '安全'], 4.2, '500K+', 'https://aws.amazon.com/codewhisperer'),
    generateTool('replit-ghostwriter', 'Replit Ghostwriter', 'Replit', 'code-assistant', 'Replit的AI编程助手', ['代码补全', '代码解释', '错误修复'], '免费/Hacker $7/月', ['在线', '协作', '学习'], 4.1, '20M+', 'https://replit.com/ai'),
    generateTool('sourcegraph-cody', 'Sourcegraph Cody', 'Sourcegraph', 'code-assistant', 'AI代码助手和搜索工具', ['代码搜索', '上下文理解', '代码解释'], '免费/Pro $9/月', ['搜索', '理解', '重构'], 4.3, '100K+', 'https://sourcegraph.com/cody'),
    generateTool('phind', 'Phind', 'Phind', 'code-assistant', '面向开发者的AI搜索引擎', ['代码搜索', '技术问答', '实时信息'], '免费/Pro $20/月', ['搜索', '开发者', '技术'], 4.3, '1M+', 'https://phind.com'),

    // 效率工具类 (7个)
    generateTool('notion-ai', 'Notion AI', 'Notion', 'productivity', 'Notion内置的AI助手', ['文档写作', '内容总结', '翻译'], '$10/月', ['笔记', '写作', '总结'], 4.4, '30M+', 'https://notion.so/product/ai'),
    generateTool('grammarly', 'Grammarly', 'Grammarly Inc.', 'productivity', 'AI写作助手', ['语法检查', '拼写纠正', '写作建议'], '免费/Premium $12/月', ['语法', '写作', '校对'], 4.5, '30M+', 'https://grammarly.com'),
    generateTool('otter-ai', 'Otter.ai', 'Otter.ai', 'productivity', 'AI会议转录和笔记工具', ['实时转录', '会议总结', '关键词提取'], '免费/Pro $8.33/月', ['会议', '转录', '总结'], 4.3, '2M+', 'https://otter.ai'),
    generateTool('superhuman', 'Superhuman', 'Superhuman', 'productivity', 'AI增强的邮件客户端', ['智能分类', '快速回复', '邮件调度'], '$30/月', ['邮件', '效率', '智能'], 4.6, '100K+', 'https://superhuman.com'),
    generateTool('reclaim-ai', 'Reclaim.ai', 'Reclaim.ai', 'productivity', 'AI时间管理和调度工具', ['智能调度', '习惯跟踪', '专注时间'], '免费/Pro $8/月', ['时间管理', '调度', '习惯'], 4.4, '500K+', 'https://reclaim.ai'),
    generateTool('clockify', 'Clockify', 'COING Inc.', 'productivity', '时间跟踪和项目管理工具', ['自动跟踪', '项目分类', '报告生成'], '免费/Pro $3.99/月', ['时间跟踪', '项目', '报告'], 4.2, '5M+', 'https://clockify.me'),
    generateTool('calendly', 'Calendly', 'Calendly', 'productivity', 'AI增强的日程安排工具', ['智能调度', '会议优化', '自动提醒'], '免费/付费版', ['调度', '会议', '自动化'], 4.5, '10M+', 'https://calendly.com'),

    // 语音音频类 (5个)
    generateTool('elevenlabs', 'ElevenLabs', 'ElevenLabs', 'voice-audio', 'AI语音合成工具', ['语音合成', '声音克隆', '多语言支持'], '免费/Pro $5-330/月', ['语音', '克隆', '多语言'], 4.7, '2M+', 'https://elevenlabs.io'),
    generateTool('murf-ai', 'Murf AI', 'Murf', 'voice-audio', 'AI语音合成和配音工具', ['语音合成', '多种声音', '情感控制'], '免费/Pro $19-79/月', ['语音', '配音', '合成'], 4.2, '1M+', 'https://murf.ai'),
    generateTool('speechify', 'Speechify', 'Speechify', 'voice-audio', 'AI文本转语音工具', ['文本转语音', '速度控制', '多语言'], '免费/Premium $11.58/月', ['TTS', '阅读', '学习'], 4.4, '20M+', 'https://speechify.com'),
    generateTool('descript', 'Descript', 'Descript', 'voice-audio', 'AI音频和视频编辑工具', ['音频编辑', '转录', '语音克隆'], '免费/Creator $12/月', ['音频', '编辑', '转录'], 4.5, '1M+', 'https://descript.com'),
    generateTool('resemble-ai', 'Resemble AI', 'Resemble AI', 'voice-audio', 'AI语音克隆和合成平台', ['语音克隆', '实时合成', 'API集成'], '按使用付费', ['克隆', '实时', 'API'], 4.3, '500K+', 'https://resemble.ai'),

    // 视频创作类 (4个)
    generateTool('runway-ml', 'Runway ML', 'Runway', 'video-creation', 'AI视频生成和编辑平台', ['视频生成', '图像到视频', '视频编辑'], '免费/Pro $12-76/月', ['视频', '生成', '编辑'], 4.4, '1M+', 'https://runwayml.com'),
    generateTool('synthesia', 'Synthesia', 'Synthesia', 'video-creation', 'AI虚拟人视频生成平台', ['虚拟人生成', '多语言配音', '自定义角色'], '$30-90/月', ['虚拟人', '视频', '配音'], 4.3, '500K+', 'https://synthesia.io'),
    generateTool('pika-labs', 'Pika Labs', 'Pika Labs', 'video-creation', 'AI视频生成工具', ['文本到视频', '图像到视频', '视频编辑'], '免费/付费版', ['视频生成', '创意', '简单'], 4.2, '2M+', 'https://pika.art'),
    generateTool('luma-ai', 'Luma AI', 'Luma AI', 'video-creation', 'AI 3D和视频生成工具', ['3D捕获', '视频生成', 'AR/VR'], '免费/Pro版', ['3D', 'AR', '视频'], 4.1, '800K+', 'https://lumalabs.ai'),

    // 音乐创作类 (3个)
    generateTool('suno-ai', 'Suno AI', 'Suno', 'music', 'AI音乐创作工具', ['歌曲生成', '歌词创作', '多种风格'], '免费/Pro $10/月', ['歌曲', '歌词', '创作'], 4.5, '5M+', 'https://suno.com'),
    generateTool('udio', 'Udio', 'Udio', 'music', '新兴的AI音乐生成平台', ['音乐生成', '风格控制', '歌词支持'], '免费/付费版', ['音乐', '新兴', '质量'], 4.4, '500K+', 'https://udio.com'),
    generateTool('mubert', 'Mubert', 'Mubert', 'music', 'AI音乐生成平台', ['音乐生成', '风格选择', '时长控制'], '免费/Pro $14-199/月', ['音乐', '生成', '商业'], 4.3, '1M+', 'https://mubert.com')
];

try {
    let content = fs.readFileSync('ai-tools-database.js', 'utf8');
    
    // 替换tools数组
    const toolsStr = JSON.stringify(tools52, null, 8);
    content = content.replace(
        /tools:\s*\[\]/,
        `tools: ${toolsStr}`
    );
    
    fs.writeFileSync('ai-tools-database.js', content);
    
    // 验证语法
    const { execSync } = require('child_process');
    execSync('node -c ai-tools-database.js');
    
    console.log(`✅ 成功添加 ${tools52.length} 个工具到数据库`);
    
    // 显示分类统计
    const categoryStats = {};
    tools52.forEach(tool => {
        categoryStats[tool.category] = (categoryStats[tool.category] || 0) + 1;
    });
    
    console.log('📊 工具分类统计:');
    Object.entries(categoryStats).forEach(([category, count]) => {
        console.log(`  ${category}: ${count}个`);
    });
    
} catch (error) {
    console.error('❌ 添加工具失败:', error.message);
}