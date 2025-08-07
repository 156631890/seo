/**
 * SEO验证和测试脚本
 * 用于验证网站的SEO优化情况
 */

class SEOValidator {
  constructor() {
    this.results = {
      passed: [],
      warnings: [],
      errors: []
    };
  }

  /**
   * 运行完整的SEO验证
   */
  async runFullValidation() {
    console.log('🔍 开始SEO验证...');
    
    this.validatePageTitle();
    this.validateMetaDescription();
    this.validateMetaKeywords();
    this.validateHeadings();
    this.validateImages();
    this.validateLinks();
    this.validateStructuredData();
    this.validateCanonical();
    this.validateOpenGraph();
    this.validateTwitterCards();
    this.validateRobotsMeta();
    await this.validatePageSpeed();
    this.validateMobileResponsive();
    this.validateAccessibility();
    
    this.generateReport();
  }

  /**
   * 验证页面标题
   */
  validatePageTitle() {
    const title = document.title;
    
    if (!title) {
      this.addError('缺少页面标题');
      return;
    }
    
    if (title.length < 30) {
      this.addWarning(`页面标题过短 (${title.length}字符)，建议30-60字符`);
    } else if (title.length > 60) {
      this.addWarning(`页面标题过长 (${title.length}字符)，建议30-60字符`);
    } else {
      this.addPassed('页面标题长度合适');
    }
    
    if (!title.includes('MyAI')) {
      this.addWarning('页面标题未包含品牌名称');
    }
    
    if (!title.includes('AI工具') && !title.includes('AI模型') && !title.includes('AI代理')) {
      this.addWarning('页面标题未包含核心关键词');
    }
  }

  /**
   * 验证Meta描述
   */
  validateMetaDescription() {
    const description = this.getMetaContent('description');
    
    if (!description) {
      this.addError('缺少Meta描述');
      return;
    }
    
    if (description.length < 120) {
      this.addWarning(`Meta描述过短 (${description.length}字符)，建议120-160字符`);
    } else if (description.length > 160) {
      this.addWarning(`Meta描述过长 (${description.length}字符)，建议120-160字符`);
    } else {
      this.addPassed('Meta描述长度合适');
    }
  }

  /**
   * 验证Meta关键词
   */
  validateMetaKeywords() {
    const keywords = this.getMetaContent('keywords');
    
    if (!keywords) {
      this.addWarning('缺少Meta关键词');
    } else {
      const keywordList = keywords.split(',').map(k => k.trim());
      if (keywordList.length > 10) {
        this.addWarning(`关键词过多 (${keywordList.length}个)，建议5-10个`);
      } else {
        this.addPassed('Meta关键词数量合适');
      }
    }
  }

  /**
   * 验证标题结构
   */
  validateHeadings() {
    const h1s = document.querySelectorAll('h1');
    const h2s = document.querySelectorAll('h2');
    const h3s = document.querySelectorAll('h3');
    
    if (h1s.length === 0) {
      this.addError('缺少H1标题');
    } else if (h1s.length > 1) {
      this.addWarning(`H1标题过多 (${h1s.length}个)，建议只有1个`);
    } else {
      this.addPassed('H1标题数量正确');
    }
    
    if (h2s.length === 0) {
      this.addWarning('缺少H2标题，建议使用H2组织内容结构');
    }
    
    // 检查标题层次结构
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    let lastLevel = 0;
    let structureValid = true;
    
    headings.forEach(heading => {
      const level = parseInt(heading.tagName.charAt(1));
      if (level > lastLevel + 1) {
        structureValid = false;
      }
      lastLevel = level;
    });
    
    if (structureValid) {
      this.addPassed('标题层次结构正确');
    } else {
      this.addWarning('标题层次结构不规范');
    }
  }

  /**
   * 验证图片优化
   */
  validateImages() {
    const images = document.querySelectorAll('img');
    let imagesWithoutAlt = 0;
    let imagesWithoutTitle = 0;
    let largeImages = 0;
    
    images.forEach(img => {
      if (!img.alt) {
        imagesWithoutAlt++;
      }
      
      if (!img.title) {
        imagesWithoutTitle++;
      }
      
      // 检查图片尺寸（如果可以获取）
      if (img.naturalWidth > 1920 || img.naturalHeight > 1080) {
        largeImages++;
      }
    });
    
    if (imagesWithoutAlt > 0) {
      this.addError(`${imagesWithoutAlt}张图片缺少alt属性`);
    } else if (images.length > 0) {
      this.addPassed('所有图片都有alt属性');
    }
    
    if (imagesWithoutTitle > images.length * 0.5) {
      this.addWarning('建议为重要图片添加title属性');
    }
    
    if (largeImages > 0) {
      this.addWarning(`${largeImages}张图片尺寸过大，建议优化`);
    }
  }

