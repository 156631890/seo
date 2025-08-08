// AI工具、模型和Agent数据库 - 2025年最新版本
const aiToolsDatabase = {
    // 工具分类 (15个)
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

    // 模型类型
    modelTypes: {
        'llm': { name: '大语言模型', description: '处理和生成文本的AI模型' },
        'multimodal': { name: '多模态模型', description: '处理文本、图像、音频等多种模态的AI模型' },
        'image': { name: '图像模型', description: '生成和处理图像的AI模型' },
        'audio': { name: '音频模型', description: '处理和生成音频的AI模型' },
        'video': { name: '视频模型', description: '处理和生成视频的AI模型' }
    },

    // Agent类型
    agentTypes: {
        'autonomous': { name: '自主代理', description: '能够独立执行任务的AI代理' },
        'assistant': { name: '助手代理', description: '辅助人类完成任务的AI代理' },
        'multi-agent': { name: '多代理系统', description: '多个AI代理协作完成任务的系统' },
        'specialized': { name: '专业领域代理', description: '针对特定领域优化的AI代理' }
    },

    // AI模型数据 (30个) - 包含2025年最新模型
    models: [
        {
                "id": "gpt-5",
                "name": "GPT-5",
                "provider": "OpenAI",
                "type": "下一代多模态大语言模型",
                "category": "text-generation",
                "description": "OpenAI的下一代旗舰模型，具备革命性的推理和创造能力",
                "features": [
                        "超强推理能力",
                        "多模态理解",
                        "长期记忆",
                        "复杂任务规划",
                        "实时学习"
                ],
                "pricing": "按token计费（预计更高）",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "推理能力质的飞跃",
                        "多模态能力全面提升",
                        "长上下文处理",
                        "任务规划能力强"
                ],
                "limitations": [
                        "成本预计很高",
                        "计算资源需求大",
                        "发布时间待定"
                ],
                "rating": 4.9,
                "url": "https://openai.com/gpt-5",
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "即将发布"
        },
        {
                "id": "grok-4",
                "name": "Grok-4",
                "provider": "xAI",
                "type": "下一代大语言模型",
                "category": "text-generation",
                "description": "xAI最新的第四代模型，具备更强的推理和实时信息处理能力",
                "features": [
                        "实时信息获取",
                        "增强推理能力",
                        "多模态理解",
                        "幽默对话风格",
                        "X平台深度集成"
                ],
                "pricing": "X Premium Plus订阅",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "实时信息最新",
                        "推理能力大幅提升",
                        "个性化对话",
                        "社交媒体集成"
                ],
                "limitations": [
                        "平台依赖性强",
                        "订阅成本较高",
                        "可用性受限"
                ],
                "rating": 4.6,
                "url": "https://x.ai/grok",
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "测试阶段"
        },
        {
                "id": "gemini-2-5",
                "name": "Gemini 2.5",
                "provider": "Google",
                "type": "下一代多模态AI模型",
                "category": "text-generation",
                "description": "Google最新的Gemini系列模型，在多模态理解和推理方面有重大突破",
                "features": [
                        "超长上下文",
                        "多模态融合",
                        "实时处理",
                        "科学计算",
                        "代码生成优化"
                ],
                "pricing": "免费层级/付费版本",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "上下文长度业界领先",
                        "多模态能力突出",
                        "免费使用额度",
                        "Google生态集成"
                ],
                "limitations": [
                        "部分功能仍在优化",
                        "API限制较多",
                        "响应速度待提升"
                ],
                "rating": 4.7,
                "url": "https://gemini.google.com",
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "公开测试"
        },
        {
                "id": "claude-4",
                "name": "Claude 4",
                "provider": "Anthropic",
                "type": "下一代安全AI模型",
                "category": "text-generation",
                "description": "Anthropic最新的Claude系列模型，在安全性和推理能力方面达到新高度",
                "features": [
                        "宪法AI增强",
                        "超长上下文",
                        "安全对齐",
                        "复杂推理",
                        "多语言精通"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "安全性业界最高",
                        "推理能力顶级",
                        "长文本处理优秀",
                        "道德判断准确"
                ],
                "limitations": [
                        "成本相对较高",
                        "创意表达相对保守",
                        "可用性地区限制"
                ],
                "rating": 4.8,
                "url": "https://claude.ai",
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "内测阶段"
        },
        {
                "id": "sora-2",
                "name": "Sora 2.0",
                "provider": "OpenAI",
                "type": "下一代视频生成模型",
                "category": "video-creation",
                "description": "OpenAI最新的视频生成模型，能够创建更长、更高质量的视频内容",
                "features": [
                        "长视频生成",
                        "4K高清输出",
                        "物理规律理解",
                        "角色一致性",
                        "音频同步"
                ],
                "pricing": "按生成时长计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "视频质量极高",
                        "物理真实感强",
                        "创意表达丰富",
                        "技术领先"
                ],
                "limitations": [
                        "计算成本极高",
                        "生成时间较长",
                        "内容审核严格"
                ],
                "rating": 4.9,
                "url": "https://openai.com/sora",
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "限量测试"
        },
        {
                "id": "deepseek-v4",
                "name": "DeepSeek V4",
                "provider": "DeepSeek",
                "type": "下一代推理优化模型",
                "category": "text-generation",
                "description": "深度求索最新模型，在数学和代码推理方面达到新的高度",
                "features": [
                        "数学推理突破",
                        "代码生成优化",
                        "逻辑分析增强",
                        "多语言支持",
                        "开源友好"
                ],
                "pricing": "按token计费（超低价）",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "推理能力顶级",
                        "价格极具竞争力",
                        "代码质量优秀",
                        "开源生态友好"
                ],
                "limitations": [
                        "知名度仍在提升",
                        "生态建设中",
                        "多模态能力有限"
                ],
                "rating": 4.7,
                "url": "https://deepseek.com",
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "公开发布"
        },
        {
                "id": "gpt-4o",
                "name": "GPT-4o",
                "provider": "OpenAI",
                "type": "多模态大语言模型",
                "category": "text-generation",
                "description": "OpenAI最新的多模态模型",
                "features": [
                        "文本生成",
                        "图像理解",
                        "代码编写",
                        "数学推理"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "推理能力强",
                        "多模态支持",
                        "代码能力优秀"
                ],
                "limitations": [
                        "成本较高",
                        "有使用限制"
                ],
                "rating": 4.8,
                "url": "https://openai.com/gpt-4o",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "gpt-4-turbo",
                "name": "GPT-4 Turbo",
                "provider": "OpenAI",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "GPT-4的优化版本，更快更便宜",
                "features": [
                        "文本生成",
                        "代码编写",
                        "分析推理",
                        "多语言"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "速度快",
                        "成本较低",
                        "性能稳定"
                ],
                "limitations": [
                        "上下文有限",
                        "知识截止"
                ],
                "rating": 4.7,
                "url": "https://openai.com/gpt-4",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "gpt-3-5-turbo",
                "name": "GPT-3.5 Turbo",
                "provider": "OpenAI",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "经济实惠的GPT模型",
                "features": [
                        "文本生成",
                        "对话交互",
                        "代码辅助",
                        "翻译"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "价格便宜",
                        "响应快速",
                        "易于使用"
                ],
                "limitations": [
                        "能力有限",
                        "推理较弱"
                ],
                "rating": 4.5,
                "url": "https://openai.com/gpt-3-5",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "o1-preview",
                "name": "OpenAI o1-preview",
                "provider": "OpenAI",
                "type": "推理优化模型",
                "category": "text-generation",
                "description": "专门优化推理能力的模型",
                "features": [
                        "深度推理",
                        "数学解题",
                        "科学分析",
                        "逻辑思考"
                ],
                "pricing": "按token计费（高价）",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "推理能力极强",
                        "数学优秀",
                        "逻辑清晰"
                ],
                "limitations": [
                        "成本极高",
                        "速度很慢",
                        "功能单一"
                ],
                "rating": 4.8,
                "url": "https://openai.com/o1",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "o1-mini",
                "name": "OpenAI o1-mini",
                "provider": "OpenAI",
                "type": "推理优化模型",
                "category": "text-generation",
                "description": "o1的轻量版本",
                "features": [
                        "推理能力",
                        "成本优化",
                        "数学解题",
                        "代码分析"
                ],
                "pricing": "按token计费（中等）",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "推理能力强",
                        "成本合理",
                        "速度适中"
                ],
                "limitations": [
                        "能力有限",
                        "仍然较慢",
                        "应用场景窄"
                ],
                "rating": 4.5,
                "url": "https://openai.com/o1",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "claude-3-5-sonnet",
                "name": "Claude 3.5 Sonnet",
                "provider": "Anthropic",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "Anthropic的高性能语言模型",
                "features": [
                        "长文本处理",
                        "代码分析",
                        "创意写作",
                        "逻辑推理"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "安全性高",
                        "长上下文",
                        "分析能力强"
                ],
                "limitations": [
                        "图像处理有限",
                        "可用性受限"
                ],
                "rating": 4.7,
                "url": "https://claude.ai",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "claude-3-opus",
                "name": "Claude 3 Opus",
                "provider": "Anthropic",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "Anthropic最强大的语言模型",
                "features": [
                        "复杂推理",
                        "创意写作",
                        "代码分析",
                        "多模态"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "推理能力顶级",
                        "安全性高",
                        "创意优秀"
                ],
                "limitations": [
                        "成本最高",
                        "速度较慢",
                        "可用性限制"
                ],
                "rating": 4.8,
                "url": "https://claude.ai",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "claude-3-5-haiku",
                "name": "Claude 3.5 Haiku",
                "provider": "Anthropic",
                "type": "快速响应模型",
                "category": "text-generation",
                "description": "Claude 3.5系列的快速版本",
                "features": [
                        "快速响应",
                        "成本优化",
                        "多模态",
                        "安全对话"
                ],
                "pricing": "按token计费（低成本）",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "响应极快",
                        "成本低",
                        "安全性高"
                ],
                "limitations": [
                        "能力相对有限",
                        "创意一般",
                        "推理较弱"
                ],
                "rating": 4.3,
                "url": "https://claude.ai",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "gemini-pro",
                "name": "Gemini Pro",
                "provider": "Google",
                "type": "多模态大语言模型",
                "category": "text-generation",
                "description": "Google的多模态AI模型",
                "features": [
                        "多模态理解",
                        "实时信息",
                        "代码生成",
                        "数学计算"
                ],
                "pricing": "免费/付费版本",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "免费使用",
                        "实时信息",
                        "多语言支持"
                ],
                "limitations": [
                        "响应速度一般",
                        "创意能力有限"
                ],
                "rating": 4.5,
                "url": "https://gemini.google.com",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "gemini-2-0-flash",
                "name": "Gemini 2.0 Flash",
                "provider": "Google",
                "type": "多模态模型",
                "category": "text-generation",
                "description": "Google最新的多模态模型",
                "features": [
                        "实时交互",
                        "多模态",
                        "快速响应",
                        "工具调用"
                ],
                "pricing": "免费/付费版本",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "实时能力",
                        "多模态强",
                        "免费使用"
                ],
                "limitations": [
                        "相对较新",
                        "稳定性待验证",
                        "功能待完善"
                ],
                "rating": 4.4,
                "url": "https://gemini.google.com",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "palm-2",
                "name": "PaLM 2",
                "provider": "Google",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "Google的Pathways Language Model第二代",
                "features": [
                        "多语言精通",
                        "推理能力",
                        "代码生成",
                        "数学计算"
                ],
                "pricing": "Google Cloud计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "多语言强",
                        "推理优秀",
                        "技术先进"
                ],
                "limitations": [
                        "主要API访问",
                        "成本较高",
                        "复杂部署"
                ],
                "rating": 4.6,
                "url": "https://cloud.google.com/vertex-ai",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "llama-3-1-405b",
                "name": "Llama 3.1 405B",
                "provider": "Meta",
                "type": "开源大语言模型",
                "category": "text-generation",
                "description": "Meta最大的开源语言模型",
                "features": [
                        "开源免费",
                        "多语言支持",
                        "代码生成",
                        "推理能力"
                ],
                "pricing": "开源免费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "完全开源",
                        "性能强大",
                        "可自部署"
                ],
                "limitations": [
                        "硬件要求高",
                        "部署复杂",
                        "商业限制"
                ],
                "rating": 4.6,
                "url": "https://llama.meta.com",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "llama-3-3-70b",
                "name": "Llama 3.3 70B",
                "provider": "Meta",
                "type": "开源大语言模型",
                "category": "text-generation",
                "description": "Meta最新的开源模型",
                "features": [
                        "开源免费",
                        "性能提升",
                        "多语言",
                        "工具调用"
                ],
                "pricing": "开源免费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "完全开源",
                        "性能优秀",
                        "部署灵活"
                ],
                "limitations": [
                        "硬件要求",
                        "部署复杂",
                        "商业限制"
                ],
                "rating": 4.6,
                "url": "https://llama.meta.com",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "qwen-2-5-72b",
                "name": "Qwen 2.5 72B",
                "provider": "阿里云",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "阿里云通义千问系列的最新模型",
                "features": [
                        "中文优化",
                        "代码生成",
                        "数学推理",
                        "多模态"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "中文能力强",
                        "本土化好",
                        "价格便宜"
                ],
                "limitations": [
                        "国际化程度低",
                        "英文能力一般",
                        "生态有限"
                ],
                "rating": 4.3,
                "url": "https://tongyi.aliyun.com",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "deepseek-v3",
                "name": "DeepSeek V3",
                "provider": "DeepSeek",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "深度求索的最新模型",
                "features": [
                        "推理能力强",
                        "代码生成",
                        "数学解题",
                        "逻辑分析"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "推理能力突出",
                        "代码质量高",
                        "价格实惠"
                ],
                "limitations": [
                        "知名度较低",
                        "生态建设中",
                        "多模态有限"
                ],
                "rating": 4.5,
                "url": "https://deepseek.com",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "yi-large",
                "name": "Yi Large",
                "provider": "零一万物",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "零一万物的大规模语言模型",
                "features": [
                        "长上下文",
                        "多语言",
                        "推理能力",
                        "代码生成"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "长上下文处理",
                        "性价比高",
                        "中文友好"
                ],
                "limitations": [
                        "市场份额小",
                        "生态待建设",
                        "国际化不足"
                ],
                "rating": 4.2,
                "url": "https://01.ai",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "ernie-4-0",
                "name": "文心一言 4.0",
                "provider": "百度",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "百度文心大模型4.0版本",
                "features": [
                        "中文优化",
                        "多模态",
                        "知识问答",
                        "创意写作"
                ],
                "pricing": "免费/付费版",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "中文能力顶级",
                        "知识丰富",
                        "本土化好"
                ],
                "limitations": [
                        "国际化不足",
                        "创新性一般",
                        "生态有限"
                ],
                "rating": 4.4,
                "url": "https://yiyan.baidu.com",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "doubao-pro",
                "name": "豆包 Pro",
                "provider": "字节跳动",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "字节跳动的大语言模型",
                "features": [
                        "对话交互",
                        "内容创作",
                        "代码生成",
                        "多模态"
                ],
                "pricing": "免费/会员版",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "产品集成好",
                        "用户体验佳",
                        "更新频繁"
                ],
                "limitations": [
                        "技术细节少",
                        "开放程度低",
                        "主要面向C端"
                ],
                "rating": 4.2,
                "url": "https://doubao.com",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "spark-3-5",
                "name": "讯飞星火 3.5",
                "provider": "科大讯飞",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "科大讯飞的多模态认知大模型",
                "features": [
                        "多模态理解",
                        "语音交互",
                        "图像理解",
                        "代码生成"
                ],
                "pricing": "免费/付费版",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "多模态强",
                        "语音优势",
                        "中文优秀"
                ],
                "limitations": [
                        "创新性一般",
                        "生态有限",
                        "国际化不足"
                ],
                "rating": 4.2,
                "url": "https://xinghuo.xfyun.cn",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "mistral-large",
                "name": "Mistral Large",
                "provider": "Mistral AI",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "欧洲领先的AI公司Mistral的旗舰模型",
                "features": [
                        "多语言优秀",
                        "推理能力",
                        "代码生成",
                        "函数调用"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "欧洲数据合规",
                        "多语言强",
                        "性价比高"
                ],
                "limitations": [
                        "生态较小",
                        "知名度低",
                        "功能待完善"
                ],
                "rating": 4.4,
                "url": "https://mistral.ai",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "mixtral-8x22b",
                "name": "Mixtral 8x22B",
                "provider": "Mistral AI",
                "type": "混合专家模型",
                "category": "text-generation",
                "description": "Mistral最大的混合专家模型",
                "features": [
                        "混合专家",
                        "高效推理",
                        "多语言",
                        "代码生成"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "效率高",
                        "性能强",
                        "多语言优秀"
                ],
                "limitations": [
                        "部署复杂",
                        "硬件要求",
                        "相对较新"
                ],
                "rating": 4.5,
                "url": "https://mistral.ai",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "grok-2",
                "name": "Grok-2",
                "provider": "xAI",
                "type": "大语言模型",
                "category": "text-generation",
                "description": "xAI的第二代模型",
                "features": [
                        "实时信息",
                        "图像理解",
                        "幽默对话",
                        "推理能力"
                ],
                "pricing": "X Premium订阅",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "实时信息",
                        "个性鲜明",
                        "图像能力"
                ],
                "limitations": [
                        "平台限制",
                        "可用性有限",
                        "成本较高"
                ],
                "rating": 4.3,
                "url": "https://x.ai",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "command-r-plus",
                "name": "Command R+",
                "provider": "Cohere",
                "type": "企业级模型",
                "category": "text-generation",
                "description": "Cohere最新的企业级语言模型",
                "features": [
                        "企业优化",
                        "RAG增强",
                        "工具调用",
                        "多语言"
                ],
                "pricing": "按token计费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "企业友好",
                        "RAG优秀",
                        "工具调用强"
                ],
                "limitations": [
                        "主要B2B",
                        "知名度低",
                        "生态有限"
                ],
                "rating": 4.4,
                "url": "https://cohere.com",
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "phi-4",
                "name": "Phi-4",
                "provider": "Microsoft",
                "type": "小型语言模型",
                "category": "text-generation",
                "description": "Microsoft的小型高效语言模型",
                "features": [
                        "小型高效",
                        "推理能力",
                        "数学优秀",
                        "代码生成"
                ],
                "pricing": "开源免费",
                "apiAccess": true,
                "webInterface": true,
                "strengths": [
                        "效率极高",
                        "推理强",
                        "资源需求低"
                ],
                "limitations": [
                        "参数较少",
                        "知识有限",
                        "应用场景窄"
                ],
                "rating": 4.5,
                "url": "https://huggingface.co/microsoft/phi-4",
                "lastUpdated": "2024-12-20"
        }
],

    // AI工具数据 (58个) - 包含2025年最新工具
    tools: [
        {
                "id": "chatgpt-5",
                "name": "ChatGPT-5",
                "provider": "OpenAI",
                "category": "text-generation",
                "description": "基于GPT-5的下一代AI聊天助手，具备革命性的推理和创造能力",
                "features": [
                        "超强推理对话",
                        "多模态交互",
                        "长期记忆",
                        "任务规划",
                        "实时学习"
                ],
                "pricing": "免费层级/Plus $30/月",
                "tags": [
                        "聊天",
                        "推理",
                        "多模态",
                        "规划"
                ],
                "rating": 4.9,
                "users": "预计200M+",
                "url": "https://chat.openai.com",
                "pros": [
                        "推理能力质的飞跃",
                        "多模态体验流畅",
                        "长期对话记忆",
                        "复杂任务处理"
                ],
                "cons": [
                        "价格可能上涨",
                        "计算资源需求高",
                        "发布时间待定"
                ],
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "即将发布"
        },
        {
                "id": "grok-4-chat",
                "name": "Grok-4 Chat",
                "provider": "xAI",
                "category": "text-generation",
                "description": "基于Grok-4的智能聊天助手，具备实时信息和幽默对话能力",
                "features": [
                        "实时信息获取",
                        "幽默对话风格",
                        "X平台集成",
                        "多模态理解",
                        "个性化回复"
                ],
                "pricing": "X Premium Plus $16/月",
                "tags": [
                        "实时信息",
                        "幽默",
                        "社交",
                        "个性化"
                ],
                "rating": 4.6,
                "users": "50M+",
                "url": "https://x.ai/grok",
                "pros": [
                        "信息最新最快",
                        "对话风格独特",
                        "社交媒体集成",
                        "个性化体验"
                ],
                "cons": [
                        "需要X订阅",
                        "平台依赖性",
                        "可用性受限"
                ],
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "测试阶段"
        },
        {
                "id": "gemini-2-5-advanced",
                "name": "Gemini 2.5 Advanced",
                "provider": "Google",
                "category": "text-generation",
                "description": "Google最新的Gemini高级版，提供超长上下文和多模态能力",
                "features": [
                        "超长上下文处理",
                        "多模态融合",
                        "实时搜索集成",
                        "科学计算",
                        "代码生成优化"
                ],
                "pricing": "免费/Pro $20/月",
                "tags": [
                        "长上下文",
                        "多模态",
                        "搜索",
                        "科学"
                ],
                "rating": 4.7,
                "users": "100M+",
                "url": "https://gemini.google.com",
                "pros": [
                        "上下文长度领先",
                        "Google生态集成",
                        "免费使用额度",
                        "多模态能力强"
                ],
                "cons": [
                        "部分功能测试中",
                        "API限制较多",
                        "响应速度待优化"
                ],
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "公开测试"
        },
        {
                "id": "sora-studio",
                "name": "Sora Studio",
                "provider": "OpenAI",
                "category": "video-creation",
                "description": "基于Sora 2.0的专业视频创作工具，支持高质量视频生成和编辑",
                "features": [
                        "4K视频生成",
                        "长视频制作",
                        "音频同步",
                        "风格控制",
                        "批量处理"
                ],
                "pricing": "$50-200/月",
                "tags": [
                        "视频生成",
                        "4K",
                        "专业",
                        "创作"
                ],
                "rating": 4.9,
                "users": "1M+",
                "url": "https://openai.com/sora-studio",
                "pros": [
                        "视频质量极高",
                        "创作功能丰富",
                        "物理真实感强",
                        "专业工具集成"
                ],
                "cons": [
                        "价格昂贵",
                        "计算时间长",
                        "学习曲线陡峭"
                ],
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "限量测试"
        },
        {
                "id": "deepseek-coder-v4",
                "name": "DeepSeek Coder V4",
                "provider": "DeepSeek",
                "category": "code-assistant",
                "description": "基于DeepSeek V4的专业编程助手，代码生成和调试能力业界领先",
                "features": [
                        "多语言代码生成",
                        "智能调试",
                        "代码优化建议",
                        "架构设计",
                        "文档生成"
                ],
                "pricing": "免费/Pro $10/月",
                "tags": [
                        "编程",
                        "调试",
                        "优化",
                        "架构"
                ],
                "rating": 4.8,
                "users": "5M+",
                "url": "https://deepseek.com/coder",
                "pros": [
                        "代码质量极高",
                        "价格极具优势",
                        "支持语言全面",
                        "调试能力强"
                ],
                "cons": [
                        "界面相对简单",
                        "生态建设中",
                        "知名度待提升"
                ],
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "公开发布"
        },
        {
                "id": "claude-4-composer",
                "name": "Claude 4 Composer",
                "provider": "Anthropic",
                "category": "text-generation",
                "description": "基于Claude 4的高级写作和创作工具，专注于长文本创作",
                "features": [
                        "长文本创作",
                        "多文档协作",
                        "风格一致性",
                        "事实核查",
                        "引用管理"
                ],
                "pricing": "Pro $25/月",
                "tags": [
                        "写作",
                        "创作",
                        "协作",
                        "学术"
                ],
                "rating": 4.8,
                "users": "3M+",
                "url": "https://claude.ai/composer",
                "pros": [
                        "长文本处理优秀",
                        "安全性最高",
                        "学术写作专业",
                        "事实准确性高"
                ],
                "cons": [
                        "价格相对较高",
                        "创意相对保守",
                        "可用性地区限制"
                ],
                "lastUpdated": "2025-02-08",
                "isNew": true,
                "releaseStatus": "内测阶段"
        },
        {
                "id": "chatgpt",
                "name": "ChatGPT",
                "provider": "OpenAI",
                "category": "text-generation",
                "description": "最受欢迎的AI聊天机器人",
                "features": [
                        "对话交互",
                        "文本生成",
                        "代码编写",
                        "翻译"
                ],
                "pricing": "免费/Plus $20/月",
                "tags": [
                        "聊天",
                        "写作",
                        "编程"
                ],
                "rating": 4.8,
                "users": "100M+",
                "url": "https://chat.openai.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "claude",
                "name": "Claude",
                "provider": "Anthropic",
                "category": "text-generation",
                "description": "Anthropic开发的AI助手",
                "features": [
                        "长文本处理",
                        "代码分析",
                        "创意写作"
                ],
                "pricing": "免费/Pro $20/月",
                "tags": [
                        "聊天",
                        "分析",
                        "写作"
                ],
                "rating": 4.7,
                "users": "10M+",
                "url": "https://claude.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "jasper",
                "name": "Jasper",
                "provider": "Jasper AI",
                "category": "text-generation",
                "description": "专业的AI内容创作平台",
                "features": [
                        "营销文案",
                        "博客写作",
                        "社交媒体"
                ],
                "pricing": "$39-125/月",
                "tags": [
                        "营销",
                        "文案",
                        "博客"
                ],
                "rating": 4.5,
                "users": "1M+",
                "url": "https://jasper.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "copy-ai",
                "name": "Copy.ai",
                "provider": "Copy.ai",
                "category": "text-generation",
                "description": "AI文案生成工具",
                "features": [
                        "广告文案",
                        "产品描述",
                        "邮件模板"
                ],
                "pricing": "免费/Pro $36/月",
                "tags": [
                        "文案",
                        "营销",
                        "广告"
                ],
                "rating": 4.3,
                "users": "2M+",
                "url": "https://copy.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "writesonic",
                "name": "Writesonic",
                "provider": "Writesonic",
                "category": "text-generation",
                "description": "AI写作助手",
                "features": [
                        "文章写作",
                        "SEO优化",
                        "广告文案"
                ],
                "pricing": "免费/Pro $12.67/月",
                "tags": [
                        "写作",
                        "SEO",
                        "内容营销"
                ],
                "rating": 4.4,
                "users": "1.5M+",
                "url": "https://writesonic.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "rytr",
                "name": "Rytr",
                "provider": "Rytr",
                "category": "text-generation",
                "description": "经济实惠的AI写作工具",
                "features": [
                        "博客写作",
                        "邮件营销",
                        "社交媒体"
                ],
                "pricing": "免费/Premium $9/月",
                "tags": [
                        "写作",
                        "经济实惠",
                        "多用途"
                ],
                "rating": 4.2,
                "users": "800K+",
                "url": "https://rytr.me",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "wordtune",
                "name": "Wordtune",
                "provider": "AI21 Labs",
                "category": "text-generation",
                "description": "AI文本改写和优化工具",
                "features": [
                        "文本改写",
                        "语调调整",
                        "长度控制"
                ],
                "pricing": "免费/Premium $9.99/月",
                "tags": [
                        "改写",
                        "优化",
                        "语法"
                ],
                "rating": 4.6,
                "users": "3M+",
                "url": "https://wordtune.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "quillbot",
                "name": "QuillBot",
                "provider": "QuillBot",
                "category": "text-generation",
                "description": "AI释义和写作工具",
                "features": [
                        "文本释义",
                        "语法检查",
                        "抄袭检测"
                ],
                "pricing": "免费/Premium $4.17/月",
                "tags": [
                        "释义",
                        "语法",
                        "学术"
                ],
                "rating": 4.5,
                "users": "50M+",
                "url": "https://quillbot.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "character-ai",
                "name": "Character.AI",
                "provider": "Character Technologies",
                "category": "text-generation",
                "description": "创建和对话AI角色的平台",
                "features": [
                        "角色创建",
                        "个性化对话",
                        "情感交互"
                ],
                "pricing": "免费/Plus $9.99/月",
                "tags": [
                        "角色",
                        "对话",
                        "娱乐"
                ],
                "rating": 4.4,
                "users": "20M+",
                "url": "https://character.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "poe-by-quora",
                "name": "Poe by Quora",
                "provider": "Quora",
                "category": "text-generation",
                "description": "Quora的AI聊天平台",
                "features": [
                        "多模型访问",
                        "自定义机器人",
                        "订阅制"
                ],
                "pricing": "免费/订阅 $19.99/月",
                "tags": [
                        "多模型",
                        "聊天",
                        "订阅"
                ],
                "rating": 4.2,
                "users": "8M+",
                "url": "https://poe.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "huggingface-chat",
                "name": "Hugging Face Chat",
                "provider": "Hugging Face",
                "category": "text-generation",
                "description": "开源AI模型聊天平台",
                "features": [
                        "开源模型",
                        "免费使用",
                        "社区驱动"
                ],
                "pricing": "免费",
                "tags": [
                        "开源",
                        "免费",
                        "社区"
                ],
                "rating": 4.3,
                "users": "5M+",
                "url": "https://huggingface.co/chat",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "bard",
                "name": "Bard",
                "provider": "Google",
                "category": "text-generation",
                "description": "Google的AI聊天助手",
                "features": [
                        "实时信息",
                        "多语言支持",
                        "搜索集成"
                ],
                "pricing": "免费",
                "tags": [
                        "搜索",
                        "实时",
                        "多语言"
                ],
                "rating": 4.1,
                "users": "50M+",
                "url": "https://bard.google.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "bing-chat",
                "name": "Bing Chat",
                "provider": "Microsoft",
                "category": "text-generation",
                "description": "微软的AI聊天助手",
                "features": [
                        "搜索集成",
                        "图像生成",
                        "实时信息"
                ],
                "pricing": "免费",
                "tags": [
                        "搜索",
                        "集成",
                        "实时"
                ],
                "rating": 4,
                "users": "30M+",
                "url": "https://bing.com/chat",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "perplexity",
                "name": "Perplexity AI",
                "provider": "Perplexity",
                "category": "research",
                "description": "AI驱动的搜索引擎",
                "features": [
                        "AI搜索",
                        "实时信息",
                        "引用来源"
                ],
                "pricing": "免费/Pro $20/月",
                "tags": [
                        "搜索",
                        "研究",
                        "引用"
                ],
                "rating": 4.5,
                "users": "10M+",
                "url": "https://perplexity.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "you-com",
                "name": "You.com",
                "provider": "You.com",
                "category": "research",
                "description": "AI驱动的搜索引擎和聊天助手",
                "features": [
                        "AI搜索",
                        "聊天模式",
                        "代码生成"
                ],
                "pricing": "免费/Pro $15/月",
                "tags": [
                        "搜索",
                        "聊天",
                        "多功能"
                ],
                "rating": 4.3,
                "users": "5M+",
                "url": "https://you.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "midjourney",
                "name": "Midjourney",
                "provider": "Midjourney Inc.",
                "category": "image-generation",
                "description": "顶级AI图像生成工具",
                "features": [
                        "文本到图像",
                        "图像编辑",
                        "风格控制"
                ],
                "pricing": "$10-60/月",
                "tags": [
                        "绘画",
                        "艺术",
                        "设计"
                ],
                "rating": 4.9,
                "users": "20M+",
                "url": "https://midjourney.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "dalle-3",
                "name": "DALL-E 3",
                "provider": "OpenAI",
                "category": "image-generation",
                "description": "OpenAI最新的图像生成模型",
                "features": [
                        "文本到图像",
                        "图像编辑",
                        "风格多样"
                ],
                "pricing": "ChatGPT Plus $20/月",
                "tags": [
                        "绘画",
                        "AI艺术",
                        "创意"
                ],
                "rating": 4.6,
                "users": "50M+",
                "url": "https://openai.com/dall-e-3",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "stable-diffusion",
                "name": "Stable Diffusion",
                "provider": "Stability AI",
                "category": "image-generation",
                "description": "开源的图像生成模型",
                "features": [
                        "开源免费",
                        "本地部署",
                        "高度定制"
                ],
                "pricing": "免费/云服务付费",
                "tags": [
                        "开源",
                        "本地",
                        "定制"
                ],
                "rating": 4.4,
                "users": "5M+",
                "url": "https://stability.ai/stable-diffusion",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "leonardo-ai",
                "name": "Leonardo.AI",
                "provider": "Leonardo.AI",
                "category": "image-generation",
                "description": "专注于游戏和创意资产的AI图像生成",
                "features": [
                        "游戏资产",
                        "角色设计",
                        "场景生成"
                ],
                "pricing": "免费/付费 $10-48/月",
                "tags": [
                        "游戏",
                        "角色",
                        "场景"
                ],
                "rating": 4.6,
                "users": "2M+",
                "url": "https://leonardo.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "adobe-firefly",
                "name": "Adobe Firefly",
                "provider": "Adobe",
                "category": "image-generation",
                "description": "Adobe的AI图像生成工具",
                "features": [
                        "文字效果",
                        "图像填充",
                        "颜色变换"
                ],
                "pricing": "免费/Creative Cloud订阅",
                "tags": [
                        "Adobe",
                        "创意",
                        "专业"
                ],
                "rating": 4.5,
                "users": "10M+",
                "url": "https://firefly.adobe.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "ideogram",
                "name": "Ideogram",
                "provider": "Ideogram",
                "category": "image-generation",
                "description": "AI图像生成工具，擅长文字渲染",
                "features": [
                        "文字渲染",
                        "Logo设计",
                        "海报制作"
                ],
                "pricing": "免费/Plus $7/月",
                "tags": [
                        "文字",
                        "Logo",
                        "海报"
                ],
                "rating": 4.3,
                "users": "1M+",
                "url": "https://ideogram.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "flux-ai",
                "name": "Flux AI",
                "provider": "Black Forest Labs",
                "category": "image-generation",
                "description": "新兴的开源图像生成模型",
                "features": [
                        "开源模型",
                        "高质量生成",
                        "快速渲染"
                ],
                "pricing": "免费/云服务付费",
                "tags": [
                        "开源",
                        "高质量",
                        "快速"
                ],
                "rating": 4.7,
                "users": "500K+",
                "url": "https://blackforestlabs.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "artbreeder",
                "name": "Artbreeder",
                "provider": "Artbreeder",
                "category": "image-generation",
                "description": "AI图像混合和生成平台",
                "features": [
                        "图像混合",
                        "风格迁移",
                        "角色生成"
                ],
                "pricing": "免费/Pro $8.99/月",
                "tags": [
                        "混合",
                        "协作",
                        "角色"
                ],
                "rating": 4.2,
                "users": "3M+",
                "url": "https://artbreeder.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "canva-ai",
                "name": "Canva AI",
                "provider": "Canva",
                "category": "design",
                "description": "Canva集成的AI设计工具",
                "features": [
                        "设计模板",
                        "AI生成",
                        "品牌工具"
                ],
                "pricing": "免费/Pro $12.99/月",
                "tags": [
                        "设计",
                        "模板",
                        "品牌"
                ],
                "rating": 4.4,
                "users": "100M+",
                "url": "https://canva.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "figma-ai",
                "name": "Figma AI",
                "provider": "Figma",
                "category": "design",
                "description": "Figma的AI设计助手",
                "features": [
                        "设计生成",
                        "自动布局",
                        "内容填充"
                ],
                "pricing": "免费/付费版",
                "tags": [
                        "设计",
                        "协作",
                        "UI/UX"
                ],
                "rating": 4.3,
                "users": "50M+",
                "url": "https://figma.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "github-copilot",
                "name": "GitHub Copilot",
                "provider": "GitHub/OpenAI",
                "category": "code-assistant",
                "description": "AI代码助手",
                "features": [
                        "代码自动完成",
                        "函数生成",
                        "注释生成"
                ],
                "pricing": "$10/月",
                "tags": [
                        "编程",
                        "IDE",
                        "自动完成"
                ],
                "rating": 4.6,
                "users": "5M+",
                "url": "https://github.com/features/copilot",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "cursor",
                "name": "Cursor",
                "provider": "Anysphere",
                "category": "code-assistant",
                "description": "专为AI设计的代码编辑器",
                "features": [
                        "AI聊天",
                        "代码生成",
                        "重构建议"
                ],
                "pricing": "免费/Pro $20/月",
                "tags": [
                        "编辑器",
                        "AI编程",
                        "聊天"
                ],
                "rating": 4.5,
                "users": "500K+",
                "url": "https://cursor.sh",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "codeium",
                "name": "Codeium",
                "provider": "Codeium",
                "category": "code-assistant",
                "description": "免费的AI代码助手",
                "features": [
                        "代码补全",
                        "聊天助手",
                        "代码解释"
                ],
                "pricing": "免费/团队版付费",
                "tags": [
                        "免费",
                        "代码补全",
                        "多IDE"
                ],
                "rating": 4.3,
                "users": "1M+",
                "url": "https://codeium.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "tabnine",
                "name": "Tabnine",
                "provider": "Tabnine",
                "category": "code-assistant",
                "description": "AI代码补全工具",
                "features": [
                        "智能补全",
                        "本地部署",
                        "团队训练"
                ],
                "pricing": "免费/Pro $12/月",
                "tags": [
                        "补全",
                        "本地",
                        "隐私"
                ],
                "rating": 4.4,
                "users": "1M+",
                "url": "https://tabnine.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "amazon-codewhisperer",
                "name": "Amazon CodeWhisperer",
                "provider": "Amazon",
                "category": "code-assistant",
                "description": "AWS的AI代码助手",
                "features": [
                        "代码生成",
                        "AWS集成",
                        "安全扫描"
                ],
                "pricing": "免费/Professional $19/月",
                "tags": [
                        "AWS",
                        "企业",
                        "安全"
                ],
                "rating": 4.2,
                "users": "500K+",
                "url": "https://aws.amazon.com/codewhisperer",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "replit-ghostwriter",
                "name": "Replit Ghostwriter",
                "provider": "Replit",
                "category": "code-assistant",
                "description": "Replit的AI编程助手",
                "features": [
                        "代码补全",
                        "代码解释",
                        "错误修复"
                ],
                "pricing": "免费/Hacker $7/月",
                "tags": [
                        "在线",
                        "协作",
                        "学习"
                ],
                "rating": 4.1,
                "users": "20M+",
                "url": "https://replit.com/ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "sourcegraph-cody",
                "name": "Sourcegraph Cody",
                "provider": "Sourcegraph",
                "category": "code-assistant",
                "description": "AI代码助手和搜索工具",
                "features": [
                        "代码搜索",
                        "上下文理解",
                        "代码解释"
                ],
                "pricing": "免费/Pro $9/月",
                "tags": [
                        "搜索",
                        "理解",
                        "重构"
                ],
                "rating": 4.3,
                "users": "100K+",
                "url": "https://sourcegraph.com/cody",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "phind",
                "name": "Phind",
                "provider": "Phind",
                "category": "code-assistant",
                "description": "面向开发者的AI搜索引擎",
                "features": [
                        "代码搜索",
                        "技术问答",
                        "实时信息"
                ],
                "pricing": "免费/Pro $20/月",
                "tags": [
                        "搜索",
                        "开发者",
                        "技术"
                ],
                "rating": 4.3,
                "users": "1M+",
                "url": "https://phind.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "notion-ai",
                "name": "Notion AI",
                "provider": "Notion",
                "category": "productivity",
                "description": "Notion内置的AI助手",
                "features": [
                        "文档写作",
                        "内容总结",
                        "翻译"
                ],
                "pricing": "$10/月",
                "tags": [
                        "笔记",
                        "写作",
                        "总结"
                ],
                "rating": 4.4,
                "users": "30M+",
                "url": "https://notion.so/product/ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "grammarly",
                "name": "Grammarly",
                "provider": "Grammarly Inc.",
                "category": "productivity",
                "description": "AI写作助手",
                "features": [
                        "语法检查",
                        "拼写纠正",
                        "写作建议"
                ],
                "pricing": "免费/Premium $12/月",
                "tags": [
                        "语法",
                        "写作",
                        "校对"
                ],
                "rating": 4.5,
                "users": "30M+",
                "url": "https://grammarly.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "otter-ai",
                "name": "Otter.ai",
                "provider": "Otter.ai",
                "category": "productivity",
                "description": "AI会议转录和笔记工具",
                "features": [
                        "实时转录",
                        "会议总结",
                        "关键词提取"
                ],
                "pricing": "免费/Pro $8.33/月",
                "tags": [
                        "会议",
                        "转录",
                        "总结"
                ],
                "rating": 4.3,
                "users": "2M+",
                "url": "https://otter.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "superhuman",
                "name": "Superhuman",
                "provider": "Superhuman",
                "category": "productivity",
                "description": "AI增强的邮件客户端",
                "features": [
                        "智能分类",
                        "快速回复",
                        "邮件调度"
                ],
                "pricing": "$30/月",
                "tags": [
                        "邮件",
                        "效率",
                        "智能"
                ],
                "rating": 4.6,
                "users": "100K+",
                "url": "https://superhuman.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "reclaim-ai",
                "name": "Reclaim.ai",
                "provider": "Reclaim.ai",
                "category": "productivity",
                "description": "AI时间管理和调度工具",
                "features": [
                        "智能调度",
                        "习惯跟踪",
                        "专注时间"
                ],
                "pricing": "免费/Pro $8/月",
                "tags": [
                        "时间管理",
                        "调度",
                        "习惯"
                ],
                "rating": 4.4,
                "users": "500K+",
                "url": "https://reclaim.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "clockify",
                "name": "Clockify",
                "provider": "COING Inc.",
                "category": "productivity",
                "description": "时间跟踪和项目管理工具",
                "features": [
                        "自动跟踪",
                        "项目分类",
                        "报告生成"
                ],
                "pricing": "免费/Pro $3.99/月",
                "tags": [
                        "时间跟踪",
                        "项目",
                        "报告"
                ],
                "rating": 4.2,
                "users": "5M+",
                "url": "https://clockify.me",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "calendly",
                "name": "Calendly",
                "provider": "Calendly",
                "category": "productivity",
                "description": "AI增强的日程安排工具",
                "features": [
                        "智能调度",
                        "会议优化",
                        "自动提醒"
                ],
                "pricing": "免费/付费版",
                "tags": [
                        "调度",
                        "会议",
                        "自动化"
                ],
                "rating": 4.5,
                "users": "10M+",
                "url": "https://calendly.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "elevenlabs",
                "name": "ElevenLabs",
                "provider": "ElevenLabs",
                "category": "voice-audio",
                "description": "AI语音合成工具",
                "features": [
                        "语音合成",
                        "声音克隆",
                        "多语言支持"
                ],
                "pricing": "免费/Pro $5-330/月",
                "tags": [
                        "语音",
                        "克隆",
                        "多语言"
                ],
                "rating": 4.7,
                "users": "2M+",
                "url": "https://elevenlabs.io",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "murf-ai",
                "name": "Murf AI",
                "provider": "Murf",
                "category": "voice-audio",
                "description": "AI语音合成和配音工具",
                "features": [
                        "语音合成",
                        "多种声音",
                        "情感控制"
                ],
                "pricing": "免费/Pro $19-79/月",
                "tags": [
                        "语音",
                        "配音",
                        "合成"
                ],
                "rating": 4.2,
                "users": "1M+",
                "url": "https://murf.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "speechify",
                "name": "Speechify",
                "provider": "Speechify",
                "category": "voice-audio",
                "description": "AI文本转语音工具",
                "features": [
                        "文本转语音",
                        "速度控制",
                        "多语言"
                ],
                "pricing": "免费/Premium $11.58/月",
                "tags": [
                        "TTS",
                        "阅读",
                        "学习"
                ],
                "rating": 4.4,
                "users": "20M+",
                "url": "https://speechify.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "descript",
                "name": "Descript",
                "provider": "Descript",
                "category": "voice-audio",
                "description": "AI音频和视频编辑工具",
                "features": [
                        "音频编辑",
                        "转录",
                        "语音克隆"
                ],
                "pricing": "免费/Creator $12/月",
                "tags": [
                        "音频",
                        "编辑",
                        "转录"
                ],
                "rating": 4.5,
                "users": "1M+",
                "url": "https://descript.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "resemble-ai",
                "name": "Resemble AI",
                "provider": "Resemble AI",
                "category": "voice-audio",
                "description": "AI语音克隆和合成平台",
                "features": [
                        "语音克隆",
                        "实时合成",
                        "API集成"
                ],
                "pricing": "按使用付费",
                "tags": [
                        "克隆",
                        "实时",
                        "API"
                ],
                "rating": 4.3,
                "users": "500K+",
                "url": "https://resemble.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "runway-ml",
                "name": "Runway ML",
                "provider": "Runway",
                "category": "video-creation",
                "description": "AI视频生成和编辑平台",
                "features": [
                        "视频生成",
                        "图像到视频",
                        "视频编辑"
                ],
                "pricing": "免费/Pro $12-76/月",
                "tags": [
                        "视频",
                        "生成",
                        "编辑"
                ],
                "rating": 4.4,
                "users": "1M+",
                "url": "https://runwayml.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "synthesia",
                "name": "Synthesia",
                "provider": "Synthesia",
                "category": "video-creation",
                "description": "AI虚拟人视频生成平台",
                "features": [
                        "虚拟人生成",
                        "多语言配音",
                        "自定义角色"
                ],
                "pricing": "$30-90/月",
                "tags": [
                        "虚拟人",
                        "视频",
                        "配音"
                ],
                "rating": 4.3,
                "users": "500K+",
                "url": "https://synthesia.io",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "pika-labs",
                "name": "Pika Labs",
                "provider": "Pika Labs",
                "category": "video-creation",
                "description": "AI视频生成工具",
                "features": [
                        "文本到视频",
                        "图像到视频",
                        "视频编辑"
                ],
                "pricing": "免费/付费版",
                "tags": [
                        "视频生成",
                        "创意",
                        "简单"
                ],
                "rating": 4.2,
                "users": "2M+",
                "url": "https://pika.art",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "luma-ai",
                "name": "Luma AI",
                "provider": "Luma AI",
                "category": "video-creation",
                "description": "AI 3D和视频生成工具",
                "features": [
                        "3D捕获",
                        "视频生成",
                        "AR/VR"
                ],
                "pricing": "免费/Pro版",
                "tags": [
                        "3D",
                        "AR",
                        "视频"
                ],
                "rating": 4.1,
                "users": "800K+",
                "url": "https://lumalabs.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "suno-ai",
                "name": "Suno AI",
                "provider": "Suno",
                "category": "music",
                "description": "AI音乐创作工具",
                "features": [
                        "歌曲生成",
                        "歌词创作",
                        "多种风格"
                ],
                "pricing": "免费/Pro $10/月",
                "tags": [
                        "歌曲",
                        "歌词",
                        "创作"
                ],
                "rating": 4.5,
                "users": "5M+",
                "url": "https://suno.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "udio",
                "name": "Udio",
                "provider": "Udio",
                "category": "music",
                "description": "新兴的AI音乐生成平台",
                "features": [
                        "音乐生成",
                        "风格控制",
                        "歌词支持"
                ],
                "pricing": "免费/付费版",
                "tags": [
                        "音乐",
                        "新兴",
                        "质量"
                ],
                "rating": 4.4,
                "users": "500K+",
                "url": "https://udio.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "mubert",
                "name": "Mubert",
                "provider": "Mubert",
                "category": "music",
                "description": "AI音乐生成平台",
                "features": [
                        "音乐生成",
                        "风格选择",
                        "时长控制"
                ],
                "pricing": "免费/Pro $14-199/月",
                "tags": [
                        "音乐",
                        "生成",
                        "商业"
                ],
                "rating": 4.3,
                "users": "1M+",
                "url": "https://mubert.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "效果良好"
                ],
                "cons": [
                        "需要学习",
                        "可能有限制",
                        "依赖网络"
                ],
                "lastUpdated": "2024-12-20"
        }
],

    // AI Agent数据 (29个) - 占位符，将在后续脚本中填充
    agents: [
        {
                "id": "autogpt",
                "name": "AutoGPT",
                "provider": "Significant Gravitas",
                "type": "autonomous",
                "category": "automation",
                "description": "自主执行任务的AI代理",
                "features": [
                        "任务分解",
                        "自主执行",
                        "工具调用",
                        "长期记忆"
                ],
                "pricing": "开源免费",
                "tags": [
                        "自主",
                        "任务",
                        "开源"
                ],
                "rating": 4.1,
                "users": "500K+",
                "url": "https://github.com/Significant-Gravitas/AutoGPT",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "babyagi",
                "name": "BabyAGI",
                "provider": "Yohei Nakajima",
                "type": "autonomous",
                "category": "automation",
                "description": "轻量级的自主任务执行代理",
                "features": [
                        "任务规划",
                        "优先级管理",
                        "结果评估",
                        "循环执行"
                ],
                "pricing": "开源免费",
                "tags": [
                        "轻量",
                        "简单",
                        "教育"
                ],
                "rating": 4,
                "users": "200K+",
                "url": "https://github.com/yoheinakajima/babyagi",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "agentgpt",
                "name": "AgentGPT",
                "provider": "AgentGPT Team",
                "type": "autonomous",
                "category": "automation",
                "description": "基于Web的自主AI代理平台",
                "features": [
                        "Web界面",
                        "目标设定",
                        "任务执行",
                        "结果展示"
                ],
                "pricing": "免费/Pro版",
                "tags": [
                        "Web界面",
                        "易用",
                        "可视化"
                ],
                "rating": 4.2,
                "users": "1M+",
                "url": "https://agentgpt.reworkd.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "godmode",
                "name": "GodMode",
                "provider": "GodMode Team",
                "type": "autonomous",
                "category": "automation",
                "description": "自主AI代理的Web界面",
                "features": [
                        "任务自动化",
                        "多步骤执行",
                        "结果跟踪",
                        "Web界面"
                ],
                "pricing": "免费",
                "tags": [
                        "免费",
                        "Web",
                        "简单"
                ],
                "rating": 3.9,
                "users": "300K+",
                "url": "https://godmode.space",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "superagi",
                "name": "SuperAGI",
                "provider": "SuperAGI",
                "type": "autonomous",
                "category": "automation",
                "description": "开源的自主AI代理框架",
                "features": [
                        "多代理协作",
                        "工具集成",
                        "GUI界面",
                        "插件系统"
                ],
                "pricing": "开源免费",
                "tags": [
                        "多代理",
                        "插件",
                        "协作"
                ],
                "rating": 4.3,
                "users": "150K+",
                "url": "https://github.com/TransformerOptimus/SuperAGI",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "jarvis",
                "name": "JARVIS",
                "provider": "Microsoft",
                "type": "autonomous",
                "category": "automation",
                "description": "微软的多模态AI代理系统",
                "features": [
                        "多模态理解",
                        "任务规划",
                        "工具调用",
                        "协作执行"
                ],
                "pricing": "研究项目",
                "tags": [
                        "多模态",
                        "微软",
                        "先进"
                ],
                "rating": 4.4,
                "users": "研究阶段",
                "url": "https://github.com/microsoft/JARVIS",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "voyager",
                "name": "Voyager",
                "provider": "NVIDIA",
                "type": "autonomous",
                "category": "automation",
                "description": "终身学习的Minecraft代理",
                "features": [
                        "终身学习",
                        "技能获取",
                        "探索发现",
                        "自我改进"
                ],
                "pricing": "研究项目",
                "tags": [
                        "学习",
                        "游戏",
                        "探索"
                ],
                "rating": 4.2,
                "users": "研究阶段",
                "url": "https://voyager.minedojo.org",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "reflexion",
                "name": "Reflexion",
                "provider": "Princeton University",
                "type": "autonomous",
                "category": "automation",
                "description": "具有反思能力的AI代理",
                "features": [
                        "自我反思",
                        "错误纠正",
                        "经验学习",
                        "性能提升"
                ],
                "pricing": "研究项目",
                "tags": [
                        "反思",
                        "学习",
                        "改进"
                ],
                "rating": 4.1,
                "users": "研究阶段",
                "url": "https://github.com/noahshinn024/reflexion",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "langchain-agents",
                "name": "LangChain Agents",
                "provider": "LangChain",
                "type": "assistant",
                "category": "automation",
                "description": "LangChain的代理框架",
                "features": [
                        "工具调用",
                        "链式推理",
                        "记忆管理",
                        "多模态"
                ],
                "pricing": "开源免费",
                "tags": [
                        "框架",
                        "工具",
                        "链式"
                ],
                "rating": 4.5,
                "users": "2M+",
                "url": "https://python.langchain.com/docs/modules/agents",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "llamaindex-agents",
                "name": "LlamaIndex Agents",
                "provider": "LlamaIndex",
                "type": "assistant",
                "category": "automation",
                "description": "LlamaIndex的智能代理系统",
                "features": [
                        "数据查询",
                        "推理代理",
                        "工具使用",
                        "RAG增强"
                ],
                "pricing": "开源免费",
                "tags": [
                        "数据",
                        "RAG",
                        "查询"
                ],
                "rating": 4.4,
                "users": "800K+",
                "url": "https://docs.llamaindex.ai/en/stable/module_guides/deploying/agents",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "semantic-kernel",
                "name": "Semantic Kernel",
                "provider": "Microsoft",
                "type": "assistant",
                "category": "automation",
                "description": "微软的AI编排框架",
                "features": [
                        "技能编排",
                        "插件系统",
                        "多语言支持",
                        "企业集成"
                ],
                "pricing": "开源免费",
                "tags": [
                        "微软",
                        "企业",
                        "编排"
                ],
                "rating": 4.3,
                "users": "500K+",
                "url": "https://github.com/microsoft/semantic-kernel",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "haystack-agents",
                "name": "Haystack Agents",
                "provider": "deepset",
                "type": "assistant",
                "category": "automation",
                "description": "Haystack的对话代理框架",
                "features": [
                        "对话管理",
                        "文档问答",
                        "搜索增强",
                        "NLP流水线"
                ],
                "pricing": "开源免费",
                "tags": [
                        "对话",
                        "搜索",
                        "NLP"
                ],
                "rating": 4.2,
                "users": "300K+",
                "url": "https://haystack.deepset.ai/overview/agents",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "autogen",
                "name": "AutoGen",
                "provider": "Microsoft",
                "type": "multi-agent",
                "category": "automation",
                "description": "多代理对话框架",
                "features": [
                        "多代理对话",
                        "角色扮演",
                        "协作解决",
                        "代码生成"
                ],
                "pricing": "开源免费",
                "tags": [
                        "多代理",
                        "对话",
                        "协作"
                ],
                "rating": 4.6,
                "users": "1.2M+",
                "url": "https://github.com/microsoft/autogen",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "crew-ai",
                "name": "CrewAI",
                "provider": "CrewAI",
                "type": "multi-agent",
                "category": "automation",
                "description": "多代理协作平台",
                "features": [
                        "团队协作",
                        "角色分工",
                        "任务分配",
                        "结果整合"
                ],
                "pricing": "开源免费",
                "tags": [
                        "团队",
                        "协作",
                        "分工"
                ],
                "rating": 4.4,
                "users": "400K+",
                "url": "https://github.com/joaomdmoura/crewAI",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "multi-on",
                "name": "MultiOn",
                "provider": "MultiOn",
                "type": "assistant",
                "category": "automation",
                "description": "Web自动化AI代理",
                "features": [
                        "Web自动化",
                        "浏览器控制",
                        "任务执行",
                        "API集成"
                ],
                "pricing": "免费/付费版",
                "tags": [
                        "Web",
                        "自动化",
                        "浏览器"
                ],
                "rating": 4.1,
                "users": "200K+",
                "url": "https://multion.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "devin",
                "name": "Devin",
                "provider": "Cognition AI",
                "type": "specialized",
                "category": "code-assistant",
                "description": "AI软件工程师代理",
                "features": [
                        "代码编写",
                        "调试测试",
                        "项目管理",
                        "部署发布"
                ],
                "pricing": "私有Beta",
                "tags": [
                        "编程",
                        "工程师",
                        "全栈"
                ],
                "rating": 4.7,
                "users": "Beta用户",
                "url": "https://cognition-labs.com/devin",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "cursor-composer",
                "name": "Cursor Composer",
                "provider": "Anysphere",
                "type": "specialized",
                "category": "code-assistant",
                "description": "Cursor的AI编程代理",
                "features": [
                        "代码生成",
                        "重构优化",
                        "错误修复",
                        "文档生成"
                ],
                "pricing": "集成在Cursor中",
                "tags": [
                        "编程",
                        "重构",
                        "优化"
                ],
                "rating": 4.5,
                "users": "500K+",
                "url": "https://cursor.sh",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "github-copilot-workspace",
                "name": "GitHub Copilot Workspace",
                "provider": "GitHub",
                "type": "specialized",
                "category": "code-assistant",
                "description": "GitHub的AI开发环境",
                "features": [
                        "项目规划",
                        "代码生成",
                        "测试编写",
                        "文档创建"
                ],
                "pricing": "GitHub订阅",
                "tags": [
                        "GitHub",
                        "开发",
                        "集成"
                ],
                "rating": 4.4,
                "users": "1M+",
                "url": "https://github.com/features/copilot",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "aider-chat",
                "name": "Aider",
                "provider": "Aider",
                "type": "specialized",
                "category": "code-assistant",
                "description": "命令行AI编程助手",
                "features": [
                        "代码编辑",
                        "Git集成",
                        "多文件处理",
                        "命令行界面"
                ],
                "pricing": "开源免费",
                "tags": [
                        "命令行",
                        "Git",
                        "编辑"
                ],
                "rating": 4.3,
                "users": "100K+",
                "url": "https://aider.chat",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "continue-dev",
                "name": "Continue",
                "provider": "Continue",
                "type": "specialized",
                "category": "code-assistant",
                "description": "VS Code的AI编程助手",
                "features": [
                        "代码补全",
                        "聊天界面",
                        "自定义模型",
                        "插件扩展"
                ],
                "pricing": "开源免费",
                "tags": [
                        "VS Code",
                        "插件",
                        "自定义"
                ],
                "rating": 4.2,
                "users": "200K+",
                "url": "https://continue.dev",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "coderabbit",
                "name": "CodeRabbit",
                "provider": "CodeRabbit",
                "type": "specialized",
                "category": "code-assistant",
                "description": "AI代码审查代理",
                "features": [
                        "代码审查",
                        "安全检测",
                        "性能分析",
                        "建议优化"
                ],
                "pricing": "免费/Pro版",
                "tags": [
                        "审查",
                        "安全",
                        "分析"
                ],
                "rating": 4.1,
                "users": "150K+",
                "url": "https://coderabbit.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "sweep-ai",
                "name": "Sweep",
                "provider": "Sweep AI",
                "type": "specialized",
                "category": "code-assistant",
                "description": "GitHub问题自动修复代理",
                "features": [
                        "问题修复",
                        "代码生成",
                        "PR创建",
                        "自动化"
                ],
                "pricing": "免费/付费版",
                "tags": [
                        "修复",
                        "自动化",
                        "GitHub"
                ],
                "rating": 4,
                "users": "80K+",
                "url": "https://sweep.dev",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "mentat-ai",
                "name": "Mentat",
                "provider": "Mentat AI",
                "type": "specialized",
                "category": "code-assistant",
                "description": "命令行代码编辑代理",
                "features": [
                        "代码编辑",
                        "文件操作",
                        "批量修改",
                        "智能建议"
                ],
                "pricing": "开源免费",
                "tags": [
                        "命令行",
                        "编辑",
                        "批量"
                ],
                "rating": 3.9,
                "users": "50K+",
                "url": "https://github.com/biobootloader/mentat",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "research-agent",
                "name": "Research Agent",
                "provider": "Various",
                "type": "specialized",
                "category": "research",
                "description": "自动化研究代理",
                "features": [
                        "文献搜索",
                        "信息整理",
                        "报告生成",
                        "数据分析"
                ],
                "pricing": "开源/付费版",
                "tags": [
                        "研究",
                        "文献",
                        "分析"
                ],
                "rating": 4.2,
                "users": "100K+",
                "url": "https://github.com/assafelovic/gpt-researcher",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "scite-assistant",
                "name": "Scite Assistant",
                "provider": "Scite",
                "type": "specialized",
                "category": "research",
                "description": "科学文献分析代理",
                "features": [
                        "文献分析",
                        "引用检查",
                        "研究验证",
                        "趋势发现"
                ],
                "pricing": "免费/付费版",
                "tags": [
                        "科学",
                        "文献",
                        "验证"
                ],
                "rating": 4.3,
                "users": "200K+",
                "url": "https://scite.ai",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "elicit",
                "name": "Elicit",
                "provider": "Ought",
                "type": "specialized",
                "category": "research",
                "description": "AI研究助手",
                "features": [
                        "文献搜索",
                        "数据提取",
                        "假设验证",
                        "研究设计"
                ],
                "pricing": "免费/Plus版",
                "tags": [
                        "研究",
                        "假设",
                        "验证"
                ],
                "rating": 4.4,
                "users": "500K+",
                "url": "https://elicit.org",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "consensus",
                "name": "Consensus",
                "provider": "Consensus",
                "type": "specialized",
                "category": "research",
                "description": "科学共识搜索引擎",
                "features": [
                        "科学搜索",
                        "共识分析",
                        "证据评估",
                        "结论总结"
                ],
                "pricing": "免费/Pro版",
                "tags": [
                        "科学",
                        "共识",
                        "证据"
                ],
                "rating": 4.1,
                "users": "300K+",
                "url": "https://consensus.app",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "semantic-scholar-ai",
                "name": "Semantic Scholar AI",
                "provider": "Allen Institute",
                "type": "specialized",
                "category": "research",
                "description": "学术搜索和分析代理",
                "features": [
                        "学术搜索",
                        "论文分析",
                        "引用网络",
                        "研究趋势"
                ],
                "pricing": "免费",
                "tags": [
                        "学术",
                        "论文",
                        "引用"
                ],
                "rating": 4.5,
                "users": "10M+",
                "url": "https://semanticscholar.org",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
        },
        {
                "id": "connected-papers",
                "name": "Connected Papers",
                "provider": "Connected Papers",
                "type": "specialized",
                "category": "research",
                "description": "论文关系可视化代理",
                "features": [
                        "论文关系",
                        "可视化",
                        "研究脉络",
                        "发现相关"
                ],
                "pricing": "免费/付费版",
                "tags": [
                        "可视化",
                        "关系",
                        "发现"
                ],
                "rating": 4.2,
                "users": "1M+",
                "url": "https://connectedpapers.com",
                "pros": [
                        "功能强大",
                        "易于使用",
                        "开源免费"
                ],
                "cons": [
                        "需要技术背景",
                        "可能不稳定",
                        "文档待完善"
                ],
                "lastUpdated": "2024-12-20"
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
    window.aiToolsDatabase = aiToolsDatabase;

    // 创建管理器实例
    const manager = new AIToolsManager(aiToolsDatabase);
    window.aiToolsManager = manager;
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