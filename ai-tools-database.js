// AI工具、模型和Agent数据库
const aiToolsDatabase = {
    // 工具分类
    categories: {
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
        'healthcare': { name: '医疗健康', icon: '🏥', description: 'AI医疗和健康应用工具' },
        'finance': { name: '金融工具', icon: '💰', description: 'AI金融分析和投资工具' },
        'marketing': { name: '营销工具', icon: '📣', description: 'AI营销和广告工具' },
        'customer-service': { name: '客户服务', icon: '🤝', description: 'AI客服和用户支持工具' },
        'translation': { name: '翻译工具', icon: '🌐', description: 'AI翻译和语言处理工具' },
        'security': { name: '安全工具', icon: '🔒', description: 'AI安全和隐私保护工具' },
        'gaming': { name: '游戏开发', icon: '🎮', description: 'AI游戏开发和体验工具' },
        'music': { name: '音乐创作', icon: '🎹', description: 'AI音乐生成和编辑工具' },
        'legal': { name: '法律助手', icon: '⚖️', description: 'AI法律分析和文档工具' }
    },

    // 模型类型
    modelTypes: {
        'llm': { name: '大语言模型', description: '处理和生成文本的AI模型' },
        'multimodal': { name: '多模态模型', description: '处理文本、图像、音频等多种模态的AI模型' },
        'image': { name: '图像模型', description: '生成和处理图像的AI模型' },
        'audio': { name: '音频模型', description: '处理和生成音频的AI模型' },
        'video': { name: '视频模型', description: '处理和生成视频的AI模型' },
        'embedding': { name: '嵌入模型', description: '将文本转换为向量表示的模型' },
        'fine-tuning': { name: '微调模型', description: '可以针对特定任务进行微调的模型' }
    },

    // Agent类型
    agentTypes: {
        'autonomous': { name: '自主代理', description: '能够独立执行任务的AI代理' },
        'assistant': { name: '助手代理', description: '辅助人类完成任务的AI代理' },
        'multi-agent': { name: '多代理系统', description: '多个AI代理协作完成任务的系统' },
        'specialized': { name: '专业领域代理', description: '针对特定领域优化的AI代理' },
        'framework': { name: '代理框架', description: '用于构建AI代理的开发框架' }
    },

    // AI模型数据
    models: [
        {
            id: 'gpt-4o',
            name: 'GPT-4o',
            provider: 'OpenAI',
            type: '多模态大语言模型',
            category: 'text-generation',
            description: 'OpenAI最新的多模态模型，支持文本、图像、音频处理',
            features: ['文本生成', '图像理解', '代码编写', '数学推理'],
            pricing: '按token计费',
            apiAccess: true,
            webInterface: true,
            strengths: ['推理能力强', '多模态支持', '代码能力优秀'],
            limitations: ['成本较高', '有使用限制'],
            rating: 4.8,
            url: 'https://openai.com/gpt-4o',
            lastUpdated: '2024-12-01'
        },
        {
            id: 'claude-3-5-sonnet',
            name: 'Claude 3.5 Sonnet',
            provider: 'Anthropic',
            type: '大语言模型',
            category: 'text-generation',
            description: 'Anthropic的高性能语言模型，擅长分析和创作',
            features: ['长文本处理', '代码分析', '创意写作', '逻辑推理'],
            pricing: '按token计费',
            apiAccess: true,
            webInterface: true,
            strengths: ['安全性高', '长上下文', '分析能力强'],
            limitations: ['图像处理有限', '可用性受限'],
            rating: 4.7,
            url: 'https://claude.ai',
            lastUpdated: '2024-11-15'
        },
        {
            id: 'gemini-pro',
            name: 'Gemini Pro',
            provider: 'Google',
            type: '多模态大语言模型',
            category: 'text-generation',
            description: 'Google的多模态AI模型，集成在多个Google服务中',
            features: ['多模态理解', '实时信息', '代码生成', '数学计算'],
            pricing: '免费/付费版本',
            apiAccess: true,
            webInterface: true,
            strengths: ['免费使用', '实时信息', '多语言支持'],
            limitations: ['响应速度一般', '创意能力有限'],
            rating: 4.5,
            url: 'https://gemini.google.com',
            lastUpdated: '2024-12-10'
        },
        {
            id: 'llama-3-1-405b',
            name: 'Llama 3.1 405B',
            provider: 'Meta',
            type: '开源大语言模型',
            category: 'text-generation',
            description: 'Meta最大的开源语言模型，性能媲美闭源模型',
            features: ['开源免费', '多语言支持', '代码生成', '推理能力'],
            pricing: '开源免费',
            apiAccess: true,
            webInterface: false,
            strengths: ['完全开源', '性能强大', '可自部署'],
            limitations: ['硬件要求高', '部署复杂', '商业限制'],
            rating: 4.6,
            url: 'https://llama.meta.com',
            lastUpdated: '2024-12-08'
        },
        {
            id: 'mistral-large',
            name: 'Mistral Large',
            provider: 'Mistral AI',
            type: '大语言模型',
            category: 'text-generation',
            description: '欧洲领先的AI公司Mistral的旗舰模型',
            features: ['多语言优秀', '推理能力', '代码生成', '函数调用'],
            pricing: '按token计费',
            apiAccess: true,
            webInterface: true,
            strengths: ['欧洲数据合规', '多语言强', '性价比高'],
            limitations: ['生态较小', '知名度低', '功能待完善'],
            rating: 4.4,
            url: 'https://mistral.ai',
            lastUpdated: '2024-12-12'
        },
        {
            id: 'qwen-2-5-72b',
            name: 'Qwen 2.5 72B',
            provider: '阿里云',
            type: '大语言模型',
            category: 'text-generation',
            description: '阿里云通义千问系列的最新模型，中文能力突出',
            features: ['中文优化', '代码生成', '数学推理', '多模态'],
            pricing: '按token计费',
            apiAccess: true,
            webInterface: true,
            strengths: ['中文能力强', '本土化好', '价格便宜'],
            limitations: ['国际化程度低', '英文能力一般', '生态有限'],
            rating: 4.3,
            url: 'https://tongyi.aliyun.com',
            lastUpdated: '2024-12-10'
        },
        {
            id: 'deepseek-v3',
            name: 'DeepSeek V3',
            provider: 'DeepSeek',
            type: '大语言模型',
            category: 'text-generation',
            description: '深度求索的最新模型，专注于推理和代码能力',
            features: ['推理能力强', '代码生成', '数学解题', '逻辑分析'],
            pricing: '按token计费',
            apiAccess: true,
            webInterface: true,
            strengths: ['推理能力突出', '代码质量高', '价格实惠'],
            limitations: ['知名度较低', '生态建设中', '多模态有限'],
            rating: 4.5,
            url: 'https://deepseek.com',
            lastUpdated: '2024-12-15'
        },
        {
            id: 'yi-large',
            name: 'Yi Large',
            provider: '零一万物',
            type: '大语言模型',
            category: 'text-generation',
            description: '零一万物的大规模语言模型，平衡性能与效率',
            features: ['长上下文', '多语言', '推理能力', '代码生成'],
            pricing: '按token计费',
            apiAccess: true,
            webInterface: true,
            strengths: ['长上下文处理', '性价比高', '中文友好'],
            limitations: ['市场份额小', '生态待建设', '国际化不足'],
            rating: 4.2,
            url: 'https://01.ai',
            lastUpdated: '2024-12-05'
        }
    ],

    // AI工具数据 - 大幅扩展版本
    tools: [
        // ===== 文本生成工具 =====
        {
            id: 'chatgpt',
            name: 'ChatGPT',
            provider: 'OpenAI',
            category: 'text-generation',
            description: '最受欢迎的AI聊天机器人，适用于各种文本任务',
            features: ['对话交互', '文本生成', '代码编写', '翻译'],
            pricing: '免费/Plus $20/月',
            tags: ['聊天', '写作', '编程', '翻译'],
            rating: 4.8,
            users: '100M+',
            url: 'https://chat.openai.com',
            pros: ['易于使用', '功能全面', '社区活跃'],
            cons: ['免费版有限制', '可能产生错误信息'],
            lastUpdated: '2024-12-01'
        },
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
            id: 'jasper',
            name: 'Jasper AI',
            provider: 'Jasper',
            category: 'text-generation',
            description: '专业的AI写作助手，适合营销和内容创作',
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
            description: 'AI文案生成工具，专注于营销和销售文案',
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
            id: 'writesonic',
            name: 'Writesonic',
            provider: 'Writesonic',
            category: 'text-generation',
            description: 'AI写作平台，支持多种内容类型生成',
            features: ['文章写作', 'SEO优化', '广告文案', '产品描述'],
            pricing: '免费/Pro $12.67/月',
            tags: ['写作', 'SEO', '内容营销', '博客'],
            rating: 4.4,
            users: '1.5M+',
            url: 'https://writesonic.com',
            pros: ['SEO友好', '多语言支持', '价格实惠'],
            cons: ['质量不稳定', '需要编辑', '模板化'],
            lastUpdated: '2024-12-12'
        },
        {
            id: 'rytr',
            name: 'Rytr',
            provider: 'Rytr',
            category: 'text-generation',
            description: '经济实惠的AI写作助手，适合个人和小团队',
            features: ['博客写作', '邮件营销', '社交媒体', '产品描述'],
            pricing: '免费/Premium $9/月',
            tags: ['写作', '经济实惠', '多用途', '简单'],
            rating: 4.2,
            users: '800K+',
            url: 'https://rytr.me',
            pros: ['价格便宜', '界面简洁', '快速生成'],
            cons: ['功能基础', '创意有限', '需要优化'],
            lastUpdated: '2024-12-08'
        },
        {
            id: 'wordtune',
            name: 'Wordtune',
            provider: 'AI21 Labs',
            category: 'text-generation',
            description: 'AI文本改写和优化工具，提升写作质量',
            features: ['文本改写', '语调调整', '长度控制', '语法优化'],
            pricing: '免费/Premium $9.99/月',
            tags: ['改写', '优化', '语法', '润色'],
            rating: 4.6,
            users: '3M+',
            url: 'https://wordtune.com',
            pros: ['改写质量高', '保持原意', '多种选项'],
            cons: ['功能单一', '依赖原文', '英文为主'],
            lastUpdated: '2024-12-05'
        },
        {
            id: 'quillbot',
            name: 'QuillBot',
            provider: 'QuillBot',
            category: 'text-generation',
            description: 'AI释义和写作工具，帮助改进文本表达',
            features: ['文本释义', '语法检查', '抄袭检测', '引用生成'],
            pricing: '免费/Premium $4.17/月',
            tags: ['释义', '语法', '学术', '写作'],
            rating: 4.5,
            users: '50M+',
            url: 'https://quillbot.com',
            pros: ['学术友好', '价格低廉', '功能全面'],
            cons: ['免费版限制', '质量一般', '速度较慢'],
            lastUpdated: '2024-12-10'
        },

        // ===== 图像生成工具 =====
        {
            id: 'midjourney',
            name: 'Midjourney',
            provider: 'Midjourney Inc.',
            category: 'image-generation',
            description: '顶级AI图像生成工具，以艺术质量著称',
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
            id: 'dall-e-3',
            name: 'DALL-E 3',
            provider: 'OpenAI',
            category: 'image-generation',
            description: 'OpenAI的图像生成模型，集成在ChatGPT Plus中',
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
            description: '开源的AI图像生成模型，可本地部署',
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
            id: 'leonardo-ai',
            name: 'Leonardo.AI',
            provider: 'Leonardo.AI',
            category: 'image-generation',
            description: '专业的AI艺术生成平台，适合游戏和创意设计',
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
            id: 'firefly',
            name: 'Adobe Firefly',
            provider: 'Adobe',
            category: 'image-generation',
            description: 'Adobe的AI创意工具，集成在Creative Cloud中',
            features: ['文本效果', '图像填充', '颜色变换', '创意云集成'],
            pricing: '免费/Creative Cloud订阅',
            tags: ['Adobe', '创意', '专业', '集成'],
            rating: 4.5,
            users: '10M+',
            url: 'https://firefly.adobe.com',
            pros: ['专业工具', '无缝集成', '商业安全'],
            cons: ['需要订阅', '功能有限', '创意受限'],
            lastUpdated: '2024-12-08'
        },
        {
            id: 'ideogram',
            name: 'Ideogram',
            provider: 'Ideogram',
            category: 'image-generation',
            description: '擅长文字渲染的AI图像生成工具',
            features: ['文字渲染', 'Logo设计', '海报制作', '品牌设计'],
            pricing: '免费/Plus $7/月',
            tags: ['文字', 'Logo', '海报', '品牌'],
            rating: 4.3,
            users: '1M+',
            url: 'https://ideogram.ai',
            pros: ['文字效果好', '价格便宜', '易于使用'],
            cons: ['功能单一', '风格有限', '质量不稳定'],
            lastUpdated: '2024-12-12'
        },
        {
            id: 'flux',
            name: 'Flux',
            provider: 'Black Forest Labs',
            category: 'image-generation',
            description: '新一代开源图像生成模型，质量媲美闭源模型',
            features: ['开源模型', '高质量生成', '快速渲染', '多样化风格'],
            pricing: '免费/云服务付费',
            tags: ['开源', '高质量', '快速', '新技术'],
            rating: 4.7,
            users: '500K+',
            url: 'https://blackforestlabs.ai',
            pros: ['开源免费', '质量极高', '速度快'],
            cons: ['较新工具', '社区小', '文档少'],
            lastUpdated: '2024-12-15'
        },
        {
            id: 'artbreeder',
            name: 'Artbreeder',
            provider: 'Artbreeder',
            category: 'image-generation',
            description: '基于遗传算法的AI艺术创作平台',
            features: ['图像混合', '风格迁移', '角色生成', '协作创作'],
            pricing: '免费/Pro $8.99/月',
            tags: ['混合', '协作', '角色', '实验'],
            rating: 4.2,
            users: '3M+',
            url: 'https://artbreeder.com',
            pros: ['创意独特', '社区活跃', '易于探索'],
            cons: ['控制有限', '质量不稳定', '风格固定'],
            lastUpdated: '2024-11-28'
        },

        // ===== 代码助手工具 =====
        {
            id: 'github-copilot',
            name: 'GitHub Copilot',
            provider: 'GitHub/OpenAI',
            category: 'code-assistant',
            description: 'AI编程助手，直接集成在IDE中提供代码建议',
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
            provider: 'Cursor Team',
            category: 'code-assistant',
            description: 'AI驱动的代码编辑器，专为AI编程设计',
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
            id: 'codeium',
            name: 'Codeium',
            provider: 'Codeium',
            category: 'code-assistant',
            description: '免费的AI代码助手，支持多种IDE',
            features: ['代码补全', '聊天助手', '代码解释', '多IDE支持'],
            pricing: '免费/团队版付费',
            tags: ['免费', '代码补全', '多IDE', '聊天'],
            rating: 4.3,
            users: '1M+',
            url: 'https://codeium.com',
            pros: ['完全免费', '支持多IDE', '功能丰富'],
            cons: ['相对较新', '社区较小', '功能待完善'],
            lastUpdated: '2024-12-10'
        },
        {
            id: 'tabnine',
            name: 'Tabnine',
            provider: 'Tabnine',
            category: 'code-assistant',
            description: 'AI代码补全工具，支持本地和云端部署',
            features: ['智能补全', '本地部署', '团队训练', '隐私保护'],
            pricing: '免费/Pro $12/月',
            tags: ['补全', '本地', '隐私', '团队'],
            rating: 4.4,
            users: '1M+',
            url: 'https://tabnine.com',
            pros: ['隐私安全', '本地部署', '团队定制'],
            cons: ['功能有限', '价格较高', '设置复杂'],
            lastUpdated: '2024-12-08'
        },
        {
            id: 'amazon-codewhisperer',
            name: 'Amazon CodeWhisperer',
            provider: 'Amazon',
            category: 'code-assistant',
            description: 'Amazon的AI代码生成服务，集成AWS生态',
            features: ['代码生成', 'AWS集成', '安全扫描', '多语言支持'],
            pricing: '免费/Professional $19/月',
            tags: ['AWS', '企业', '安全', '集成'],
            rating: 4.2,
            users: '500K+',
            url: 'https://aws.amazon.com/codewhisperer',
            pros: ['AWS集成', '安全扫描', '企业级'],
            cons: ['AWS绑定', '功能基础', '生态限制'],
            lastUpdated: '2024-12-01'
        },
        {
            id: 'replit-ghostwriter',
            name: 'Replit Ghostwriter',
            provider: 'Replit',
            category: 'code-assistant',
            description: '在线IDE中的AI编程助手',
            features: ['代码补全', '代码解释', '错误修复', '在线协作'],
            pricing: '免费/Hacker $7/月',
            tags: ['在线', '协作', '学习', '简单'],
            rating: 4.1,
            users: '20M+',
            url: 'https://replit.com/ai',
            pros: ['在线使用', '学习友好', '价格便宜'],
            cons: ['功能基础', '依赖平台', '性能一般'],
            lastUpdated: '2024-11-30'
        },
        {
            id: 'sourcegraph-cody',
            name: 'Sourcegraph Cody',
            provider: 'Sourcegraph',
            category: 'code-assistant',
            description: 'AI编程助手，专注于代码理解和搜索',
            features: ['代码搜索', '上下文理解', '代码解释', '重构建议'],
            pricing: '免费/Pro $9/月',
            tags: ['搜索', '理解', '重构', '企业'],
            rating: 4.3,
            users: '100K+',
            url: 'https://sourcegraph.com/cody',
            pros: ['代码理解强', '搜索功能好', '企业友好'],
            cons: ['相对较新', '用户较少', '功能待完善'],
            lastUpdated: '2024-12-12'
        },
        {
            id: 'codex',
            name: 'OpenAI Codex',
            provider: 'OpenAI',
            category: 'code-assistant',
            description: 'OpenAI的代码生成模型，GitHub Copilot的底层技术',
            features: ['代码生成', 'API调用', '多语言支持', '自然语言转代码'],
            pricing: 'API按使用计费',
            tags: ['API', '生成', '多语言', '基础模型'],
            rating: 4.5,
            users: '开发者',
            url: 'https://openai.com/blog/openai-codex',
            pros: ['功能强大', 'API灵活', '质量高'],
            cons: ['需要开发', 'API成本', '技术门槛'],
            lastUpdated: '2024-11-15'
        },

        // ===== 效率工具 =====
        {
            id: 'notion-ai',
            name: 'Notion AI',
            provider: 'Notion',
            category: 'productivity',
            description: '集成在Notion中的AI助手，帮助写作和内容管理',
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
            id: 'otter-ai',
            name: 'Otter.ai',
            provider: 'Otter.ai',
            category: 'productivity',
            description: 'AI会议记录和转录工具，自动生成会议纪要',
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
            id: 'superhuman',
            name: 'Superhuman',
            provider: 'Superhuman',
            category: 'productivity',
            description: 'AI增强的邮件客户端，提升邮件处理效率',
            features: ['智能分类', '快速回复', '邮件调度', '跟踪分析'],
            pricing: '$30/月',
            tags: ['邮件', '效率', '智能', '高端'],
            rating: 4.6,
            users: '100K+',
            url: 'https://superhuman.com',
            pros: ['效率极高', '界面优美', '功能强大'],
            cons: ['价格昂贵', '学习成本', '平台限制'],
            lastUpdated: '2024-12-05'
        },
        {
            id: 'reclaim-ai',
            name: 'Reclaim.ai',
            provider: 'Reclaim.ai',
            category: 'productivity',
            description: 'AI时间管理工具，自动优化日程安排',
            features: ['智能调度', '习惯跟踪', '专注时间', '会议优化'],
            pricing: '免费/Pro $8/月',
            tags: ['时间管理', '调度', '习惯', '专注'],
            rating: 4.4,
            users: '500K+',
            url: 'https://reclaim.ai',
            pros: ['自动化强', '节省时间', '数据洞察'],
            cons: ['设置复杂', '依赖日历', '功能过多'],
            lastUpdated: '2024-12-08'
        },
        {
            id: 'clockify-ai',
            name: 'Clockify AI',
            provider: 'Clockify',
            category: 'productivity',
            description: 'AI时间跟踪工具，自动记录和分析工作时间',
            features: ['自动跟踪', '项目分类', '报告生成', '团队管理'],
            pricing: '免费/Pro $3.99/月',
            tags: ['时间跟踪', '项目', '报告', '团队'],
            rating: 4.2,
            users: '5M+',
            url: 'https://clockify.me',
            pros: ['完全免费', '功能全面', '团队友好'],
            cons: ['界面一般', 'AI功能少', '报告复杂'],
            lastUpdated: '2024-11-25'
        },

        // ===== 数据分析工具 =====
        {
            id: 'julius-ai',
            name: 'Julius AI',
            provider: 'Julius AI',
            category: 'data-analysis',
            description: 'AI数据分析师，通过聊天进行数据分析',
            features: ['数据可视化', '统计分析', '自然语言查询', '报告生成'],
            pricing: '免费/Pro $20/月',
            tags: ['数据分析', '可视化', '统计', '报告'],
            rating: 4.2,
            users: '100K+',
            url: 'https://julius.ai',
            pros: ['易于使用', '自然语言', '快速分析'],
            cons: ['功能有限', '数据格式限制', '准确性待提升'],
            lastUpdated: '2024-11-20'
        },
        {
            id: 'tableau-ai',
            name: 'Tableau AI',
            provider: 'Tableau',
            category: 'data-analysis',
            description: 'Tableau集成的AI功能，智能数据洞察',
            features: ['智能洞察', '自动图表', '异常检测', '预测分析'],
            pricing: 'Tableau订阅包含',
            tags: ['商业智能', '可视化', '洞察', '企业'],
            rating: 4.5,
            users: '企业用户',
            url: 'https://tableau.com/ai',
            pros: ['专业强大', '企业级', '集成完善'],
            cons: ['价格昂贵', '学习成本高', '复杂设置'],
            lastUpdated: '2024-12-01'
        },
        {
            id: 'pandas-ai',
            name: 'PandasAI',
            provider: 'PandasAI',
            category: 'data-analysis',
            description: '为Pandas添加AI功能的Python库',
            features: ['自然语言查询', '数据清洗', '可视化生成', 'Python集成'],
            pricing: '开源免费',
            tags: ['Python', '开源', '数据科学', '编程'],
            rating: 4.3,
            users: '开发者',
            url: 'https://github.com/gventuri/pandas-ai',
            pros: ['开源免费', 'Python原生', '灵活强大'],
            cons: ['需要编程', '文档不足', '稳定性一般'],
            lastUpdated: '2024-12-10'
        },
        {
            id: 'polymer-search',
            name: 'Polymer',
            provider: 'Polymer',
            category: 'data-analysis',
            description: 'AI驱动的数据可视化和分析平台',
            features: ['智能可视化', '数据连接', '协作分析', '自动洞察'],
            pricing: '免费/Pro $20/月',
            tags: ['可视化', '协作', '洞察', '简单'],
            rating: 4.1,
            users: '50K+',
            url: 'https://polymer.co',
            pros: ['易于使用', '美观界面', '快速上手'],
            cons: ['功能有限', '数据源少', '定制性差'],
            lastUpdated: '2024-11-28'
        },

        // ===== 语音音频工具 =====
        {
            id: 'elevenlabs',
            name: 'ElevenLabs',
            provider: 'ElevenLabs',
            category: 'voice-audio',
            description: 'AI语音合成工具，生成逼真的人声',
            features: ['语音克隆', '多语言支持', '情感控制', '实时生成'],
            pricing: '免费/Pro $5-99/月',
            tags: ['语音合成', '配音', '多语言', '克隆'],
            rating: 4.7,
            users: '2M+',
            url: 'https://elevenlabs.io',
            pros: ['音质极高', '语音克隆', '多语言'],
            cons: ['使用限制', '伦理争议', '成本较高'],
            lastUpdated: '2024-12-05'
        },
        {
            id: 'murf-ai',
            name: 'Murf AI',
            provider: 'Murf',
            category: 'voice-audio',
            description: 'AI语音生成平台，适合专业配音制作',
            features: ['专业配音', '多种声音', '语音编辑', '批量生成'],
            pricing: '免费/Pro $13-26/月',
            tags: ['配音', '专业', '编辑', '批量'],
            rating: 4.4,
            users: '1M+',
            url: 'https://murf.ai',
            pros: ['声音专业', '编辑功能强', '适合商用'],
            cons: ['价格较高', '声音选择有限', '中文支持一般'],
            lastUpdated: '2024-12-08'
        },
        {
            id: 'speechify',
            name: 'Speechify',
            provider: 'Speechify',
            category: 'voice-audio',
            description: 'AI文本转语音工具，帮助阅读和学习',
            features: ['文本朗读', '速度调节', '多语言', '移动应用'],
            pricing: '免费/Premium $11.58/月',
            tags: ['朗读', '学习', '阅读', '移动'],
            rating: 4.5,
            users: '20M+',
            url: 'https://speechify.com',
            pros: ['使用简单', '移动友好', '学习辅助'],
            cons: ['声音机械', '免费版限制', '功能单一'],
            lastUpdated: '2024-12-01'
        },
        {
            id: 'descript',
            name: 'Descript',
            provider: 'Descript',
            category: 'voice-audio',
            description: 'AI音频编辑工具，像编辑文档一样编辑音频',
            features: ['文本编辑音频', '语音克隆', '转录', '协作编辑'],
            pricing: '免费/Pro $12-24/月',
            tags: ['音频编辑', '转录', '协作', '创新'],
            rating: 4.6,
            users: '500K+',
            url: 'https://descript.com',
            pros: ['编辑创新', '功能全面', '协作友好'],
            cons: ['学习成本', '性能要求高', '价格不低'],
            lastUpdated: '2024-12-12'
        },
        {
            id: 'resemble-ai',
            name: 'Resemble AI',
            provider: 'Resemble AI',
            category: 'voice-audio',
            description: '企业级AI语音克隆和合成平台',
            features: ['语音克隆', '实时合成', 'API集成', '企业安全'],
            pricing: 'API按使用计费',
            tags: ['企业', 'API', '克隆', '安全'],
            rating: 4.3,
            users: '企业客户',
            url: 'https://resemble.ai',
            pros: ['企业级', 'API灵活', '安全可靠'],
            cons: ['价格昂贵', '技术门槛', '个人用户少'],
            lastUpdated: '2024-11-30'
        },

        // ===== 视频创作工具 =====
        {
            id: 'runway',
            name: 'Runway ML',
            provider: 'Runway',
            category: 'video-creation',
            description: 'AI视频生成和编辑平台',
            features: ['文本到视频', '视频编辑', '特效生成', '图像动画'],
            pricing: '免费/Pro $12-76/月',
            tags: ['视频生成', '编辑', '特效', '动画'],
            rating: 4.4,
            users: '1M+',
            url: 'https://runwayml.com',
            pros: ['功能强大', '创意工具', '易于使用'],
            cons: ['生成时间长', '质量不稳定', '成本较高'],
            lastUpdated: '2024-12-01'
        },
        {
            id: 'pika-labs',
            name: 'Pika Labs',
            provider: 'Pika Labs',
            category: 'video-creation',
            description: 'AI视频生成工具，专注于短视频创作',
            features: ['文本到视频', '图像到视频', '视频编辑', '风格控制'],
            pricing: '免费/Pro $10/月',
            tags: ['短视频', '生成', '简单', '快速'],
            rating: 4.2,
            users: '500K+',
            url: 'https://pika.art',
            pros: ['生成快速', '操作简单', '价格便宜'],
            cons: ['功能有限', '质量一般', '时长限制'],
            lastUpdated: '2024-12-10'
        },
        {
            id: 'synthesia',
            name: 'Synthesia',
            provider: 'Synthesia',
            category: 'video-creation',
            description: 'AI虚拟人视频生成平台，适合企业培训',
            features: ['虚拟主播', '多语言配音', '企业模板', '批量生成'],
            pricing: 'Personal $22.5/月',
            tags: ['虚拟人', '企业', '培训', '多语言'],
            rating: 4.3,
            users: '企业客户',
            url: 'https://synthesia.io',
            pros: ['企业专业', '多语言强', '批量高效'],
            cons: ['价格昂贵', '个性化差', '表情僵硬'],
            lastUpdated: '2024-12-05'
        },
        {
            id: 'invideo-ai',
            name: 'InVideo AI',
            provider: 'InVideo',
            category: 'video-creation',
            description: 'AI视频制作平台，快速创建营销视频',
            features: ['模板丰富', '自动剪辑', '文本动画', '音乐匹配'],
            pricing: '免费/Plus $15/月',
            tags: ['营销', '模板', '自动化', '简单'],
            rating: 4.1,
            users: '7M+',
            url: 'https://invideo.io',
            pros: ['模板丰富', '操作简单', '营销友好'],
            cons: ['创意有限', '质量一般', '水印限制'],
            lastUpdated: '2024-11-28'
        },
        {
            id: 'luma-ai',
            name: 'Luma AI',
            provider: 'Luma AI',
            category: 'video-creation',
            description: '3D视频生成和NeRF技术平台',
            features: ['3D重建', 'NeRF生成', '视频捕捉', '沉浸体验'],
            pricing: '免费/Pro $29.99/月',
            tags: ['3D', 'NeRF', '重建', '技术'],
            rating: 4.5,
            users: '100K+',
            url: 'https://lumalabs.ai',
            pros: ['技术先进', '3D效果好', '创新功能'],
            cons: ['技术门槛高', '硬件要求高', '应用场景限制'],
            lastUpdated: '2024-12-12'
        },

        // ===== 自动化工具 =====
        {
            id: 'zapier',
            name: 'Zapier',
            provider: 'Zapier Inc.',
            category: 'automation',
            description: '连接不同应用的自动化平台，现已集成AI功能',
            features: ['应用连接', 'AI自动化', '工作流程', '数据同步'],
            pricing: '免费/付费 $19.99-599/月',
            tags: ['自动化', '集成', '工作流', 'API'],
            rating: 4.6,
            users: '5M+',
            url: 'https://zapier.com',
            pros: ['应用丰富', '易于设置', 'AI集成'],
            cons: ['复杂任务限制', '价格递增', '调试困难'],
            lastUpdated: '2024-12-10'
        },
        {
            id: 'make',
            name: 'Make (Integromat)',
            provider: 'Make',
            category: 'automation',
            description: '可视化自动化平台，支持复杂工作流设计',
            features: ['可视化编辑', '复杂逻辑', '数据处理', 'API集成'],
            pricing: '免费/Pro $9-29/月',
            tags: ['可视化', '复杂', '逻辑', '专业'],
            rating: 4.4,
            users: '500K+',
            url: 'https://make.com',
            pros: ['功能强大', '逻辑复杂', '可视化好'],
            cons: ['学习成本高', '设置复杂', '调试困难'],
            lastUpdated: '2024-12-08'
        },
        {
            id: 'n8n',
            name: 'n8n',
            provider: 'n8n',
            category: 'automation',
            description: '开源的工作流自动化工具，可自托管',
            features: ['开源免费', '自托管', '节点编辑', '扩展性强'],
            pricing: '开源免费/云服务付费',
            tags: ['开源', '自托管', '节点', '扩展'],
            rating: 4.3,
            users: '开发者',
            url: 'https://n8n.io',
            pros: ['完全免费', '自主控制', '扩展性强'],
            cons: ['技术门槛高', '维护成本', '社区支持'],
            lastUpdated: '2024-12-01'
        },

        // ===== 营销工具 =====
        {
            id: 'hubspot-ai',
            name: 'HubSpot AI',
            provider: 'HubSpot',
            category: 'marketing',
            description: 'HubSpot集成的AI营销功能，智能客户管理',
            features: ['内容生成', '客户洞察', '邮件优化', '销售预测'],
            pricing: 'HubSpot订阅包含',
            tags: ['CRM', '客户', '销售', '企业'],
            rating: 4.5,
            users: '企业客户',
            url: 'https://hubspot.com/ai',
            pros: ['集成完善', '企业级', '功能全面'],
            cons: ['价格昂贵', '复杂设置', '学习成本高'],
            lastUpdated: '2024-12-05'
        },
        {
            id: 'mailchimp-ai',
            name: 'Mailchimp AI',
            provider: 'Mailchimp',
            category: 'marketing',
            description: 'AI增强的邮件营销平台',
            features: ['智能推荐', '内容优化', '发送时间优化', '受众分析'],
            pricing: '免费/付费 $10-299/月',
            tags: ['邮件营销', '推荐', '优化', '分析'],
            rating: 4.3,
            users: '12M+',
            url: 'https://mailchimp.com',
            pros: ['易于使用', '功能丰富', '分析详细'],
            cons: ['价格递增', '模板限制', '高级功能付费'],
            lastUpdated: '2024-11-30'
        },
        {
            id: 'persado',
            name: 'Persado',
            provider: 'Persado',
            category: 'marketing',
            description: 'AI驱动的营销语言优化平台',
            features: ['语言优化', 'A/B测试', '情感分析', '转化提升'],
            pricing: '企业定制',
            tags: ['语言', '优化', '转化', '企业'],
            rating: 4.4,
            users: '企业客户',
            url: 'https://persado.com',
            pros: ['转化效果好', '科学方法', '企业级'],
            cons: ['价格昂贵', '企业专用', '设置复杂'],
            lastUpdated: '2024-12-08'
        },

        // ===== 翻译工具 =====
        {
            id: 'deepl',
            name: 'DeepL',
            provider: 'DeepL',
            category: 'translation',
            description: '高质量AI翻译工具，翻译准确度极高',
            features: ['高质量翻译', '文档翻译', 'API集成', '多语言支持'],
            pricing: '免费/Pro $6.99/月',
            tags: ['翻译', '高质量', '文档', 'API'],
            rating: 4.8,
            users: '1B+',
            url: 'https://deepl.com',
            pros: ['翻译质量极高', '支持文档', '速度快'],
            cons: ['语言支持有限', '免费版限制', '专业术语一般'],
            lastUpdated: '2024-12-12'
        },
        {
            id: 'google-translate',
            name: 'Google Translate',
            provider: 'Google',
            category: 'translation',
            description: '免费的AI翻译服务，支持100+语言',
            features: ['100+语言', '实时翻译', '图像翻译', '语音翻译'],
            pricing: '免费',
            tags: ['免费', '多语言', '实时', '图像'],
            rating: 4.4,
            users: '500M+',
            url: 'https://translate.google.com',
            pros: ['完全免费', '语言最多', '功能全面'],
            cons: ['质量一般', '隐私担忧', '专业性差'],
            lastUpdated: '2024-12-01'
        },
        {
            id: 'microsoft-translator',
            name: 'Microsoft Translator',
            provider: 'Microsoft',
            category: 'translation',
            description: 'Microsoft的AI翻译服务，企业级应用',
            features: ['企业集成', '实时会议翻译', 'API服务', '多平台支持'],
            pricing: '免费/付费API',
            tags: ['企业', '会议', 'API', '集成'],
            rating: 4.3,
            users: '企业用户',
            url: 'https://translator.microsoft.com',
            pros: ['企业友好', '会议翻译', '集成方便'],
            cons: ['个人功能少', '界面一般', '质量中等'],
            lastUpdated: '2024-11-25'
        },

        // ===== 设计工具 =====
        {
            id: 'canva-ai',
            name: 'Canva AI',
            provider: 'Canva',
            category: 'design',
            description: 'Canva的AI设计功能，包括Magic Design和AI图像生成',
            features: ['AI设计', '图像生成', '文本效果', '背景移除'],
            pricing: '免费/Pro $12.99/月',
            tags: ['设计', '模板', 'AI生成', '易用'],
            rating: 4.5,
            users: '100M+',
            url: 'https://canva.com/ai',
            pros: ['模板丰富', '易于使用', '功能全面'],
            cons: ['创意限制', '高级功能付费', '输出质量一般'],
            lastUpdated: '2024-12-01'
        },
        {
            id: 'figma-ai',
            name: 'Figma AI',
            provider: 'Figma',
            category: 'design',
            description: 'Figma集成的AI设计助手功能',
            features: ['设计建议', '自动布局', '内容生成', '协作增强'],
            pricing: 'Figma订阅包含',
            tags: ['UI设计', '协作', '专业', '团队'],
            rating: 4.4,
            users: '4M+',
            url: 'https://figma.com',
            pros: ['专业工具', '协作强', '设计师友好'],
            cons: ['学习成本', 'AI功能少', '需要订阅'],
            lastUpdated: '2024-12-10'
        },
        {
            id: 'uizard',
            name: 'Uizard',
            provider: 'Uizard',
            category: 'design',
            description: 'AI驱动的UI/UX设计工具，快速原型制作',
            features: ['手绘转设计', '模板生成', '协作设计', '代码导出'],
            pricing: '免费/Pro $12/月',
            tags: ['UI设计', '原型', '手绘', '快速'],
            rating: 4.2,
            users: '2M+',
            url: 'https://uizard.io',
            pros: ['快速原型', '手绘识别', '易于上手'],
            cons: ['功能有限', '设计质量一般', '专业性不足'],
            lastUpdated: '2024-12-05'
        },
        {
            id: 'framer-ai',
            name: 'Framer AI',
            provider: 'Framer',
            category: 'design',
            description: 'AI增强的网站设计和原型工具',
            features: ['AI网站生成', '交互设计', '响应式布局', '发布部署'],
            pricing: '免费/Pro $5-25/月',
            tags: ['网站', '交互', '响应式', '发布'],
            rating: 4.6,
            users: '3M+',
            url: 'https://framer.com',
            pros: ['功能强大', '交互丰富', '发布方便'],
            cons: ['学习成本', '性能要求', '价格不低'],
            lastUpdated: '2024-12-08'
        },
        {
            id: 'figma-ai',
            name: 'Figma AI',
            provider: 'Figma',
            category: 'design',
            description: 'Figma集成的AI设计助手，帮助快速创建设计原型',
            features: ['原型设计', 'UI生成', '设计建议', '自动布局'],
            pricing: '免费/Pro $12/月',
            tags: ['UI设计', '原型', '协作', 'AI辅助'],
            rating: 4.4,
            users: '4M+',
            url: 'https://figma.com',
            pros: ['专业设计', '团队协作', 'AI辅助'],
            cons: ['学习曲线', '需要设计基础', '功能复杂'],
            lastUpdated: '2024-12-15'
        },
        {
            id: 'adobe-firefly',
            name: 'Adobe Firefly',
            provider: 'Adobe',
            category: 'design',
            description: 'Adobe的生成式AI工具，集成在Creative Cloud中',
            features: ['图像生成', '文本效果', '矢量生成', '3D设计'],
            pricing: '免费/Creative Cloud订阅',
            tags: ['Adobe', '生成式AI', '创意', '专业'],
            rating: 4.6,
            users: '10M+',
            url: 'https://firefly.adobe.com',
            pros: ['专业级质量', 'Creative Cloud集成', '商用安全'],
            cons: ['需要订阅', '学习成本', '资源消耗大'],
            lastUpdated: '2024-12-10'
        },
        {
            id: 'framer-ai',
            name: 'Framer AI',
            provider: 'Framer',
            category: 'design',
            description: 'AI驱动的网站设计和原型工具',
            features: ['网站生成', '响应式设计', '动画效果', '代码导出'],
            pricing: '免费/Pro $20/月',
            tags: ['网站设计', '原型', '响应式', '代码生成'],
            rating: 4.3,
            users: '1M+',
            url: 'https://framer.com',
            pros: ['快速原型', '代码质量高', '现代设计'],
            cons: ['价格较高', '功能限制', '学习曲线'],
            lastUpdated: '2024-12-01'
        },

        // 更多文本生成工具
        {
            id: 'writesonic',
            name: 'Writesonic',
            provider: 'Writesonic',
            category: 'text-generation',
            description: 'AI写作平台，支持多种内容类型生成',
            features: ['文章写作', '广告文案', '社交媒体', 'SEO优化'],
            pricing: '免费/Pro $12.67/月',
            tags: ['写作', '营销', 'SEO', '多语言'],
            rating: 4.4,
            users: '5M+',
            url: 'https://writesonic.com',
            pros: ['模板丰富', 'SEO友好', '多语言支持'],
            cons: ['质量不稳定', '需要编辑', '使用限制'],
            lastUpdated: '2024-12-05'
        },
        {
            id: 'copy-ai',
            name: 'Copy.ai',
            provider: 'Copy.ai',
            category: 'text-generation',
            description: 'AI文案生成工具，专注营销和销售文案',
            features: ['销售文案', '邮件营销', '社交媒体', '产品描述'],
            pricing: '免费/Pro $36/月',
            tags: ['文案', '营销', '销售', '转化'],
            rating: 4.3,
            users: '10M+',
            url: 'https://copy.ai',
            pros: ['营销专业', '转化率高', '模板多样'],
            cons: ['价格较高', '创意有限', '需要优化'],
            lastUpdated: '2024-11-28'
        },
        {
            id: 'rytr',
            name: 'Rytr',
            provider: 'Rytr',
            category: 'text-generation',
            description: '经济实惠的AI写作助手，支持40+用例',
            features: ['博客写作', '邮件', '广告', '创意写作'],
            pricing: '免费/Premium $9/月',
            tags: ['经济实惠', '多用例', '简单易用', '快速'],
            rating: 4.2,
            users: '7M+',
            url: 'https://rytr.me',
            pros: ['价格便宜', '使用简单', '响应快速'],
            cons: ['功能基础', '质量一般', '定制有限'],
            lastUpdated: '2024-12-01'
        },

        // 更多图像生成工具
        {
            id: 'leonardo-ai',
            name: 'Leonardo AI',
            provider: 'Leonardo.Ai',
            category: 'image-generation',
            description: '专业的AI图像生成平台，支持多种艺术风格',
            features: ['图像生成', '风格控制', '批量生成', '高分辨率'],
            pricing: '免费/付费 $10-48/月',
            tags: ['艺术', '专业', '风格多样', '高质量'],
            rating: 4.5,
            users: '3M+',
            url: 'https://leonardo.ai',
            pros: ['质量优秀', '风格丰富', '专业功能'],
            cons: ['学习曲线', '生成时间', '资源消耗'],
            lastUpdated: '2024-12-10'
        },
        {
            id: 'ideogram',
            name: 'Ideogram',
            provider: 'Ideogram',
            category: 'image-generation',
            description: '擅长文字渲染的AI图像生成工具',
            features: ['文字渲染', '图像生成', '风格控制', '高清输出'],
            pricing: '免费/Plus $7/月',
            tags: ['文字渲染', '标志设计', '海报', '创意'],
            rating: 4.3,
            users: '2M+',
            url: 'https://ideogram.ai',
            pros: ['文字效果好', '价格合理', '使用简单'],
            cons: ['功能相对单一', '风格有限', '生成速度慢'],
            lastUpdated: '2024-12-08'
        },
        {
            id: 'flux-ai',
            name: 'Flux AI',
            provider: 'Black Forest Labs',
            category: 'image-generation',
            description: '新一代开源AI图像生成模型',
            features: ['开源免费', '高质量生成', '快速渲染', '多样化风格'],
            pricing: '免费/云服务付费',
            tags: ['开源', '高质量', '快速', '免费'],
            rating: 4.4,
            users: '1M+',
            url: 'https://flux.ai',
            pros: ['完全开源', '质量优秀', '速度快'],
            cons: ['技术门槛', '资源需求', '社区较新'],
            lastUpdated: '2024-12-15'
        },

        // 更多代码助手
        {
            id: 'tabnine',
            name: 'Tabnine',
            provider: 'Tabnine',
            category: 'code-assistant',
            description: 'AI代码补全工具，支持多种编程语言',
            features: ['代码补全', '多语言支持', '本地部署', '团队训练'],
            pricing: '免费/Pro $12/月',
            tags: ['代码补全', '多语言', '本地', '隐私'],
            rating: 4.2,
            users: '1M+',
            url: 'https://tabnine.com',
            pros: ['隐私保护', '本地运行', '多语言'],
            cons: ['功能相对简单', '准确性一般', '需要训练'],
            lastUpdated: '2024-12-01'
        },
        {
            id: 'amazon-codewhisperer',
            name: 'Amazon CodeWhisperer',
            provider: 'Amazon',
            category: 'code-assistant',
            description: 'Amazon的AI代码生成服务',
            features: ['代码生成', '安全扫描', 'AWS集成', '多IDE支持'],
            pricing: '免费/Professional $19/月',
            tags: ['Amazon', 'AWS', '安全', '企业级'],
            rating: 4.1,
            users: '500K+',
            url: 'https://aws.amazon.com/codewhisperer',
            pros: ['AWS集成', '安全扫描', '企业级'],
            cons: ['生态限制', '功能相对基础', '依赖AWS'],
            lastUpdated: '2024-11-20'
        },
        {
            id: 'replit-ghostwriter',
            name: 'Replit Ghostwriter',
            provider: 'Replit',
            category: 'code-assistant',
            description: 'Replit集成的AI编程助手',
            features: ['代码生成', '调试辅助', '代码解释', '在线编程'],
            pricing: '免费/Hacker $7/月',
            tags: ['在线编程', '学习', '协作', '简单'],
            rating: 4.0,
            users: '20M+',
            url: 'https://replit.com',
            pros: ['在线使用', '学习友好', '协作便利'],
            cons: ['功能有限', '性能一般', '依赖网络'],
            lastUpdated: '2024-12-05'
        },

        // 更多效率工具
        {
            id: 'otter-ai',
            name: 'Otter.ai',
            provider: 'Otter.ai',
            category: 'productivity',
            description: 'AI会议记录和转录工具',
            features: ['实时转录', '会议总结', '关键词提取', '多人识别'],
            pricing: '免费/Pro $8.33/月',
            tags: ['会议', '转录', '总结', '协作'],
            rating: 4.4,
            users: '3M+',
            url: 'https://otter.ai',
            pros: ['准确率高', '实时转录', '会议集成'],
            cons: ['主要支持英语', '网络依赖', '隐私担忧'],
            lastUpdated: '2024-12-01'
        },
        {
            id: 'calendly-ai',
            name: 'Calendly AI',
            provider: 'Calendly',
            category: 'productivity',
            description: 'AI驱动的智能日程安排工具',
            features: ['智能调度', '会议优化', '自动提醒', '日历集成'],
            pricing: '免费/Professional $8/月',
            tags: ['日程', '调度', '会议', '自动化'],
            rating: 4.3,
            users: '10M+',
            url: 'https://calendly.com',
            pros: ['调度智能', '集成丰富', '使用简单'],
            cons: ['功能相对单一', '定制有限', '依赖集成'],
            lastUpdated: '2024-11-25'
        },
        {
            id: 'superhuman',
            name: 'Superhuman',
            provider: 'Superhuman',
            category: 'productivity',
            description: 'AI增强的高效邮件客户端',
            features: ['智能分类', '快速回复', '邮件调度', '跟踪分析'],
            pricing: '$30/月',
            tags: ['邮件', '效率', '快捷键', '专业'],
            rating: 4.6,
            users: '500K+',
            url: 'https://superhuman.com',
            pros: ['效率极高', '功能强大', '用户体验好'],
            cons: ['价格昂贵', '学习曲线', '功能过载'],
            lastUpdated: '2024-12-10'
        },

        // 语音音频工具扩展
        {
            id: 'murf-ai',
            name: 'Murf AI',
            provider: 'Murf',
            category: 'voice-audio',
            description: 'AI语音生成平台，支持多种语言和声音',
            features: ['语音合成', '多语言', '情感控制', '批量生成'],
            pricing: '免费/Pro $13/月',
            tags: ['语音合成', '多语言', '配音', '商用'],
            rating: 4.3,
            users: '4M+',
            url: 'https://murf.ai',
            pros: ['声音自然', '多语言支持', '商用友好'],
            cons: ['免费限制', '声音选择有限', '情感表达一般'],
            lastUpdated: '2024-12-01'
        },
        {
            id: 'speechify',
            name: 'Speechify',
            provider: 'Speechify',
            category: 'voice-audio',
            description: 'AI文本转语音工具，帮助阅读和学习',
            features: ['文本朗读', '速度调节', '多语言', '移动应用'],
            pricing: '免费/Premium $11.58/月',
            tags: ['朗读', '学习', '阅读', '移动'],
            rating: 4.5,
            users: '20M+',
            url: 'https://speechify.com',
            pros: ['使用简单', '移动友好', '学习辅助'],
            cons: ['声音机械', '免费版限制', '功能单一'],
            lastUpdated: '2024-12-01'
        }
    ],

    // AI Agent数据
    agents: [
        {
            id: 'auto-gpt',
            name: 'Auto-GPT',
            category: 'automation',
            description: '自主AI代理，能够独立执行复杂任务',
            features: ['自主决策', '任务分解', '工具使用', '长期记忆'],
            useCase: '自动化复杂工作流程',
            complexity: 'Advanced',
            github: 'https://github.com/Significant-Gravitas/Auto-GPT',
            documentation: 'https://docs.agpt.co/',
            rating: 4.3,
            tags: ['自动化', '代理', '工作流', '开源']
        },
        {
            id: 'langchain-agents',
            name: 'LangChain Agents',
            category: 'automation',
            description: '基于LangChain框架的AI代理系统',
            features: ['工具调用', '推理链', '记忆管理', '多模态支持'],
            useCase: '构建定制AI应用',
            complexity: 'Intermediate',
            github: 'https://github.com/langchain-ai/langchain',
            documentation: 'https://python.langchain.com/docs/modules/agents/',
            rating: 4.5,
            tags: ['框架', '开发', '工具', '集成']
        },
        {
            id: 'gpt-researcher',
            name: 'GPT Researcher',
            category: 'research',
            description: '自主研究代理，能够进行深度网络研究',
            features: ['网络搜索', '信息整合', '报告生成', '多源验证'],
            useCase: '自动化研究和报告生成',
            complexity: 'Intermediate',
            github: 'https://github.com/assafelovic/gpt-researcher',
            documentation: 'https://docs.gptr.dev/',
            rating: 4.4,
            tags: ['研究', '搜索', '报告', '自动化']
        },
        {
            id: 'superagi',
            name: 'SuperAGI',
            category: 'automation',
            description: '开源的自主AI代理框架，支持多种工具集成',
            features: ['GUI界面', '工具集成', '多代理协作', '性能监控'],
            useCase: '构建和部署AI代理',
            complexity: 'Advanced',
            github: 'https://github.com/TransformerOptimus/SuperAGI',
            documentation: 'https://superagi.com/docs',
            rating: 4.2,
            tags: ['框架', '多代理', 'GUI', '监控']
        },
        {
            id: 'crew-ai',
            name: 'CrewAI',
            category: 'automation',
            description: '多代理协作框架，让AI代理团队协作完成任务',
            features: ['多代理协作', '角色定义', '任务分配', '结果整合'],
            useCase: '复杂项目的团队协作',
            complexity: 'Intermediate',
            github: 'https://github.com/joaomdmoura/crewAI',
            documentation: 'https://docs.crewai.com/',
            rating: 4.6,
            tags: ['多代理', '协作', '团队', '项目管理']
        },
        {
            id: 'autogen',
            name: 'AutoGen',
            provider: 'Microsoft',
            category: 'automation',
            description: 'Microsoft开发的多代理对话框架',
            features: ['多代理对话', '代码生成', '任务自动化', '人机协作'],
            useCase: '复杂问题解决和代码生成',
            complexity: 'Advanced',
            github: 'https://github.com/microsoft/autogen',
            documentation: 'https://microsoft.github.io/autogen/',
            rating: 4.7,
            tags: ['微软', '对话', '代码生成', '协作']
        },
        {
            id: 'semantic-kernel',
            name: 'Semantic Kernel',
            provider: 'Microsoft',
            category: 'automation',
            description: 'Microsoft的AI编排框架，集成AI服务到应用中',
            features: ['AI编排', '插件系统', '记忆管理', '多语言支持'],
            useCase: '企业AI应用开发',
            complexity: 'Advanced',
            github: 'https://github.com/microsoft/semantic-kernel',
            documentation: 'https://learn.microsoft.com/en-us/semantic-kernel/',
            rating: 4.5,
            tags: ['微软', '企业', '编排', '插件']
        },
        {
            id: 'haystack',
            name: 'Haystack',
            provider: 'deepset',
            category: 'research',
            description: '开源的NLP框架，用于构建搜索和问答系统',
            features: ['文档搜索', '问答系统', 'RAG支持', '管道构建'],
            useCase: '企业知识库和搜索系统',
            complexity: 'Advanced',
            github: 'https://github.com/deepset-ai/haystack',
            documentation: 'https://docs.haystack.deepset.ai/',
            rating: 4.4,
            tags: ['搜索', '问答', 'RAG', '企业']
        },
        {
            id: 'llamaindex',
            name: 'LlamaIndex',
            category: 'research',
            description: '数据框架，用于连接LLM与外部数据',
            features: ['数据连接', '索引构建', '查询引擎', 'RAG实现'],
            useCase: '私有数据的AI问答系统',
            complexity: 'Intermediate',
            github: 'https://github.com/run-llama/llama_index',
            documentation: 'https://docs.llamaindex.ai/',
            rating: 4.6,
            tags: ['数据连接', 'RAG', '索引', '问答']
        },
        {
            id: 'dify',
            name: 'Dify',
            category: 'automation',
            description: '开源的LLM应用开发平台，可视化构建AI应用',
            features: ['可视化构建', 'RAG支持', '工作流编排', '多模型支持'],
            useCase: '快速构建AI应用和聊天机器人',
            complexity: 'Beginner',
            github: 'https://github.com/langgenius/dify',
            documentation: 'https://docs.dify.ai/',
            rating: 4.5,
            tags: ['可视化', 'RAG', '应用构建', '开源']
        },
        {
            id: 'flowise',
            name: 'Flowise',
            category: 'automation',
            description: '拖拽式LLM流程构建工具，基于LangChain',
            features: ['拖拽构建', 'LangChain集成', '可视化流程', '模块化设计'],
            useCase: '无代码构建LLM应用',
            complexity: 'Beginner',
            github: 'https://github.com/FlowiseAI/Flowise',
            documentation: 'https://docs.flowiseai.com/',
            rating: 4.3,
            tags: ['无代码', '拖拽', 'LangChain', '可视化']
        },
        {
            id: 'open-interpreter',
            name: 'Open Interpreter',
            category: 'automation',
            description: '开源的代码解释器，让LLM在本地运行代码',
            features: ['本地代码执行', '多语言支持', '文件操作', '系统集成'],
            useCase: '本地AI助手和自动化任务',
            complexity: 'Intermediate',
            github: 'https://github.com/KillianLucas/open-interpreter',
            documentation: 'https://docs.openinterpreter.com/',
            rating: 4.4,
            tags: ['本地执行', '代码解释', '自动化', '开源']
        },
        {
            id: 'agentgpt',
            name: 'AgentGPT',
            category: 'automation',
            description: '自主AI代理平台，可以设定目标让AI自主完成',
            features: ['目标设定', '自主执行', 'Web界面', '任务分解'],
            useCase: '自主完成复杂任务和目标',
            complexity: 'Intermediate',
            github: 'https://github.com/reworkd/AgentGPT',
            documentation: 'https://docs.reworkd.ai/',
            rating: 4.2,
            tags: ['自主代理', '目标导向', 'Web界面', '任务执行']
        },
        {
            id: 'babyagi',
            name: 'BabyAGI',
            category: 'automation',
            description: '任务驱动的自主AI代理系统',
            features: ['任务生成', '优先级排序', '任务执行', '结果存储'],
            useCase: '自主任务管理和执行',
            complexity: 'Advanced',
            github: 'https://github.com/yoheinakajima/babyagi',
            documentation: 'https://github.com/yoheinakajima/babyagi/blob/main/README.md',
            rating: 4.1,
            tags: ['任务驱动', '自主执行', '优先级', '实验性']
        },
        {
            id: 'chatdev',
            name: 'ChatDev',
            category: 'automation',
            description: '多代理软件开发公司模拟，AI协作开发软件',
            features: ['多角色协作', '软件开发', '代码生成', '项目管理'],
            useCase: '自动化软件开发流程',
            complexity: 'Advanced',
            github: 'https://github.com/OpenBMB/ChatDev',
            documentation: 'https://github.com/OpenBMB/ChatDev/blob/main/README.md',
            rating: 4.3,
            tags: ['多代理', '软件开发', '协作', '角色扮演']
        },
        {
            id: 'memgpt',
            name: 'MemGPT',
            category: 'research',
            description: '具有长期记忆的AI代理系统',
            features: ['长期记忆', '上下文管理', '个性化交互', '记忆层次'],
            useCase: '需要长期记忆的AI助手',
            complexity: 'Advanced',
            github: 'https://github.com/cpacker/MemGPT',
            documentation: 'https://memgpt.readthedocs.io/',
            rating: 4.4,
            tags: ['长期记忆', '上下文', '个性化', '研究']
        },
        {
            id: 'taskweaver',
            name: 'TaskWeaver',
            provider: 'Microsoft',
            category: 'automation',
            description: 'Microsoft开发的代码优先的AI代理框架',
            features: ['代码生成', '插件系统', '任务规划', '数据分析'],
            useCase: '数据分析和任务自动化',
            complexity: 'Intermediate',
            github: 'https://github.com/microsoft/TaskWeaver',
            documentation: 'https://microsoft.github.io/TaskWeaver/',
            rating: 4.3,
            tags: ['微软', '代码优先', '数据分析', '插件']
        },
        {
            id: 'phidata',
            name: 'Phidata',
            category: 'automation',
            description: '构建AI助手的框架，专注于工具使用和推理',
            features: ['工具集成', '推理链', '记忆管理', '多模态支持'],
            useCase: '构建智能AI助手',
            complexity: 'Intermediate',
            github: 'https://github.com/phidatahq/phidata',
            documentation: 'https://docs.phidata.com/',
            rating: 4.2,
            tags: ['工具集成', '推理', '助手构建', '框架']
        },
        {
            id: 'taskweaver',
            name: 'TaskWeaver',
            provider: 'Microsoft',
            category: 'data-analysis',
            description: 'Microsoft的代码优先AI代理框架，专注于数据分析',
            features: ['代码生成', '数据分析', '插件系统', '状态管理'],
            useCase: '数据科学和分析任务',
            complexity: 'Advanced',
            github: 'https://github.com/microsoft/TaskWeaver',
            documentation: 'https://microsoft.github.io/TaskWeaver/',
            rating: 4.3,
            tags: ['微软', '数据分析', '代码生成', '插件']
        }
    ]
};

