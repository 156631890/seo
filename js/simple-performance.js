/**
 * 简化的性能监控器
 * 替代复杂的性能监控，减少加载时间
 */

class SimplePerformance {
  constructor() {
    this.marks = {};
    this.measures = {};
  }

  mark(name) {
    this.marks[name] = Date.now();
  }

  measure(name, startMark, endMark) {
    const start = this.marks[startMark] || Date.now();
    const end = this.marks[endMark] || Date.now();
    this.measures[name] = end - start;
    console.log(`${name}: ${this.measures[name]}ms`);
  }

  getEntries() {
    return Object.keys(this.measures).map(name => ({
      name,
      duration: this.measures[name]
    }));
  }
}

// 创建全局实例
window.performanceMonitor = new SimplePerformance();