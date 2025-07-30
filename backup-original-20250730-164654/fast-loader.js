/**
 * 超快速AI工具加载器
 * 解决转圈和加载缓慢问题
 */

class FastAILoader {
  constructor() {
    this.cache = new Map();
    this.isReady = false;
    this.readyPromise = null;
  }

  /**
   * 立即初始化 - 使用内联数据
   */
  init() {
    if (this.readyPromise) return this.readyPromise;
    
    this.readyPromise = new Promise((resolve) => {
      // 立即可用的核心数据
      this.cache.set('categories', this.getInlineCategories());
      this.cache.set('featuredTools', this.getInlineFeaturedTools());
      this.cache.set('popularModels', this.getInlinePopularModels());
      this.cache.set('topAgents', this.getInlineTopAgents());
      
      this.isReady = true;
      resolve();
    });
    
    return this.readyPromise;
  }

  /**
   * 内联分类数据
   */
  getInlineCategories() {
    return {
      'text-generation': { name: '文本生成', icon: '✍️', count: 8 },
      'image-generation': { name: '图像生成', icon: '🎨', count: 5 },
      'code-assistant': { name: '代码助手', icon: '💻', count: 4 },
      'productivity': { name: '效率工具', icon: '⚡', count: 4 },
      'data-analysis': { name: '数据分析', icon: '📊', count: 2 },
      'voice-audio': { name: '语音音频', icon: '🎵', count: 2 },
      'video-creation': { name: '视频创作', icon: '🎬', count: 4 },
      'automation': { name: '自动化', icon: '🤖', count: 3 },
      'research': { name: '研究助手', icon: '🔍', count: 3 },
      'design': { name: '设计工具', icon: '🎯', count: 3 },
      'education': { name: '教育学习', icon: '📚', count: 3 },
      'marketing': { name: '营销工具', icon: '📣', count: 3 },
      'customer-service': { name: '客户服务', icon: '🤝', count: 3 },
      'translation': { name: '翻译工具', icon: '🌐', count: 2 },
      'music': { name: '音乐创作', icon: '🎹', count: 3 },
      'security': { name: '安全工具', icon: '🔒', count: 0 },
      'gaming': { name: '游戏开发', icon: '🎮', count: 0 },
      'legal': { name: '法律助手', icon: '⚖️', count: 0 },
      'social-media': { name: '社交媒体', icon: '📱', count: 0 },
      'e-commerce': { name: '电商工具', icon: '🛒', count: 0 },
      'hr-recruitment': { name: '人力资源', icon: '👥', count: 0 },
      'real-estate': { name: '房地产', icon: '🏠', count: 0 },
      'agriculture': { name: '农业科技', icon: '🌾', count: 0 },
      'logistics': { name: '物流运输', icon: '🚚', count: 0 },
      'travel': { name: '旅游出行', icon: '✈️', count: 0 },
      'healthcare': { name: '医疗健康', icon: '🏥', count: 0 },
      'finance': { name: '金融工具', icon: '💰', count: 0 }
    };
  }

