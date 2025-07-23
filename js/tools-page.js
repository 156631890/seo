/**
 * AI工具页面逻辑
 * 负责工具页面的交互和展示
 */

class ToolsPage {
  constructor() {
    this.currentCategory = 'all';
    this.currentTab = 'tools';
    this.loader = window.aiToolsLoader;
    this.isInitialized = false;
  }

  /**
   * 初始化页面
   */
  async initialize() {
    if (this.isInitialized) {
      return;
    }

    try {
      // 显示加载状态
      this.showLoading();

      // 加载数据库
      await this.loader.load();

      // 生成页面内容
      await this.generateCategoryFilters();
      await this.generateStats();
      await this.renderTools();
      await this.renderModels();
      await this.renderAgents();
      await this.generateModelComparison();

      // 绑定事件
      this.bindEvents();

      // 隐藏加载状态
      this.hideLoading();

      // 更新初始化状态
      this.isInitialized = true;

      // 显示成功消息
      this.showMessage('数据加载成功', 'success');
    } catch (error) {
      console.error('初始化页面出错:', error);
      this.showMessage('数据加载失败: ' + error.message, 'error');
    }
  }

  /**
   * 显示加载状态
   */
  showLoading() {
    const loadingEl = document.createElement('div');
    loadingEl.id = 'loading-indicator';
    loadingEl.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(255,255,255,0.8);display:flex;justify-content:center;align-items:center;z-index:1000;';
    loadingEl.innerHTML = '<div style="text-align:center;"><div style="width:50px;height:50px;border:5px solid #f3f3f3;border-top:5px solid var(--primary);border-radius:50%;animation:spin 1s linear infinite;margin:0 auto;"></div><p style="margin-top:10px;">加载中...</p></div>';
    document.body.appendChild(loadingEl);

    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = '@keyframes spin {0% {transform:rotate(0deg);} 100% {transform:rotate(360deg);}}';
    document.head.appendChild(style);
  }

  /**
   * 隐藏加载状态
   */
  hideLoading() {
    const loadingEl = document.getElementById('loading-indicator');
    if (loadingEl) {
      loadingEl.remove();
    }
  }

  /**
   * 显示消息
   * @param {string} message 消息内容
   * @param {string} type 消息类型 (success, error, info)
   */
  showMessage(message, type = 'info') {
    const debugInfo = document.getElementById('debug-info');
    if (debugInfo) {
      let color = '#666';
      if (type === 'success') color = '#16a34a';
      if (type === 'error') color = '#dc2626';
      if (type === 'info') color = '#2563eb';

      debugInfo.innerHTML = `<span style="color:${color}">${message}</span>`;
      
      // 5秒后自动清除
      setTimeout(() => {
        if (debugInfo.innerHTML.includes(message)) {
          debugInfo.innerHTML = '';
        }
      }, 5000);
    }
  }

  /**
   * 绑定事件
   */
  bindEvents() {
    // 搜索按钮点击事件
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
      searchButton.addEventListener('click', () => this.searchTools());
    }

