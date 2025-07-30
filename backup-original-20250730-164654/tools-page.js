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
    
    // 缓存机制
    this.renderCache = {
      tools: null,
      models: null,
      agents: null,
      comparison: null
    };
    this.lastRenderTime = {};
  }

  /**
   * 超快初始化 - 立即显示内容
   */
  async initialize() {
    if (this.isInitialized) {
      return;
    }

    const startTime = Date.now();

    try {
      // 使用快速加载器，立即可用
      this.loader = window.fastAILoader;
      await this.loader.init();
      
      if (window.performanceMonitor) {
        window.performanceMonitor.mark('DatabaseLoaded');
      }

      // 立即渲染首屏内容
      await this.renderFirstScreen();

      // 绑定事件
      this.bindEvents();

      this.isInitialized = true;

      const totalTime = Date.now() - startTime;
      this.showMessage(`首屏渲染完成，耗时: ${totalTime}ms`, 'success');
      
    } catch (error) {
      console.error('初始化页面出错:', error);
      this.showMessage('数据加载失败: ' + error.message, 'error');
    }
  }

  /**
   * 渲染首屏内容
   */
  async renderFirstScreen() {
    // 使用快速加载器，立即渲染
    try {
      // 立即生成分类过滤器
      await this.generateCategoryFilters();
      
      // 立即生成统计信息
      await this.generateStats();
      
      // 立即渲染工具列表
      await this.renderTools();
      
      if (window.performanceMonitor) {
        window.performanceMonitor.mark('ToolsRendered');
      }
    } catch (error) {
      console.error('首屏渲染失败:', error);
      this.showMessage('加载失败，请刷新页面重试', 'error');
    }
  }

  /**
   * 设置数据更新监听器
   */
  setupDataUpdateListener() {
    window.addEventListener('dataUpdated', () => {
      // 完整数据加载完成后，更新当前显示的内容
      if (this.currentTab === 'tools') {
        this.renderTools();
      } else if (this.currentTab === 'models') {
        this.renderModels();
      } else if (this.currentTab === 'agents') {
        this.renderAgents();
      }
      
      this.generateStats(); // 更新统计信息
      this.showMessage('数据已更新到最新版本', 'success');
    });
  }

  /**
   * 分阶段初始化，优化性能
   */
  async initializeInStages() {
    // 阶段1：生成基础UI组件（优先级最高）
    await this.generateCategoryFilters();
    await this.generateStats();

    // 阶段2：渲染当前标签页内容（工具页面）
    await this.renderTools();
    if (window.performanceMonitor) {
      window.performanceMonitor.mark('ToolsRendered');
    }

    // 阶段3：使用requestIdleCallback在空闲时预加载其他标签页
    if (window.requestIdleCallback) {
      requestIdleCallback(() => {
        this.preloadOtherTabs();
      }, { timeout: 2000 });
    } else {
      setTimeout(() => this.preloadOtherTabs(), 100);
    }
  }

  /**
   * 预加载其他标签页内容
   */
  async preloadOtherTabs() {
    try {
      // 预加载模型和Agent数据，但不立即渲染
      this.preProcessedModels = await this.loader.getModels();
      this.preProcessedAgents = await this.loader.getAgents();
      
      console.log('其他标签页数据预加载完成');
    } catch (error) {
      console.error('预加载其他标签页出错:', error);
    }
  }

  /**
   * 显示轻量级加载状态（仅在必要时使用）
   */
  showLoading(message = '加载中...') {
    const debugInfo = document.getElementById('debug-info');
    if (debugInfo) {
      debugInfo.innerHTML = `<span style="color:#2563eb">${message}</span>`;
    }
  }

  /**
   * 隐藏加载状态
   */
  hideLoading() {
    // 快速模式下不需要隐藏操作
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
      const categories = await this.loader.getCategories();

      // 确保"全部"标签存在并正确设置
      const allTab = filtersContainer.querySelector('[data-category="all"]');
      if (allTab) {
        allTab.classList.add('active'); // 确保默认激活
        allTab.textContent = i18n.t('tools.allCategory');
      }

      Object.keys(categories).forEach(catKey => {
        const category = categories[catKey];
        const filterTab = document.createElement('div');
        filterTab.className = 'filter-tab';
        filterTab.setAttribute('data-category', catKey);
        
        // 使用i18n获取分类名称
        const categoryName = i18n.t(`categories.${catKey}.name`);
        filterTab.innerHTML = `${category.icon} ${categoryName}`;
        
        filtersContainer.appendChild(filterTab);
      });

      // 生成完成后绑定事件
      this.bindCategoryFilters();
    } catch (error) {
      console.error('生成分类筛选器出错:', error);
      this.showMessage(i18n.t('common.error'), 'error');
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
      const stats = await this.loader.getStats();
      
      const totalTools = stats.totalTools || 0;
      const totalModels = stats.totalModels || 0;
      const totalAgents = stats.totalAgents || 0;
      const totalCategories = stats.totalCategories || 0;

      statsContainer.innerHTML = `
        <div class="stat-card">
          <div class="stat-number">${totalTools}</div>
          <div class="stat-label">${i18n.t('tools.stats.tools')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${totalModels}</div>
          <div class="stat-label">${i18n.t('tools.stats.models')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${totalAgents}</div>
          <div class="stat-label">${i18n.t('tools.stats.agents')}</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${totalCategories}</div>
          <div class="stat-label">${i18n.t('tools.stats.categories')}</div>
        </div>
      `;
    } catch (error) {
      console.error('生成统计信息出错:', error);
      statsContainer.innerHTML = `<div style="color:red;padding:20px;">${i18n.t('common.error')}</div>`;
    }
  }

  /**
   * 渲染工具卡片 - 优化版本，支持分批渲染
   * @param {Array} tools 工具列表
   */
  async renderTools(tools = null) {
    const toolsContainer = document.getElementById('toolsGrid');
    if (!toolsContainer) return;

    try {
      const toolsToRender = tools || await this.loader.getTools(this.currentCategory === 'all' ? null : this.currentCategory);

      if (toolsToRender.length === 0) {
        toolsContainer.innerHTML = `<div style="padding:20px;text-align:center;">${i18n.t('tools.messages.noResults')}</div>`;
        return;
      }

      // 获取分类数据用于渲染
      const categories = await this.loader.getCategories();

      // 优化：分批渲染，避免一次性渲染大量DOM元素
      await this.renderToolsInBatches(toolsToRender, categories, toolsContainer);
    } catch (error) {
      console.error('渲染工具列表出错:', error);
      toolsContainer.innerHTML = `<div style="color:red;padding:20px;">${i18n.t('common.error')}: ${error.message}</div>`;
    }
  }

  /**
   * 超快渲染工具卡片 - 一次性渲染，减少DOM操作
   */
  async renderToolsInBatches(tools, categories, container) {
    // 快速模式：一次性渲染所有内容
    const allHtml = this.generateToolsHTML(tools, categories);
    container.innerHTML = allHtml;
  }

  /**
   * 生成工具HTML
   */
  generateToolsHTML(tools, categories) {
    return tools.map(tool => {
      try {
        // 获取分类名称，支持多语言
        let categoryName = tool.category;
        if (categories && categories[tool.category]) {
          const categoryKey = `categories.${tool.category}.name`;
          categoryName = i18n.t(categoryKey);
        }

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
                <span class="rating-text">${tool.rating} (${tool.users || i18n.t('common.unknownUsers')})</span>
              </div>
              
              <div class="tool-tags">
                ${tool.tags ? tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
              </div>
              
              <div class="tool-pricing">${tool.pricing}</div>
            </div>
            
            <div class="tool-actions">
              <a href="${tool.url}" target="_blank" class="tool-btn">${i18n.t('tools.buttons.useNow')}</a>
              <a href="/tool-detail.html?id=${tool.id}&type=tool" class="tool-btn" style="background:transparent;color:var(--primary);border:1px solid var(--primary);">${i18n.t('tools.buttons.details')}</a>
            </div>
          </div>
        `;
      } catch (error) {
        console.error('渲染工具卡片出错:', error, tool);
        return `<div class="tool-card"><div class="tool-header"><h3>${i18n.t('common.error')}</h3></div></div>`;
      }
    }).join('');
  }

  /**
   * 渲染模型卡片 - 优化版本
   * @param {Array} models 模型列表
   */
  async renderModels(models = null) {
    const modelsContainer = document.getElementById('modelsGrid');
    if (!modelsContainer) return;

    try {
      // 优先使用预处理的数据
      const modelsToRender = models || this.preProcessedModels || await this.loader.getModels();

      if (modelsToRender.length === 0) {
        modelsContainer.innerHTML = '<div style="padding:20px;text-align:center;">没有找到匹配的模型</div>';
        return;
      }

      // 使用DocumentFragment优化DOM操作
      const fragment = document.createDocumentFragment();
      
      modelsToRender.forEach(model => {
        try {
          const cardElement = document.createElement('div');
          cardElement.className = 'tool-card';
          cardElement.innerHTML = `
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
          `;
          fragment.appendChild(cardElement);
        } catch (error) {
          console.error('渲染模型卡片出错:', error, model);
        }
      });

      // 一次性更新DOM
      modelsContainer.innerHTML = '';
      modelsContainer.appendChild(fragment);
    } catch (error) {
      console.error('渲染模型列表出错:', error);
      modelsContainer.innerHTML = '<div style="color:red;padding:20px;">渲染模型列表出错: ' + error.message + '</div>';
    }
  }

  /**
   * 渲染Agent卡片 - 优化版本
   * @param {Array} agents Agent列表
   */
  async renderAgents(agents = null) {
    const agentsContainer = document.getElementById('agentsGrid');
    if (!agentsContainer) return;

    try {
      // 优先使用预处理的数据
      const agentsToRender = agents || this.preProcessedAgents || await this.loader.getAgents();

      if (agentsToRender.length === 0) {
        agentsContainer.innerHTML = '<div style="padding:20px;text-align:center;">没有找到匹配的Agent</div>';
        return;
      }

      // 使用DocumentFragment优化DOM操作
      const fragment = document.createDocumentFragment();
      
      agentsToRender.forEach(agent => {
        try {
          const cardElement = document.createElement('div');
          cardElement.className = 'tool-card';
          cardElement.innerHTML = `
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
          `;
          fragment.appendChild(cardElement);
        } catch (error) {
          console.error('渲染Agent卡片出错:', error, agent);
        }
      });

      // 一次性更新DOM
      agentsContainer.innerHTML = '';
      agentsContainer.appendChild(fragment);
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
      const models = await this.loader.getModels();

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
   * 标签页切换 - 优化版本，懒加载内容
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
      
      // 懒加载标签页内容，避免不必要的渲染
      this.loadTabContent(tabName);
    } catch (error) {
      console.error('切换标签页出错:', error);
    }
  }

  /**
   * 懒加载标签页内容 - 带缓存优化
   */
  async loadTabContent(tabName) {
    try {
      const startTime = Date.now();
      
      // 检查缓存
      const cacheKey = tabName;
      const lastRender = this.lastRenderTime[cacheKey];
      const cacheExpiry = 5 * 60 * 1000; // 5分钟缓存
      
      if (lastRender && (Date.now() - lastRender) < cacheExpiry) {
        // 使用缓存
        const container = this.getContainerForTab(tabName);
        if (container && container.children.length > 0) {
          this.showMessage(`从缓存加载${tabName}内容`, 'info');
          return;
        }
      }
      
      switch (tabName) {
        case 'models':
          const modelsGrid = document.getElementById('modelsGrid');
          if (modelsGrid && (modelsGrid.children.length === 0 || !this.renderCache.models)) {
            this.showMessage('正在加载模型数据...', 'info');
            await this.renderModels();
            this.renderCache.models = true;
            this.lastRenderTime.models = Date.now();
            const loadTime = Date.now() - startTime;
            this.showMessage(`模型数据加载完成，耗时: ${loadTime}ms`, 'success');
          }
          break;
          
        case 'agents':
          const agentsGrid = document.getElementById('agentsGrid');
          if (agentsGrid && (agentsGrid.children.length === 0 || !this.renderCache.agents)) {
            this.showMessage('正在加载Agent数据...', 'info');
            await this.renderAgents();
            this.renderCache.agents = true;
            this.lastRenderTime.agents = Date.now();
            const loadTime = Date.now() - startTime;
            this.showMessage(`Agent数据加载完成，耗时: ${loadTime}ms`, 'success');
          }
          break;
          
        case 'compare':
          const modelComparison = document.getElementById('modelComparison');
          if (modelComparison && (modelComparison.children.length === 0 || !this.renderCache.comparison)) {
            this.showMessage('正在生成模型对比...', 'info');
            await this.generateModelComparison();
            this.renderCache.comparison = true;
            this.lastRenderTime.compare = Date.now();
            const loadTime = Date.now() - startTime;
            this.showMessage(`模型对比生成完成，耗时: ${loadTime}ms`, 'success');
          }
          break;
          
        case 'tools':
          // 重新渲染工具页面，显示所有工具
          await this.renderTools();
          this.lastRenderTime.tools = Date.now();
          break;
      }
    } catch (error) {
      console.error('加载标签页内容出错:', error);
      this.showMessage(`加载${tabName}内容失败: ${error.message}`, 'error');
    }
  }

  /**
   * 获取标签页对应的容器
   */
  getContainerForTab(tabName) {
    switch (tabName) {
      case 'models': return document.getElementById('modelsGrid');
      case 'agents': return document.getElementById('agentsGrid');
      case 'compare': return document.getElementById('modelComparison');
      case 'tools': return document.getElementById('toolsGrid');
      default: return null;
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
        const filteredTools = await this.loader.getTools(category === 'all' ? null : category);
        
        this.renderTools(filteredTools);
        
        // 显示筛选结果消息，支持多语言
        let categoryName;
        if (category === 'all') {
          categoryName = i18n.t('tools.allCategory');
        } else {
          categoryName = i18n.t(`categories.${category}.name`);
        }
        
        this.showMessage(`${i18n.t('tools.messages.filtered')} "${categoryName}" ${i18n.t('tools.messages.category')} ${filteredTools.length} ${i18n.t('tools.messages.toolsCount')}`, 'success');
      }
    } catch (error) {
      console.error('分类筛选出错:', error);
      this.showMessage(`${i18n.t('common.error')}: ${error.message}`, 'error');
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

      this.showMessage(`${i18n.t('tools.messages.searching')}: "${query}"`, 'info');

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
      
      this.showMessage(`${i18n.t('tools.messages.found')} ${results.length} ${i18n.t('tools.messages.results')}`, 'success');
    } catch (error) {
      console.error('搜索出错:', error);
      this.showMessage(`${i18n.t('common.error')}: ${error.message}`, 'error');
    }
  }

  /**
   * 重置搜索，显示当前分类的所有内容
   */
  async resetSearch() {
    try {
      if (this.currentTab === 'tools') {
        const filteredTools = await this.loader.getTools(this.currentCategory === 'all' ? null : this.currentCategory);
        this.renderTools(filteredTools);
      } else if (this.currentTab === 'models') {
        this.renderModels();
      } else if (this.currentTab === 'agents') {
        this.renderAgents();
      }
      
      this.showMessage(i18n.t('tools.messages.reset'), 'info');
    } catch (error) {
      console.error('重置搜索出错:', error);
      this.showMessage(`${i18n.t('common.error')}: ${error.message}`, 'error');
    }
  }
}

// 创建页面实例
const toolsPage = new ToolsPage();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  toolsPage.initialize();
});