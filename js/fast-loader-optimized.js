/**
 * 超级优化的AI工具快速加载器
 * 专注于首屏性能和SEO优化
 */

class FastAILoader {
  constructor() {
    this.cache = new Map();
    this.isInitialized = false;
    this.loadStartTime = performance.now();
    
    // 核心数据缓存
    this.coreData = {
      categories: null,
      tools: [],
      models: [],
      agents: [],
      stats: null
    };
    
    // 性能监控
    this.performanceMarks = {};
  }

  /**
   * 标记性能点
   */
  mark(name) {
    this.performanceMarks[name] = performance.now() - this.loadStartTime;
    if (window.performanceMonitor) {
      window.performanceMonitor.mark(name);
    }
  }

  /**
   * 超快初始化 - 立即可用
   */
  async init() {
    if (this.isInitialized) {
      return this.coreData;
    }

    try {
      // 立即加载分类数据（最小必需）
      await this.loadCategories();
      this.mark('CategoriesLoaded');
      
      // 立即加载基础统计（用于首屏显示）
      await this.loadBasicStats();
      this.mark('StatsLoaded');
      
      // 异步加载完整数据
      this.loadFullDataAsync();
      
      this.isInitialized = true;
      this.mark('InitCompleted');
      
      return this.coreData;
    } catch (error) {
      console.error('快速加载器初始化失败:', error);
      throw error;
    }
  }

  /**
   * 加载分类数据
   */
  async loadCategories() {
    if (this.coreData.categories) {
      return this.coreData.categories;
    }

    // 内联关键分类数据，避免额外请求
    this.coreData.categories = {
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
    };

    return this.coreData.categories;
  }

  /**
   * 加载基础统计数据
   */
  async loadBasicStats() {
    if (this.coreData.stats) {
      return this.coreData.stats;
    }

    // 基于实际数据的统计
    this.coreData.stats = {
      totalTools: 500,
      totalModels: 50,
      totalAgents: 30,
      totalCategories: 15,
      lastUpdated: '2025-02-08'
    };

    return this.coreData.stats;
  }

  /**
   * 异步加载完整数据
   */
  async loadFullDataAsync() {
    try {
      // 使用 requestIdleCallback 在浏览器空闲时加载
      if (window.requestIdleCallback) {
        requestIdleCallback(async () => {
          await this.loadCompleteData();
        }, { timeout: 2000 });
      } else {
        // 降级到 setTimeout
        setTimeout(async () => {
          await this.loadCompleteData();
        }, 100);
      }
    } catch (error) {
      console.error('异步加载完整数据失败:', error);
    }
  }

  /**
   * 加载完整数据
   */
  async loadCompleteData() {
    try {
      // 检查全局数据库是否已加载
      if (typeof aiToolsDatabase !== 'undefined') {
        this.coreData.tools = aiToolsDatabase.tools || [];
        this.coreData.models = aiToolsDatabase.models || [];
        this.coreData.agents = aiToolsDatabase.agents || [];
        
        this.mark('FullDataLoaded');
        
        // 触发数据更新事件
        window.dispatchEvent(new CustomEvent('fullDataLoaded', {
          detail: {
            toolsCount: this.coreData.tools.length,
            modelsCount: this.coreData.models.length,
            agentsCount: this.coreData.agents.length
          }
        }));
        
        console.log(`完整数据加载完成: ${this.coreData.tools.length}个工具, ${this.coreData.models.length}个模型, ${this.coreData.agents.length}个Agent`);
      } else {
        // 如果全局数据库未加载，尝试动态加载
        await this.loadDatabaseScript();
      }
    } catch (error) {
      console.error('加载完整数据失败:', error);
    }
  }

