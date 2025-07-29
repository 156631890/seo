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
      'video-creation': { name: '视频创作', icon: '🎬', count: 3 },
      'automation': { name: '自动化', icon: '🤖', count: 0 },
      'research': { name: '研究助手', icon: '🔍', count: 0 },
      'design': { name: '设计工具', icon: '🎯', count: 0 },
      'education': { name: '教育学习', icon: '📚', count: 0 },
      'marketing': { name: '营销工具', icon: '📣', count: 0 },
      'customer-service': { name: '客户服务', icon: '🤝', count: 0 },
      'translation': { name: '翻译工具', icon: '🌐', count: 0 },
      'security': { name: '安全工具', icon: '🔒', count: 0 },
      'gaming': { name: '游戏开发', icon: '🎮', count: 0 },
      'music': { name: '音乐创作', icon: '🎹', count: 0 },
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
      }
    ];
  }

  /**
   * 内联热门模型数据
   */
  getInlinePopularModels() {
    return [
      {
        id: 'gpt-4',
        name: 'GPT-4',
        provider: 'OpenAI',
        type: 'llm',
        description: 'OpenAI最强大的语言模型',
        rating: 4.8,
        contextLength: '128K',
        pricing: '$0.03/1K tokens',
        logo: '🧠'
      },
      {
        id: 'claude-3-opus',
        name: 'Claude 3 Opus',
        provider: 'Anthropic',
        type: 'llm',
        description: 'Anthropic最强的推理模型',
        rating: 4.7,
        contextLength: '200K',
        pricing: '$15/1M tokens',
        logo: '🎭'
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
        logo: '💎'
      },
      {
        id: 'qwen-max',
        name: '通义千问 Max',
        provider: '阿里云',
        type: 'llm',
        description: '阿里云最强的中文大模型',
        rating: 4.3,
        contextLength: '30K',
        pricing: '按量付费',
        logo: '🔷'
      }
    ];
  }

  /**
   * 内联顶级Agent数据
   */
  getInlineTopAgents() {
    return [
      {
        id: 'autogen',
        name: 'AutoGen',
        provider: 'Microsoft',
        type: 'multi-agent',
        description: 'Microsoft的多智能体对话框架',
        rating: 4.6,
        complexity: 'Advanced',
        pricing: '开源免费',
        logo: '🤝'
      },
      {
        id: 'langchain',
        name: 'LangChain',
        provider: 'LangChain Inc.',
        type: 'framework',
        description: '构建LLM应用的开发框架',
        rating: 4.7,
        complexity: 'Intermediate',
        pricing: '开源/企业版',
        logo: '🔗'
      },
      {
        id: 'crewai',
        name: 'CrewAI',
        provider: 'CrewAI Inc.',
        type: 'multi-agent',
        description: '企业级多Agent协作平台',
        rating: 4.4,
        complexity: 'Advanced',
        pricing: '免费/付费版',
        logo: '🚢'
      },
      {
        id: 'devin',
        name: 'Devin',
        provider: 'Cognition AI',
        type: 'autonomous',
        description: '首个AI软件工程师',
        rating: 4.8,
        complexity: 'Expert',
        pricing: '邀请制',
        logo: '👨‍💻'
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