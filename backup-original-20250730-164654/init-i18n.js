/**
 * 国际化系统初始化脚本
 * 确保所有i18n组件按正确顺序加载
 */

(function() {
  'use strict';
  
  let initAttempts = 0;
  const maxAttempts = 50; // 最多尝试5秒
  
  function waitForI18n() {
    initAttempts++;
    
    if (window.i18n && window.i18nConfig) {
      console.log('✅ i18n system loaded successfully');
      initializeI18nComponents();
    } else if (initAttempts < maxAttempts) {
      console.log(`⏳ Waiting for i18n system... (attempt ${initAttempts}/${maxAttempts})`);
      setTimeout(waitForI18n, 100);
    } else {
      console.error('❌ Failed to load i18n system after maximum attempts');
      showI18nError();
    }
  }
  
  function initializeI18nComponents() {
    try {
      // 1. 初始化页面翻译
      if (window.i18n && typeof window.i18n.initPageTranslation === 'function') {
        window.i18n.initPageTranslation();
        console.log('✅ Page translation initialized');
      }
      
      // 2. 初始化语言切换器
      if (window.LanguageSwitcher) {
        initLanguageSwitcher();
      } else {
        console.warn('⚠️ LanguageSwitcher class not found');
      }
      
      // 3. 监听语言变更事件
      window.addEventListener('languageChanged', (event) => {
        console.log('🌐 Language changed to:', event.detail.language);
      });
      
      console.log('✅ All i18n components initialized successfully');
    } catch (error) {
      console.error('❌ Error initializing i18n components:', error);
    }
  }
  
  function initLanguageSwitcher() {
    try {
      const languageSwitcher = new LanguageSwitcher();
      
      // 添加到桌面导航
      const desktopNav = document.querySelector('.site-nav.desktop');
      if (desktopNav) {
        languageSwitcher.addToPage('.site-nav.desktop');
        console.log('✅ Language switcher added to desktop navigation');
      }
      
      // 添加到移动导航
      const mobileNav = document.querySelector('details.nav-toggle .site-nav');
      if (mobileNav) {
        const switcher = languageSwitcher.createSwitcher();
        switcher.classList.add('mobile-switcher');
        mobileNav.appendChild(switcher);
        console.log('✅ Language switcher added to mobile navigation');
      }
      
    } catch (error) {
      console.error('❌ Error initializing language switcher:', error);
    }
  }
  
  function showI18nError() {
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: #fee;
      border: 1px solid #fcc;
      color: #c33;
      padding: 10px;
      border-radius: 5px;
      z-index: 10000;
      font-family: Arial, sans-serif;
      font-size: 12px;
    `;
    errorDiv.textContent = '⚠️ 多语言系统加载失败';
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
      errorDiv.remove();
    }, 5000);
  }
  
  // 开始初始化
  document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Starting i18n system initialization...');
    waitForI18n();
  });
  
})();