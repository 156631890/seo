/**
 * AI工具数据加载器 - 超级优化版本
 * 使用分块加载和缓存策略
 */

class AIToolsLoader {
  constructor() {
    this.database = null;
    this.isLoading = false;
    this.loadPromise = null;
    this.manager = null;
    this.loadStartTime = null;
    this.dataChunks = window.dataChunks;
    this.fastMode = true; // 启用快速模式
  }

  /**
   * 快速加载 - 使用分块数据
   * @returns {Promise} 加载完成的Promise
   */
  load() {
    if (this.database) {
      return Promise.resolve(this.database);
    }

    if (this.loadPromise) {
      return this.loadPromise;
    }

    this.isLoading = true;
    this.loadStartTime = Date.now();
    
    // 快速模式：立即返回基础数据
    this.loadPromise = this.fastLoad();
    return this.loadPromise;
  }

  /**
   * 快速加载模式
   */
  async fastLoad() {
    try {
      // 立即加载分类数据
      const categories = await this.dataChunks.loadCategories();
      
      // 立即加载首批工具数据
      const toolsFirst = await this.dataChunks.loadToolsFirstBatch();
      
      // 构建最小数据库
      this.database = {
        categories: categories,
        tools: toolsFirst,
        models: [], // 稍后加载
        agents: []  // 稍后加载
      };
      
      // 立即开始加载完整数据
      this.loadFullDataInBackground();
      
      // 创建简化的管理器
      this.manager = new FastToolsManager(this.database, this.dataChunks);
      
      this.isLoading = false;
      const loadTime = Date.now() - this.loadStartTime;
      console.log(`快速数据加载完成，耗时: ${loadTime}ms`);
      
      // 监听完整数据加载完成事件
      window.addEventListener('fullDataLoaded', () => {
        this.updateWithFullData();
      });
      
      return this.database;
    } catch (error) {
      this.isLoading = false;
      throw error;
    }
  }

  /**
   * 后台加载完整数据
   */
  async loadFullDataInBackground() {
    try {
      // 使用requestIdleCallback在空闲时加载
      if (window.requestIdleCallback) {
        requestIdleCallback(async () => {
          await this.updateWithFullData();
        }, { timeout: 2000 });
      } else {
        setTimeout(async () => {
          await this.updateWithFullData();
        }, 100);
      }
    } catch (error) {
      console.error('后台加载完整数据失败:', error);
    }
  }

  /**
   * 更新为完整数据
   */
  async updateWithFullData() {
    try {
      // 直接从全局数据库获取数据，避免分块加载的复杂性
      if (typeof aiToolsDatabase !== 'undefined') {
        this.database.tools = aiToolsDatabase.tools || [];
        this.database.models = aiToolsDatabase.models || [];
        this.database.agents = aiToolsDatabase.agents || [];
        
        console.log(`完整数据更新完成: ${this.database.tools.length}个工具, ${this.database.models.length}个模型, ${this.database.agents.length}个Agent`);
        
        // 触发数据更新事件
        window.dispatchEvent(new CustomEvent('dataUpdated'));
      } else {
        // 如果全局数据库还没加载，尝试加载
        await this.dataChunks.loadFullData();
        const fullTools = await this.dataChunks.getTools();
        const models = await this.dataChunks.getModels();
        const agents = await this.dataChunks.getAgents();
        
        this.database.tools = fullTools;
        this.database.models = models;
        this.database.agents = agents;
        
        console.log(`完整数据更新完成: ${this.database.tools.length}个工具, ${this.database.models.length}个模型, ${this.database.agents.length}个Agent`);
        
        // 触发数据更新事件
        window.dispatchEvent(new CustomEvent('dataUpdated'));
      }
    } catch (error) {
      console.error('更新完整数据失败:', error);
    }
  }

  /**
   * 处理加载完成的数据
   */
  processLoadedData(resolve, reject) {
    try {
      if (typeof aiToolsDatabase !== 'undefined') {
        this.database = aiToolsDatabase;
        this.manager = aiToolsManager;
        this.isLoading = false;
        
        const loadTime = Date.now() - this.loadStartTime;
        console.log(`数据库加载完成，耗时: ${loadTime}ms`);
        
        resolve(this.database);
      } else {
        const error = new Error('数据库加载失败');
        this.isLoading = false;
        reject(error);
      }
    } catch (error) {
      this.isLoading = false;
      reject(error);
    }
  }

