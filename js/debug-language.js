/**
 * 调试语言切换功能
 */
document.addEventListener('DOMContentLoaded', () => {
  // 创建调试面板
  const debugPanel = document.createElement('div');
  debugPanel.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 9999;
  `;
  
  // 添加标题
  const title = document.createElement('h3');
  title.textContent = '语言切换调试';
  title.style.marginBottom = '10px';
  debugPanel.appendChild(title);
  
  // 添加语言选择按钮
  if (window.i18nConfig && window.i18nConfig.supportedLanguages) {
    const languages = window.i18nConfig.supportedLanguages;
    
    Object.entries(languages).forEach(([code, lang]) => {
      const button = document.createElement('button');
      button.textContent = `${lang.flag} ${lang.name}`;
      button.style.cssText = `
        margin: 5px;
        padding: 5px 10px;
        cursor: pointer;
        border: 1px solid #ddd;
        border-radius: 3px;
        background: ${code === window.i18n.getCurrentLanguage() ? '#e0f2fe' : 'white'};
      `;
      
      button.addEventListener('click', () => {
        window.i18n.setLanguage(code);
        window.location.reload();
      });
      
      debugPanel.appendChild(button);
    });
  }
  
  // 添加当前语言信息
  const info = document.createElement('div');
  info.style.marginTop = '10px';
  info.style.fontSize = '12px';
  info.style.color = '#666';
  info.textContent = `当前语言: ${window.i18n ? window.i18n.getCurrentLanguage() : '未知'}`;
  debugPanel.appendChild(info);
  
  // 添加到页面
  document.body.appendChild(debugPanel);
});