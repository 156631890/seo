/**
 * 数据分块加载器
 * 将大数据库分割成小块，按需加载
 */

class DataChunks {
  constructor() {
    this.chunks = {
      categories: null,
      tools: null,
      models: null,
      agents: null
    };
    this.loadedChunks = new Set();
  }

  /**
   * 加载分类数据（最小数据块）
   */
  async loadCategories() {
    if (this.chunks.categories) return this.chunks.categories;
    
    // 内联完整的分类数据，避免额外请求
    this.chunks.categories = {
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
      'legal': { name: '法律助手', icon: '⚖️', description: 'AI法律分析和文档工具' },
      'social-media': { name: '社交媒体', icon: '📱', description: 'AI社交媒体管理和内容工具' },
      'e-commerce': { name: '电商工具', icon: '🛒', description: 'AI电商运营和优化工具' },
      'hr-recruitment': { name: '人力资源', icon: '👥', description: 'AI招聘和人力资源管理工具' },
      'real-estate': { name: '房地产', icon: '🏠', description: 'AI房地产分析和管理工具' },
      'agriculture': { name: '农业科技', icon: '🌾', description: 'AI农业和智慧农业工具' },
      'logistics': { name: '物流运输', icon: '🚚', description: 'AI物流优化和管理工具' },
      'travel': { name: '旅游出行', icon: '✈️', description: 'AI旅游规划和出行工具' }
    };
    
    this.loadedChunks.add('categories');
    return this.chunks.categories;
  }

  /**
   * 加载工具数据的前16个（首屏显示）
   */
  async loadToolsFirstBatch() {
    if (this.chunks.toolsFirst) return this.chunks.toolsFirst;
    
    // 内联首批工具数据，包含中国工具
    this.chunks.toolsFirst = [
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
        url: 'https://chat.openai.com'
      },
      {
        id: 'tongyi-qianwen',
        name: '通义千问',
        provider: '阿里云',
        category: 'text-generation',
        description: '阿里云的大语言模型应用，支持多种任务',
        features: ['对话交互', '文档写作', '代码生成', '知识问答'],
        pricing: '免费/付费版',
        tags: ['阿里', '中文', '企业', '多功能'],
        rating: 4.3,
        users: '10M+',
        url: 'https://tongyi.aliyun.com'
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
        url: 'https://claude.ai'
      },
      {
        id: 'wenxin-yiyan',
        name: '文心一言',
        provider: '百度',
        category: 'text-generation',
        description: '百度的AI对话助手，基于文心大模型',
        features: ['智能对话', '内容创作', '知识问答', '多模态理解'],
        pricing: '免费使用',
        tags: ['百度', '中文', '知识', '多模态'],
        rating: 4.2,
        users: '50M+',
        url: 'https://yiyan.baidu.com'
      },
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
        url: 'https://midjourney.com'
      },
      {
        id: 'kimi-chat',
        name: 'Kimi Chat',
        provider: '月之暗面',
        category: 'text-generation',
        description: '支持超长上下文的AI助手',
        features: ['超长上下文', '文档分析', '网页总结', '多语言'],
        pricing: '免费/会员版',
        tags: ['长上下文', '文档', '总结', '创新'],
        rating: 4.5,
        users: '5M+',
        url: 'https://kimi.moonshot.cn'
      },
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
        url: 'https://github.com/features/copilot'
      },
      {
        id: 'doubao',
        name: '豆包',
        provider: '字节跳动',
        category: 'text-generation',
        description: '字节跳动的AI助手，集成多种功能',
        features: ['智能对话', '内容创作', '学习辅导', '生活助手'],
        pricing: '免费使用',
        tags: ['字节', '多功能', '年轻化', '免费'],
        rating: 4.1,
        users: '20M+',
        url: 'https://doubao.com'
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
        url: 'https://openai.com/dall-e-3'
      },
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
        url: 'https://notion.so/product/ai'
      }
    ];
    
    return this.chunks.toolsFirst;
  }

  /**
   * 异步加载完整数据
   */
  async loadFullData() {
    if (this.loadedChunks.has('full')) return;
    
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = '/ai-tools-database.js';
      script.onload = () => {
        if (typeof aiToolsDatabase !== 'undefined') {
          this.chunks.tools = aiToolsDatabase.tools;
          this.chunks.models = aiToolsDatabase.models;
          this.chunks.agents = aiToolsDatabase.agents;
          this.loadedChunks.add('full');
          resolve();
        } else {
          reject(new Error('完整数据加载失败'));
        }
      };
      script.onerror = () => reject(new Error('数据脚本加载失败'));
      document.head.appendChild(script);
    });
  }

  /**
   * 获取工具数据
   */
  async getTools() {
    if (this.chunks.tools) return this.chunks.tools;
    
    // 如果完整数据未加载，先返回首批数据
    const firstBatch = await this.loadToolsFirstBatch();
    
    // 后台加载完整数据
    this.loadFullData().then(() => {
      // 数据加载完成后触发更新事件
      window.dispatchEvent(new CustomEvent('fullDataLoaded'));
    });
    
    return firstBatch;
  }

  /**
   * 获取模型数据
   */
  async getModels() {
    if (!this.chunks.models) {
      await this.loadFullData();
    }
    return this.chunks.models || [];
  }

  /**
   * 获取Agent数据
   */
  async getAgents() {
    if (!this.chunks.agents) {
      await this.loadFullData();
    }
    return this.chunks.agents || [];
  }
}

// 创建全局实例
window.dataChunks = new DataChunks();