    // 回车搜索
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.searchTools();
        }
      });
      
      // 监听输入变化，如果搜索框为空则重置显示
      searchInput.addEventListener('input', (e) => {
        if (e.target.value.trim() === '') {
          this.resetSearch();
        }
      });
    }

    // 标签页切换事件
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tabName = e.target.getAttribute('data-tab');
        if (tabName) {
          this.showTab(tabName);
        }
      });
    });

    // 分类筛选事件绑定
    this.bindCategoryFilters();
  }

  /**
   * 生成分类筛选器
   */
  async generateCategoryFilters() {
    const filtersContainer = document.getElementById('categoryFilters');
    if (!filtersContainer) return;

    try {
      const database = await this.loader.getDatabase();
      const categories = database.categories;

      // 确保"全部"标签存在并正确设置
      const allTab = filtersContainer.querySelector('[data-category="all"]');
      if (allTab) {
        allTab.classList.add('active'); // 确保默认激活
      }

      Object.keys(categories).forEach(catKey => {
        const category = categories[catKey];
        const filterTab = document.createElement('div');
        filterTab.className = 'filter-tab';
        filterTab.setAttribute('data-category', catKey);
        filterTab.innerHTML = `${category.icon} ${category.name}`;
        filtersContainer.appendChild(filterTab);
      });

      // 生成完成后绑定事件
      this.bindCategoryFilters();
    } catch (error) {
      console.error('生成分类筛选器出错:', error);
      this.showMessage('加载分类失败', 'error');
    }
  }

  /**
   * 绑定分类筛选器事件
   */
  bindCategoryFilters() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
      // 移除旧的事件监听器，避免重复绑定
      tab.removeEventListener('click', this.handleCategoryClick);
      
      // 绑定新的事件监听器
      const categoryClickHandler = (e) => {
        const category = e.target.getAttribute('data-category');
        if (category) {
          this.filterByCategory(category);
        }
      };
      
      tab.addEventListener('click', categoryClickHandler);
      // 保存引用以便后续移除
      tab._categoryClickHandler = categoryClickHandler;
    });
  }

  /**
   * 生成统计信息
   */
  async generateStats() {
    const statsContainer = document.getElementById('statsGrid');
    if (!statsContainer) return;

    try {
      const database = await this.loader.getDatabase();
      
      const totalTools = database.tools ? database.tools.length : 0;
      const totalModels = database.models ? database.models.length : 0;
      const totalAgents = database.agents ? database.agents.length : 0;
      const totalCategories = database.categories ? Object.keys(database.categories).length : 0;

      statsContainer.innerHTML = `
        <div class="stat-card">
          <div class="stat-number">${totalTools}</div>
          <div class="stat-label">AI工具</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${totalModels}</div>
          <div class="stat-label">AI模型</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${totalAgents}</div>
          <div class="stat-label">AI Agent</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${totalCategories}</div>
          <div class="stat-label">分类</div>
        </div>
      `;
    } catch (error) {
      console.error('生成统计信息出错:', error);
      statsContainer.innerHTML = '<div style="color:red;padding:20px;">加载统计信息失败</div>';
    }
  }

  /**
   * 渲染工具卡片
   * @param {Array} tools 工具列表
   */
  async renderTools(tools = null) {
    const toolsContainer = document.getElementById('toolsGrid');
    if (!toolsContainer) return;

    try {
      const database = await this.loader.getDatabase();
      const toolsToRender = tools || database.tools;

      if (toolsToRender.length === 0) {
        toolsContainer.innerHTML = '<div style="padding:20px;text-align:center;">没有找到匹配的工具</div>';
        return;
      }

      toolsContainer.innerHTML = toolsToRender.map(tool => {
        try {
          const categoryName = database.categories[tool.category] ? 
            database.categories[tool.category].name : tool.category;

          return `
            <div class="tool-card">
              <div class="tool-header">
                <div class="tool-title">
                  <h3><a href="/tool-detail.html?id=${tool.id}&type=tool">${tool.name}</a></h3>
                  <span class="tool-category">${categoryName}</span>
                </div>
                <p class="tool-description">${tool.description}</p>
              </div>
              
              <div class="tool-meta">
                <div class="tool-rating">
                  <span class="stars">${'★'.repeat(Math.floor(tool.rating))}${'☆'.repeat(5-Math.floor(tool.rating))}</span>
                  <span class="rating-text">${tool.rating} (${tool.users || '用户数未知'})</span>
                </div>
                
                <div class="tool-tags">
                  ${tool.tags ? tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                </div>
                
                <div class="tool-pricing">${tool.pricing}</div>
              </div>
              
              <div class="tool-actions">
                <a href="${tool.url}" target="_blank" class="tool-btn">立即使用</a>
                <a href="/tool-detail.html?id=${tool.id}&type=tool" class="tool-btn" style="background:transparent;color:var(--primary);border:1px solid var(--primary);">详情</a>
              </div>
            </div>
          `;
        } catch (error) {
          console.error('渲染工具卡片出错:', error, tool);
          return `<div class="tool-card"><div class="tool-header"><h3>渲染错误</h3></div></div>`;
        }
      }).join('');
    } catch (error) {
      console.error('渲染工具列表出错:', error);
      toolsContainer.innerHTML = '<div style="color:red;padding:20px;">渲染工具列表出错: ' + error.message + '</div>';
    }
  }

  /**
   * 渲染模型卡片
   * @param {Array} models 模型列表
   */
  async renderModels(models = null) {
    const modelsContainer = document.getElementById('modelsGrid');
    if (!modelsContainer) return;

    try {
      const database = await this.loader.getDatabase();
      const modelsToRender = models || database.models;

      if (modelsToRender.length === 0) {
        modelsContainer.innerHTML = '<div style="padding:20px;text-align:center;">没有找到匹配的模型</div>';
        return;
      }

      modelsContainer.innerHTML = modelsToRender.map(model => {
        try {
          return `
            <div class="tool-card">
              <div class="tool-header">
                <div class="tool-title">
                  <h3><a href="/tool-detail.html?id=${model.id}&type=model">${model.name}</a></h3>
                  <span class="tool-category">${model.provider}</span>
                </div>
                <p class="tool-description">${model.description}</p>
              </div>
              
              <div class="tool-meta">
                <div class="tool-rating">
                  <span class="stars">${'★'.repeat(Math.floor(model.rating))}${'☆'.repeat(5-Math.floor(model.rating))}</span>
                  <span class="rating-text">${model.rating}</span>
                </div>
                
                <div class="tool-tags">
                  ${model.features ? model.features.map(feature => `<span class="tag">${feature}</span>`).join('') : ''}
                </div>
                
                <div class="tool-pricing">${model.pricing}</div>
              </div>
              
              <div class="tool-actions">
                <a href="${model.url}" target="_blank" class="tool-btn">了解更多</a>
                <a href="/tool-detail.html?id=${model.id}&type=model" class="tool-btn" style="background:transparent;color:var(--primary);border:1px solid var(--primary);">详情</a>
              </div>
            </div>
          `;
        } catch (error) {
          console.error('渲染模型卡片出错:', error, model);
          return `<div class="tool-card"><div class="tool-header"><h3>渲染错误</h3></div></div>`;
        }
      }).join('');
    } catch (error) {
      console.error('渲染模型列表出错:', error);
      modelsContainer.innerHTML = '<div style="color:red;padding:20px;">渲染模型列表出错: ' + error.message + '</div>';
    }
  }

  /**
   * 渲染Agent卡片
   * @param {Array} agents Agent列表
   */
  async renderAgents(agents = null) {
    const agentsContainer = document.getElementById('agentsGrid');
    if (!agentsContainer) return;

    try {
      const database = await this.loader.getDatabase();
      const agentsToRender = agents || database.agents;

      if (agentsToRender.length === 0) {
        agentsContainer.innerHTML = '<div style="padding:20px;text-align:center;">没有找到匹配的Agent</div>';
        return;
      }

      agentsContainer.innerHTML = agentsToRender.map(agent => {
        try {
          return `
            <div class="tool-card">
              <div class="tool-header">
                <div class="tool-title">
                  <h3><a href="/tool-detail.html?id=${agent.id}&type=agent">${agent.name}</a></h3>
                  <span class="tool-category">${agent.complexity}</span>
                </div>
                <p class="tool-description">${agent.description}</p>
              </div>
              
              <div class="tool-meta">
                <div class="tool-rating">
                  <span class="stars">${'★'.repeat(Math.floor(agent.rating))}${'☆'.repeat(5-Math.floor(agent.rating))}</span>
                  <span class="rating-text">${agent.rating}</span>
                </div>
                
                <div class="tool-tags">
                  ${agent.tags ? agent.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                </div>
                
                <div class="tool-pricing">用例: ${agent.useCase}</div>
              </div>
              
              <div class="tool-actions">
                <a href="${agent.github}" target="_blank" class="tool-btn">查看GitHub</a>
                <a href="/tool-detail.html?id=${agent.id}&type=agent" class="tool-btn" style="background:transparent;color:var(--primary);border:1px solid var(--primary);">详情</a>
              </div>
            </div>
          `;
        } catch (error) {
          console.error('渲染Agent卡片出错:', error, agent);
          return `<div class="tool-card"><div class="tool-header"><h3>渲染错误</h3></div></div>`;
        }
      }).join('');
    } catch (error) {
      console.error('渲染Agent列表出错:', error);
      agentsContainer.innerHTML = '<div style="color:red;padding:20px;">渲染Agent列表出错: ' + error.message + '</div>';
    }
  }

  /**
   * 生成模型对比
   */
  async generateModelComparison() {
    const comparisonContainer = document.getElementById('modelComparison');
    if (!comparisonContainer) return;

    try {
      const database = await this.loader.getDatabase();
      const models = database.models;

      comparisonContainer.innerHTML = `
        <table class="comparison-table">
          <thead>
            <tr>
              <th>模型</th>
              <th>提供商</th>
              <th>类型</th>
              <th>主要功能</th>
              <th>定价</th>
              <th>评分</th>
              <th>优势</th>
            </tr>
          </thead>
          <tbody>
            ${models.map(model => `
              <tr>
                <td><strong><a href="/tool-detail.html?id=${model.id}&type=model">${model.name}</a></strong></td>
                <td>${model.provider}</td>
                <td>${model.type}</td>
                <td>${model.features.slice(0, 2).join(', ')}</td>
                <td>${model.pricing}</td>
                <td>${model.rating}</td>
                <td>${model.strengths.slice(0, 2).join(', ')}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } catch (error) {
      console.error('生成模型对比出错:', error);
      comparisonContainer.innerHTML = '<div style="color:red;padding:20px;">生成模型对比出错: ' + error.message + '</div>';
    }
  }

  /**
   * 标签页切换
   * @param {string} tabName 标签页名称
   */
  showTab(tabName) {
    try {
      // 隐藏所有标签页内容
      document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
      });
      
      // 移除所有按钮的active状态
      document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      
      // 显示选中的标签页
      const tabContent = document.getElementById(tabName + '-tab');
      if (tabContent) {
        tabContent.classList.add('active');
      } else {
        console.error('找不到标签页内容:', tabName + '-tab');
      }
      
      // 更新按钮状态
      const tabButton = document.querySelector(`.tab-btn[data-tab="${tabName}"]`);
      if (tabButton) {
        tabButton.classList.add('active');
      }
      
      this.currentTab = tabName;
      
      // 清空搜索框
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.value = '';
      }
      
      // 重置分类筛选到"全部"
      if (tabName === 'tools') {
        this.currentCategory = 'all';
        document.querySelectorAll('.filter-tab').forEach(tab => {
          tab.classList.remove('active');
        });
        const allTab = document.querySelector('.filter-tab[data-category="all"]');
        if (allTab) {
          allTab.classList.add('active');
        }
      }
      
      // 如果切换到模型或Agent标签页，确保内容已经渲染
      if (tabName === 'models' && document.getElementById('modelsGrid').children.length === 0) {
        this.renderModels();
      } else if (tabName === 'agents' && document.getElementById('agentsGrid').children.length === 0) {
        this.renderAgents();
      } else if (tabName === 'compare' && document.getElementById('modelComparison').children.length === 0) {
        this.generateModelComparison();
      } else if (tabName === 'tools') {
        // 重新渲染工具页面，显示所有工具
        this.renderTools();
      }
    } catch (error) {
      console.error('切换标签页出错:', error);
    }
  }

  /**
   * 分类筛选
   * @param {string} category 分类
   */
  async filterByCategory(category) {
    try {
      // 更新当前分类
      this.currentCategory = category;
      
      // 更新筛选按钮状态
      document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
      });
      
      const activeTab = document.querySelector(`.filter-tab[data-category="${category}"]`);
      if (activeTab) {
        activeTab.classList.add('active');
      }
      
      // 清空搜索框
      const searchInput = document.getElementById('searchInput');
      if (searchInput) {
        searchInput.value = '';
      }
      
      // 筛选工具
      if (this.currentTab === 'tools') {
        const database = await this.loader.getDatabase();
        const filteredTools = category === 'all' 
          ? database.tools 
          : database.tools.filter(tool => tool.category === category);
        
        this.renderTools(filteredTools);
        
        // 显示筛选结果消息
        const categoryName = category === 'all' ? '全部' : 
          (database.categories[category] ? database.categories[category].name : category);
        this.showMessage(`已筛选到 "${categoryName}" 分类，共 ${filteredTools.length} 个工具`, 'success');
      }
    } catch (error) {
      console.error('分类筛选出错:', error);
      this.showMessage('筛选出错: ' + error.message, 'error');
    }
  }

  /**
   * 搜索功能
   */
  async searchTools() {
    try {
      // 获取搜索框的值
      const searchInput = document.getElementById('searchInput');
      if (!searchInput) {
        console.error('找不到搜索输入框');
        return;
      }
      
      const query = searchInput.value.trim();
      
      // 如果搜索框为空，重置显示
      if (query === '') {
        this.resetSearch();
        return;
      }

      this.showMessage(`正在搜索: "${query}"`, 'info');

      let results = [];

      if (this.currentTab === 'tools') {
        // 搜索时考虑当前分类筛选
        results = await this.loader.searchTools(
          query, 
          this.currentCategory === 'all' ? null : this.currentCategory
        );
        this.renderTools(results);
      } else if (this.currentTab === 'models') {
        results = await this.loader.searchModels(query);
        this.renderModels(results);
      } else if (this.currentTab === 'agents') {
        results = await this.loader.searchAgents(query);
        this.renderAgents(results);
      }
      
      this.showMessage(`找到 ${results.length} 个结果`, 'success');
    } catch (error) {
      console.error('搜索出错:', error);
      this.showMessage('搜索出错: ' + error.message, 'error');
    }
  }

  /**
   * 重置搜索，显示当前分类的所有内容
   */
  async resetSearch() {
    try {
      if (this.currentTab === 'tools') {
        const database = await this.loader.getDatabase();
        const filteredTools = this.currentCategory === 'all' 
          ? database.tools 
          : database.tools.filter(tool => tool.category === this.currentCategory);
        
        this.renderTools(filteredTools);
      } else if (this.currentTab === 'models') {
        this.renderModels();
      } else if (this.currentTab === 'agents') {
        this.renderAgents();
      }
      
      this.showMessage('已重置显示', 'info');
    } catch (error) {
      console.error('重置搜索出错:', error);
      this.showMessage('重置出错: ' + error.message, 'error');
    }
  }
}

// 创建页面实例
const toolsPage = new ToolsPage();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  toolsPage.initialize();
});