  /**
   * 获取数据库实例
   * @returns {Promise} 包含数据库的Promise
   */
  getDatabase() {
    return this.load().then(() => this.database);
  }

  /**
   * 获取数据管理器实例
   * @returns {Promise} 包含数据管理器的Promise
   */
  getManager() {
    return this.load().then(() => this.manager);
  }

  /**
   * 搜索工具
   * @param {string} query 搜索关键词
   * @param {string} category 分类
   * @param {string} priceRange 价格范围
   * @param {Array} features 功能列表
   * @param {number} rating 最低评分
   * @returns {Promise} 包含搜索结果的Promise
   */
  searchTools(query, category = null, priceRange = null, features = [], rating = 0) {
    return this.getManager().then(manager => {
      return manager.searchTools(query, category, priceRange, features, rating);
    });
  }

  /**
   * 搜索模型
   * @param {string} query 搜索关键词
   * @param {string} type 模型类型
   * @param {string} provider 提供商
   * @param {Array} features 功能列表
   * @param {number} rating 最低评分
   * @returns {Promise} 包含搜索结果的Promise
   */
  searchModels(query, type = null, provider = null, features = [], rating = 0) {
    return this.getManager().then(manager => {
      return manager.searchModels(query, type, provider, features, rating);
    });
  }

  /**
   * 搜索Agent
   * @param {string} query 搜索关键词
   * @param {string} type Agent类型
   * @param {string} complexity 复杂度
   * @param {Array} features 功能列表
   * @param {number} rating 最低评分
   * @returns {Promise} 包含搜索结果的Promise
   */
  searchAgents(query, type = null, complexity = null, features = [], rating = 0) {
    return this.getManager().then(manager => {
      return manager.searchAgents(query, type, complexity, features, rating);
    });
  }

  /**
   * 获取分类统计
   * @returns {Promise} 包含分类统计的Promise
   */
  getCategoryStats() {
    return this.getManager().then(manager => {
      return manager.getCategoryStats();
    });
  }

  /**
   * 获取推荐工具
   * @param {number} limit 限制数量
   * @returns {Promise} 包含推荐工具的Promise
   */
  getRecommendedTools(limit = 6) {
    return this.getManager().then(manager => {
      return manager.getRecommendedTools(limit);
    });
  }
}

/**
 * 快速工具管理器 - 轻量级版本
 */
class FastToolsManager {
  constructor(database, dataChunks) {
    this.db = database;
    this.dataChunks = dataChunks;
  }

  // 搜索工具 - 快速版本
  async searchTools(query, category = null) {
    let tools = await this.dataChunks.getTools();
    
    if (query) {
      const searchTerm = query.toLowerCase();
      tools = tools.filter(tool =>
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }

    if (category) {
      tools = tools.filter(tool => tool.category === category);
    }

    return tools.sort((a, b) => b.rating - a.rating);
  }

  // 搜索模型
  async searchModels(query) {
    const models = await this.dataChunks.getModels();
    
    if (!query) return models;
    
    const searchTerm = query.toLowerCase();
    return models.filter(model =>
      model.name.toLowerCase().includes(searchTerm) ||
      model.description.toLowerCase().includes(searchTerm)
    ).sort((a, b) => b.rating - a.rating);
  }

  // 搜索Agent
  async searchAgents(query) {
    const agents = await this.dataChunks.getAgents();
    
    if (!query) return agents;
    
    const searchTerm = query.toLowerCase();
    return agents.filter(agent =>
      agent.name.toLowerCase().includes(searchTerm) ||
      agent.description.toLowerCase().includes(searchTerm)
    ).sort((a, b) => b.rating - a.rating);
  }

  // 获取分类统计
  getCategoryStats() {
    const stats = {};
    Object.keys(this.db.categories).forEach(cat => {
      stats[cat] = this.db.tools.filter(tool => tool.category === cat).length;
    });
    return stats;
  }

  // 获取推荐工具
  getRecommendedTools(limit = 6) {
    return this.db.tools
      .sort((a, b) => b.rating - a.rating)
      .slice(0, limit);
  }
}

// 创建单例实例
const aiToolsLoader = new AIToolsLoader();

// 导出单例
window.aiToolsLoader = aiToolsLoader;