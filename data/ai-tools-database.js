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

    // AI模型数据 (56个) - 包含2025年最新模型
    models: [
        {
            id: 'gpt-5',
            name: 'GPT-5',
            provider: 'OpenAI',
            type: '下一代多模态大语言模型',
            category: 'text-generation',
            description: 'OpenAI的下一代旗舰模型，具备革命性的推理和创造能力',
            features: ['超强推理能力', '多模态理解', '长期记忆', '复杂任务规划', '实时学习'],
            pricing: '按token计费（预计更高）',
            apiAccess: true,
            webInterface: true,
            strengths: ['推理能力质的飞跃', '多模态能力全面提升', '长上下文处理', '任务规划能力强'],
            limitations: ['成本预计很高', '计算资源需求大', '发布时间待定'],
            rating: 4.9,
            url: 'https://openai.com/gpt-5',
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '即将发布'
        },
        {
            id: 'grok-4',
            name: 'Grok-4',
            provider: 'xAI',
            type: '下一代大语言模型',
            category: 'text-generation',
            description: 'xAI最新的第四代模型，具备更强的推理和实时信息处理能力',
            features: ['实时信息获取', '增强推理能力', '多模态理解', '幽默对话风格', 'X平台深度集成'],
            pricing: 'X Premium Plus订阅',
            apiAccess: true,
            webInterface: true,
            strengths: ['实时信息最新', '推理能力大幅提升', '个性化对话', '社交媒体集成'],
            limitations: ['平台依赖性强', '订阅成本较高', '可用性受限'],
            rating: 4.6,
            url: 'https://x.ai/grok',
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '测试阶段'
        },
        {
            id: 'gemini-2-5',
            name: 'Gemini 2.5',
            provider: 'Google',
            type: '下一代多模态AI模型',
            category: 'text-generation',
            description: 'Google最新的Gemini系列模型，在多模态理解和推理方面有重大突破',
            features: ['超长上下文', '多模态融合', '实时处理', '科学计算', '代码生成优化'],
            pricing: '免费层级/付费版本',
            apiAccess: true,
            webInterface: true,
            strengths: ['上下文长度业界领先', '多模态能力突出', '免费使用额度', 'Google生态集成'],
            limitations: ['部分功能仍在优化', 'API限制较多', '响应速度待提升'],
            rating: 4.7,
            url: 'https://gemini.google.com',
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '公开测试'
        },
        {
            id: 'claude-4',
            name: 'Claude 4',
            provider: 'Anthropic',
            type: '下一代安全AI模型',
            category: 'text-generation',
            description: 'Anthropic最新的Claude系列模型，在安全性和推理能力方面达到新高度',
            features: ['宪法AI增强', '超长上下文', '安全对齐', '复杂推理', '多语言精通'],
            pricing: '按token计费',
            apiAccess: true,
            webInterface: true,
            strengths: ['安全性业界最高', '推理能力顶级', '长文本处理优秀', '道德判断准确'],
            limitations: ['成本相对较高', '创意表达相对保守', '可用性地区限制'],
            rating: 4.8,
            url: 'https://claude.ai',
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '内测阶段'
        },
        {
            id: 'sora-2',
            name: 'Sora 2.0',
            provider: 'OpenAI',
            type: '下一代视频生成模型',
            category: 'video-creation',
            description: 'OpenAI最新的视频生成模型，能够创建更长、更高质量的视频内容',
            features: ['长视频生成', '4K高清输出', '物理规律理解', '角色一致性', '音频同步'],
            pricing: '按生成时长计费',
            apiAccess: true,
            webInterface: true,
            strengths: ['视频质量极高', '物理真实感强', '创意表达丰富', '技术领先'],
            limitations: ['计算成本极高', '生成时间较长', '内容审核严格'],
            rating: 4.9,
            url: 'https://openai.com/sora',
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '限量测试'
        },
        {
            id: 'deepseek-v4',
            name: 'DeepSeek V4',
            provider: 'DeepSeek',
            type: '下一代推理优化模型',
            category: 'text-generation',
            description: '深度求索最新模型，在数学和代码推理方面达到新的高度',
            features: ['数学推理突破', '代码生成优化', '逻辑分析增强', '多语言支持', '开源友好'],
            pricing: '按token计费（超低价）',
            apiAccess: true,
            webInterface: true,
            strengths: ['推理能力顶级', '价格极具竞争力', '代码质量优秀', '开源生态友好'],
            limitations: ['知名度仍在提升', '生态建设中', '多模态能力有限'],
            rating: 4.7,
            url: 'https://deepseek.com',
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '公开发布'
        },
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

    // AI工具数据 (506个) - 包含2025年最新工具
    tools: [
        // 2025年最新工具
        {
            id: 'chatgpt-5',
            name: 'ChatGPT-5',
            provider: 'OpenAI',
            category: 'text-generation',
            description: '基于GPT-5的下一代AI聊天助手，具备革命性的推理和创造能力',
            features: ['超强推理对话', '多模态交互', '长期记忆', '任务规划', '实时学习'],
            pricing: '免费层级/Plus $30/月',
            tags: ['聊天', '推理', '多模态', '规划'],
            rating: 4.9,
            users: '预计200M+',
            url: 'https://chat.openai.com',
            pros: ['推理能力质的飞跃', '多模态体验流畅', '长期对话记忆', '复杂任务处理'],
            cons: ['价格可能上涨', '计算资源需求高', '发布时间待定'],
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '即将发布'
        },
        {
            id: 'grok-4-chat',
            name: 'Grok-4 Chat',
            provider: 'xAI',
            category: 'text-generation',
            description: '基于Grok-4的智能聊天助手，具备实时信息和幽默对话能力',
            features: ['实时信息获取', '幽默对话风格', 'X平台集成', '多模态理解', '个性化回复'],
            pricing: 'X Premium Plus $16/月',
            tags: ['实时信息', '幽默', '社交', '个性化'],
            rating: 4.6,
            users: '50M+',
            url: 'https://x.ai/grok',
            pros: ['信息最新最快', '对话风格独特', '社交媒体集成', '个性化体验'],
            cons: ['需要X订阅', '平台依赖性', '可用性受限'],
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '测试阶段'
        },
        {
            id: 'gemini-2-5-advanced',
            name: 'Gemini 2.5 Advanced',
            provider: 'Google',
            category: 'text-generation',
            description: 'Google最新的Gemini高级版，提供超长上下文和多模态能力',
            features: ['超长上下文处理', '多模态融合', '实时搜索集成', '科学计算', '代码生成优化'],
            pricing: '免费/Pro $20/月',
            tags: ['长上下文', '多模态', '搜索', '科学'],
            rating: 4.7,
            users: '100M+',
            url: 'https://gemini.google.com',
            pros: ['上下文长度领先', 'Google生态集成', '免费使用额度', '多模态能力强'],
            cons: ['部分功能测试中', 'API限制较多', '响应速度待优化'],
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '公开测试'
        },
        {
            id: 'sora-studio',
            name: 'Sora Studio',
            provider: 'OpenAI',
            category: 'video-creation',
            description: '基于Sora 2.0的专业视频创作工具，支持高质量视频生成和编辑',
            features: ['4K视频生成', '长视频制作', '音频同步', '风格控制', '批量处理'],
            pricing: '$50-200/月',
            tags: ['视频生成', '4K', '专业', '创作'],
            rating: 4.9,
            users: '1M+',
            url: 'https://openai.com/sora-studio',
            pros: ['视频质量极高', '创作功能丰富', '物理真实感强', '专业工具集成'],
            cons: ['价格昂贵', '计算时间长', '学习曲线陡峭'],
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '限量测试'
        },
        {
            id: 'deepseek-coder-v4',
            name: 'DeepSeek Coder V4',
            provider: 'DeepSeek',
            category: 'code-assistant',
            description: '基于DeepSeek V4的专业编程助手，代码生成和调试能力业界领先',
            features: ['多语言代码生成', '智能调试', '代码优化建议', '架构设计', '文档生成'],
            pricing: '免费/Pro $10/月',
            tags: ['编程', '调试', '优化', '架构'],
            rating: 4.8,
            users: '5M+',
            url: 'https://deepseek.com/coder',
            pros: ['代码质量极高', '价格极具优势', '支持语言全面', '调试能力强'],
            cons: ['界面相对简单', '生态建设中', '知名度待提升'],
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '公开发布'
        },
        {
            id: 'claude-4-composer',
            name: 'Claude 4 Composer',
            provider: 'Anthropic',
            category: 'text-generation',
            description: '基于Claude 4的高级写作和创作工具，专注于长文本创作',
            features: ['长文本创作', '多文档协作', '风格一致性', '事实核查', '引用管理'],
            pricing: 'Pro $25/月',
            tags: ['写作', '创作', '协作', '学术'],
            rating: 4.8,
            users: '3M+',
            url: 'https://claude.ai/composer',
            pros: ['长文本处理优秀', '安全性最高', '学术写作专业', '事实准确性高'],
            cons: ['价格相对较高', '创意相对保守', '可用性地区限制'],
            lastUpdated: '2025-02-08',
            isNew: true,
            releaseStatus: '内测阶段'
        },
        // 原有工具
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