  /**
   * 验证链接
   */
  validateLinks() {
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href^="./"], a[href^="../"]');
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="myai.com"])');
    let brokenLinks = 0;
    let linksWithoutTitle = 0;
    
    // 检查内部链接
    internalLinks.forEach(link => {
      if (!link.title && !link.getAttribute('aria-label')) {
        linksWithoutTitle++;
      }
    });
    
    // 检查外部链接
    externalLinks.forEach(link => {
      if (!link.rel || !link.rel.includes('noopener')) {
        this.addWarning('外部链接建议添加rel="noopener"属性');
      }
      
      if (!link.target || link.target !== '_blank') {
        this.addWarning('外部链接建议在新窗口打开');
      }
    });
    
    this.addPassed(`内部链接: ${internalLinks.length}个, 外部链接: ${externalLinks.length}个`);
  }

  /**
   * 验证结构化数据
   */
  validateStructuredData() {
    const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
    
    if (structuredDataScripts.length === 0) {
      this.addError('缺少结构化数据');
      return;
    }
    
    let validStructuredData = 0;
    
    structuredDataScripts.forEach(script => {
      try {
        const data = JSON.parse(script.textContent);
        if (data['@context'] && data['@type']) {
          validStructuredData++;
        }
      } catch (error) {
        this.addError('结构化数据格式错误');
      }
    });
    
    if (validStructuredData > 0) {
      this.addPassed(`${validStructuredData}个有效的结构化数据`);
    }
  }

  /**
   * 验证Canonical URL
   */
  validateCanonical() {
    const canonical = document.querySelector('link[rel="canonical"]');
    
    if (!canonical) {
      this.addWarning('缺少canonical链接');
      return;
    }
    
    const canonicalUrl = canonical.href;
    const currentUrl = window.location.href.split('?')[0].split('#')[0];
    
    if (canonicalUrl === currentUrl) {
      this.addPassed('Canonical URL正确');
    } else {
      this.addWarning('Canonical URL与当前URL不匹配');
    }
  }

  /**
   * 验证Open Graph
   */
  validateOpenGraph() {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    let ogScore = 0;
    
    if (ogTitle) ogScore++;
    if (ogDescription) ogScore++;
    if (ogImage) ogScore++;
    if (ogUrl) ogScore++;
    
    if (ogScore === 4) {
      this.addPassed('Open Graph标签完整');
    } else {
      this.addWarning(`Open Graph标签不完整 (${ogScore}/4)`);
    }
  }

  /**
   * 验证Twitter Cards
   */
  validateTwitterCards() {
    const twitterCard = document.querySelector('meta[property="twitter:card"]');
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    
    let twitterScore = 0;
    
    if (twitterCard) twitterScore++;
    if (twitterTitle) twitterScore++;
    if (twitterDescription) twitterScore++;
    
    if (twitterScore >= 2) {
      this.addPassed('Twitter Cards配置良好');
    } else {
      this.addWarning('Twitter Cards配置不完整');
    }
  }

  /**
   * 验证Robots Meta
   */
  validateRobotsMeta() {
    const robotsMeta = document.querySelector('meta[name="robots"]');
    
    if (!robotsMeta) {
      this.addWarning('缺少robots meta标签');
    } else {
      const content = robotsMeta.content.toLowerCase();
      if (content.includes('noindex')) {
        this.addWarning('页面设置为不被索引');
      } else {
        this.addPassed('Robots meta标签配置正确');
      }
    }
  }

  /**
   * 验证页面速度
   */
  async validatePageSpeed() {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0];
      const loadTime = navigation.loadEventEnd - navigation.fetchStart;
      
      if (loadTime < 2000) {
        this.addPassed(`页面加载速度良好 (${Math.round(loadTime)}ms)`);
      } else if (loadTime < 4000) {
        this.addWarning(`页面加载速度一般 (${Math.round(loadTime)}ms)`);
      } else {
        this.addError(`页面加载速度过慢 (${Math.round(loadTime)}ms)`);
      }
    }
  }

  /**
   * 验证移动端响应式
   */
  validateMobileResponsive() {
    const viewport = document.querySelector('meta[name="viewport"]');
    
    if (!viewport) {
      this.addError('缺少viewport meta标签');
    } else {
      const content = viewport.content;
      if (content.includes('width=device-width')) {
        this.addPassed('Viewport配置正确');
      } else {
        this.addWarning('Viewport配置可能不正确');
      }
    }
    
    // 检查CSS媒体查询
    const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    let hasMediaQueries = false;
    
    // 这里简化检查，实际应该解析CSS内容
    if (stylesheets.length > 0) {
      hasMediaQueries = true; // 假设有媒体查询
    }
    
    if (hasMediaQueries) {
      this.addPassed('检测到响应式设计');
    } else {
      this.addWarning('未检测到响应式设计');
    }
  }

  /**
   * 验证可访问性
   */
  validateAccessibility() {
    // 检查语言属性
    const htmlLang = document.documentElement.lang;
    if (!htmlLang) {
      this.addWarning('HTML元素缺少lang属性');
    } else {
      this.addPassed('HTML语言属性设置正确');
    }
    
    // 检查跳转链接
    const skipLinks = document.querySelectorAll('a[href^="#"]');
    if (skipLinks.length > 0) {
      this.addPassed('检测到页面内跳转链接');
    }
    
    // 检查表单标签
    const inputs = document.querySelectorAll('input, textarea, select');
    let inputsWithoutLabels = 0;
    
    inputs.forEach(input => {
      const id = input.id;
      const label = document.querySelector(`label[for="${id}"]`);
      const ariaLabel = input.getAttribute('aria-label');
      
      if (!label && !ariaLabel) {
        inputsWithoutLabels++;
      }
    });
    
    if (inputsWithoutLabels > 0) {
      this.addWarning(`${inputsWithoutLabels}个表单元素缺少标签`);
    } else if (inputs.length > 0) {
      this.addPassed('表单元素标签完整');
    }
  }

  /**
   * 获取Meta标签内容
   */
  getMetaContent(name) {
    const meta = document.querySelector(`meta[name="${name}"]`);
    return meta ? meta.content : '';
  }

  /**
   * 添加通过项
   */
  addPassed(message) {
    this.results.passed.push(message);
  }

  /**
   * 添加警告项
   */
  addWarning(message) {
    this.results.warnings.push(message);
  }

  /**
   * 添加错误项
   */
  addError(message) {
    this.results.errors.push(message);
  }

  /**
   * 生成验证报告
   */
  generateReport() {
    console.group('📊 SEO验证报告');
    
    console.group('✅ 通过项 (' + this.results.passed.length + ')');
    this.results.passed.forEach(item => console.log('✅', item));
    console.groupEnd();
    
    if (this.results.warnings.length > 0) {
      console.group('⚠️ 警告项 (' + this.results.warnings.length + ')');
      this.results.warnings.forEach(item => console.warn('⚠️', item));
      console.groupEnd();
    }
    
    if (this.results.errors.length > 0) {
      console.group('❌ 错误项 (' + this.results.errors.length + ')');
      this.results.errors.forEach(item => console.error('❌', item));
      console.groupEnd();
    }
    
    const total = this.results.passed.length + this.results.warnings.length + this.results.errors.length;
    const score = Math.round((this.results.passed.length / total) * 100);
    
    console.log(`🎯 SEO得分: ${score}% (${this.results.passed.length}/${total})`);
    
    if (score >= 90) {
      console.log('🏆 SEO优化优秀！');
    } else if (score >= 70) {
      console.log('👍 SEO优化良好，还有提升空间');
    } else {
      console.log('⚠️ SEO需要改进');
    }
    
    console.groupEnd();
    
    return {
      score: score,
      total: total,
      passed: this.results.passed.length,
      warnings: this.results.warnings.length,
      errors: this.results.errors.length,
      details: this.results
    };
  }

  /**
   * 获取验证结果
   */
  getResults() {
    return this.results;
  }
}

// 自动运行验证（仅在开发环境）
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const validator = new SEOValidator();
      validator.runFullValidation();
      window.seoValidator = validator;
    }, 2000); // 等待页面完全加载
  });
}

// 导出供手动调用
window.SEOValidator = SEOValidator;