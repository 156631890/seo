/**
 * SEO分析和性能监控脚本
 * 用于监控网站SEO表现和用户行为
 */

class SEOAnalytics {
  constructor() {
    this.startTime = performance.now();
    this.metrics = {
      pageLoad: null,
      firstContentfulPaint: null,
      largestContentfulPaint: null,
      cumulativeLayoutShift: null,
      firstInputDelay: null,
      timeToInteractive: null
    };
    
    this.userBehavior = {
      scrollDepth: 0,
      timeOnPage: 0,
      clicks: 0,
      searches: 0
    };
    
    this.init();
  }

  init() {
    this.measureCoreWebVitals();
    this.trackUserBehavior();
    this.trackSEOElements();
    this.setupBeforeUnload();
  }

  /**
   * 测量核心Web指标
   */
  measureCoreWebVitals() {
    // 使用Performance Observer API
    if ('PerformanceObserver' in window) {
      // 测量FCP (First Contentful Paint)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.firstContentfulPaint = entry.startTime;
            this.reportMetric('FCP', entry.startTime);
          }
        }
      }).observe({ entryTypes: ['paint'] });

      // 测量LCP (Largest Contentful Paint)
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // 测量CLS (Cumulative Layout Shift)
      new PerformanceObserver((entryList) => {
        let clsValue = 0;
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        this.metrics.cumulativeLayoutShift = clsValue;
        this.reportMetric('CLS', clsValue);
      }).observe({ entryTypes: ['layout-shift'] });

      // 测量FID (First Input Delay)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
          this.reportMetric('FID', this.metrics.firstInputDelay);
        }
      }).observe({ entryTypes: ['first-input'] });
    }

    // 页面加载完成时间
    window.addEventListener('load', () => {
      this.metrics.pageLoad = performance.now() - this.startTime;
      this.reportMetric('PageLoad', this.metrics.pageLoad);
    });
  }

  /**
   * 跟踪用户行为
   */
  trackUserBehavior() {
    // 滚动深度跟踪
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        this.userBehavior.scrollDepth = maxScroll;
      }
    });

    // 点击跟踪
    document.addEventListener('click', (e) => {
      this.userBehavior.clicks++;
      
      // 跟踪特定元素点击
      if (e.target.matches('a[href^="http"]')) {
        this.trackEvent('external_link_click', {
          url: e.target.href,
          text: e.target.textContent.trim()
        });
      }
      
      if (e.target.matches('.tool-card a, .model-card a, .agent-card a')) {
        this.trackEvent('tool_click', {
          tool_name: e.target.textContent.trim(),
          tool_type: this.getToolType(e.target)
        });
      }
    });

    // 搜索跟踪
    const searchInputs = document.querySelectorAll('input[type="search"], #searchInput, .search-input');
    searchInputs.forEach(input => {
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.value.trim()) {
          this.userBehavior.searches++;
          this.trackEvent('search', {
            query: e.target.value.trim(),
            page: window.location.pathname
          });
        }
      });
    });

    // 页面停留时间
    setInterval(() => {
      this.userBehavior.timeOnPage += 1;
    }, 1000);
  }

  /**
   * 跟踪SEO元素
   */
  trackSEOElements() {
    const seoData = {
      title: document.title,
      description: this.getMetaContent('description'),
      keywords: this.getMetaContent('keywords'),
      canonical: this.getCanonicalUrl(),
      h1Count: document.querySelectorAll('h1').length,
      h2Count: document.querySelectorAll('h2').length,
      imageCount: document.querySelectorAll('img').length,
      imagesWithoutAlt: document.querySelectorAll('img:not([alt])').length,
      internalLinks: document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]').length,
      externalLinks: document.querySelectorAll('a[href^="http"]:not([href*="myai.com"])').length,
      structuredData: this.hasStructuredData()
    };

    this.reportSEOData(seoData);
  }

  /**
   * 获取meta标签内容
   */
  getMetaContent(name) {
    const meta = document.querySelector(`meta[name="${name}"]`);
    return meta ? meta.content : '';
  }

  /**
   * 获取canonical URL
   */
  getCanonicalUrl() {
    const canonical = document.querySelector('link[rel="canonical"]');
    return canonical ? canonical.href : window.location.href;
  }

  /**
   * 检查是否有结构化数据
   */
  hasStructuredData() {
    return document.querySelectorAll('script[type="application/ld+json"]').length > 0;
  }

  /**
   * 获取工具类型
   */
  getToolType(element) {
    if (element.closest('.tool-card')) return 'tool';
    if (element.closest('.model-card')) return 'model';
    if (element.closest('.agent-card')) return 'agent';
    return 'unknown';
  }

  /**
   * 报告性能指标
   */
  reportMetric(name, value) {
    console.log(`📊 ${name}: ${Math.round(value)}ms`);
    
    // 发送到Google Analytics (如果可用)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: Math.round(value),
        page_path: window.location.pathname
      });
    }

    // 发送到自定义分析端点
    this.sendToAnalytics('performance', {
      metric: name,
      value: Math.round(value),
      page: window.location.pathname,
      timestamp: Date.now()
    });
  }

  /**
   * 跟踪事件
   */
  trackEvent(eventName, data) {
    console.log(`🎯 Event: ${eventName}`, data);
    
    // 发送到Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        ...data,
        page_path: window.location.pathname
      });
    }

    // 发送到自定义分析端点
    this.sendToAnalytics('event', {
      event: eventName,
      data: data,
      page: window.location.pathname,
      timestamp: Date.now()
    });
  }

  /**
   * 报告SEO数据
   */
  reportSEOData(data) {
    console.log('🔍 SEO Analysis:', data);
    
    // 检查SEO问题
    const issues = [];
    
    if (!data.title || data.title.length < 30 || data.title.length > 60) {
      issues.push('标题长度不合适');
    }
    
    if (!data.description || data.description.length < 120 || data.description.length > 160) {
      issues.push('描述长度不合适');
    }
    
    if (data.h1Count !== 1) {
      issues.push('H1标签数量不正确');
    }
    
    if (data.imagesWithoutAlt > 0) {
      issues.push(`${data.imagesWithoutAlt}张图片缺少alt属性`);
    }
    
    if (!data.structuredData) {
      issues.push('缺少结构化数据');
    }

    if (issues.length > 0) {
      console.warn('⚠️ SEO Issues:', issues);
    } else {
      console.log('✅ SEO检查通过');
    }

    // 发送SEO数据
    this.sendToAnalytics('seo', {
      ...data,
      issues: issues,
      timestamp: Date.now()
    });
  }

  /**
   * 页面卸载前发送数据
   */
  setupBeforeUnload() {
    window.addEventListener('beforeunload', () => {
      const sessionData = {
        ...this.userBehavior,
        sessionDuration: performance.now() - this.startTime,
        page: window.location.pathname,
        referrer: document.referrer,
        timestamp: Date.now()
      };

      // 使用sendBeacon发送数据（更可靠）
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/api/analytics', JSON.stringify({
          type: 'session',
          data: sessionData
        }));
      }

      console.log('📈 Session Summary:', sessionData);
    });
  }

  /**
   * 发送数据到分析端点
   */
  sendToAnalytics(type, data) {
    // 这里可以发送到实际的分析服务
    // 目前只是模拟
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      // 开发环境，只记录到控制台
      return;
    }

    // 生产环境，发送到分析服务
    fetch('/api/analytics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: type,
        data: data
      })
    }).catch(error => {
      console.error('Analytics error:', error);
    });
  }

  /**
   * 获取性能报告
   */
  getPerformanceReport() {
    return {
      metrics: this.metrics,
      userBehavior: this.userBehavior,
      timestamp: Date.now()
    };
  }
}

// 自动初始化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.seoAnalytics = new SEOAnalytics();
  });
} else {
  window.seoAnalytics = new SEOAnalytics();
}

// 导出供其他脚本使用
window.SEOAnalytics = SEOAnalytics;