// 搜索和筛选功能
class AIToolsManager {
    constructor(database) {
        this.db = database;
    }

    // 搜索工具
    searchTools(query, category = null, priceRange = null, features = [], rating = 0) {
        let results = [...this.db.tools];

        if (query) {
            const searchTerm = query.toLowerCase();
            results = results.filter(tool =>
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                (tool.provider && tool.provider.toLowerCase().includes(searchTerm)) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }

        if (category) {
            results = results.filter(tool => tool.category === category);
        }

        if (priceRange) {
            results = results.filter(tool => this.matchesPriceRange(tool.pricing, priceRange));
        }

        if (features.length > 0) {
            results = results.filter(tool =>
                features.some(feature =>
                    tool.features.some(toolFeature =>
                        toolFeature.toLowerCase().includes(feature.toLowerCase())
                    )
                )
            );
        }

        if (rating > 0) {
            results = results.filter(tool => tool.rating >= rating);
        }

        return results.sort((a, b) => b.rating - a.rating);
    }

    // 搜索模型
    searchModels(query, type = null, provider = null, features = [], rating = 0) {
        let results = [...this.db.models];

        if (query) {
            const searchTerm = query.toLowerCase();
            results = results.filter(model =>
                model.name.toLowerCase().includes(searchTerm) ||
                model.description.toLowerCase().includes(searchTerm) ||
                (model.provider && model.provider.toLowerCase().includes(searchTerm)) ||
                model.features.some(feature => feature.toLowerCase().includes(searchTerm))
            );
        }

        if (type) {
            results = results.filter(model => model.type.toLowerCase().includes(type.toLowerCase()));
        }

        if (provider) {
            results = results.filter(model => model.provider.toLowerCase().includes(provider.toLowerCase()));
        }

        if (features.length > 0) {
            results = results.filter(model =>
                features.some(feature =>
                    model.features.some(modelFeature =>
                        modelFeature.toLowerCase().includes(feature.toLowerCase())
                    )
                )
            );
        }

        if (rating > 0) {
            results = results.filter(model => model.rating >= rating);
        }

        return results.sort((a, b) => b.rating - a.rating);
    }

    // 搜索Agent
    searchAgents(query, type = null, complexity = null, features = [], rating = 0) {
        let results = [...this.db.agents];

        if (query) {
            const searchTerm = query.toLowerCase();
            results = results.filter(agent =>
                agent.name.toLowerCase().includes(searchTerm) ||
                agent.description.toLowerCase().includes(searchTerm) ||
                (agent.provider && agent.provider.toLowerCase().includes(searchTerm)) ||
                agent.features.some(feature => feature.toLowerCase().includes(searchTerm)) ||
                agent.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }

        if (type) {
            results = results.filter(agent => agent.category === type);
        }

        if (complexity) {
            results = results.filter(agent => agent.complexity.toLowerCase() === complexity.toLowerCase());
        }

        if (features.length > 0) {
            results = results.filter(agent =>
                features.some(feature =>
                    agent.features.some(agentFeature =>
                        agentFeature.toLowerCase().includes(feature.toLowerCase())
                    )
                )
            );
        }

        if (rating > 0) {
            results = results.filter(agent => agent.rating >= rating);
        }

        return results.sort((a, b) => b.rating - a.rating);
    }

    // 获取分类统计
    getCategoryStats() {
        const stats = {};
        Object.keys(this.db.categories).forEach(cat => {
            stats[cat] = this.db.tools.filter(tool => tool.category === cat).length;
        });
        return stats;
    }

    // 获取提供商统计
    getProviderStats() {
        const providers = {};
        this.db.tools.forEach(tool => {
            if (tool.provider) {
                providers[tool.provider] = (providers[tool.provider] || 0) + 1;
            }
        });
        this.db.models.forEach(model => {
            if (model.provider) {
                providers[model.provider] = (providers[model.provider] || 0) + 1;
            }
        });
        this.db.agents.forEach(agent => {
            if (agent.provider) {
                providers[agent.provider] = (providers[agent.provider] || 0) + 1;
            }
        });
        return providers;
    }

    // 获取推荐工具
    getRecommendedTools(limit = 6) {
        return this.db.tools
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
    }

    // 获取最新工具
    getLatestTools(limit = 6) {
        return [...this.db.tools]
            .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))
            .slice(0, limit);
    }

    // 获取相关工具
    getRelatedTools(toolId, limit = 3) {
        const tool = this.db.tools.find(t => t.id === toolId);
        if (!tool) return [];

        return this.db.tools
            .filter(t => t.id !== toolId && t.category === tool.category)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
    }

    // 价格范围匹配
    matchesPriceRange(pricing, range) {
        const pricingLower = pricing.toLowerCase();
        switch (range) {
            case 'free':
                return pricingLower.includes('免费') || pricingLower.includes('free');
            case 'low':
                return pricingLower.includes('$') && !pricingLower.includes('$50');
            case 'medium':
                return pricingLower.includes('$') && (pricingLower.includes('$20') || pricingLower.includes('$30'));
            case 'high':
                return pricingLower.includes('$50') || pricingLower.includes('$100');
            default:
                return true;
        }
    }

    // 模型对比
    compareModels(modelIds) {
        return modelIds.map(id => this.db.models.find(model => model.id === id))
            .filter(model => model !== undefined);
    }
}

// 导出数据库和管理器
(function () {
    // 导出到window对象
    window.aiToolsDatabase = aiToolsDatabase;
    
    // 创建管理器实例
    const manager = new AIToolsManager(aiToolsDatabase);
    window.aiToolsManager = manager;
})();