/**
 * 工具详情页面逻辑
 * 负责工具、模型和Agent详情页面的展示
 */

class ToolDetailPage {
  constructor() {
    this.loader = window.aiToolsLoader;
    this.itemId = null;
    this.itemType = null;
    this.item = null;
  }

  /**
   * 初始化页面
   */
  async initialize() {
    try {
      // 显示加载状态
      this.showLoading();

      // 获取URL参数
      const urlParams = new URLSearchParams(window.location.search);
      this.itemId = urlParams.get('id');
      this.itemType = urlParams.get('type') || 'tool';

      if (!this.itemId) {
        window.location.href = '/tools.html';
        return;
      }

      // 使用快速加载器直接获取项目详情
      await this.loadItemDetailsQuickly();

      // 隐藏加载状态
      this.hideLoading();
    } catch (error) {
      console.error('初始化页面出错:', error);
      this.showError('加载详情失败: ' + error.message);
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
    // 隐藏加载状态
    this.hideLoading();
    
    // 清空页面内容
    document.body.innerHTML = '';
    
    // 创建错误页面
    const errorPage = document.createElement('div');
    errorPage.style.cssText = 'font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; margin: 0; padding: 20px; background: #f5f5f5; min-height: 100vh;';
    
    errorPage.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto; background: white; padding: 40px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center;">
        <div style="font-size: 4rem; color: #dc3545; margin-bottom: 20px;">⚠️</div>
        <h1 style="color: #dc3545; margin-bottom: 20px;">加载详情失败</h1>
        
        <div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 5px; margin: 20px 0; border: 1px solid #f5c6cb;">
          <strong>错误信息:</strong> ${message}
          <br><br>
          <strong>可能的原因:</strong>
          <ul style="text-align: left; margin-top: 10px;">
            <li>工具ID不存在或无效</li>
            <li>数据加载出现问题</li>
            <li>网络连接异常</li>
          </ul>
        </div>

        <div style="margin: 30px 0;">
          <a href="/tools.html" style="display: inline-block; background: #007bff; color: white; text-decoration: none; padding: 12px 24px; border-radius: 5px; margin: 10px; transition: background 0.3s;">🔙 返回工具列表</a>
          <a href="/index.html" style="display: inline-block; background: #28a745; color: white; text-decoration: none; padding: 12px 24px; border-radius: 5px; margin: 10px; transition: background 0.3s;">🏠 返回首页</a>
          <a href="javascript:history.back()" style="display: inline-block; background: #6c757d; color: white; text-decoration: none; padding: 12px 24px; border-radius: 5px; margin: 10px; transition: background 0.3s;">↩️ 返回上一页</a>
          <a href="javascript:location.reload()" style="display: inline-block; background: #ffc107; color: #212529; text-decoration: none; padding: 12px 24px; border-radius: 5px; margin: 10px; transition: background 0.3s;">🔄 重新加载</a>
        </div>

        <div style="margin-top: 30px; text-align: left;">
          <h2>热门工具推荐</h2>
          <div id="popular-tools-fallback" style="color: #666; font-style: italic;">正在加载热门工具...</div>
        </div>
      </div>
    `;
    
    document.body.appendChild(errorPage);
    
    // 尝试加载热门工具作为备选
    this.loadPopularToolsFallback();
  }

  /**
   * 加载热门工具作为错误页面的备选内容
   */
  async loadPopularToolsFallback() {
    try {
      const container = document.getElementById('popular-tools-fallback');
      if (!container) return;
      
      // 尝试从全局数据库获取热门工具
      if (typeof aiToolsDatabase !== 'undefined' && aiToolsDatabase.tools) {
        const popularTools = aiToolsDatabase.tools
          .sort((a, b) => (b.rating || 0) - (a.rating || 0))
          .slice(0, 6);
        
        if (popularTools.length > 0) {
          container.innerHTML = popularTools.map(tool => `
            <div style="background: #f8f9fa; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #007bff;">
              <h3 style="margin: 0 0 10px 0; color: #007bff;">
                <a href="/tool-detail.html?id=${tool.id}&type=tool" style="text-decoration: none; color: inherit;">${tool.name}</a>
              </h3>
              <p style="margin: 0; color: #666;">${tool.description || '暂无描述'}</p>
              <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #888;">
                <strong>评分:</strong> ${tool.rating || 'N/A'} ⭐ | 
                <strong>价格:</strong> ${tool.pricing || '未知'}
              </p>
            </div>
          `).join('');
        } else {
          container.innerHTML = '<p style="color: #666;">暂无热门工具数据</p>';
        }
      } else {
        // 尝试使用加载器获取数据
        if (this.loader) {
          const tools = await this.loader.getRecommendedTools(6);
          if (tools && tools.length > 0) {
            container.innerHTML = tools.map(tool => `
              <div style="background: #f8f9fa; padding: 15px; margin: 10px 0; border-radius: 5px; border-left: 4px solid #007bff;">
                <h3 style="margin: 0 0 10px 0; color: #007bff;">
                  <a href="/tool-detail.html?id=${tool.id}&type=tool" style="text-decoration: none; color: inherit;">${tool.name}</a>
                </h3>
                <p style="margin: 0; color: #666;">${tool.description || '暂无描述'}</p>
                <p style="margin: 5px 0 0 0; font-size: 0.9em; color: #888;">
                  <strong>评分:</strong> ${tool.rating || 'N/A'} ⭐ | 
                  <strong>价格:</strong> ${tool.pricing || '未知'}
                </p>
              </div>
            `).join('');
          } else {
            container.innerHTML = '<p style="color: #666;">无法加载推荐工具</p>';
          }
        } else {
          container.innerHTML = '<p style="color: #666;">数据加载器不可用</p>';
        }
      }
    } catch (error) {
      console.error('加载热门工具失败:', error);
      const container = document.getElementById('popular-tools-fallback');
      if (container) {
        container.innerHTML = '<p style="color: #dc3545;">加载推荐工具时出现错误</p>';
      }
    }
  }

  /**
   * 快速加载项目详情
   */
  async loadItemDetailsQuickly() {
    try {
      // 使用快速详情加载器
      this.item = await window.fastDetailLoader.getItemDetails(this.itemId, this.itemType);

      if (!this.item) {
        this.showError('找不到指定的项目');
        return;
      }

      // 根据类型渲染详情
      switch (this.itemType) {
        case 'tool':
          this.renderToolDetails();
          break;
        case 'model':
          this.renderModelDetails();
          break;
        case 'agent':
          this.renderAgentDetails();
          break;
      }

      // 异步加载相关项目
      this.loadRelatedItemsAsync();
    } catch (error) {
      console.error('快速加载项目详情失败:', error);
      this.showError('加载详情失败: ' + error.message);
    }
  }

  /**
   * 异步加载相关项目
   */
  async loadRelatedItemsAsync() {
    try {
      const relatedItems = await window.fastDetailLoader.getRelatedItems(this.item, this.itemType, 3);
      this.renderRelatedItemsQuickly(relatedItems);
    } catch (error) {
      console.error('加载相关项目失败:', error);
      // 不显示错误，只是不显示相关项目
    }
  }

  /**
   * 渲染工具详情
   */
  renderToolDetails() {
    const tool = this.item;

    // 更新页面标题和meta
    document.title = `${tool.name} - AI工具详情 • MyAI`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${tool.name} - ${tool.description}. 详细评测、使用指南和最佳实践。`);
    }

