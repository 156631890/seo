/**
 * 首页逻辑
 * 负责首页的工具展示和交互
 */

class IndexPage {
  constructor() {
    this.loader = window.aiToolsLoader;
  }

  /**
   * 初始化页面
   */
  async initialize() {
    try {
      // 加载数据库
      await this.loader.load();

      // 渲染推荐工具
      await this.renderRecommendedTools();
    } catch (error) {
      console.error('初始化首页出错:', error);
    }
  }

  /**
   * 渲染推荐工具
   */
  async renderRecommendedTools() {
    const toolsGrid = document.getElementById('tools-grid');
    if (!toolsGrid) return;

    try {
      const manager = await this.loader.getManager();
      const recommendedTools = manager.getRecommendedTools(3);

      toolsGrid.innerHTML = recommendedTools.map(tool => `
        <article class="card">
          <h3><a href="/tool-detail.html?id=${tool.id}&type=tool">${tool.name}</a></h3>
          <p>${tool.description}</p>
          <div class="card-tags">
            ${tool.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="card-meta">
            <span>⭐ ${tool.rating}/5.0</span>
            <span>•</span>
            <span>${tool.pricing}</span>
          </div>
        </article>
      `).join('');
    } catch (error) {
      console.error('渲染推荐工具出错:', error);
      toolsGrid.innerHTML = '<div style="color:red;padding:20px;">加载推荐工具失败</div>';
    }
  }
}

// 创建页面实例
const indexPage = new IndexPage();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  indexPage.initialize();
});