/**
 * 对比页面逻辑
 * 负责对比页面的交互和展示
 */

class ComparePage {
  constructor() {
    this.loader = window.aiToolsLoader;
    this.currentType = 'tools';
    this.selectedItems = {
      tools: [],
      models: [],
      agents: []
    };
    this.maxSelections = 4;
  }

  /**
   * 初始化页面
   */
  async initialize() {
    try {
      // 显示加载状态
      this.showLoading();

      // 加载数据库
      await this.loader.load();

      // 生成选择器
      await this.generateSelectors('tools', (await this.loader.getDatabase()).tools);
      await this.generateSelectors('models', (await this.loader.getDatabase()).models);
      await this.generateSelectors('agents', (await this.loader.getDatabase()).agents);

      // 绑定事件
      this.bindEvents();

      // 隐藏加载状态
      this.hideLoading();
    } catch (error) {
      console.error('初始化对比页面出错:', error);
      this.showError('加载数据失败: ' + error.message);
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
   * 显示错误信息
   * @param {string} message 错误信息
   */
  showError(message) {
    const errorEl = document.createElement('div');
    errorEl.style.cssText = 'background:#fef2f2;color:#dc2626;padding:1rem;border-radius:0.375rem;margin:2rem auto;max-width:600px;text-align:center;';
    errorEl.innerHTML = `<p>${message}</p>`;
    document.body.appendChild(errorEl);
  }

  /**
   * 绑定事件
   */
  bindEvents() {
    // 类型选择器事件
    document.querySelectorAll('.type-selector').forEach(selector => {
      selector.addEventListener('click', (e) => {
        const type = e.currentTarget.getAttribute('data-type');
        if (type) {
          this.switchComparisonType(type);
        }
      });
    });

    // 对比按钮事件
    const compareBtn = document.querySelector('.compare-btn');
    if (compareBtn) {
      compareBtn.addEventListener('click', () => this.generateComparison());
    }
  }

  /**
   * 生成选择器
   * @param {string} type 类型
   * @param {Array} items 项目列表
   */
  async generateSelectors(type, items) {
    const grid = document.getElementById(`${type}-grid`);
    if (!grid) return;

    grid.innerHTML = '';
    
    items.forEach(item => {
      const selector = document.createElement('div');
      selector.className = 'item-selector';
      selector.setAttribute('data-id', item.id);
      
      selector.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.provider || ''}</p>
      `;
      
      selector.addEventListener('click', () => this.toggleSelection(selector, type, item.id));
      
      grid.appendChild(selector);
    });
  }

  /**
   * 切换对比类型
   * @param {string} type 类型
   */
  switchComparisonType(type) {
    // 更新当前类型
    this.currentType = type;
    
    // 更新类型选择器状态
    document.querySelectorAll('.type-selector').forEach(selector => {
      selector.classList.remove('selected');
    });
    document.querySelector(`.type-selector[data-type="${type}"]`).classList.add('selected');
    
    // 显示相应的选择区域
    document.querySelectorAll('.selection-area').forEach(area => {
      area.style.display = 'none';
    });
    document.getElementById(`${type}-selection`).style.display = 'block';
    
    // 清空对比结果
    document.getElementById('comparison-result').innerHTML = '';
    document.getElementById('recommendation-section').style.display = 'none';
  }

  /**
   * 切换选择状态
   * @param {Element} element 元素
   * @param {string} type 类型
   * @param {string} itemId 项目ID
   */
  toggleSelection(element, type, itemId) {
    const index = this.selectedItems[type].indexOf(itemId);
    
    if (index === -1) {
      // 如果未选中，检查是否已达到最大选择数
      if (this.selectedItems[type].length >= this.maxSelections) {
        alert(`最多只能选择${this.maxSelections}个项目进行对比`);
        return;
      }
      
      // 添加到选中列表
      this.selectedItems[type].push(itemId);
      element.classList.add('selected');
    } else {
      // 从选中列表中移除
      this.selectedItems[type].splice(index, 1);
      element.classList.remove('selected');
    }
  }

  /**
   * 生成对比
   */
  async generateComparison() {
    const selected = this.selectedItems[this.currentType];
    
    if (selected.length < 2) {
      alert('请至少选择2个项目进行对比');
      return;
    }
    
    const resultContainer = document.getElementById('comparison-result');
    if (!resultContainer) return;
    
    try {
      const database = await this.loader.getDatabase();
      
      switch (this.currentType) {
        case 'tools':
          this.generateToolsComparison(selected, resultContainer, database);
          break;
        case 'models':
          this.generateModelsComparison(selected, resultContainer, database);
          break;
        case 'agents':
          this.generateAgentsComparison(selected, resultContainer, database);
          break;
      }
      
      // 显示推荐
      this.generateRecommendation(selected, database);
    } catch (error) {
      console.error('生成对比出错:', error);
      resultContainer.innerHTML = `<div style="color:red;padding:20px;">生成对比出错: ${error.message}</div>`;
    }
  }

  /**
   * 生成工具对比
   * @param {Array} toolIds 工具ID列表
   * @param {Element} container 容器元素
   * @param {Object} database 数据库
   */
  generateToolsComparison(toolIds, container, database) {
    const tools = toolIds.map(id => database.tools.find(tool => tool.id === id)).filter(Boolean);
    
    let html = `
      <div class="comparison-card">
        <h2>AI工具对比</h2>
        <div style="overflow-x: auto;">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>特性</th>
                ${tools.map(tool => `<th>${tool.name}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>提供商</td>
                ${tools.map(tool => `<td>${tool.provider || '-'}</td>`).join('')}
              </tr>
              <tr>
                <td>分类</td>
                ${tools.map(tool => `<td>${database.categories[tool.category].name}</td>`).join('')}
              </tr>
              <tr>
                <td>评分</td>
                ${tools.map(tool => `<td>${tool.rating} / 5.0</td>`).join('')}
              </tr>
              <tr>
                <td>用户数</td>
                ${tools.map(tool => `<td>${tool.users || '-'}</td>`).join('')}
              </tr>
              <tr>
                <td>定价</td>
                ${tools.map(tool => `<td>${tool.pricing}</td>`).join('')}
              </tr>
              <tr>
                <td>功能</td>
                ${tools.map(tool => `<td>${tool.features.join('<br>')}</td>`).join('')}
              </tr>
              <tr>
                <td>优势</td>
                ${tools.map(tool => `<td>${tool.pros.join('<br>')}</td>`).join('')}
              </tr>
              <tr>
                <td>劣势</td>
                ${tools.map(tool => `<td>${tool.cons.join('<br>')}</td>`).join('')}
              </tr>
              <tr>
                <td>最后更新</td>
                ${tools.map(tool => `<td>${tool.lastUpdated}</td>`).join('')}
              </tr>
              <tr>
                <td>链接</td>
                ${tools.map(tool => `<td><a href="${tool.url}" target="_blank">访问官网</a></td>`).join('')}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
    
    container.innerHTML = html;
  }

  /**
   * 生成模型对比
   * @param {Array} modelIds 模型ID列表
   * @param {Element} container 容器元素
   * @param {Object} database 数据库
   */
  generateModelsComparison(modelIds, container, database) {
    const models = modelIds.map(id => database.models.find(model => model.id === id)).filter(Boolean);
    
    let html = `
      <div class="comparison-card">
        <h2>AI模型对比</h2>
        <div style="overflow-x: auto;">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>特性</th>
                ${models.map(model => `<th>${model.name}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>提供商</td>
                ${models.map(model => `<td>${model.provider}</td>`).join('')}
              </tr>
              <tr>
                <td>类型</td>
                ${models.map(model => `<td>${model.type}</td>`).join('')}
              </tr>
              <tr>
                <td>评分</td>
                ${models.map(model => `<td>${model.rating} / 5.0</td>`).join('')}
              </tr>
              <tr>
                <td>定价</td>
                ${models.map(model => `<td>${model.pricing}</td>`).join('')}
              </tr>
              <tr>
                <td>功能</td>
                ${models.map(model => `<td>${model.features.join('<br>')}</td>`).join('')}
              </tr>
              <tr>
                <td>优势</td>
                ${models.map(model => `<td>${model.strengths.join('<br>')}</td>`).join('')}
              </tr>
              <tr>
                <td>限制</td>
                ${models.map(model => `<td>${model.limitations.join('<br>')}</td>`).join('')}
              </tr>
              <tr>
                <td>API访问</td>
                ${models.map(model => `<td>${model.apiAccess ? '<span class="feature-yes">✓</span>' : '<span class="feature-no">✗</span>'}</td>`).join('')}
              </tr>
              <tr>
                <td>Web界面</td>
                ${models.map(model => `<td>${model.webInterface ? '<span class="feature-yes">✓</span>' : '<span class="feature-no">✗</span>'}</td>`).join('')}
              </tr>
              <tr>
                <td>最后更新</td>
                ${models.map(model => `<td>${model.lastUpdated}</td>`).join('')}
              </tr>
              <tr>
                <td>链接</td>
                ${models.map(model => `<td><a href="${model.url}" target="_blank">访问官网</a></td>`).join('')}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
    
    container.innerHTML = html;
  }

  /**
   * 生成Agent对比
   * @param {Array} agentIds Agent ID列表
   * @param {Element} container 容器元素
   * @param {Object} database 数据库
   */
  generateAgentsComparison(agentIds, container, database) {
    const agents = agentIds.map(id => database.agents.find(agent => agent.id === id)).filter(Boolean);
    
    let html = `
      <div class="comparison-card">
        <h2>AI Agent对比</h2>
        <div style="overflow-x: auto;">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>特性</th>
                ${agents.map(agent => `<th>${agent.name}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>提供商</td>
                ${agents.map(agent => `<td>${agent.provider || '-'}</td>`).join('')}
              </tr>
              <tr>
                <td>分类</td>
                ${agents.map(agent => `<td>${agent.category}</td>`).join('')}
              </tr>
              <tr>
                <td>复杂度</td>
                ${agents.map(agent => `<td>${agent.complexity}</td>`).join('')}
              </tr>
              <tr>
                <td>评分</td>
                ${agents.map(agent => `<td>${agent.rating} / 5.0</td>`).join('')}
              </tr>
              <tr>
                <td>用例</td>
                ${agents.map(agent => `<td>${agent.useCase}</td>`).join('')}
              </tr>
              <tr>
                <td>功能</td>
                ${agents.map(agent => `<td>${agent.features.join('<br>')}</td>`).join('')}
              </tr>
              <tr>
                <td>GitHub</td>
                ${agents.map(agent => `<td><a href="${agent.github}" target="_blank">查看代码</a></td>`).join('')}
              </tr>
              <tr>
                <td>文档</td>
                ${agents.map(agent => `<td><a href="${agent.documentation}" target="_blank">查看文档</a></td>`).join('')}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
    
    container.innerHTML = html;
  }

  /**
   * 生成推荐
   * @param {Array} selectedIds 选中的ID列表
   * @param {Object} database 数据库
   */
  generateRecommendation(selectedIds, database) {
    const recommendationSection = document.getElementById('recommendation-section');
    const recommendationContent = document.getElementById('recommendation-content');
    if (!recommendationSection || !recommendationContent) return;
    
    // 根据当前类型获取项目
    let items;
    switch (this.currentType) {
      case 'tools':
        items = selectedIds.map(id => database.tools.find(tool => tool.id === id)).filter(Boolean);
        break;
      case 'models':
        items = selectedIds.map(id => database.models.find(model => model.id === id)).filter(Boolean);
        break;
      case 'agents':
        items = selectedIds.map(id => database.agents.find(agent => agent.id === id)).filter(Boolean);
        break;
    }
    
    // 找出评分最高的项目
    const bestItem = items.reduce((best, current) => (current.rating > best.rating) ? current : best, items[0]);
    
    // 生成推荐内容
    let html = `
      <p>基于您选择的${items.length}个${this.currentType === 'tools' ? 'AI工具' : this.currentType === 'models' ? 'AI模型' : 'AI Agent'}，我们推荐：</p>
      <h3>${bestItem.name}</h3>
      <p>${bestItem.description}</p>
      <p><strong>评分：</strong> ${bestItem.rating} / 5.0</p>
      <p><strong>优势：</strong> ${this.currentType === 'tools' ? bestItem.pros.join('，') : this.currentType === 'models' ? bestItem.strengths.join('，') : bestItem.features.slice(0, 3).join('，')}</p>
      <a href="${bestItem.url || bestItem.github}" target="_blank" class="tool-btn" style="display: inline-block; margin-top: 1rem;">了解更多</a>
    `;
    
    recommendationContent.innerHTML = html;
    recommendationSection.style.display = 'block';
  }
}

// 创建页面实例
const comparePage = new ComparePage();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  comparePage.initialize();
});