    // 渲染标题区域
    const heroSection = document.getElementById('tool-hero');
    if (heroSection) {
      heroSection.innerHTML = `
        <div class="container">
          <h1>${tool.name}</h1>
          <p class="subtitle">${tool.description}</p>
          <div class="meta">
            <div class="meta-item">
              <span>⭐</span>
              <span>${tool.rating}/5.0</span>
            </div>
            <div class="meta-item">
              <span>👥</span>
              <span>${tool.users || '用户数未知'}</span>
            </div>
            <div class="meta-item">
              <span>💰</span>
              <span>${tool.pricing}</span>
            </div>
            <div class="meta-item">
              <span>🏢</span>
              <span>${tool.provider}</span>
            </div>
          </div>
        </div>
      `;
    }

    // 渲染主要内容
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.innerHTML = `
        <h2>🚀 工具概述</h2>
        <p>${tool.description}</p>
        
        <h2>✨ 主要功能</h2>
        <div class="feature-list">
          ${(tool.features || []).map(feature => `
            <div class="feature-item">
              <p>${feature}</p>
            </div>
          `).join('')}
        </div>
        
        ${tool.pros || tool.cons ? `
        <h2>📊 优缺点分析</h2>
        <div class="pros-cons">
          ${tool.pros ? `
          <div class="pros">
            <h3>✅ 优势</h3>
            <ul>
              ${tool.pros.map(pro => `<li>${pro}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          ${tool.cons ? `
          <div class="cons">
            <h3>❌ 劣势</h3>
            <ul>
              ${tool.cons.map(con => `<li>${con}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
        </div>
        ` : ''}
        
        <h2>💡 使用建议</h2>
        <p>以下是使用${tool.name}的一些建议和最佳实践：</p>
        <div class="usage-steps">
          <div class="usage-step">
            <h4>了解基本功能</h4>
            <p>首先熟悉${tool.name}的核心功能${tool.features && tool.features.length > 0 ? `，包括${tool.features.slice(0, 2).join('和')}等` : ''}。</p>
          </div>
          <div class="usage-step">
            <h4>选择合适的计划</h4>
            <p>根据你的需求选择合适的价格计划，${tool.pricing && tool.pricing.includes('免费') ? '可以先从免费版本开始尝试' : '考虑是否需要高级功能'}。</p>
          </div>
          ${tool.pros && tool.pros.length > 0 ? `
          <div class="usage-step">
            <h4>充分利用优势</h4>
            <p>充分发挥${tool.name}的优势，特别是${tool.pros[0]}${tool.pros[1] ? `和${tool.pros[1]}` : ''}。</p>
          </div>
          ` : ''}
        </div>
        
        ${tool.tags && tool.tags.length > 0 ? `
        <h2>🎯 适用场景</h2>
        <p>${tool.name}特别适合以下场景：</p>
        <ul>
          ${tool.tags.map(tag => `<li>${tag}相关的工作</li>`).join('')}
        </ul>
        ` : ''}
      `;
    }

    // 渲染侧边栏
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.innerHTML = `
        <div class="info-card">
          <h3>📈 评分详情</h3>
          <div class="rating-display">
            <span class="stars">${'★'.repeat(Math.floor(tool.rating))}${'☆'.repeat(5-Math.floor(tool.rating))}</span>
            <span class="rating-number">${tool.rating}</span>
          </div>
          <p>基于用户反馈和专业评测</p>
        </div>
        
        ${tool.tags && tool.tags.length > 0 ? `
        <div class="info-card">
          <h3>🏷️ 标签</h3>
          <div class="tool-tags">
            ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
        ` : ''}
        
        <div class="info-card">
          <h3>📅 更新信息</h3>
          <p>最后更新: ${tool.lastUpdated}</p>
          <p>数据来源: MyAI团队评测</p>
        </div>
        
        <div class="info-card">
          <h3>📚 学习资源</h3>
          <ul>
            <li><a href="#tutorial">使用教程</a></li>
            <li><a href="#tips">最佳实践</a></li>
            <li><a href="#community">社区讨论</a></li>
          </ul>
        </div>
        
        <div class="info-card">
          <h3>📣 分享</h3>
          <div class="social-share" data-title="${tool.name} - AI工具" data-desc="${tool.description}"></div>
        </div>
      `;
    }

