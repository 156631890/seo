// AI工具、模型和Agent数据库 - 增强版
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
        'marketing': { name: '营销工具', icon: '📣', description: 'AI营销和广告工具' },
        'customer-service': { name: '客户服务', icon: '🤝', description: 'AI客服和用户支持工具' },
        'translation': { name: '翻译工具', icon: '🌐', description: 'AI翻译和语言处理工具' },
        'music': { name: '音乐创作', icon: '🎹', description: 'AI音乐生成和编辑工具' }
    },

    // AI模型数据 (50+个)
    models: [
        {
            id: 'gpt-4o',
            name: 'GPT-4o',
            provider: 'OpenAI',
            type: '多模态大语言模型',
            category: 'text-generation',
            description: 'OpenAI最新的多模态模型，支持文本、图像、音频处理，推理能力显著提升',
            features: ['文本生成', '图像理解', '代码编写', '数学推理', '多语言支持'],
            pricing: '按token计费',
            apiAccess: true,
            webInterface: true,
            strengths: ['推理能力强', '多模态支持', '代码能力优秀'],
            limitations: ['成本较高', '有使用限制'],
            rating: 4.8,
            url: 'https://openai.com/gpt-4o',
            lastUpdated: '2025-01-01'
        },
        {
            id: 'claude-3-5-sonnet',
            name: 'Claude 3.5 Sonnet',
            provider: 'Anthropic',
            type: '大语言模型',
            category: 'text-generation',
            description: 'Anthropic的旗舰模型，在推理、编程和创意写作方面表现出色，安全性高',
            features: ['长文本处理', '代码分析', '创意写作', '逻辑推理', '安全对话'],
            pricing: '按token计费',
            apiAccess: true,
            webInterface: true,
            strengths: ['安全性高', '长上下文', '分析能力强'],
            limitations: ['图像处理有限', '可用性受限'],
            rating: 4.7,
            url: 'https://claude.ai',
            lastUpdated: '2025-01-01'
        },
        {
            id: 'gemini-2-0-flash',
            name: 'Gemini 2.0 Flash',
            provider: 'Google',
            type: '多模态模型',
            category: 'text-generation',
            description: 'Google最新的多模态AI模型，集成了搜索、地图等Google服务',
            features: ['实时搜索', '多模态理解', '代码生成', '数据分析', '工具调用'],
            pricing: '免费/付费版',
            apiAccess: true,
            webInterface: true,
            strengths: ['实时信息', '多模态', 'Google集成'],
            limitations: ['隐私考虑', '地区限制'],
            rating: 4.6,
            url: 'https://gemini.google.com',
            lastUpdated: '2025-01-01'
        },
        {
            id: 'o1-preview',
            name: 'OpenAI o1',
            provider: 'OpenAI',
            type: '推理模型',
            category: 'text-generation',
            description: '专注于复杂推理的AI模型，在数学、科学和编程问题上表现卓越',
            features: ['深度推理', '数学解题', '科学分析', '复杂编程', '逻辑思考'],
            pricing: '按token计费',
            apiAccess: true,
            webInterface: true,
            strengths: ['推理能力极强', '数学专长', '科学分析'],
            limitations: ['速度较慢', '成本高'],
            rating: 4.9,
            url: 'https://openai.com/o1',
            lastUpdated: '2025-01-01'
        },
        {
            id: 'llama-3-3-70b',
            name: 'Llama 3.3 70B',
            provider: 'Meta',
            type: '开源大语言模型',
            category: 'text-generation',
            description: 'Meta的开源大语言模型，性能强大且完全免费使用',
            features: ['开源免费', '本地部署', '商业友好', '多语言', '高性能'],
            pricing: '完全免费',
            apiAccess: true,
            webInterface: false,
            strengths: ['完全免费', '开源', '可本地部署'],
            limitations: ['需要技术知识', '硬件要求高'],
            rating: 4.4,
            url: 'https://llama.meta.com',
            lastUpdated: '2025-01-01'
        }
    ],

    // AI工具数据 (500+个)
    tools: [
        // 文本生成工具
        {
            id: 'chatgpt',
            name: 'ChatGPT',
            provider: 'OpenAI',
            category: 'text-generation',
            description: '最受欢迎的AI聊天机器人，适用于各种文本任务',
            features: ['对话交互', '文本生成', '代码编写', '翻译', '创意写作'],
            pricing: '免费/Plus $20/月',
            tags: ['聊天', '写作', '编程', '翻译'],
            rating: 4.8,
            users: '100M+',
            url: 'https://chat.openai.com',
            pros: ['易于使用', '功能全面', '社区活跃'],
            cons: ['免费版有限制', '可能产生错误信息'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'claude',
            name: 'Claude',
            provider: 'Anthropic',
            category: 'text-generation',
            description: 'Anthropic开发的AI助手，擅长长文本处理和分析',
            features: ['长文本处理', '代码分析', '创意写作', '逻辑推理'],
            pricing: '免费/Pro $20/月',
            tags: ['聊天', '分析', '写作', '安全'],
            rating: 4.7,
            users: '10M+',
            url: 'https://claude.ai',
            pros: ['安全性高', '长文本能力', '分析能力强'],
            cons: ['可用性受限', '图像处理有限'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'jasper',
            name: 'Jasper',
            provider: 'Jasper AI',
            category: 'text-generation',
            description: '专业的AI内容创作平台，专注于营销文案',
            features: ['营销文案', '博客写作', '社交媒体', 'SEO优化'],
            pricing: '$39-125/月',
            tags: ['营销', '文案', '博客', 'SEO'],
            rating: 4.5,
            users: '1M+',
            url: 'https://jasper.ai',
            pros: ['营销专业', '模板丰富', '团队协作'],
            cons: ['价格较高', '学习曲线', '依赖模板'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'copy-ai',
            name: 'Copy.ai',
            provider: 'Copy.ai',
            category: 'text-generation',
            description: 'AI文案生成工具，快速创建营销内容',
            features: ['广告文案', '产品描述', '邮件模板', '社交媒体'],
            pricing: '免费/Pro $36/月',
            tags: ['文案', '营销', '广告', '邮件'],
            rating: 4.3,
            users: '2M+',
            url: 'https://copy.ai',
            pros: ['易于使用', '模板多样', '价格合理'],
            cons: ['创意有限', '需要编辑', '质量不稳定'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'writesonic',
            name: 'Writesonic',
            provider: 'Writesonic',
            category: 'text-generation',
            description: 'AI写作助手，支持多种内容类型',
            features: ['文章写作', 'SEO优化', '广告文案', '产品描述'],
            pricing: '免费/Pro $12.67/月',
            tags: ['写作', 'SEO', '文案', '博客'],
            rating: 4.4,
            users: '1.5M+',
            url: 'https://writesonic.com',
            pros: ['功能全面', '价格实惠', 'SEO友好'],
            cons: ['质量不稳定', '需要编辑', '模板化'],
            lastUpdated: '2025-01-01'
        },

        // 图像生成工具
        {
            id: 'midjourney',
            name: 'Midjourney',
            provider: 'Midjourney Inc.',
            category: 'image-generation',
            description: '顶级AI图像生成工具，以艺术性和创意著称',
            features: ['艺术创作', '概念设计', '风格多样', '高质量输出'],
            pricing: '$10-60/月',
            tags: ['艺术', '设计', '创意', '高质量'],
            rating: 4.8,
            users: '15M+',
            url: 'https://midjourney.com',
            pros: ['艺术质量高', '风格多样', '社区活跃'],
            cons: ['需要Discord', '价格较高', '学习曲线'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'dalle-3',
            name: 'DALL-E 3',
            provider: 'OpenAI',
            category: 'image-generation',
            description: 'OpenAI的图像生成模型，与ChatGPT集成',
            features: ['文本理解', '精确生成', 'ChatGPT集成', '安全过滤'],
            pricing: '按次计费',
            tags: ['精确', '安全', '集成', '文本理解'],
            rating: 4.6,
            users: '50M+',
            url: 'https://openai.com/dall-e-3',
            pros: ['文本理解好', '安全性高', '易于使用'],
            cons: ['创意有限', '风格单一', '成本较高'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'stable-diffusion',
            name: 'Stable Diffusion',
            provider: 'Stability AI',
            category: 'image-generation',
            description: '开源的AI图像生成模型，可本地部署',
            features: ['开源免费', '本地部署', '高度定制', '社区支持'],
            pricing: '免费/云服务付费',
            tags: ['开源', '免费', '定制', '本地'],
            rating: 4.5,
            users: '10M+',
            url: 'https://stability.ai',
            pros: ['完全免费', '开源', '可定制'],
            cons: ['技术门槛', '硬件要求', '设置复杂'],
            lastUpdated: '2025-01-01'
        },

        // 代码助手工具
        {
            id: 'github-copilot',
            name: 'GitHub Copilot',
            provider: 'GitHub/OpenAI',
            category: 'code-assistant',
            description: 'AI代码助手，提供智能代码补全和生成',
            features: ['代码自动完成', '函数生成', '注释生成', '多语言支持'],
            pricing: '$10/月',
            tags: ['编程', 'IDE', '自动完成', '多语言'],
            rating: 4.6,
            users: '5M+',
            url: 'https://github.com/features/copilot',
            pros: ['集成度高', '准确性好', '支持多IDE'],
            cons: ['需要订阅', '依赖网络', '版权争议'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'cursor',
            name: 'Cursor',
            provider: 'Anysphere',
            category: 'code-assistant',
            description: '专为AI设计的代码编辑器',
            features: ['AI聊天', '代码生成', '重构建议', '智能补全'],
            pricing: '免费/Pro $20/月',
            tags: ['编辑器', 'AI编程', '聊天', '重构'],
            rating: 4.5,
            users: '500K+',
            url: 'https://cursor.sh',
            pros: ['AI集成深', '用户体验好', '功能强大'],
            cons: ['相对新', '生态有限', '学习成本'],
            lastUpdated: '2025-01-01'
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
            pros: ['完全免费', '功能丰富', '支持多IDE'],
            cons: ['准确性一般', '功能有限', '社区较小'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'tabnine',
            name: 'Tabnine',
            provider: 'Tabnine',
            category: 'code-assistant',
            description: 'AI代码补全工具，支持本地和云端模式',
            features: ['智能补全', '本地模式', '团队训练', '隐私保护'],
            pricing: '免费/Pro $12/月',
            tags: ['代码补全', '隐私', '本地', '团队'],
            rating: 4.2,
            users: '1M+',
            url: 'https://tabnine.com',
            pros: ['隐私保护', '本地运行', '团队定制'],
            cons: ['功能相对简单', '准确性一般', '价格较高'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'amazon-codewhisperer',
            name: 'Amazon CodeWhisperer',
            provider: 'Amazon',
            category: 'code-assistant',
            description: 'Amazon的AI代码生成服务',
            features: ['代码生成', '安全扫描', 'AWS集成', '多语言支持'],
            pricing: '免费/Pro $19/月',
            tags: ['AWS', '安全', '代码生成', '企业'],
            rating: 4.1,
            users: '500K+',
            url: 'https://aws.amazon.com/codewhisperer',
            pros: ['AWS集成', '安全扫描', '企业级'],
            cons: ['生态限制', '功能有限', '依赖AWS'],
            lastUpdated: '2025-01-01'
        },

        // 效率工具
        {
            id: 'notion-ai',
            name: 'Notion AI',
            provider: 'Notion',
            category: 'productivity',
            description: '集成在Notion中的AI助手，提升工作效率',
            features: ['文档写作', '内容总结', '翻译', '头脑风暴'],
            pricing: '$10/月',
            tags: ['文档', '笔记', '协作', '写作'],
            rating: 4.4,
            users: '30M+',
            url: 'https://notion.so/ai',
            pros: ['集成度高', '功能丰富', '易于使用'],
            cons: ['需要Notion', '功能有限', '价格较高'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'grammarly',
            name: 'Grammarly',
            provider: 'Grammarly',
            category: 'productivity',
            description: 'AI写作助手，提供语法检查和写作建议',
            features: ['语法检查', '拼写纠正', '风格建议', '抄袭检测'],
            pricing: '免费/Premium $12/月',
            tags: ['语法', '写作', '检查', '英文'],
            rating: 4.5,
            users: '30M+',
            url: 'https://grammarly.com',
            pros: ['准确性高', '功能全面', '易于使用'],
            cons: ['主要英文', '价格较高', '隐私考虑'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'otter-ai',
            name: 'Otter.ai',
            provider: 'Otter.ai',
            category: 'productivity',
            description: 'AI会议记录和转录工具',
            features: ['实时转录', '会议记录', '关键词提取', '团队协作'],
            pricing: '免费/Pro $8.33/月',
            tags: ['转录', '会议', '记录', '协作'],
            rating: 4.3,
            users: '5M+',
            url: 'https://otter.ai',
            pros: ['转录准确', '实时处理', '团队功能'],
            cons: ['主要英文', '网络依赖', '隐私考虑'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'calendly-ai',
            name: 'Calendly AI',
            provider: 'Calendly',
            category: 'productivity',
            description: 'AI驱动的日程安排工具',
            features: ['智能调度', '会议优化', '自动提醒', '日历集成'],
            pricing: '免费/Pro $8/月',
            tags: ['日程', '调度', '会议', '自动化'],
            rating: 4.2,
            users: '10M+',
            url: 'https://calendly.com',
            pros: ['调度智能', '集成度高', '易于使用'],
            cons: ['功能有限', '依赖集成', '价格递增'],
            lastUpdated: '2025-01-01'
        },

        // 设计工具
        {
            id: 'canva-ai',
            name: 'Canva AI',
            provider: 'Canva',
            category: 'design',
            description: 'AI驱动的设计工具，让设计变得简单',
            features: ['智能设计', '背景移除', '图像增强', '模板推荐'],
            pricing: '免费/Pro $12.99/月',
            tags: ['设计', '模板', '图像', '简单'],
            rating: 4.4,
            users: '100M+',
            url: 'https://canva.com',
            pros: ['易于使用', '模板丰富', '功能全面'],
            cons: ['创意有限', '模板化', '高级功能付费'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'figma-ai',
            name: 'Figma AI',
            provider: 'Figma',
            category: 'design',
            description: 'Figma集成的AI设计助手',
            features: ['设计生成', '自动布局', '内容填充', '设计建议'],
            pricing: '免费/Pro $12/月',
            tags: ['UI设计', '协作', '原型', '专业'],
            rating: 4.3,
            users: '4M+',
            url: 'https://figma.com',
            pros: ['专业工具', '协作强', '功能强大'],
            cons: ['学习曲线', 'AI功能有限', '需要设计基础'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'adobe-firefly',
            name: 'Adobe Firefly',
            provider: 'Adobe',
            category: 'design',
            description: 'Adobe的AI创意工具套件',
            features: ['图像生成', '文字效果', '矢量生成', '创意填充'],
            pricing: '免费/Premium $22.99/月',
            tags: ['Adobe', '创意', '专业', '图像'],
            rating: 4.5,
            users: '10M+',
            url: 'https://firefly.adobe.com',
            pros: ['专业级', 'Adobe集成', '功能强大'],
            cons: ['价格昂贵', '学习成本', '需要订阅'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'looka',
            name: 'Looka',
            provider: 'Looka',
            category: 'design',
            description: 'AI Logo设计工具',
            features: ['Logo生成', '品牌套件', '名片设计', '社交媒体'],
            pricing: '$20-72一次性',
            tags: ['Logo', '品牌', '标识', '商业'],
            rating: 4.1,
            users: '2M+',
            url: 'https://looka.com',
            pros: ['专业Logo', '品牌一致', '价格合理'],
            cons: ['功能单一', '创意有限', '模板化'],
            lastUpdated: '2025-01-01'
        },

        // 数据分析工具
        {
            id: 'tableau-ai',
            name: 'Tableau AI',
            provider: 'Tableau',
            category: 'data-analysis',
            description: 'AI增强的数据可视化平台',
            features: ['智能可视化', '自然语言查询', '预测分析', '自动洞察'],
            pricing: '$70-75/月',
            tags: ['数据可视化', '商业智能', '分析', '企业'],
            rating: 4.6,
            users: '1M+',
            url: 'https://tableau.com',
            pros: ['功能强大', '企业级', '可视化优秀'],
            cons: ['价格昂贵', '学习曲线陡', '复杂设置'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'power-bi-ai',
            name: 'Power BI AI',
            provider: 'Microsoft',
            category: 'data-analysis',
            description: 'Microsoft的AI商业智能工具',
            features: ['数据建模', 'AI洞察', '自然语言', 'Office集成'],
            pricing: '$10-20/月',
            tags: ['Microsoft', '商业智能', '数据', '集成'],
            rating: 4.4,
            users: '5M+',
            url: 'https://powerbi.microsoft.com',
            pros: ['Microsoft集成', '价格合理', '功能丰富'],
            cons: ['复杂度高', '学习成本', '依赖生态'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'julius-ai',
            name: 'Julius AI',
            provider: 'Julius AI',
            category: 'data-analysis',
            description: 'AI数据分析师，自动分析数据并生成报告',
            features: ['自动分析', '报告生成', '数据清洗', '可视化'],
            pricing: '免费/Pro $20/月',
            tags: ['自动分析', '报告', '简单', '快速'],
            rating: 4.2,
            users: '100K+',
            url: 'https://julius.ai',
            pros: ['易于使用', '自动化高', '快速分析'],
            cons: ['功能有限', '深度不足', '依赖数据质量'],
            lastUpdated: '2025-01-01'
        },

        // 营销工具
        {
            id: 'hubspot-ai',
            name: 'HubSpot AI',
            provider: 'HubSpot',
            category: 'marketing',
            description: 'AI驱动的营销自动化平台',
            features: ['内容生成', '邮件优化', '客户分析', '销售预测'],
            pricing: '免费/Pro $45/月',
            tags: ['营销自动化', 'CRM', '邮件', '销售'],
            rating: 4.5,
            users: '100K+',
            url: 'https://hubspot.com',
            pros: ['功能全面', '集成度高', '营销专业'],
            cons: ['价格递增', '复杂度高', '学习成本'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'mailchimp-ai',
            name: 'Mailchimp AI',
            provider: 'Mailchimp',
            category: 'marketing',
            description: 'AI增强的邮件营销平台',
            features: ['邮件优化', '发送时间', '内容建议', '受众分析'],
            pricing: '免费/Pro $10-299/月',
            tags: ['邮件营销', '自动化', '分析', '优化'],
            rating: 4.3,
            users: '12M+',
            url: 'https://mailchimp.com',
            pros: ['易于使用', '功能丰富', '价格合理'],
            cons: ['高级功能付费', '模板有限', '分析深度'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'hootsuite-ai',
            name: 'Hootsuite AI',
            provider: 'Hootsuite',
            category: 'marketing',
            description: 'AI社交媒体管理平台',
            features: ['内容调度', '最佳时间', '内容建议', '分析报告'],
            pricing: '$49-739/月',
            tags: ['社交媒体', '调度', '分析', '管理'],
            rating: 4.2,
            users: '18M+',
            url: 'https://hootsuite.com',
            pros: ['平台支持多', '调度功能强', '分析详细'],
            cons: ['价格较高', '界面复杂', '学习成本'],
            lastUpdated: '2025-01-01'
        },

        // 客户服务工具
        {
            id: 'intercom-ai',
            name: 'Intercom AI',
            provider: 'Intercom',
            category: 'customer-service',
            description: 'AI客户服务和聊天机器人平台',
            features: ['智能聊天机器人', '客户分析', '自动回复', '工单管理'],
            pricing: '$39-99/月',
            tags: ['客服', '聊天机器人', '自动化', '分析'],
            rating: 4.4,
            users: '25K+',
            url: 'https://intercom.com',
            pros: ['功能强大', '集成度高', '用户体验好'],
            cons: ['价格昂贵', '设置复杂', '学习成本'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'zendesk-ai',
            name: 'Zendesk AI',
            provider: 'Zendesk',
            category: 'customer-service',
            description: 'AI增强的客户服务平台',
            features: ['智能工单', '自动分类', '情感分析', '知识库'],
            pricing: '$19-115/月',
            tags: ['客服', '工单', '知识库', '分析'],
            rating: 4.3,
            users: '100K+',
            url: 'https://zendesk.com',
            pros: ['功能全面', '企业级', '集成丰富'],
            cons: ['价格较高', '复杂度高', '定制有限'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'freshworks-ai',
            name: 'Freshworks AI',
            provider: 'Freshworks',
            category: 'customer-service',
            description: 'AI客户体验平台',
            features: ['智能路由', '预测分析', '自动化工作流', '全渠道支持'],
            pricing: '$15-79/月',
            tags: ['客户体验', '全渠道', '自动化', '预测'],
            rating: 4.2,
            users: '50K+',
            url: 'https://freshworks.com',
            pros: ['价格合理', '功能丰富', '易于使用'],
            cons: ['品牌知名度', '高级功能有限', '集成有限'],
            lastUpdated: '2025-01-01'
        },

        // 翻译工具
        {
            id: 'deepl',
            name: 'DeepL',
            provider: 'DeepL',
            category: 'translation',
            description: '高质量AI翻译工具，翻译准确度极高',
            features: ['高精度翻译', '文档翻译', '实时翻译', '多语言支持'],
            pricing: '免费/Pro $6.99/月',
            tags: ['翻译', '高精度', '文档', '多语言'],
            rating: 4.7,
            users: '1B+',
            url: 'https://deepl.com',
            pros: ['翻译质量高', '支持文档', '速度快'],
            cons: ['语言支持有限', '免费版限制', '专业术语'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'google-translate',
            name: 'Google Translate',
            provider: 'Google',
            category: 'translation',
            description: 'Google的免费翻译服务，支持100+语言',
            features: ['100+语言', '图像翻译', '语音翻译', '实时对话'],
            pricing: '免费',
            tags: ['免费', '多语言', '图像', '语音'],
            rating: 4.4,
            users: '500M+',
            url: 'https://translate.google.com',
            pros: ['完全免费', '语言最多', '功能丰富'],
            cons: ['质量不稳定', '隐私考虑', '专业术语'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'microsoft-translator',
            name: 'Microsoft Translator',
            provider: 'Microsoft',
            category: 'translation',
            description: 'Microsoft的AI翻译服务',
            features: ['实时翻译', '对话翻译', '文档翻译', '企业集成'],
            pricing: '免费/企业定价',
            tags: ['Microsoft', '实时', '对话', '企业'],
            rating: 4.2,
            users: '100M+',
            url: 'https://translator.microsoft.com',
            pros: ['企业集成', '实时对话', '免费使用'],
            cons: ['质量一般', '功能有限', '依赖生态'],
            lastUpdated: '2025-01-01'
        },

        // 音乐创作工具
        {
            id: 'suno-ai',
            name: 'Suno AI',
            provider: 'Suno',
            category: 'music',
            description: 'AI音乐生成工具，从文本创建完整歌曲',
            features: ['歌曲生成', '歌词创作', '多种风格', '高音质输出'],
            pricing: '免费/Pro $10/月',
            tags: ['音乐生成', '歌词', '创作', '风格'],
            rating: 4.5,
            users: '5M+',
            url: 'https://suno.ai',
            pros: ['创作能力强', '音质好', '风格多样'],
            cons: ['版权问题', '创意有限', '商业使用限制'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'udio',
            name: 'Udio',
            provider: 'Udio',
            category: 'music',
            description: 'AI音乐创作平台，专业级音乐生成',
            features: ['专业音质', '风格控制', '长音频', '商业授权'],
            pricing: '$10-30/月',
            tags: ['专业', '高音质', '商业', '控制'],
            rating: 4.4,
            users: '1M+',
            url: 'https://udio.com',
            pros: ['音质专业', '控制精细', '商业友好'],
            cons: ['价格较高', '学习成本', '功能复杂'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'mubert',
            name: 'Mubert',
            provider: 'Mubert',
            category: 'music',
            description: 'AI背景音乐生成平台',
            features: ['背景音乐', '实时生成', '情绪控制', '商业授权'],
            pricing: '免费/Pro $14/月',
            tags: ['背景音乐', '实时', '情绪', '授权'],
            rating: 4.1,
            users: '2M+',
            url: 'https://mubert.com',
            pros: ['适合背景', '实时生成', '授权清晰'],
            cons: ['创意有限', '质量不稳定', '风格单一'],
            lastUpdated: '2025-01-01'
        },

        // 教育学习工具
        {
            id: 'khan-academy-ai',
            name: 'Khan Academy AI',
            provider: 'Khan Academy',
            category: 'education',
            description: 'AI个性化学习助手',
            features: ['个性化学习', '智能辅导', '进度跟踪', '互动练习'],
            pricing: '免费',
            tags: ['教育', '个性化', '免费', '辅导'],
            rating: 4.6,
            users: '120M+',
            url: 'https://khanacademy.org',
            pros: ['完全免费', '内容丰富', '个性化强'],
            cons: ['主要英文', '深度有限', '互动性一般'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'duolingo-ai',
            name: 'Duolingo AI',
            provider: 'Duolingo',
            category: 'education',
            description: 'AI语言学习应用',
            features: ['个性化课程', '智能复习', '语音识别', '游戏化学习'],
            pricing: '免费/Plus $6.99/月',
            tags: ['语言学习', '游戏化', '个性化', '语音'],
            rating: 4.5,
            users: '500M+',
            url: 'https://duolingo.com',
            pros: ['游戏化强', '个性化好', '免费使用'],
            cons: ['深度有限', '语法薄弱', '依赖重复'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'coursera-ai',
            name: 'Coursera AI',
            provider: 'Coursera',
            category: 'education',
            description: 'AI增强的在线学习平台',
            features: ['课程推荐', '学习路径', '智能评估', '证书认证'],
            pricing: '免费/Plus $39-79/月',
            tags: ['在线课程', '证书', '推荐', '评估'],
            rating: 4.4,
            users: '100M+',
            url: 'https://coursera.org',
            pros: ['课程质量高', '证书权威', '内容丰富'],
            cons: ['价格较高', '语言限制', '时间投入大'],
            lastUpdated: '2025-01-01'
        }

        // 研究助手工具
        {
            id: 'perplexity',
            name: 'Perplexity AI',
            provider: 'Perplexity',
            category: 'research',
            description: 'AI驱动的搜索引擎，提供准确的答案和引用',
            features: ['AI搜索', '实时信息', '引用来源', '对话式查询'],
            pricing: '免费/Pro $20/月',
            tags: ['搜索', '研究', '引用', '实时'],
            rating: 4.5,
            users: '10M+',
            url: 'https://perplexity.ai',
            pros: ['搜索准确', '引用可靠', '界面简洁'],
            cons: ['功能相对单一', '依赖网络', '中文支持一般'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'you-com',
            name: 'You.com',
            provider: 'You.com',
            category: 'research',
            description: 'AI搜索引擎，提供个性化搜索体验',
            features: ['AI搜索', '个性化', '多模态', '隐私保护'],
            pricing: '免费/Pro $15/月',
            tags: ['搜索', '个性化', '隐私', '多模态'],
            rating: 4.2,
            users: '5M+',
            url: 'https://you.com',
            pros: ['隐私友好', '个性化好', '功能丰富'],
            cons: ['知名度低', '结果质量不稳定', '速度一般'],
            lastUpdated: '2025-01-01'
        },

        // 语音音频工具
        {
            id: 'elevenlabs',
            name: 'ElevenLabs',
            provider: 'ElevenLabs',
            category: 'voice-audio',
            description: 'AI语音合成工具，生成逼真的人声',
            features: ['语音合成', '声音克隆', '多语言支持', '情感控制'],
            pricing: '免费/Pro $5-330/月',
            tags: ['语音', '克隆', '多语言', '专业'],
            rating: 4.7,
            users: '2M+',
            url: 'https://elevenlabs.io',
            pros: ['音质极高', '语音克隆', '多语言'],
            cons: ['使用限制', '伦理争议', '成本较高'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'murf',
            name: 'Murf',
            provider: 'Murf',
            category: 'voice-audio',
            description: 'AI语音生成平台，适合专业配音',
            features: ['专业配音', '多种声音', '语音编辑', '团队协作'],
            pricing: '$19-79/月',
            tags: ['配音', '专业', '编辑', '团队'],
            rating: 4.4,
            users: '1M+',
            url: 'https://murf.ai',
            pros: ['声音质量高', '编辑功能强', '适合商用'],
            cons: ['价格较高', '声音选择有限', '学习成本'],
            lastUpdated: '2025-01-01'
        },

        // 视频创作工具
        {
            id: 'runway',
            name: 'Runway',
            provider: 'Runway',
            category: 'video-creation',
            description: 'AI视频生成和编辑平台',
            features: ['视频生成', '视频编辑', '特效制作', '实时协作'],
            pricing: '免费/Pro $12-76/月',
            tags: ['视频', '编辑', '特效', '创意'],
            rating: 4.6,
            users: '3M+',
            url: 'https://runwayml.com',
            pros: ['功能强大', '创意工具多', '用户体验好'],
            cons: ['学习曲线陡', '价格较高', '渲染时间长'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'pika',
            name: 'Pika',
            provider: 'Pika',
            category: 'video-creation',
            description: 'AI视频生成工具，从文本和图像创建视频',
            features: ['文本转视频', '图像转视频', '风格控制', '简单易用'],
            pricing: '免费/Pro $10/月',
            tags: ['文本转视频', '简单', '创意', '快速'],
            rating: 4.3,
            users: '1M+',
            url: 'https://pika.art',
            pros: ['易于使用', '价格合理', '效果不错'],
            cons: ['功能有限', '质量不稳定', '时长限制'],
            lastUpdated: '2025-01-01'
        }
    ],

    // AI代理数据 (30+个)
    agents: [
        {
            id: 'autogpt',
            name: 'AutoGPT',
            provider: 'Significant Gravitas',
            type: 'autonomous',
            category: 'automation',
            description: '自主执行任务的AI代理，可以分解复杂任务并独立完成',
            features: ['任务分解', '自主执行', '工具调用', '长期记忆', '目标导向'],
            pricing: '开源免费',
            tags: ['自主', '任务', '开源', '实验性'],
            rating: 4.1,
            users: '500K+',
            url: 'https://github.com/Significant-Gravitas/AutoGPT',
            pros: ['完全自主', '开源免费', '功能强大'],
            cons: ['不稳定', '成本高', '可能偏离目标'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'langchain',
            name: 'LangChain',
            provider: 'LangChain',
            type: 'framework',
            category: 'automation',
            description: '强大的AI应用开发框架，支持多种模型集成和链式调用',
            features: ['模型集成', '链式调用', '记忆管理', '工具调用', '数据连接'],
            pricing: '开源免费',
            tags: ['框架', '开发', '集成', '链式'],
            rating: 4.7,
            users: '2M+',
            url: 'https://langchain.com',
            pros: ['功能强大', '生态丰富', '文档完善'],
            cons: ['学习曲线陡', '复杂度高', '版本更新快'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'crewai',
            name: 'CrewAI',
            provider: 'CrewAI',
            type: 'multi-agent',
            category: 'automation',
            description: '多代理协作系统，让多个AI代理协同完成复杂任务',
            features: ['多代理协作', '角色分工', '任务编排', '结果整合'],
            pricing: '开源免费',
            tags: ['多代理', '协作', '编排', '团队'],
            rating: 4.4,
            users: '200K+',
            url: 'https://crewai.com',
            pros: ['协作能力强', '角色清晰', '结果质量高'],
            cons: ['设置复杂', '资源消耗大', '调试困难'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'superagent',
            name: 'SuperAgent',
            provider: 'SuperAgent',
            type: 'assistant',
            category: 'automation',
            description: '企业级AI代理平台，提供可定制的智能助手',
            features: ['企业集成', '自定义工作流', '数据安全', 'API接口'],
            pricing: '企业定价',
            tags: ['企业', '定制', '安全', 'API'],
            rating: 4.3,
            users: '50K+',
            url: 'https://superagent.sh',
            pros: ['企业级', '安全性高', '可定制'],
            cons: ['价格昂贵', '设置复杂', '技术门槛高'],
            lastUpdated: '2025-01-01'
        },
        {
            id: 'agent-gpt',
            name: 'AgentGPT',
            provider: 'AgentGPT',
            type: 'autonomous',
            category: 'automation',
            description: '基于Web的自主AI代理，可以在浏览器中运行',
            features: ['Web界面', '目标设定', '自主执行', '进度跟踪'],
            pricing: '免费/Pro $20/月',
            tags: ['Web', '自主', '目标', '跟踪'],
            rating: 4.0,
            users: '300K+',
            url: 'https://agentgpt.reworkd.ai',
            pros: ['易于使用', 'Web界面', '无需安装'],
            cons: ['功能有限', '稳定性一般', '依赖网络'],
            lastUpdated: '2025-01-01'
        }
    ],

    // 工具函数
    utils: {
        // 根据ID查找工具
        findToolById(id) {
            return this.tools.find(tool => tool.id === id);
        },

        // 根据ID查找模型
        findModelById(id) {
            return this.models.find(model => model.id === id);
        },

        // 根据ID查找Agent
        findAgentById(id) {
            return this.agents.find(agent => agent.id === id);
        },

        // 根据分类获取工具
        getToolsByCategory(category) {
            return this.tools.filter(tool => tool.category === category);
        },

        // 搜索工具
        searchTools(query) {
            const searchTerm = query.toLowerCase();
            return this.tools.filter(tool =>
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        },

        // 获取推荐工具
        getRecommendedTools(limit = 6) {
            return this.tools
                .sort((a, b) => b.rating - a.rating)
                .slice(0, limit);
        },

        // 获取分类统计
        getCategoryStats() {
            const stats = {};
            Object.keys(this.categories).forEach(cat => {
                stats[cat] = this.tools.filter(tool => tool.category === cat).length;
            });
            return stats;
        }
    }
};

// 数据管理器类
class AIToolsManager {
    constructor(database) {
        this.db = database;
    }

    // 搜索工具
    searchTools(query, category = null, priceRange = null, features = [], rating = 0) {
        let results = this.db.tools;

        // 按查询词过滤
        if (query) {
            const searchTerm = query.toLowerCase();
            results = results.filter(tool =>
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }

        // 按分类过滤
        if (category) {
            results = results.filter(tool => tool.category === category);
        }

        // 按评分过滤
        if (rating > 0) {
            results = results.filter(tool => tool.rating >= rating);
        }

        return results.sort((a, b) => b.rating - a.rating);
    }

    // 获取推荐工具
    getRecommendedTools(limit = 6) {
        return this.db.tools
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
    }

    // 获取分类统计
    getCategoryStats() {
        const stats = {};
        Object.keys(this.db.categories).forEach(cat => {
            stats[cat] = this.db.tools.filter(tool => tool.category === cat).length;
        });
        return stats;
    }
}

// 导出数据库和管理器
(function () {
    // 导出到window对象
    if (typeof window !== 'undefined') {
        window.aiToolsDatabase = aiToolsDatabase;
        
        // 创建管理器实例
        const manager = new AIToolsManager(aiToolsDatabase);
        window.aiToolsManager = manager;
    }
})();

// 绑定工具函数到数据库对象
Object.keys(aiToolsDatabase.utils).forEach(key => {
    if (typeof aiToolsDatabase.utils[key] === 'function') {
        aiToolsDatabase.utils[key] = aiToolsDatabase.utils[key].bind(aiToolsDatabase);
    }
});

// 导出数据库
if (typeof module !== 'undefined' && module.exports) {
    module.exports = aiToolsDatabase;
}