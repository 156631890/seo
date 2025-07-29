/**
 * 快速详情页面加载器
 * 专门为详情页面优化，避免加载整个数据库
 */

class FastDetailLoader {
  constructor() {
    this.cache = new Map();
    this.isLoading = false;
  }

  /**
   * 快速获取单个项目详情
   * @param {string} id 项目ID
   * @param {string} type 项目类型 (tool/model/agent)
   * @returns {Promise} 项目详情
   */
  async getItemDetails(id, type) {
    const cacheKey = `${type}-${id}`;
    
    // 检查缓存
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    try {
      // 直接从全局数据库查找，避免等待完整加载
      const item = await this.findItemDirectly(id, type);
      
      if (item) {
        // 缓存结果
        this.cache.set(cacheKey, item);
        return item;
      }

      // 如果直接查找失败，尝试加载对应的数据块
      return await this.loadItemFromChunk(id, type);
    } catch (error) {
      console.error(`加载${type}详情失败:`, error);
      throw new Error(`无法加载${type}详情: ${error.message}`);
    }
  }

  /**
   * 直接从全局数据库查找项目
   * @param {string} id 项目ID
   * @param {string} type 项目类型
   * @returns {Object|null} 项目详情或null
   */
  async findItemDirectly(id, type) {
    // 检查全局数据库是否已加载
    if (typeof aiToolsDatabase !== 'undefined') {
      const database = aiToolsDatabase;
      
      switch (type) {
        case 'tool':
          return database.tools?.find(t => t.id === id) || null;
        case 'model':
          return database.models?.find(m => m.id === id) || null;
        case 'agent':
          return database.agents?.find(a => a.id === id) || null;
        default:
          return null;
      }
    }

    return null;
  }

  /**
   * 从数据块加载项目
   * @param {string} id 项目ID
   * @param {string} type 项目类型
   * @returns {Promise} 项目详情
   */
  async loadItemFromChunk(id, type) {
    try {
      // 根据类型加载对应的数据块
      let items = [];
      
      switch (type) {
        case 'tool':
          // 优先加载热门工具
          if (window.dataChunks) {
            items = await window.dataChunks.loadToolsFirstBatch();
            let item = items.find(t => t.id === id);
            if (item) return item;
            
            // 如果在第一批中没找到，加载完整工具数据
            items = await window.dataChunks.getTools();
          } else {
            // 直接从脚本加载
            await this.loadDatabaseScript();
            return this.findItemDirectly(id, type);
          }
          break;
          
        case 'model':
          if (window.dataChunks) {
            items = await window.dataChunks.getModels();
          } else {
            await this.loadDatabaseScript();
            return this.findItemDirectly(id, type);
          }
          break;
          
        case 'agent':
          if (window.dataChunks) {
            items = await window.dataChunks.getAgents();
          } else {
            await this.loadDatabaseScript();
            return this.findItemDirectly(id, type);
          }
          break;
      }

      const item = items.find(item => item.id === id);
      if (item) {
        this.cache.set(`${type}-${id}`, item);
        return item;
      }

      throw new Error(`找不到ID为${id}的${type}`);
    } catch (error) {
      console.error(`从数据块加载${type}失败:`, error);
      throw error;
    }
  }

  /**
   * 加载数据库脚本
   * @returns {Promise} 加载完成的Promise
   */
  loadDatabaseScript() {
    return new Promise((resolve, reject) => {
      if (typeof aiToolsDatabase !== 'undefined') {
        resolve();
        return;
      }

      if (this.isLoading) {
        // 如果正在加载，等待加载完成
        const checkLoaded = () => {
          if (typeof aiToolsDatabase !== 'undefined') {
            resolve();
          } else {
            setTimeout(checkLoaded, 100);
          }
        };
        checkLoaded();
        return;
      }

      this.isLoading = true;

      const script = document.createElement('script');
      script.src = '/ai-tools-database.js';
      script.onload = () => {
        this.isLoading = false;
        resolve();
      };
      script.onerror = () => {
        this.isLoading = false;
        reject(new Error('数据库脚本加载失败'));
      };
      
      document.head.appendChild(script);
    });
  }

  /**
   * 获取相关项目
   * @param {Object} item 当前项目
   * @param {string} type 项目类型
   * @param {number} limit 限制数量
   * @returns {Promise} 相关项目列表
   */
  async getRelatedItems(item, type, limit = 3) {
    try {
      let allItems = [];
      
      // 根据类型获取所有项目
      switch (type) {
        case 'tool':
          if (typeof aiToolsDatabase !== 'undefined') {
            allItems = aiToolsDatabase.tools || [];
          } else if (window.dataChunks) {
            allItems = await window.dataChunks.getTools();
          }
          // 按分类筛选相关工具
          return allItems
            .filter(t => t.category === item.category && t.id !== item.id)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
            
        case 'model':
          if (typeof aiToolsDatabase !== 'undefined') {
            allItems = aiToolsDatabase.models || [];
          } else if (window.dataChunks) {
            allItems = await window.dataChunks.getModels();
          }
          // 按提供商筛选相关模型
          return allItems
            .filter(m => m.provider === item.provider && m.id !== item.id)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
            
        case 'agent':
          if (typeof aiToolsDatabase !== 'undefined') {
            allItems = aiToolsDatabase.agents || [];
          } else if (window.dataChunks) {
            allItems = await window.dataChunks.getAgents();
          }
          // 按类型筛选相关代理
          return allItems
            .filter(a => a.type === item.type && a.id !== item.id)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
      }

      return [];
    } catch (error) {
      console.error('获取相关项目失败:', error);
      return [];
    }
  }

  /**
   * 预加载热门项目
   * @returns {Promise} 预加载完成的Promise
   */
  async preloadPopularItems() {
    try {
      if (window.dataChunks) {
        // 预加载热门工具
        const popularTools = await window.dataChunks.loadToolsFirstBatch();
        popularTools.forEach(tool => {
          this.cache.set(`tool-${tool.id}`, tool);
        });

        // 预加载热门模型
        const popularModels = await window.dataChunks.loadModelsFirstBatch();
        if (popularModels) {
          popularModels.forEach(model => {
            this.cache.set(`model-${model.id}`, model);
          });
        }

        console.log(`预加载完成: ${popularTools.length}个热门工具`);
      }
    } catch (error) {
      console.error('预加载热门项目失败:', error);
    }
  }

  /**
   * 清除缓存
   */
  clearCache() {
    this.cache.clear();
  }

  /**
   * 获取缓存统计
   * @returns {Object} 缓存统计信息
   */
  getCacheStats() {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}

// 创建单例实例
const fastDetailLoader = new FastDetailLoader();

// 页面加载时预加载热门项目
document.addEventListener('DOMContentLoaded', () => {
  // 延迟预加载，避免阻塞页面渲染
  setTimeout(() => {
    fastDetailLoader.preloadPopularItems();
  }, 100);
});

// 导出到全局
window.fastDetailLoader = fastDetailLoader;