    // 渲染CTA区域
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.innerHTML = `
        <h2>准备开始使用 ${tool.name}？</h2>
        <p>立即体验这个强大的AI工具，提升你的工作效率</p>
        <a href="${tool.url}" target="_blank" class="cta-btn">立即使用 →</a>
      `;
    }

    // 渲染相关工具
    this.renderRelatedTools();

    // 初始化社交分享
    if (window.initSocialShare) {
      window.initSocialShare();
    }
  }

  /**
   * 渲染模型详情
   */
  renderModelDetails() {
    const model = this.item;

    // 更新页面标题和meta
    document.title = `${model.name} - AI模型详情 • MyAI`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${model.name} - ${model.description}. 详细评测、使用指南和最佳实践。`);
    }

    // 渲染标题区域
    const heroSection = document.getElementById('tool-hero');
    if (heroSection) {
      heroSection.innerHTML = `
        <div class="container">
          <h1>${model.name}</h1>
          <p class="subtitle">${model.description}</p>
          <div class="meta">
            <div class="meta-item">
              <span>⭐</span>
              <span>${model.rating}/5.0</span>
            </div>
            <div class="meta-item">
              <span>🧠</span>
              <span>${model.type}</span>
            </div>
            <div class="meta-item">
              <span>💰</span>
              <span>${model.pricing}</span>
            </div>
            <div class="meta-item">
              <span>🏢</span>
              <span>${model.provider}</span>
            </div>
          </div>
        </div>
      `;
    }

    // 渲染主要内容
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.innerHTML = `
        <h2>🚀 模型概述</h2>
        <p>${model.description}</p>
        
        <h2>✨ 主要功能</h2>
        <div class="feature-list">
          ${(model.features || []).map(feature => `
            <div class="feature-item">
              <p>${feature}</p>
            </div>
          `).join('')}
        </div>
        
        ${model.strengths || model.limitations ? `
        <h2>📊 优缺点分析</h2>
        <div class="pros-cons">
          ${model.strengths ? `
          <div class="pros">
            <h3>✅ 优势</h3>
            <ul>
              ${model.strengths.map(strength => `<li>${strength}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
          ${model.limitations ? `
          <div class="cons">
            <h3>❌ 限制</h3>
            <ul>
              ${model.limitations.map(limitation => `<li>${limitation}</li>`).join('')}
            </ul>
          </div>
          ` : ''}
        </div>
        ` : ''}
        
        ${model.features && model.features.length > 0 ? `
        <h2>💡 使用场景</h2>
        <p>${model.name}特别适合以下场景：</p>
        <ul>
          ${model.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        ` : ''}
        
        <h2>🔌 API访问</h2>
        <p>${model.apiAccess ? `${model.name}提供API访问，开发者可以将其集成到自己的应用中。` : `${model.name}目前不提供API访问。`}</p>
        
        <h2>🌐 Web界面</h2>
        <p>${model.webInterface ? `${model.name}提供Web界面，用户可以直接在浏览器中使用。` : `${model.name}目前不提供Web界面。`}</p>
      `;
    }

    // 渲染侧边栏
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.innerHTML = `
        <div class="info-card">
          <h3>📈 评分详情</h3>
          <div class="rating-display">
            <span class="stars">${'★'.repeat(Math.floor(model.rating))}${'☆'.repeat(5-Math.floor(model.rating))}</span>
            <span class="rating-number">${model.rating}</span>
          </div>
          <p>基于专业评测和用户反馈</p>
        </div>
        
        ${model.features && model.features.length > 0 ? `
        <div class="info-card">
          <h3>🏷️ 功能</h3>
          <div class="tool-tags">
            ${model.features.map(feature => `<span class="tag">${feature}</span>`).join('')}
          </div>
        </div>
        ` : ''}
        
        <div class="info-card">
          <h3>📅 更新信息</h3>
          <p>最后更新: ${model.lastUpdated}</p>
          <p>数据来源: MyAI团队评测</p>
        </div>
        
        <div class="info-card">
          <h3>📚 学习资源</h3>
          <ul>
            <li><a href="#docs">API文档</a></li>
            <li><a href="#examples">使用示例</a></li>
            <li><a href="#tutorials">教程</a></li>
          </ul>
        </div>
        
        <div class="info-card">
          <h3>📣 分享</h3>
          <div class="social-share" data-title="${model.name} - AI模型" data-desc="${model.description}"></div>
        </div>
      `;
    }

    // 渲染CTA区域
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.innerHTML = `
        <h2>想要尝试 ${model.name}？</h2>
        <p>立即体验这个强大的AI模型，探索其能力</p>
        <a href="${model.url}" target="_blank" class="cta-btn">了解更多 →</a>
      `;
    }

    // 渲染相关模型
    this.renderRelatedModels();

    // 初始化社交分享
    if (window.initSocialShare) {
      window.initSocialShare();
    }
  }

  /**
   * 渲染Agent详情
   */
  renderAgentDetails() {
    const agent = this.item;

    // 更新页面标题和meta
    document.title = `${agent.name} - AI Agent详情 • MyAI`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${agent.name} - ${agent.description}. 详细评测、使用指南和最佳实践。`);
    }

    // 渲染标题区域
    const heroSection = document.getElementById('tool-hero');
    if (heroSection) {
      heroSection.innerHTML = `
        <div class="container">
          <h1>${agent.name}</h1>
          <p class="subtitle">${agent.description}</p>
          <div class="meta">
            <div class="meta-item">
              <span>⭐</span>
              <span>${agent.rating}/5.0</span>
            </div>
            <div class="meta-item">
              <span>🤖</span>
              <span>${agent.category}</span>
            </div>
            <div class="meta-item">
              <span>🔧</span>
              <span>${agent.complexity}</span>
            </div>
            <div class="meta-item">
              <span>🏢</span>
              <span>${agent.provider || '开源项目'}</span>
            </div>
          </div>
        </div>
      `;
    }

    // 渲染主要内容
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.innerHTML = `
        <h2>🚀 Agent概述</h2>
        <p>${agent.description}</p>
        
        <h2>✨ 主要功能</h2>
        <div class="feature-list">
          ${(agent.features || []).map(feature => `
            <div class="feature-item">
              <p>${feature}</p>
            </div>
          `).join('')}
        </div>
        
        <h2>🎯 使用场景</h2>
        <p>${agent.useCase}</p>
        
        <h2>💻 技术复杂度</h2>
        <p>复杂度: <strong>${agent.complexity}</strong></p>
        <p>${
          agent.complexity === 'Beginner' ? '适合初学者，容易上手和使用。' :
          agent.complexity === 'Intermediate' ? '需要一定的技术基础，适合有一定编程经验的用户。' :
          '较为复杂，需要较强的技术背景和编程能力。'
        }</p>
        
        <h2>📚 文档和资源</h2>
        <p>要开始使用${agent.name}，可以访问以下资源：</p>
        <ul>
          <li><a href="${agent.github}" target="_blank">GitHub仓库</a></li>
          <li><a href="${agent.documentation}" target="_blank">官方文档</a></li>
        </ul>
      `;
    }

    // 渲染侧边栏
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
      sidebar.innerHTML = `
        <div class="info-card">
          <h3>📈 评分详情</h3>
          <div class="rating-display">
            <span class="stars">${'★'.repeat(Math.floor(agent.rating))}${'☆'.repeat(5-Math.floor(agent.rating))}</span>
            <span class="rating-number">${agent.rating}</span>
          </div>
          <p>基于开发者反馈和社区评价</p>
        </div>
        
        ${agent.tags && agent.tags.length > 0 ? `
        <div class="info-card">
          <h3>🏷️ 标签</h3>
          <div class="tool-tags">
            ${agent.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
        ` : ''}
        
        <div class="info-card">
          <h3>📊 GitHub统计</h3>
          <p>查看GitHub上的项目统计信息：</p>
          <p><a href="${agent.github}" target="_blank">访问GitHub</a></p>
        </div>
        
        <div class="info-card">
          <h3>📚 学习资源</h3>
          <ul>
            <li><a href="${agent.documentation}" target="_blank">官方文档</a></li>
            <li><a href="#examples">使用示例</a></li>
            <li><a href="#community">社区讨论</a></li>
          </ul>
        </div>
        
        <div class="info-card">
          <h3>📣 分享</h3>
          <div class="social-share" data-title="${agent.name} - AI Agent" data-desc="${agent.description}"></div>
        </div>
      `;
    }

    // 渲染CTA区域
    const ctaSection = document.getElementById('cta-section');
    if (ctaSection) {
      ctaSection.innerHTML = `
        <h2>想要尝试 ${agent.name}？</h2>
        <p>立即探索这个强大的AI Agent，构建自己的AI应用</p>
        <a href="${agent.github}" target="_blank" class="cta-btn">查看GitHub →</a>
      `;
    }

    // 渲染相关Agent
    this.renderRelatedAgents();

    // 初始化社交分享
    if (window.initSocialShare) {
      window.initSocialShare();
    }
  }

  /**
   * 渲染相关工具
   */
  async renderRelatedTools() {
    const relatedContainer = document.getElementById('related-tools');
    if (!relatedContainer) return;

    try {
      const database = await this.loader.getDatabase();
      const relatedTools = database.tools
        .filter(tool => tool.category === this.item.category && tool.id !== this.item.id)
        .slice(0, 3);

      if (relatedTools && relatedTools.length > 0) {
        relatedContainer.innerHTML = relatedTools.map(tool => `
          <div class="related-tool-card">
            <h4><a href="/tool-detail.html?id=${tool.id}&type=tool">${tool.name}</a></h4>
            <p>${tool.description || ''}</p>
            <div class="rating-display">
              <span class="stars">${'★'.repeat(Math.floor(tool.rating || 0))}${'☆'.repeat(5-Math.floor(tool.rating || 0))}</span>
              <span>${tool.rating || 0}</span>
            </div>
          </div>
        `).join('');
      } else {
        relatedContainer.innerHTML = '<div style="color:#666;padding:20px;">暂无相关工具</div>';
      }
    } catch (error) {
      console.error('渲染相关工具出错:', error);
      relatedContainer.innerHTML = '<div style="color:red;padding:20px;">加载相关工具失败</div>';
    }
  }

  /**
   * 渲染相关模型
   */
  async renderRelatedModels() {
    const relatedContainer = document.getElementById('related-tools');
    if (!relatedContainer) return;

    try {
      const database = await this.loader.getDatabase();
      const relatedModels = database.models
        .filter(model => model.provider === this.item.provider && model.id !== this.item.id)
        .slice(0, 3);

      if (relatedModels && relatedModels.length > 0) {
        relatedContainer.innerHTML = relatedModels.map(model => `
          <div class="related-tool-card">
            <h4><a href="/tool-detail.html?id=${model.id}&type=model">${model.name}</a></h4>
            <p>${model.description || ''}</p>
            <div class="rating-display">
              <span class="stars">${'★'.repeat(Math.floor(model.rating || 0))}${'☆'.repeat(5-Math.floor(model.rating || 0))}</span>
              <span>${model.rating || 0}</span>
            </div>
          </div>
        `).join('');
      } else {
        relatedContainer.innerHTML = '<div style="color:#666;padding:20px;">暂无相关模型</div>';
      }
    } catch (error) {
      console.error('渲染相关模型出错:', error);
      relatedContainer.innerHTML = '<div style="color:red;padding:20px;">加载相关模型失败</div>';
    }
  }

  /**
   * 渲染相关Agent
   */
  async renderRelatedAgents() {
    const relatedContainer = document.getElementById('related-tools');
    if (!relatedContainer) return;

    try {
      const database = await this.loader.getDatabase();
      const relatedAgents = database.agents
        .filter(agent => agent.category === this.item.category && agent.id !== this.item.id)
        .slice(0, 3);

      if (relatedAgents && relatedAgents.length > 0) {
        relatedContainer.innerHTML = relatedAgents.map(agent => `
          <div class="related-tool-card">
            <h4><a href="/tool-detail.html?id=${agent.id}&type=agent">${agent.name}</a></h4>
            <p>${agent.description || ''}</p>
            <div class="rating-display">
              <span class="stars">${'★'.repeat(Math.floor(agent.rating || 0))}${'☆'.repeat(5-Math.floor(agent.rating || 0))}</span>
              <span>${agent.rating || 0}</span>
            </div>
          </div>
        `).join('');
      } else {
        relatedContainer.innerHTML = '<div style="color:#666;padding:20px;">暂无相关Agent</div>';
      }
    } catch (error) {
      console.error('渲染相关Agent出错:', error);
      relatedContainer.innerHTML = '<div style="color:red;padding:20px;">加载相关Agent失败</div>';
    }
  }

  /**
   * 快速渲染相关项目
   * @param {Array} relatedItems 相关项目列表
   */
  renderRelatedItemsQuickly(relatedItems) {
    const relatedContainer = document.getElementById('related-tools');
    if (!relatedContainer || !relatedItems.length) return;

    try {
      if (relatedItems && relatedItems.length > 0) {
        relatedContainer.innerHTML = relatedItems.map(item => `
          <div class="related-tool-card">
            <h4><a href="/tool-detail.html?id=${item.id}&type=${this.itemType}">${item.name}</a></h4>
            <p>${item.description || ''}</p>
            <div class="rating-display">
              <span class="stars">${'★'.repeat(Math.floor(item.rating || 0))}${'☆'.repeat(5-Math.floor(item.rating || 0))}</span>
              <span>${item.rating || 0}</span>
            </div>
          </div>
        `).join('');
      } else {
        relatedContainer.innerHTML = '<div style="color:#666;padding:20px;">暂无相关项目</div>';
      }
    } catch (error) {
      console.error('快速渲染相关项目出错:', error);
      relatedContainer.innerHTML = '<div style="color:#666;padding:20px;">暂无相关项目</div>';
    }
  }
}

// 创建页面实例
const toolDetailPage = new ToolDetailPage();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  toolDetailPage.initialize();
});