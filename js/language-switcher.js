/**
 * 语言切换器组件
 * 用于在不同语言之间切换
 */

class LanguageSwitcher {
  constructor() {
    this.currentLanguage = i18n.getCurrentLanguage();
    this.supportedLanguages = i18n.getSupportedLanguages();
  }

  /**
   * 创建语言切换器
   * @returns {HTMLElement} 语言切换器元素
   */
  createSwitcher() {
    const container = document.createElement('div');
    container.className = 'language-switcher';
    
    // 当前语言显示
    const currentLang = document.createElement('div');
    currentLang.className = 'current-language';
    const langInfo = this.supportedLanguages[this.currentLanguage];
    currentLang.innerHTML = `${langInfo.flag} ${langInfo.name}`;
    currentLang.setAttribute('aria-label', 'Change language');
    currentLang.setAttribute('role', 'button');
    currentLang.setAttribute('tabindex', '0');
    
    // 语言选项下拉菜单
    const dropdown = document.createElement('div');
    dropdown.className = 'language-dropdown';
    
    // 添加所有支持的语言
    Object.entries(this.supportedLanguages).forEach(([code, lang]) => {
      const langOption = document.createElement('div');
      langOption.className = 'language-option';
      if (code === this.currentLanguage) {
        langOption.classList.add('active');
      }
      langOption.innerHTML = `${lang.flag} ${lang.name}`;
      langOption.setAttribute('data-lang', code);
      langOption.addEventListener('click', () => this.changeLanguage(code));
      dropdown.appendChild(langOption);
    });
    
    // 组合元素
    container.appendChild(currentLang);
    container.appendChild(dropdown);
    
    // 点击当前语言显示/隐藏下拉菜单
    currentLang.addEventListener('click', () => {
      dropdown.classList.toggle('show');
    });
    
    // 点击外部关闭下拉菜单
    document.addEventListener('click', (e) => {
      if (!container.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
    
    // 键盘导航
    currentLang.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dropdown.classList.toggle('show');
      }
    });
    
    return container;
  }

  /**
   * 更改语言
   * @param {string} langCode 语言代码
   */
  changeLanguage(langCode) {
    if (langCode === this.currentLanguage) return;
    
    i18n.setLanguage(langCode);
    this.currentLanguage = langCode;
    
    // 刷新页面以应用新语言
    window.location.reload();
  }

  /**
   * 将语言切换器添加到页面
   * @param {string} selector 要添加到的元素选择器
   */
  addToPage(selector = '.site-nav') {
    const targetElement = document.querySelector(selector);
    if (targetElement) {
      const switcher = this.createSwitcher();
      targetElement.appendChild(switcher);
    }
  }
}

// 添加样式
const style = document.createElement('style');
style.textContent = `
  .language-switcher {
    position: relative;
    display: inline-block;
    margin-left: 1rem;
  }
  
  .current-language {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: var(--radius);
    transition: background-color 0.2s;
  }
  
  .current-language:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .language-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border-radius: var(--radius);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    min-width: 150px;
    z-index: 100;
    display: none;
    overflow: hidden;
  }
  
  .language-dropdown.show {
    display: block;
  }
  
  .language-option {
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: background-color 0.2s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .language-option:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  .language-option.active {
    background-color: var(--primary);
    color: white;
  }
  
  @media (max-width: 768px) {
    .language-switcher {
      margin: 0.5rem 0;
    }
    
    .language-dropdown {
      position: static;
      width: 100%;
      margin-top: 0.5rem;
    }
  }
`;
document.head.appendChild(style);

// 页面加载完成后初始化语言切换器
document.addEventListener('DOMContentLoaded', () => {
  // 确保i18n已加载
  if (window.i18n) {
    const languageSwitcher = new LanguageSwitcher();
    languageSwitcher.addToPage();
  } else {
    console.error('i18n not loaded');
  }
});