  /**
   * 动态加载数据库脚本
   */
  async loadDatabaseScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = '/data/ai-tools-database-enhanced.js';
      script.onload = () => {
        if (typeof aiToolsDatabase !== 'undefined') {
          this.coreData.tools = aiToolsDatabase.tools || [];
          this.coreData.models = aiToolsDatabase.models || [];
          this.coreData.agents = aiToolsDatabase.agents || [];
          resolve();
        } else {
          reject(new Error('数据库脚本加载失败'));
        }
      };
      script.onerror = () => reject(new Error('数据库脚本加载错误'));
      document.head.appendChild(script);
    });
  }

  /**
   * 获取分类数据
   */
  async getCategories() {
    if (!this.coreData.categories) {
      await this.loadCategories();
    }
    return this.coreData.categories;
  }

  /**
   * 获取统计数据
   */
  async getStats() {
    if (!this.coreData.stats) {
      await this.loadBasicStats();
    }
    return this.coreData.stats;
  }

  /**
   * 获取工具数据（支持分类筛选）
   */
  async getTools(category = null) {
    // 如果完整数据还未加载，返回占位数据
    if (this.coreData.tools.length === 0) {
      return this.getPlaceholderTools(category);
    }

    let tools = this.coreData.tools;
    
    if (category && category !== 'all') {
      tools = tools.filter(tool => tool.category === category);
    }
    
    return tools.sort((a, b) => b.rating - a.rating);
  }

  /**
   * 获取占位工具数据（首屏快速显示）
   */
  getPlaceholderTools(category = null) {
    const placeholderTools = [
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
        url: 'https://chat.openai.com'
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
        url: 'https://claude.ai'
      },
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
        url: 'https://midjourney.com'
      },
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
        url: 'https://github.com/features/copilot'
      }
    ];

    if (category && category !== 'all') {
      return placeholderTools.filter(tool => tool.category === category);
    }
    
    return placeholderTools;
  }

  /**
   * 获取模型数据
   */
  async getModels() {
    if (this.coreData.models.length === 0) {
      return this.getPlaceholderModels();
    }
    return this.coreData.models.sort((a, b) => b.rating - a.rating);
  }

  /**
   * 获取占位模型数据
   */
  getPlaceholderModels() {
    return [
      {
        id: 'gpt-4o',
        name: 'GPT-4o',
        provider: 'OpenAI',
        type: 'multimodal',
        description: 'OpenAI最新的多模态大语言模型，支持文本、图像、音频处理，推理能力显著提升。',
        features: ['文本生成', '图像理解', '代码编写', '数学推理', '多语言支持'],
        rating: 4.8,
        icon: '🤖',
        url: 'https://openai.com/gpt-4o'
      },
      {
        id: 'claude-3-5-sonnet',
        name: 'Claude 3.5 Sonnet',
        provider: 'Anthropic',
        type: 'llm',
        description: 'Anthropic的旗舰模型，在推理、编程和创意写作方面表现出色，安全性高。',
        features: ['长文本处理', '代码分析', '创意写作', '逻辑推理', '安全对话'],
        rating: 4.7,
        icon: '🧠',
        url: 'https://claude.ai'
      },
      {
        id: 'gemini-2-0',
        name: 'Gemini 2.0',
        provider: 'Google',
        type: 'multimodal',
        description: 'Google最新的多模态AI模型，集成了搜索、地图等Google服务。',
        features: ['实时搜索', '多模态理解', '代码生成', '数据分析', '工具调用'],
        rating: 4.6,
        icon: '💎',
        url: 'https://gemini.google.com'
      }
    ];
  }

  /**
   * 获取Agent数据
   */
  async getAgents() {
    if (this.coreData.agents.length === 0) {
      return this.getPlaceholderAgents();
    }
    return this.coreData.agents.sort((a, b) => b.rating - a.rating);
  }

  /**
   * 获取占位Agent数据
   */
  getPlaceholderAgents() {
    return [
      {
        id: 'autogpt',
        name: 'AutoGPT',
        type: 'autonomous',
        complexity: '高级',
        description: '自主AI代理，能够独立完成复杂任务，具有记忆和规划能力。',
        tags: ['自主', '规划', '记忆', '任务执行'],
        rating: 4.5,
        useCase: '自动化任务执行',
        github: 'https://github.com/Significant-Gravitas/AutoGPT'
      },
      {
        id: 'langchain',
        name: 'LangChain',
        type: 'framework',
        complexity: '中级',
        description: '构建LLM应用的框架，提供丰富的工具和组件。',
        tags: ['框架', '工具链', '集成', '开发'],
        rating: 4.4,
        useCase: 'LLM应用开发',
        github: 'https://github.com/langchain-ai/langchain'
      }
    ];
  }

  /**
   * 搜索工具
   */
  async searchTools(query, category = null) {
    const tools = await this.getTools(category);
    
    if (!query || query.trim() === '') {
      return tools;
    }
    
    const searchTerm = query.toLowerCase();
    return tools.filter(tool =>
      tool.name.toLowerCase().includes(searchTerm) ||
      tool.description.toLowerCase().includes(searchTerm) ||
      (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
    );
  }

  /**
   * 搜索模型
   */
  async searchModels(query) {
    const models = await this.getModels();
    
    if (!query || query.trim() === '') {
      return models;
    }
    
    const searchTerm = query.toLowerCase();
    return models.filter(model =>
      model.name.toLowerCase().includes(searchTerm) ||
      model.description.toLowerCase().includes(searchTerm) ||
      model.provider.toLowerCase().includes(searchTerm)
    );
  }

  /**
   * 搜索Agent
   */
  async searchAgents(query) {
    const agents = await this.getAgents();
    
    if (!query || query.trim() === '') {
      return agents;
    }
    
    const searchTerm = query.toLowerCase();
    return agents.filter(agent =>
      agent.name.toLowerCase().includes(searchTerm) ||
      agent.description.toLowerCase().includes(searchTerm) ||
      (agent.tags && agent.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
    );
  }

  /**
   * 获取性能报告
   */
  getPerformanceReport() {
    return {
      ...this.performanceMarks,
      totalTime: performance.now() - this.loadStartTime
    };
  }
}

// 创建全局实例
window.fastAILoader = new FastAILoader();

// 立即初始化
document.addEventListener('DOMContentLoaded', () => {
  window.fastAILoader.init().then(() => {
    console.log('快速加载器初始化完成');
  }).catch(error => {
    console.error('快速加载器初始化失败:', error);
  });
});