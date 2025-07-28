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
    this.loadStartTime = null;
  }

  /**
   * 加载数据库 - 优化版本
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
    
    // 创建优化的加载Promise
    this.loadPromise = new Promise((resolve, reject) => {
      // 使用requestIdleCallback优化加载时机
      const loadScript = () => {
        const script = document.createElement('script');
        script.src = '/ai-tools-database.js';
        
        // 添加预加载提示
        script.setAttribute('importance', 'high');
        
        script.onload = () => {
          // 使用requestIdleCallback延迟处理，避免阻塞主线程
          if (window.requestIdleCallback) {
            requestIdleCallback(() => this.processLoadedData(resolve, reject));
          } else {
            setTimeout(() => this.processLoadedData(resolve, reject), 0);
          }
        };
        
        script.onerror = () => {
          const error = new Error('数据库脚本加载失败');
          this.isLoading = false;
          reject(error);
        };
        
        document.head.appendChild(script);
      };

      // 如果支持requestIdleCallback，在空闲时加载
      if (window.requestIdleCallback) {
        requestIdleCallback(loadScript, { timeout: 1000 });
      } else {
        loadScript();
      }
    });

    return this.loadPromise;
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

// 创建单例实例
const aiToolsLoader = new AIToolsLoader();

// 导出单例
window.aiToolsLoader = aiToolsLoader;