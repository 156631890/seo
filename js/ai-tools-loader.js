/**
 * AI工具数据加载器
 * 负责异步加载AI工具、模型和Agent数据
 */

class AIToolsLoader {
  constructor() {
    this.database = null;
    this.isLoading = false;
    this.loadPromise = null;
    this.manager = null;
  }

  /**
   * 加载数据库
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
    
    // 创建加载Promise
    this.loadPromise = new Promise((resolve, reject) => {
      // 在实际应用中，这里可以从服务器加载数据
      // 现在我们直接使用已有的数据库
      const script = document.createElement('script');
      script.src = '/ai-tools-database.js';
      script.onload = () => {
        if (typeof aiToolsDatabase !== 'undefined') {
          this.database = aiToolsDatabase;
          this.manager = aiToolsManager;
          this.isLoading = false;
          resolve(this.database);
        } else {
          const error = new Error('数据库加载失败');
          this.isLoading = false;
          reject(error);
        }
      };
      script.onerror = () => {
        const error = new Error('数据库脚本加载失败');
        this.isLoading = false;
        reject(error);
      };
      document.head.appendChild(script);
    });

    return this.loadPromise;
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

// 创建单例实例
const aiToolsLoader = new AIToolsLoader();

// 导出单例
window.aiToolsLoader = aiToolsLoader;