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
      'text-generation': { name: '文本生成', icon: '✍️', count: 25 },
      'image-generation': { name: '图像生成', icon: '🎨', count: 18 },
      'code-assistant': { name: '代码助手', icon: '💻', count: 15 },
      'productivity': { name: '效率工具', icon: '⚡', count: 20 },
      'data-analysis': { name: '数据分析', icon: '📊', count: 12 },
      'voice-audio': { name: '语音音频', icon: '🎵', count: 10 },
      'video-creation': { name: '视频创作', icon: '🎬', count: 8 },
      'automation': { name: '自动化', icon: '🤖', count: 14 },
      'research': { name: '研究助手', icon: '🔍', count: 11 },
      'design': { name: '设计工具', icon: '🎯', count: 13 },
      'education': { name: '教育学习', icon: '📚', count: 9 },
      'marketing': { name: '营销工具', icon: '📣', count: 16 }
    };
  }

  /**
   * 内联精选工具数据
   */
  getInlineFeaturedTools() {
    return [
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
        description: '阿里云的大语言模型应用',
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
        description: 'OpenAI的图像生成模型',
        rating: 4.6,
        users: '50M+',
        pricing: 'ChatGPT Plus $20/月',
        tags: ['绘画', 'AI艺术', '创意'],
        url: 'https://openai.com/dall-e-3',
        logo: '🖼️'
      },
      {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        provider: 'GitHub/OpenAI',
        category: 'code-assistant',
        description: 'AI编程助手，直接集成在IDE中',
        rating: 4.6,
        users: '5M+',
        pricing: '$10/月',
        tags: ['编程', 'IDE', '开发'],
        url: 'https://github.com/features/copilot',
        logo: '💻'
      },
      {
        id: 'notion-ai',
        name: 'Notion AI',
        provider: 'Notion',
        category: 'productivity',
        description: '集成在Notion中的AI助手',
        rating: 4.4,
        users: '30M+',
        pricing: '$10/月',
        tags: ['笔记', '写作', '总结'],
        url: 'https://notion.so/product/ai',
        logo: '📝'
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
    
    if (category) {
      tools = tools.filter(tool => tool.category === category);
    }
    
    return tools;
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
    const categories = this.cache.get('categories');
    const totalTools = Object.values(categories).reduce((sum, cat) => sum + cat.count, 0);
    
    return {
      totalTools,
      totalCategories: Object.keys(categories).length,
      totalModels: 20,
      totalAgents: 40
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