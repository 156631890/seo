/**
 * 性能监控工具
 * 监控页面加载和渲染性能
 */

class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.startTime = performance.now();
  }

  /**
   * 记录性能指标
   */
  mark(name) {
    this.metrics[name] = performance.now() - this.startTime;
  }

  /**
   * 获取性能报告
   */
  getReport() {
    return {
      ...this.metrics,
      totalTime: performance.now() - this.startTime
    };
  }

  /**
   * 监控DOM内容加载
   */
  monitorDOMContentLoaded() {
    document.addEventListener('DOMContentLoaded', () => {
      this.mark('DOMContentLoaded');
    });
  }

  /**
   * 监控页面完全加载
   */
  monitorPageLoad() {
    window.addEventListener('load', () => {
      this.mark('PageLoad');
      this.logPerformanceReport();
    });
  }

  /**
   * 输出性能报告
   */
  logPerformanceReport() {
    const report = this.getReport();
    console.group('🚀 页面性能报告');
    console.log('DOM内容加载:', report.DOMContentLoaded?.toFixed(2) + 'ms');
    console.log('页面完全加载:', report.PageLoad?.toFixed(2) + 'ms');
    console.log('数据库加载:', report.DatabaseLoaded?.toFixed(2) + 'ms');
    console.log('工具渲染:', report.ToolsRendered?.toFixed(2) + 'ms');
    console.log('总耗时:', report.totalTime.toFixed(2) + 'ms');
    console.groupEnd();

    // 如果性能较差，给出建议
    if (report.totalTime > 3000) {
      console.warn('⚠️ 页面加载较慢，建议优化');
    }
  }

  /**
   * 监控长任务
   */
  monitorLongTasks() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            console.warn('⚠️ 检测到长任务:', entry.duration.toFixed(2) + 'ms');
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // 某些浏览器可能不支持longtask
        console.log('浏览器不支持长任务监控');
      }
    }
  }

  /**
   * 初始化监控
   */
  init() {
    this.monitorDOMContentLoaded();
    this.monitorPageLoad();
    this.monitorLongTasks();
  }
}

// 创建全局性能监控实例
window.performanceMonitor = new PerformanceMonitor();
window.performanceMonitor.init();