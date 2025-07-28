/**
 * 调试语言切换功能
 */

function createDebugPanel() {
  // 检查是否已经存在调试面板
  if (document.getElementById('language-debug-panel')) {
    return;
  }

  // 确保i18n已加载
  if (!window.i18n || !window.i18nConfig) {
    console.warn('i18n not loaded for debug panel, retrying in 200ms...');
    setTimeout(createDebugPanel, 200);
    return;
  }

  try {
    // 创建调试面板
    const debugPanel = document.createElement('div');
    debugPanel.id = 'language-debug-panel';
    debugPanel.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: white;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 15px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      z-index: 9999;
      font-family: Arial, sans-serif;
      max-width: 250px;
    `;
    
    // 添加标题
    const title = document.createElement('h3');
    title.textContent = '🌐 语言切换调试';
    title.style.cssText = 'margin: 0 0 10px 0; font-size: 14px; color: #333;';
    debugPanel.appendChild(title);
    
    // 添加当前语言信息
    const currentLang = window.i18n.getCurrentLanguage();
    const currentLangInfo = window.i18nConfig.supportedLanguages[currentLang];
    const info = document.createElement('div');
    info.style.cssText = 'margin-bottom: 10px; font-size: 12px; color: #666; padding: 5px; background: #f5f5f5; border-radius: 3px;';
    info.innerHTML = `当前语言: <strong>${currentLangInfo.flag} ${currentLangInfo.name} (${currentLang})</strong>`;
    debugPanel.appendChild(info);
    
    // 添加语言选择按钮
    const languages = window.i18nConfig.supportedLanguages;
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = 'display: flex; flex-wrap: wrap; gap: 5px;';
    
    Object.entries(languages).forEach(([code, lang]) => {
      const button = document.createElement('button');
      button.textContent = `${lang.flag} ${lang.name}`;
      button.title = `切换到${lang.name}`;
      button.style.cssText = `
        padding: 5px 8px;
        cursor: pointer;
        border: 1px solid #ddd;
        border-radius: 3px;
        font-size: 11px;
        background: ${code === currentLang ? '#10b981' : 'white'};
        color: ${code === currentLang ? 'white' : '#333'};
        transition: all 0.2s;
      `;
      
      button.addEventListener('click', () => {
        if (code !== currentLang) {
          console.log(`Switching language from ${currentLang} to ${code}`);
          window.i18n.setLanguage(code);
          // 添加一个短暂的延迟，然后刷新页面
          setTimeout(() => {
            window.location.reload();
          }, 100);
        }
      });
      
      button.addEventListener('mouseenter', () => {
        if (code !== currentLang) {
          button.style.background = '#f0f0f0';
        }
      });
      
      button.addEventListener('mouseleave', () => {
        if (code !== currentLang) {
          button.style.background = 'white';
        }
      });
      
      buttonContainer.appendChild(button);
    });
    
    debugPanel.appendChild(buttonContainer);
    
    // 添加关闭按钮
    const closeButton = document.createElement('button');
    closeButton.textContent = '×';
    closeButton.title = '关闭调试面板';
    closeButton.style.cssText = `
      position: absolute;
      top: 5px;
      right: 5px;
      background: none;
      border: none;
      font-size: 16px;
      cursor: pointer;
      color: #999;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    closeButton.addEventListener('click', () => {
      debugPanel.remove();
    });
    
    debugPanel.appendChild(closeButton);
    
    // 添加到页面
    document.body.appendChild(debugPanel);
    
    console.log('Debug panel created successfully');
  } catch (error) {
    console.error('Error creating debug panel:', error);
  }
}

// 页面加载完成后创建调试面板
document.addEventListener('DOMContentLoaded', () => {
  // 延迟创建调试面板，确保i18n已完全加载
  setTimeout(createDebugPanel, 500);
});