# 网站国际化 (i18n) 指南

本文档提供了如何为网站添加新语言和维护现有翻译的指南。

## 目录

1. [概述](#概述)
2. [添加新语言](#添加新语言)
3. [翻译最佳实践](#翻译最佳实践)
4. [测试翻译](#测试翻译)
5. [常见问题](#常见问题)

## 概述

我们的网站使用基于JavaScript的国际化系统，支持多种语言。所有翻译都存储在 `js/i18n.js` 文件中，并通过 `data-i18n` 属性应用于HTML元素。

主要文件：
- `js/i18n.js` - 包含所有翻译文本
- `js/language-switcher.js` - 语言切换器组件

## 添加新语言

要添加新语言，请按照以下步骤操作：

1. 打开 `js/i18n.js` 文件
2. 在 `supportedLanguages` 对象中添加新语言：

```javascript
supportedLanguages: {
  'zh': { name: '中文', flag: '🇨🇳' },
  'en': { name: 'English', flag: '🇺🇸' },
  // 添加新语言
  'new-lang-code': { name: '语言名称', flag: '🏳️' },
}
```

3. 在 `translations` 对象中添加新语言的翻译：

```javascript
translations: {
  // 现有语言...
  
  // 新语言
  'new-lang-code': {
    siteTitle: '网站标题',
    siteDescription: '网站描述',
    // 复制英文或中文翻译并翻译为新语言
    // ...其他翻译
  }
}
```

## 翻译最佳实践

1. **保持一致性**：确保术语在整个网站中保持一致
2. **保留格式标记**：保留HTML标签和占位符，如 `{{param}}`
3. **考虑空间限制**：某些语言可能比其他语言需要更多空间
4. **测试翻译**：添加新翻译后，切换到该语言并检查所有页面

## 测试翻译

添加新语言后，请测试以下内容：

1. 语言切换器是否显示新语言
2. 切换到新语言时是否正确显示所有翻译
3. 所有功能（搜索、筛选等）是否在新语言下正常工作
4. 检查是否有任何未翻译的文本

## 常见问题

### 某些文本没有被翻译

确保HTML元素有正确的 `data-i18n` 属性，并且翻译键存在于 `i18n.js` 文件中。

### 语言切换器不显示

确保 `language-switcher.js` 已正确加载，并且在页面加载完成后调用了 `i18n.initPageTranslation()`。

### 如何处理动态生成的内容

对于动态生成的内容，使用 `i18n.t('key')` 函数获取翻译文本。例如：

```javascript
element.textContent = i18n.t('common.loading');
```

---

如有任何问题或建议，请联系网站管理员。