  /**
   * 内联精选工具数据 - 扩展版本
   */
  getInlineFeaturedTools() {
    return [
      // 文本生成类工具
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        provider: 'OpenAI',
        category: 'text-generation',
        description: '最受欢迎的AI聊天机器人，适用于各种文本任务',
        rating: 4.8,
        users: '100M+',
        pricing: '免费/Plus $20/月',
        tags: ['聊天', '写作', '编程'],
        url: 'https://chat.openai.com',
        logo: '🤖'
      },
      {
        id: 'wenxin-yiyan',
        name: '文心一言',
        provider: '百度',
        category: 'text-generation',
        description: '百度的AI对话助手，基于文心大模型',
        rating: 4.2,
        users: '50M+',
        pricing: '免费使用',
        tags: ['百度', '中文', '知识'],
        url: 'https://yiyan.baidu.com',
        logo: '🧠'
      },
      {
        id: 'tongyi-qianwen',
        name: '通义千问',
        provider: '阿里云',
        category: 'text-generation',
        description: '阿里云的大语言模型应用，支持多种任务',
        rating: 4.3,
        users: '10M+',
        pricing: '免费/付费版',
        tags: ['阿里', '企业', '多功能'],
        url: 'https://tongyi.aliyun.com',
        logo: '🔷'
      },
      {
        id: 'claude',
        name: 'Claude',
        provider: 'Anthropic',
        category: 'text-generation',
        description: 'Anthropic开发的AI助手，擅长分析和创作',
        rating: 4.7,
        users: '10M+',
        pricing: '免费/Pro $20/月',
        tags: ['聊天', '分析', '写作'],
        url: 'https://claude.ai',
        logo: '🎭'
      },
      {
        id: 'doubao',
        name: '豆包',
        provider: '字节跳动',
        category: 'text-generation',
        description: '字节跳动的AI助手，集成多种功能',
        rating: 4.1,
        users: '20M+',
        pricing: '免费使用',
        tags: ['字节', '多功能', '年轻化'],
        url: 'https://doubao.com',
        logo: '🎪'
      },
      {
        id: 'kimi-chat',
        name: 'Kimi Chat',
        provider: '月之暗面',
        category: 'text-generation',
        description: '支持超长上下文的AI助手',
        rating: 4.5,
        users: '5M+',
        pricing: '免费/会员版',
        tags: ['长上下文', '文档', '总结'],
        url: 'https://kimi.moonshot.cn',
        logo: '🌙'
      },
      {
        id: 'gemini',
        name: 'Gemini',
        provider: 'Google',
        category: 'text-generation',
        description: 'Google的多模态AI助手',
        rating: 4.4,
        users: '30M+',
        pricing: '免费/Pro $20/月',
        tags: ['Google', '多模态', '搜索'],
        url: 'https://gemini.google.com',
        logo: '💎'
      },
      {
        id: 'copilot',
        name: 'Microsoft Copilot',
        provider: 'Microsoft',
        category: 'text-generation',
        description: 'Microsoft的AI助手，集成Office套件',
        rating: 4.3,
        users: '25M+',
        pricing: '免费/Pro $20/月',
        tags: ['Microsoft', 'Office', '办公'],
        url: 'https://copilot.microsoft.com',
        logo: '🔷'
      },

      // 图像生成类工具
      {
        id: 'midjourney',
        name: 'Midjourney',
        provider: 'Midjourney Inc.',
        category: 'image-generation',
        description: '顶级AI图像生成工具，以艺术质量著称',
        rating: 4.9,
        users: '20M+',
        pricing: '$10-60/月',
        tags: ['绘画', '艺术', '设计'],
        url: 'https://midjourney.com',
        logo: '🎨'
      },
      {
        id: 'dall-e-3',
        name: 'DALL-E 3',
        provider: 'OpenAI',
        category: 'image-generation',
        description: 'OpenAI的图像生成模型，集成在ChatGPT Plus中',
        rating: 4.6,
        users: '50M+',
        pricing: 'ChatGPT Plus $20/月',
        tags: ['绘画', 'AI艺术', '创意'],
        url: 'https://openai.com/dall-e-3',
        logo: '🖼️'
      },
      {
        id: 'stable-diffusion',
        name: 'Stable Diffusion',
        provider: 'Stability AI',
        category: 'image-generation',
        description: '开源的AI图像生成模型，可本地部署',
        rating: 4.5,
        users: '15M+',
        pricing: '免费开源',
        tags: ['开源', '本地部署', '自由'],
        url: 'https://stability.ai',
        logo: '🌟'
      },
      {
        id: 'leonardo-ai',
        name: 'Leonardo.AI',
        provider: 'Leonardo.AI',
        category: 'image-generation',
        description: '专业的AI图像生成平台，面向设计师',
        rating: 4.3,
        users: '5M+',
        pricing: '免费/付费版',
        tags: ['专业', '设计师', '商业'],
        url: 'https://leonardo.ai',
        logo: '🎭'
      },
      {
        id: 'firefly',
        name: 'Adobe Firefly',
        provider: 'Adobe',
        category: 'image-generation',
        description: 'Adobe的AI图像生成工具，集成Creative Suite',
        rating: 4.2,
        users: '8M+',
        pricing: '免费/Creative Cloud',
        tags: ['Adobe', '专业', '集成'],
        url: 'https://firefly.adobe.com',
        logo: '🔥'
      },

      // 代码助手类工具
      {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        provider: 'GitHub/OpenAI',
        category: 'code-assistant',
        description: 'AI编程助手，直接集成在IDE中提供代码建议',
        rating: 4.6,
        users: '5M+',
        pricing: '$10/月',
        tags: ['编程', 'IDE', '开发'],
        url: 'https://github.com/features/copilot',
        logo: '💻'
      },
      {
        id: 'cursor',
        name: 'Cursor',
        provider: 'Cursor Team',
        category: 'code-assistant',
        description: 'AI驱动的代码编辑器，专为AI编程设计',
        rating: 4.7,
        users: '2M+',
        pricing: '免费/Pro $20/月',
        tags: ['编辑器', 'AI编程', '现代'],
        url: 'https://cursor.sh',
        logo: '⚡'
      },
      {
        id: 'codeium',
        name: 'Codeium',
        provider: 'Codeium',
        category: 'code-assistant',
        description: '免费的AI代码补全工具，支持多种IDE',
        rating: 4.4,
        users: '3M+',
        pricing: '免费/企业版',
        tags: ['免费', '代码补全', '多IDE'],
        url: 'https://codeium.com',
        logo: '🚀'
      },
      {
        id: 'tabnine',
        name: 'Tabnine',
        provider: 'Tabnine',
        category: 'code-assistant',
        description: 'AI代码补全工具，支持本地部署',
        rating: 4.3,
        users: '1M+',
        pricing: '免费/Pro $12/月',
        tags: ['代码补全', '本地部署', '隐私'],
        url: 'https://tabnine.com',
        logo: '🔧'
      },

      // 效率工具类
      {
        id: 'notion-ai',
        name: 'Notion AI',
        provider: 'Notion',
        category: 'productivity',
        description: '集成在Notion中的AI助手，帮助写作和内容管理',
        rating: 4.4,
        users: '30M+',
        pricing: '$10/月',
        tags: ['笔记', '写作', '总结'],
        url: 'https://notion.so/product/ai',
        logo: '📝'
      },
      {
        id: 'grammarly',
        name: 'Grammarly',
        provider: 'Grammarly',
        category: 'productivity',
        description: 'AI写作助手和语法检查工具',
        rating: 4.6,
        users: '30M+',
        pricing: '免费/Premium $12/月',
        tags: ['语法', '写作', '校对'],
        url: 'https://grammarly.com',
        logo: '✍️'
      },
      {
        id: 'jasper',
        name: 'Jasper',
        provider: 'Jasper AI',
        category: 'productivity',
        description: '企业级AI内容创作平台',
        rating: 4.5,
        users: '1M+',
        pricing: '$49/月起',
        tags: ['内容创作', '企业', '营销'],
        url: 'https://jasper.ai',
        logo: '💼'
      },
      {
        id: 'copy-ai',
        name: 'Copy.ai',
        provider: 'Copy.ai',
        category: 'productivity',
        description: '简单易用的AI文案生成器',
        rating: 4.3,
        users: '5M+',
        pricing: '免费/Pro $49/月',
        tags: ['文案', '营销', '简单'],
        url: 'https://copy.ai',
        logo: '📄'
      },

      // 数据分析类工具
      {
        id: 'tableau-ai',
        name: 'Tableau AI',
        provider: 'Tableau',
        category: 'data-analysis',
        description: '智能数据可视化和分析平台',
        rating: 4.5,
        users: '2M+',
        pricing: '$70/月起',
        tags: ['数据可视化', '商业智能', '分析'],
        url: 'https://tableau.com',
        logo: '📊'
      },
      {
        id: 'power-bi-ai',
        name: 'Power BI AI',
        provider: 'Microsoft',
        category: 'data-analysis',
        description: 'Microsoft的AI驱动商业智能平台',
        rating: 4.4,
        users: '5M+',
        pricing: '$10/月起',
        tags: ['Microsoft', '商业智能', '报告'],
        url: 'https://powerbi.microsoft.com',
        logo: '📈'
      },

      // 语音音频类工具
      {
        id: 'elevenlabs',
        name: 'ElevenLabs',
        provider: 'ElevenLabs',
        category: 'voice-audio',
        description: '高质量的AI语音合成和克隆工具',
        rating: 4.7,
        users: '2M+',
        pricing: '免费/Pro $22/月',
        tags: ['语音合成', '配音', '克隆'],
        url: 'https://elevenlabs.io',
        logo: '🎤'
      },
      {
        id: 'murf',
        name: 'Murf',
        provider: 'Murf',
        category: 'voice-audio',
        description: 'AI语音生成器，适合视频和播客',
        rating: 4.4,
        users: '1M+',
        pricing: '$29/月起',
        tags: ['语音生成', '视频', '播客'],
        url: 'https://murf.ai',
        logo: '🎵'
      },

      // 视频创作类工具
      {
        id: 'runway',
        name: 'RunwayML',
        provider: 'Runway',
        category: 'video-creation',
        description: '专业的AI视频生成和编辑工具',
        rating: 4.6,
        users: '2M+',
        pricing: '$12/月起',
        tags: ['视频生成', '编辑', '专业'],
        url: 'https://runwayml.com',
        logo: '🎬'
      },
      {
        id: 'pika-labs',
        name: 'Pika Labs',
        provider: 'Pika Labs',
        category: 'video-creation',
        description: '简单易用的AI视频生成器',
        rating: 4.4,
        users: '1M+',
        pricing: '免费/付费版',
        tags: ['视频生成', '简单', '免费'],
        url: 'https://pika.art',
        logo: '⚡'
      },
      {
        id: 'synthesia',
        name: 'Synthesia',
        provider: 'Synthesia',
        category: 'video-creation',
        description: 'AI虚拟人视频制作平台',
        rating: 4.3,
        users: '500K+',
        pricing: '$30/月起',
        tags: ['虚拟人', '企业', '培训'],
        url: 'https://synthesia.io',
        logo: '👤'
      },
      {
        id: 'luma-ai',
        name: 'Luma AI',
        provider: 'Luma AI',
        category: 'video-creation',
        description: 'AI 3D视频和场景生成工具',
        rating: 4.5,
        users: '800K+',
        pricing: '免费/Pro版',
        tags: ['3D视频', '场景生成', '创新'],
        url: 'https://lumalabs.ai',
        logo: '🌟'
      },

      // 自动化工具类
      {
        id: 'zapier-ai',
        name: 'Zapier AI',
        provider: 'Zapier',
        category: 'automation',
        description: 'AI驱动的工作流自动化平台',
        rating: 4.4,
        users: '5M+',
        pricing: '免费/付费版',
        tags: ['自动化', '工作流', '集成'],
        url: 'https://zapier.com',
        logo: '⚡'
      },
      {
        id: 'make-ai',
        name: 'Make (Integromat)',
        provider: 'Make',
        category: 'automation',
        description: '可视化自动化平台，支持AI集成',
        rating: 4.3,
        users: '2M+',
        pricing: '免费/付费版',
        tags: ['可视化', '自动化', 'API'],
        url: 'https://make.com',
        logo: '🔧'
      },
      {
        id: 'n8n',
        name: 'n8n',
        provider: 'n8n',
        category: 'automation',
        description: '开源的工作流自动化工具',
        rating: 4.5,
        users: '500K+',
        pricing: '开源免费',
        tags: ['开源', '自助部署', '灵活'],
        url: 'https://n8n.io',
        logo: '🔄'
      },

      // 研究助手类工具
      {
        id: 'perplexity',
        name: 'Perplexity AI',
        provider: 'Perplexity',
        category: 'research',
        description: 'AI搜索引擎，提供准确的信息和引用',
        rating: 4.6,
        users: '10M+',
        pricing: '免费/Pro $20/月',
        tags: ['搜索', '研究', '引用'],
        url: 'https://perplexity.ai',
        logo: '🔍'
      },
      {
        id: 'consensus',
        name: 'Consensus',
        provider: 'Consensus',
        category: 'research',
        description: 'AI学术论文搜索和分析工具',
        rating: 4.4,
        users: '1M+',
        pricing: '免费/付费版',
        tags: ['学术', '论文', '研究'],
        url: 'https://consensus.app',
        logo: '📚'
      },
      {
        id: 'elicit',
        name: 'Elicit',
        provider: 'Ought',
        category: 'research',
        description: 'AI研究助手，帮助文献综述和分析',
        rating: 4.3,
        users: '500K+',
        pricing: '免费/付费版',
        tags: ['文献', '分析', '综述'],
        url: 'https://elicit.org',
        logo: '🧠'
      },

      // 设计工具类
      {
        id: 'canva-ai',
        name: 'Canva AI',
        provider: 'Canva',
        category: 'design',
        description: 'AI驱动的设计平台，支持智能设计建议',
        rating: 4.5,
        users: '100M+',
        pricing: '免费/Pro版',
        tags: ['设计', '模板', '智能'],
        url: 'https://canva.com',
        logo: '🎨'
      },
      {
        id: 'figma-ai',
        name: 'Figma AI',
        provider: 'Figma',
        category: 'design',
        description: 'AI增强的设计协作平台',
        rating: 4.6,
        users: '20M+',
        pricing: '免费/付费版',
        tags: ['UI设计', '协作', '原型'],
        url: 'https://figma.com',
        logo: '🎯'
      },
      {
        id: 'framer-ai',
        name: 'Framer AI',
        provider: 'Framer',
        category: 'design',
        description: 'AI网站设计和原型工具',
        rating: 4.4,
        users: '2M+',
        pricing: '免费/付费版',
        tags: ['网站设计', '原型', '交互'],
        url: 'https://framer.com',
        logo: '🖼️'
      },

      // 教育学习类工具
      {
        id: 'khan-academy-ai',
        name: 'Khan Academy AI',
        provider: 'Khan Academy',
        category: 'education',
        description: 'AI个性化学习助手',
        rating: 4.5,
        users: '50M+',
        pricing: '免费',
        tags: ['教育', '个性化', '免费'],
        url: 'https://khanacademy.org',
        logo: '📚'
      },
      {
        id: 'duolingo-ai',
        name: 'Duolingo AI',
        provider: 'Duolingo',
        category: 'education',
        description: 'AI语言学习平台',
        rating: 4.4,
        users: '500M+',
        pricing: '免费/Plus版',
        tags: ['语言学习', '游戏化', '个性化'],
        url: 'https://duolingo.com',
        logo: '🦉'
      },
      {
        id: 'coursera-ai',
        name: 'Coursera AI',
        provider: 'Coursera',
        category: 'education',
        description: 'AI驱动的在线课程平台',
        rating: 4.3,
        users: '100M+',
        pricing: '免费/付费课程',
        tags: ['在线课程', '认证', '技能'],
        url: 'https://coursera.org',
        logo: '🎓'
      },

      // 营销工具类
      {
        id: 'hubspot-ai',
        name: 'HubSpot AI',
        provider: 'HubSpot',
        category: 'marketing',
        description: 'AI驱动的营销自动化平台',
        rating: 4.5,
        users: '5M+',
        pricing: '免费/付费版',
        tags: ['营销自动化', 'CRM', '销售'],
        url: 'https://hubspot.com',
        logo: '📈'
      },
      {
        id: 'mailchimp-ai',
        name: 'Mailchimp AI',
        provider: 'Mailchimp',
        category: 'marketing',
        description: 'AI邮件营销和自动化工具',
        rating: 4.3,
        users: '10M+',
        pricing: '免费/付费版',
        tags: ['邮件营销', '自动化', '分析'],
        url: 'https://mailchimp.com',
        logo: '📧'
      },
      {
        id: 'hootsuite-ai',
        name: 'Hootsuite AI',
        provider: 'Hootsuite',
        category: 'marketing',
        description: 'AI社交媒体管理平台',
        rating: 4.2,
        users: '3M+',
        pricing: '付费版',
        tags: ['社交媒体', '管理', '分析'],
        url: 'https://hootsuite.com',
        logo: '📱'
      },

      // 客户服务类工具
      {
        id: 'intercom-ai',
        name: 'Intercom AI',
        provider: 'Intercom',
        category: 'customer-service',
        description: 'AI客服和用户沟通平台',
        rating: 4.4,
        users: '2M+',
        pricing: '付费版',
        tags: ['客服', '聊天机器人', '自动化'],
        url: 'https://intercom.com',
        logo: '💬'
      },
      {
        id: 'zendesk-ai',
        name: 'Zendesk AI',
        provider: 'Zendesk',
        category: 'customer-service',
        description: 'AI客户支持和服务台解决方案',
        rating: 4.3,
        users: '4M+',
        pricing: '付费版',
        tags: ['客户支持', '工单', '自动化'],
        url: 'https://zendesk.com',
        logo: '🎧'
      },
      {
        id: 'freshworks-ai',
        name: 'Freshworks AI',
        provider: 'Freshworks',
        category: 'customer-service',
        description: 'AI客户体验管理平台',
        rating: 4.2,
        users: '1M+',
        pricing: '付费版',
        tags: ['客户体验', 'CRM', '自动化'],
        url: 'https://freshworks.com',
        logo: '🌟'
      },

      // 翻译工具类
      {
        id: 'deepl',
        name: 'DeepL',
        provider: 'DeepL',
        category: 'translation',
        description: '高质量的AI翻译工具',
        rating: 4.7,
        users: '50M+',
        pricing: '免费/Pro版',
        tags: ['翻译', '高质量', '多语言'],
        url: 'https://deepl.com',
        logo: '🌐'
      },
      {
        id: 'google-translate',
        name: 'Google Translate',
        provider: 'Google',
        category: 'translation',
        description: 'Google的免费翻译服务',
        rating: 4.4,
        users: '500M+',
        pricing: '免费',
        tags: ['翻译', '免费', '多语言'],
        url: 'https://translate.google.com',
        logo: '🔤'
      },

      // 音乐创作类工具
      {
        id: 'suno-ai',
        name: 'Suno AI',
        provider: 'Suno',
        category: 'music',
        description: 'AI音乐生成和创作工具',
        rating: 4.5,
        users: '2M+',
        pricing: '免费/付费版',
        tags: ['音乐生成', '创作', '原创'],
        url: 'https://suno.ai',
        logo: '🎵'
      },
      {
        id: 'udio',
        name: 'Udio',
        provider: 'Udio',
        category: 'music',
        description: 'AI音乐创作平台',
        rating: 4.4,
        users: '1M+',
        pricing: '免费/付费版',
        tags: ['音乐创作', '生成', '编辑'],
        url: 'https://udio.com',
        logo: '🎹'
      },
      {
        id: 'aiva',
        name: 'AIVA',
        provider: 'AIVA Technologies',
        category: 'music',
        description: 'AI作曲家，专业音乐创作',
        rating: 4.3,
        users: '500K+',
        pricing: '免费/付费版',
        tags: ['作曲', '专业', '古典'],
        url: 'https://aiva.ai',
        logo: '🎼'
      }
    ];
  }

  /**
   * 内联热门模型数据 - 大幅扩展版本
   */
  getInlinePopularModels() {
    return [
      // OpenAI 模型系列
      {
        id: 'gpt-4-turbo',
        name: 'GPT-4 Turbo',
        provider: 'OpenAI',
        type: 'llm',
        description: 'OpenAI最新的高性能语言模型，支持128K上下文',
        rating: 4.9,
        contextLength: '128K',
        pricing: '$0.01/1K tokens',
        logo: '🚀',
        features: ['长上下文', '多模态', '代码生成', '推理']
      },
      {
        id: 'gpt-4',
        name: 'GPT-4',
        provider: 'OpenAI',
        type: 'llm',
        description: 'OpenAI最强大的语言模型',
        rating: 4.8,
        contextLength: '8K',
        pricing: '$0.03/1K tokens',
        logo: '🧠',
        features: ['推理', '创作', '分析', '编程']
      },
      {
        id: 'gpt-3.5-turbo',
        name: 'GPT-3.5 Turbo',
        provider: 'OpenAI',
        type: 'llm',
        description: 'OpenAI高性价比的语言模型',
        rating: 4.6,
        contextLength: '16K',
        pricing: '$0.001/1K tokens',
        logo: '⚡',
        features: ['快速', '经济', '对话', '编程']
      },
      {
        id: 'dall-e-3',
        name: 'DALL-E 3',
        provider: 'OpenAI',
        type: 'image',
        description: 'OpenAI最新的图像生成模型',
        rating: 4.7,
        contextLength: 'N/A',
        pricing: '$0.04/image',
        logo: '🎨',
        features: ['图像生成', '高质量', '创意', '安全']
      },

      // Anthropic Claude 系列
      {
        id: 'claude-3-opus',
        name: 'Claude 3 Opus',
        provider: 'Anthropic',
        type: 'llm',
        description: 'Anthropic最强的推理模型',
        rating: 4.8,
        contextLength: '200K',
        pricing: '$15/1M tokens',
        logo: '🎭',
        features: ['长上下文', '推理', '分析', '安全']
      },
      {
        id: 'claude-3-sonnet',
        name: 'Claude 3 Sonnet',
        provider: 'Anthropic',
        type: 'llm',
        description: 'Anthropic平衡性能和成本的模型',
        rating: 4.6,
        contextLength: '200K',
        pricing: '$3/1M tokens',
        logo: '🎪',
        features: ['平衡', '高效', '多用途', '可靠']
      },
      {
        id: 'claude-3-haiku',
        name: 'Claude 3 Haiku',
        provider: 'Anthropic',
        type: 'llm',
        description: 'Anthropic最快速的轻量级模型',
        rating: 4.4,
        contextLength: '200K',
        pricing: '$0.25/1M tokens',
        logo: '🌸',
        features: ['快速', '轻量', '经济', '响应']
      },

      // Google 模型系列
      {
        id: 'gemini-ultra',
        name: 'Gemini Ultra',
        provider: 'Google',
        type: 'multimodal',
        description: 'Google最强大的多模态AI模型',
        rating: 4.7,
        contextLength: '32K',
        pricing: '企业定价',
        logo: '💎',
        features: ['多模态', '推理', '创作', '分析']
      },
      {
        id: 'gemini-pro',
        name: 'Gemini Pro',
        provider: 'Google',
        type: 'multimodal',
        description: 'Google的多模态AI模型',
        rating: 4.5,
        contextLength: '32K',
        pricing: '免费/付费版',
        logo: '🔷',
        features: ['多模态', '免费', '集成', '搜索']
      },
      {
        id: 'palm-2',
        name: 'PaLM 2',
        provider: 'Google',
        type: 'llm',
        description: 'Google的大语言模型',
        rating: 4.3,
        contextLength: '8K',
        pricing: '按使用付费',
        logo: '🌴',
        features: ['多语言', '推理', '代码', '数学']
      },

      // 中国AI模型系列
      {
        id: 'qwen-max',
        name: '通义千问 Max',
        provider: '阿里云',
        type: 'llm',
        description: '阿里云最强的中文大模型',
        rating: 4.4,
        contextLength: '30K',
        pricing: '按量付费',
        logo: '🔷',
        features: ['中文优化', '企业级', '多模态', '推理']
      },
      {
        id: 'ernie-4',
        name: '文心大模型 4.0',
        provider: '百度',
        type: 'llm',
        description: '百度最新的大语言模型',
        rating: 4.3,
        contextLength: '8K',
        pricing: '按量付费',
        logo: '🧠',
        features: ['中文理解', '知识问答', '创作', '推理']
      },
      {
        id: 'chatglm-4',
        name: 'ChatGLM-4',
        provider: '智谱AI',
        type: 'llm',
        description: '智谱AI的对话语言模型',
        rating: 4.2,
        contextLength: '128K',
        pricing: '按量付费',
        logo: '🤖',
        features: ['长上下文', '对话', '中文', '开源']
      },
      {
        id: 'moonshot-v1',
        name: 'Moonshot v1',
        provider: '月之暗面',
        type: 'llm',
        description: '月之暗面的超长上下文模型',
        rating: 4.5,
        contextLength: '200K',
        pricing: '按量付费',
        logo: '🌙',
        features: ['超长上下文', '文档理解', '总结', '分析']
      },
      {
        id: 'doubao-pro',
        name: '豆包 Pro',
        provider: '字节跳动',
        type: 'llm',
        description: '字节跳动的大语言模型',
        rating: 4.1,
        contextLength: '32K',
        pricing: '按量付费',
        logo: '🎪',
        features: ['多模态', '创作', '对话', '年轻化']
      },
      {
        id: 'spark-max',
        name: '讯飞星火 Max',
        provider: '科大讯飞',
        type: 'multimodal',
        description: '科大讯飞的多模态认知大模型',
        rating: 4.2,
        contextLength: '8K',
        pricing: '按量付费',
        logo: '✨',
        features: ['多模态', '语音', '认知', '专业']
      },
      {
        id: 'yi-large',
        name: 'Yi Large',
        provider: '零一万物',
        type: 'llm',
        description: '零一万物的大语言模型',
        rating: 4.3,
        contextLength: '32K',
        pricing: '按量付费',
        logo: '🔺',
        features: ['高性能', '推理', '创作', '多语言']
      },

      // 开源模型系列
      {
        id: 'llama-2-70b',
        name: 'Llama 2 70B',
        provider: 'Meta',
        type: 'llm',
        description: 'Meta开源的大语言模型',
        rating: 4.4,
        contextLength: '4K',
        pricing: '开源免费',
        logo: '🦙',
        features: ['开源', '商用友好', '高性能', '可部署']
      },
      {
        id: 'mistral-7b',
        name: 'Mistral 7B',
        provider: 'Mistral AI',
        type: 'llm',
        description: 'Mistral AI的开源语言模型',
        rating: 4.3,
        contextLength: '32K',
        pricing: '开源免费',
        logo: '🌪️',
        features: ['开源', '高效', '轻量', '欧洲']
      },
      {
        id: 'code-llama',
        name: 'Code Llama',
        provider: 'Meta',
        type: 'llm',
        description: 'Meta专门用于代码的语言模型',
        rating: 4.5,
        contextLength: '16K',
        pricing: '开源免费',
        logo: '💻',
        features: ['代码生成', '开源', '编程', '调试']
      },

      // 专业模型系列
      {
        id: 'gpt-4-vision',
        name: 'GPT-4 Vision',
        provider: 'OpenAI',
        type: 'multimodal',
        description: 'OpenAI的视觉理解模型',
        rating: 4.6,
        contextLength: '128K',
        pricing: '$0.01/1K tokens',
        logo: '👁️',
        features: ['图像理解', '多模态', '分析', '描述']
      },
      {
        id: 'whisper-large',
        name: 'Whisper Large',
        provider: 'OpenAI',
        type: 'audio',
        description: 'OpenAI的语音识别模型',
        rating: 4.7,
        contextLength: 'N/A',
        pricing: '$0.006/分钟',
        logo: '🎤',
        features: ['语音识别', '多语言', '转录', '翻译']
      },
      {
        id: 'stable-diffusion-xl',
        name: 'Stable Diffusion XL',
        provider: 'Stability AI',
        type: 'image',
        description: 'Stability AI的高分辨率图像生成模型',
        rating: 4.5,
        contextLength: 'N/A',
        pricing: '开源免费',
        logo: '🌟',
        features: ['图像生成', '开源', '高分辨率', '可定制']
      },
      {
        id: 'musicgen',
        name: 'MusicGen',
        provider: 'Meta',
        type: 'audio',
        description: 'Meta的音乐生成模型',
        rating: 4.2,
        contextLength: 'N/A',
        pricing: '开源免费',
        logo: '🎵',
        features: ['音乐生成', '开源', '创作', '多风格']
      }
    ];
  }

  /**
   * 内联顶级Agent数据 - 大幅扩展版本
   */
  getInlineTopAgents() {
    return [
      // 开发和编程类Agent
      {
        id: 'devin',
        name: 'Devin',
        provider: 'Cognition AI',
        type: 'autonomous',
        description: '首个AI软件工程师，能够独立完成软件开发任务',
        rating: 4.8,
        complexity: 'Expert',
        pricing: '邀请制',
        logo: '👨‍💻',
        features: ['代码生成', '调试', '部署', '自主开发']
      },
      {
        id: 'cursor-agent',
        name: 'Cursor Agent',
        provider: 'Cursor Team',
        type: 'assistant',
        description: 'AI代码编辑助手，集成在Cursor编辑器中',
        rating: 4.7,
        complexity: 'Intermediate',
        pricing: '免费/Pro版',
        logo: '⚡',
        features: ['代码补全', '重构', '解释', '优化']
      },
      {
        id: 'github-copilot-chat',
        name: 'GitHub Copilot Chat',
        provider: 'GitHub',
        type: 'assistant',
        description: 'GitHub的AI编程对话助手',
        rating: 4.6,
        complexity: 'Beginner',
        pricing: '$10/月',
        logo: '💬',
        features: ['代码解释', '问题解答', '代码生成', '调试']
      },
      {
        id: 'codeium-agent',
        name: 'Codeium Agent',
        provider: 'Codeium',
        type: 'assistant',
        description: '免费的AI代码助手',
        rating: 4.4,
        complexity: 'Beginner',
        pricing: '免费',
        logo: '🚀',
        features: ['代码补全', '多语言', '免费', '快速']
      },
      {
        id: 'aider',
        name: 'Aider',
        provider: 'Paul Gauthier',
        type: 'assistant',
        description: 'AI配对编程工具，支持Git集成',
        rating: 4.5,
        complexity: 'Intermediate',
        pricing: '开源免费',
        logo: '🤝',
        features: ['配对编程', 'Git集成', '开源', '命令行']
      },
      {
        id: 'continue',
        name: 'Continue',
        provider: 'Continue Dev',
        type: 'assistant',
        description: '开源的AI代码助手，支持多种IDE',
        rating: 4.3,
        complexity: 'Intermediate',
        pricing: '开源免费',
        logo: '🔄',
        features: ['开源', '多IDE', '自定义', '本地部署']
      },

      // 多智能体框架
      {
        id: 'autogen',
        name: 'AutoGen',
        provider: 'Microsoft',
        type: 'multi-agent',
        description: 'Microsoft的多智能体对话框架',
        rating: 4.7,
        complexity: 'Advanced',
        pricing: '开源免费',
        logo: '🤝',
        features: ['多智能体', '对话', '协作', '可扩展']
      },
      {
        id: 'crewai',
        name: 'CrewAI',
        provider: 'CrewAI Inc.',
        type: 'multi-agent',
        description: '企业级多Agent协作平台',
        rating: 4.5,
        complexity: 'Advanced',
        pricing: '免费/付费版',
        logo: '🚢',
        features: ['团队协作', '角色分工', '工作流', '企业级']
      },
      {
        id: 'swarm',
        name: 'Swarm',
        provider: 'OpenAI',
        type: 'multi-agent',
        description: 'OpenAI的轻量级多智能体框架',
        rating: 4.4,
        complexity: 'Intermediate',
        pricing: '开源免费',
        logo: '🐝',
        features: ['轻量级', '简单', '灵活', 'OpenAI']
      },
      {
        id: 'metagpt',
        name: 'MetaGPT',
        provider: 'DeepWisdom',
        type: 'multi-agent',
        description: '多智能体软件开发框架',
        rating: 4.3,
        complexity: 'Advanced',
        pricing: '开源免费',
        logo: '🏗️',
        features: ['软件开发', '多角色', '自动化', '开源']
      },

      // 应用开发框架
      {
        id: 'langchain',
        name: 'LangChain',
        provider: 'LangChain Inc.',
        type: 'framework',
        description: '构建LLM应用的开发框架',
        rating: 4.8,
        complexity: 'Intermediate',
        pricing: '开源/企业版',
        logo: '🔗',
        features: ['LLM应用', '链式调用', '工具集成', '生态丰富']
      },
      {
        id: 'llamaindex',
        name: 'LlamaIndex',
        provider: 'LlamaIndex',
        type: 'framework',
        description: 'LLM数据连接和索引框架',
        rating: 4.6,
        complexity: 'Intermediate',
        pricing: '开源免费',
        logo: '🦙',
        features: ['数据连接', '索引', 'RAG', '查询']
      },
      {
        id: 'haystack',
        name: 'Haystack',
        provider: 'deepset',
        type: 'framework',
        description: '端到端NLP框架，支持搜索和问答',
        rating: 4.4,
        complexity: 'Advanced',
        pricing: '开源免费',
        logo: '🔍',
        features: ['NLP', '搜索', '问答', '管道']
      },
      {
        id: 'semantic-kernel',
        name: 'Semantic Kernel',
        provider: 'Microsoft',
        type: 'framework',
        description: 'Microsoft的AI应用开发SDK',
        rating: 4.3,
        complexity: 'Intermediate',
        pricing: '开源免费',
        logo: '🧠',
        features: ['SDK', '插件', '规划', '记忆']
      },

      // 专业领域Agent
      {
        id: 'taskweaver',
        name: 'TaskWeaver',
        provider: 'Microsoft',
        type: 'specialized',
        description: 'Microsoft的数据分析Agent',
        rating: 4.5,
        complexity: 'Advanced',
        pricing: '开源免费',
        logo: '📊',
        features: ['数据分析', '代码生成', '可视化', '插件']
      },
      {
        id: 'autogpt',
        name: 'AutoGPT',
        provider: 'Significant Gravitas',
        type: 'autonomous',
        description: '自主AI代理，能够独立完成复杂任务',
        rating: 4.2,
        complexity: 'Expert',
        pricing: '开源免费',
        logo: '🤖',
        features: ['自主执行', '目标导向', '工具使用', '开源']
      },
      {
        id: 'babyagi',
        name: 'BabyAGI',
        provider: 'Yohei Nakajima',
        type: 'autonomous',
        description: '任务驱动的自主AI系统',
        rating: 4.1,
        complexity: 'Expert',
        pricing: '开源免费',
        logo: '👶',
        features: ['任务管理', '自主学习', '目标执行', '简单']
      },
      {
        id: 'agentgpt',
        name: 'AgentGPT',
        provider: 'Reworkd',
        type: 'autonomous',
        description: '浏览器中的自主AI代理',
        rating: 4.0,
        complexity: 'Intermediate',
        pricing: '免费/付费版',
        logo: '🌐',
        features: ['浏览器', '自主执行', '目标设定', '可视化']
      },

      // 商业和企业Agent
      {
        id: 'zapier-ai-agent',
        name: 'Zapier AI Agent',
        provider: 'Zapier',
        type: 'specialized',
        description: 'Zapier的AI自动化代理',
        rating: 4.4,
        complexity: 'Beginner',
        pricing: '付费版',
        logo: '⚡',
        features: ['自动化', '集成', '工作流', '商业']
      },
      {
        id: 'salesforce-einstein',
        name: 'Salesforce Einstein',
        provider: 'Salesforce',
        type: 'specialized',
        description: 'Salesforce的AI销售助手',
        rating: 4.3,
        complexity: 'Intermediate',
        pricing: '企业版',
        logo: '☁️',
        features: ['CRM', '销售', '预测', '自动化']
      },
      {
        id: 'hubspot-ai-agent',
        name: 'HubSpot AI Agent',
        provider: 'HubSpot',
        type: 'specialized',
        description: 'HubSpot的营销自动化AI',
        rating: 4.2,
        complexity: 'Beginner',
        pricing: '付费版',
        logo: '📈',
        features: ['营销', '自动化', 'CRM', '分析']
      },

      // 研究和分析Agent
      {
        id: 'research-agent',
        name: 'Research Agent',
        provider: 'Tavily',
        type: 'specialized',
        description: '专业的AI研究助手',
        rating: 4.4,
        complexity: 'Intermediate',
        pricing: '免费/付费版',
        logo: '🔬',
        features: ['研究', '信息收集', '分析', '报告']
      },
      {
        id: 'perplexity-agent',
        name: 'Perplexity Agent',
        provider: 'Perplexity',
        type: 'specialized',
        description: 'Perplexity的AI搜索代理',
        rating: 4.5,
        complexity: 'Beginner',
        pricing: '免费/Pro版',
        logo: '🔍',
        features: ['搜索', '引用', '分析', '实时']
      },

      // 创意和内容Agent
      {
        id: 'jasper-agent',
        name: 'Jasper Agent',
        provider: 'Jasper AI',
        type: 'specialized',
        description: 'Jasper的AI内容创作代理',
        rating: 4.3,
        complexity: 'Beginner',
        pricing: '$49/月起',
        logo: '✍️',
        features: ['内容创作', '营销', '品牌', '模板']
      },
      {
        id: 'copy-ai-agent',
        name: 'Copy.ai Agent',
        provider: 'Copy.ai',
        type: 'specialized',
        description: 'Copy.ai的文案生成代理',
        rating: 4.1,
        complexity: 'Beginner',
        pricing: '免费/付费版',
        logo: '📝',
        features: ['文案', '营销', '社交媒体', '简单']
      },

      // 开源社区Agent
      {
        id: 'openai-assistants',
        name: 'OpenAI Assistants',
        provider: 'OpenAI',
        type: 'assistant',
        description: 'OpenAI的助手API和平台',
        rating: 4.6,
        complexity: 'Intermediate',
        pricing: '按使用付费',
        logo: '🤖',
        features: ['API', '工具调用', '文件处理', '代码解释']
      },
      {
        id: 'anthropic-claude-agent',
        name: 'Claude Agent',
        provider: 'Anthropic',
        type: 'assistant',
        description: 'Anthropic Claude的代理能力',
        rating: 4.7,
        complexity: 'Intermediate',
        pricing: '按使用付费',
        logo: '🎭',
        features: ['推理', '分析', '安全', '长上下文']
      },

      // 新兴和实验性Agent
      {
        id: 'multi-on',
        name: 'MultiOn',
        provider: 'MultiOn',
        type: 'autonomous',
        description: 'Web浏览器自动化AI代理',
        rating: 4.2,
        complexity: 'Advanced',
        pricing: '免费/付费版',
        logo: '🌐',
        features: ['浏览器自动化', 'Web交互', '任务执行', '实用']
      },
      {
        id: 'adept-act1',
        name: 'Adept ACT-1',
        provider: 'Adept',
        type: 'autonomous',
        description: 'Adept的通用AI行动模型',
        rating: 4.3,
        complexity: 'Expert',
        pricing: '企业版',
        logo: '🎯',
        features: ['通用行动', '软件交互', '自动化', '企业']
      }
    ];
  }

  /**
   * 快速搜索
   */
  async search(query, type = 'tools') {
    await this.init();
    
    const data = this.cache.get(type === 'tools' ? 'featuredTools' : 
                                type === 'models' ? 'popularModels' : 'topAgents');
    
    if (!query) return data;
    
    const searchTerm = query.toLowerCase();
    return data.filter(item => 
      item.name.toLowerCase().includes(searchTerm) ||
      item.description.toLowerCase().includes(searchTerm) ||
      item.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  /**
   * 获取分类数据
   */
  async getCategories() {
    await this.init();
    return this.cache.get('categories');
  }

  /**
   * 获取工具数据
   */
  async getTools(category = null) {
    await this.init();
    let tools = this.cache.get('featuredTools');
    
    if (category && category !== 'all') {
      tools = tools.filter(tool => tool.category === category);
    }
    
    return tools.sort((a, b) => b.rating - a.rating);
  }

  /**
   * 获取模型数据
   */
  async getModels() {
    await this.init();
    return this.cache.get('popularModels');
  }

  /**
   * 获取Agent数据
   */
  async getAgents() {
    await this.init();
    return this.cache.get('topAgents');
  }

  /**
   * 获取统计数据
   */
  async getStats() {
    await this.init();
    const tools = this.cache.get('featuredTools');
    const models = this.cache.get('popularModels');
    const agents = this.cache.get('topAgents');
    const categories = this.cache.get('categories');
    
    return {
      totalTools: tools.length,
      totalCategories: Object.keys(categories).filter(key => categories[key].count > 0).length,
      totalModels: models.length,
      totalAgents: agents.length
    };
  }
}

// 创建全局实例
window.fastAILoader = new FastAILoader();

// 立即初始化
window.fastAILoader.init();

// 兼容性接口
window.aiToolsLoader = {
  load: () => window.fastAILoader.init(),
  init: () => window.fastAILoader.init(),
  getCategories: () => window.fastAILoader.getCategories(),
  getTools: (category) => window.fastAILoader.getTools(category),
  getModels: () => window.fastAILoader.getModels(),
  getAgents: () => window.fastAILoader.getAgents(),
  getStats: () => window.fastAILoader.getStats(),
  search: (query, type) => window.fastAILoader.search(query, type),
  searchTools: (query, category) => window.fastAILoader.search(query, 'tools').then(results => 
    category ? results.filter(r => r.category === category) : results
  ),
  searchModels: (query) => window.fastAILoader.search(query, 'models'),
  searchAgents: (query) => window.fastAILoader.search(query, 'agents'),
  getDatabase: () => window.fastAILoader.init().then(() => ({
    categories: window.fastAILoader.cache.get('categories'),
    tools: window.fastAILoader.cache.get('featuredTools'),
    models: window.fastAILoader.cache.get('popularModels'),
    agents: window.fastAILoader.cache.get('topAgents')
  }))
};