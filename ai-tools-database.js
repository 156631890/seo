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
        }
    ],

    // AI工具数据
    tools: [
        // 文本生成工具
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

        // 图像生成工具
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

        // 代码助手
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

        // 效率工具
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

        // 数据分析工具
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

        // 语音音频工具
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

        // 视频创作工具
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

        // 自动化工具
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

        // 设计工具
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
(function() {
  // 先创建管理器实例
  const manager = new AIToolsManager(aiToolsDatabase);
  
  // 导出到window对象
  window.aiToolsDatabase = aiToolsDatabase;
  window.aiToolsManager = manager;
  
  // 也导出为全局变量，但避免重复声明
  if (typeof aiToolsDatabase === 'undefined') {
    window.aiToolsDatabase = aiToolsDatabase;
  }
  if (typeof aiToolsManager === 'undefined') {
    window.aiToolsManager = manager;
  }
})();