/**
 * 扩展数据库，添加更多常用的AI工具
 */

const fs = require('fs');

console.log('🚀 开始扩展数据库，添加更多AI工具...');

// 常用AI工具列表
const additionalTools = [
    {
        id: 'claude',
        name: 'Claude',
        provider: 'Anthropic',
        category: 'text-generation',
        description: 'Anthropic开发的AI助手，擅长分析和创作',
        features: ['长文本处理', '代码分析', '创意写作', '逻辑推理'],
        pricing: '免费/Pro $20/月',
        tags: ['聊天', '分析', '写作', '安全'],
        rating: 4.7,
        users: '10M+',
        url: 'https://claude.ai',
        pros: ['安全性高', '长上下文', '分析能力强'],
        cons: ['可用性受限', '响应较慢'],
        lastUpdated: '2024-11-15'
    },
    {
        id: 'midjourney',
        name: 'Midjourney',
        provider: 'Midjourney Inc.',
        category: 'image-generation',
        description: '顶级AI图像生成工具，创造惊艳的艺术作品',
        features: ['文本到图像', '图像编辑', '风格控制', '高分辨率输出'],
        pricing: '$10-60/月',
        tags: ['绘画', '艺术', '设计', '创意'],
        rating: 4.9,
        users: '20M+',
        url: 'https://midjourney.com',
        pros: ['图像质量极高', '艺术风格丰富', '社区活跃'],
        cons: ['仅Discord使用', '需要付费', '学习曲线陡峭'],
        lastUpdated: '2024-11-20'
    },
    {
        id: 'dalle-3',
        name: 'DALL-E 3',
        provider: 'OpenAI',
        category: 'image-generation',
        description: 'OpenAI最新的图像生成模型，集成在ChatGPT中',
        features: ['文本到图像', '图像编辑', '风格多样', '安全过滤'],
        pricing: 'ChatGPT Plus $20/月',
        tags: ['绘画', 'AI艺术', '创意', '集成'],
        rating: 4.6,
        users: '50M+',
        url: 'https://openai.com/dall-e-3',
        pros: ['易于使用', '安全性高', '与ChatGPT集成'],
        cons: ['需要订阅', '生成速度慢', '风格限制'],
        lastUpdated: '2024-12-01'
    },
    {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        provider: 'Stability AI',
        category: 'image-generation',
        description: '开源的图像生成模型，可本地部署',
        features: ['开源免费', '本地部署', '高度定制', '社区模型'],
        pricing: '免费/云服务付费',
        tags: ['开源', '本地', '定制', '免费'],
        rating: 4.4,
        users: '5M+',
        url: 'https://stability.ai/stable-diffusion',
        pros: ['完全免费', '高度定制', '社区活跃'],
        cons: ['技术门槛高', '需要硬件', '设置复杂'],
        lastUpdated: '2024-11-25'
    },
    {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        provider: 'GitHub/OpenAI',
        category: 'code-assistant',
        description: 'AI代码助手，提供智能代码补全和生成',
        features: ['代码自动完成', '函数生成', '注释生成', '多语言支持'],
        pricing: '$10/月',
        tags: ['编程', 'IDE', '自动完成', '开发'],
        rating: 4.6,
        users: '5M+',
        url: 'https://github.com/features/copilot',
        pros: ['IDE集成', '代码质量高', '支持多语言'],
        cons: ['需要订阅', '可能有版权问题', '依赖网络'],
        lastUpdated: '2024-12-05'
    },
    {
        id: 'cursor',
        name: 'Cursor',
        provider: 'Anysphere',
        category: 'code-assistant',
        description: '专为AI设计的代码编辑器',
        features: ['AI聊天', '代码生成', '重构建议', '调试辅助'],
        pricing: '免费/Pro $20/月',
        tags: ['编辑器', 'AI编程', '聊天', '重构'],
        rating: 4.5,
        users: '500K+',
        url: 'https://cursor.sh',
        pros: ['专为AI设计', '界面友好', '功能强大'],
        cons: ['相对较新', '生态有限', '学习成本'],
        lastUpdated: '2024-12-15'
    },
    {
        id: 'notion-ai',
        name: 'Notion AI',
        provider: 'Notion',
        category: 'productivity',
        description: 'Notion内置的AI助手，帮助写作和整理',
        features: ['文档写作', '内容总结', '翻译', '头脑风暴'],
        pricing: '$10/月',
        tags: ['笔记', '写作', '总结', '翻译'],
        rating: 4.4,
        users: '30M+',
        url: 'https://notion.so/product/ai',
        pros: ['无缝集成', '多种功能', '易于使用'],
        cons: ['仅限Notion内', '功能相对基础', '需要额外付费'],
        lastUpdated: '2024-11-30'
    },
    {
        id: 'grammarly',
        name: 'Grammarly',
        provider: 'Grammarly Inc.',
        category: 'productivity',
        description: 'AI写作助手，提供语法检查和写作建议',
        features: ['语法检查', '拼写纠正', '写作建议', '语调分析'],
        pricing: '免费/Premium $12/月',
        tags: ['语法', '写作', '校对', '英语'],
        rating: 4.5,
        users: '30M+',
        url: 'https://grammarly.com',
        pros: ['准确性高', '广泛集成', '实时检查'],
        cons: ['主要支持英语', '高级功能付费', '有时过于严格'],
        lastUpdated: '2024-12-01'
    },
    {
        id: 'jasper',
        name: 'Jasper',
        provider: 'Jasper AI',
        category: 'text-generation',
        description: '专业的AI内容创作平台，适合营销团队',
        features: ['营销文案', '博客写作', '社交媒体', '邮件营销'],
        pricing: '$39-125/月',
        tags: ['营销', '文案', '博客', '商业'],
        rating: 4.5,
        users: '1M+',
        url: 'https://jasper.ai',
        pros: ['专业模板', '营销导向', '团队协作'],
        cons: ['价格较高', '学习曲线', '依赖模板'],
        lastUpdated: '2024-12-10'
    },
    {
        id: 'copy-ai',
        name: 'Copy.ai',
        provider: 'Copy.ai',
        category: 'text-generation',
        description: 'AI文案生成工具，快速创建营销内容',
        features: ['广告文案', '产品描述', '邮件模板', '社交媒体内容'],
        pricing: '免费/Pro $36/月',
        tags: ['文案', '营销', '广告', '销售'],
        rating: 4.3,
        users: '2M+',
        url: 'https://copy.ai',
        pros: ['模板丰富', '易于上手', '价格合理'],
        cons: ['创意有限', '需要人工优化', '英文为主'],
        lastUpdated: '2024-12-15'
    },
    {
        id: 'leonardo-ai',
        name: 'Leonardo.AI',
        provider: 'Leonardo.AI',
        category: 'image-generation',
        description: '专注于游戏和创意资产的AI图像生成工具',
        features: ['游戏资产', '角色设计', '场景生成', '风格训练'],
        pricing: '免费/付费 $10-48/月',
        tags: ['游戏', '角色', '场景', '专业'],
        rating: 4.6,
        users: '2M+',
        url: 'https://leonardo.ai',
        pros: ['游戏专业', '质量稳定', '风格多样'],
        cons: ['学习成本', '付费功能多', '生成较慢'],
        lastUpdated: '2024-12-01'
    },
    {
        id: 'otter-ai',
        name: 'Otter.ai',
        provider: 'Otter.ai',
        category: 'productivity',
        description: 'AI会议转录和笔记工具',
        features: ['实时转录', '会议总结', '关键词提取', '协作分享'],
        pricing: '免费/Pro $8.33/月',
        tags: ['会议', '转录', '总结', '协作'],
        rating: 4.3,
        users: '2M+',
        url: 'https://otter.ai',
        pros: ['转录准确', '实时处理', '集成方便'],
        cons: ['主要英语', '免费版限制', '隐私担忧'],
        lastUpdated: '2024-12-10'
    },
    {
        id: 'runway-ml',
        name: 'Runway ML',
        provider: 'Runway',
        category: 'video-creation',
        description: 'AI视频生成和编辑平台',
        features: ['视频生成', '图像到视频', '视频编辑', '特效制作'],
        pricing: '免费/Pro $12-76/月',
        tags: ['视频', '生成', '编辑', '创意'],
        rating: 4.4,
        users: '1M+',
        url: 'https://runwayml.com',
        pros: ['视频质量好', '功能丰富', '创新技术'],
        cons: ['价格较高', '学习成本', '处理时间长'],
        lastUpdated: '2024-12-12'
    },
    {
        id: 'synthesia',
        name: 'Synthesia',
        provider: 'Synthesia',
        category: 'video-creation',
        description: 'AI虚拟人视频生成平台',
        features: ['虚拟人生成', '多语言配音', '自定义角色', '批量制作'],
        pricing: '$30-90/月',
        tags: ['虚拟人', '视频', '配音', '商业'],
        rating: 4.3,
        users: '500K+',
        url: 'https://synthesia.io',
        pros: ['虚拟人逼真', '多语言支持', '商业友好'],
        cons: ['价格昂贵', '定制有限', '表情单一'],
        lastUpdated: '2024-12-08'
    },
    {
        id: 'murf-ai',
        name: 'Murf AI',
        provider: 'Murf',
        category: 'voice-audio',
        description: 'AI语音合成和配音工具',
        features: ['语音合成', '多种声音', '情感控制', '批量处理'],
        pricing: '免费/Pro $19-79/月',
        tags: ['语音', '配音', '合成', '多语言'],
        rating: 4.2,
        users: '1M+',
        url: 'https://murf.ai',
        pros: ['声音自然', '多语言支持', '易于使用'],
        cons: ['免费版限制', '高级声音付费', '情感表达有限'],
        lastUpdated: '2024-12-05'
    }
];

try {
    // 读取当前数据库文件
    let currentContent = fs.readFileSync('ai-tools-database.js', 'utf8');
    
    // 解析当前的tools数组
    const toolsMatch = currentContent.match(/tools:\s*(\[[^\]]*\])/s);
    if (!toolsMatch) {
        throw new Error('无法找到当前的tools数组');
    }
    
    let currentTools;
    try {
        currentTools = JSON.parse(toolsMatch[1]);
    } catch (parseError) {
        console.log('⚠️ 当前tools数组解析失败，使用默认工具');
        currentTools = [];
    }
    
    console.log(`📊 当前数据库有 ${currentTools.length} 个工具`);
    
    // 合并工具，避免重复
    const existingIds = new Set(currentTools.map(tool => tool.id));
    const newTools = additionalTools.filter(tool => !existingIds.has(tool.id));
    
    const allTools = [...currentTools, ...newTools];
    
    console.log(`➕ 添加 ${newTools.length} 个新工具`);
    console.log(`📈 总计 ${allTools.length} 个工具`);
    
    // 替换tools数组
    const newContent = currentContent.replace(
        /tools:\s*\[[^\]]*\]/s,
        `tools: ${JSON.stringify(allTools, null, 8)}`
    );
    
    // 备份当前文件
    fs.copyFileSync('ai-tools-database.js', `ai-tools-database.js.backup.${Date.now()}`);
    
    // 写入新内容
    fs.writeFileSync('ai-tools-database.js', newContent);
    
    // 验证语法
    const { execSync } = require('child_process');
    try {
        execSync('node -c ai-tools-database.js');
        console.log('✅ 扩展后的数据库文件语法正确');
    } catch (syntaxError) {
        console.error('❌ 语法错误:', syntaxError.message);
        throw syntaxError;
    }
    
    console.log('🎉 数据库扩展完成！');
    console.log(`📋 新增工具列表:`);
    newTools.forEach(tool => {
        console.log(`  - ${tool.name} (${tool.id}) - ${tool.category}`);
    });
    
} catch (error) {
    console.error('❌ 扩展失败:', error.message);
}