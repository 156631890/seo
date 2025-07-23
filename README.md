# MyAI - AI教程与工具博客

![MyAI Logo](https://via.placeholder.com/200x50?text=MyAI)

## 项目概述

MyAI是一个专注于AI教程、工具评测和提示工程的博客网站，旨在帮助创作者和企业家更好地使用AI工具。网站提供实用的AI指南、ChatGPT提示、工具评测和最佳实践，适合各种技术水平的用户。

### 🌐 [在线预览](https://www.aiblogs.tech)

## 📋 功能特点

- **高质量AI教程**：详细的分步指南和教程
- **工具评测**：客观评价市场上的AI工具
- **提示工程**：优化AI提示的技巧和模板
- **内容管理系统**：标签和分类系统，相关文章推荐
- **社交功能**：分享按钮，评论系统
- **搜索功能**：全站内容搜索
- **响应式设计**：适配各种设备尺寸
- **SEO优化**：结构化数据，meta标签，sitemap

## 🛠️ 技术栈

- **前端**：HTML5, CSS3, JavaScript (原生)
- **SEO**：结构化数据，Open Graph，Twitter Cards
- **性能优化**：延迟加载，资源预加载，CSS优化
- **第三方集成**：
  - Google Analytics
  - Google AdSense
  - Disqus评论系统
  - Formspree表单处理

## 📂 项目结构

```
/
├── index.html                # 主页
├── posts/                    # 文章目录
│   ├── chatgpt-beginner-prompts.html
│   └── gpt4o-guide.html
├── about.html                # 关于页面
├── contact.html              # 联系页面
├── search.html               # 搜索页面
├── newsletter.html           # 订阅页面
├── privacy-policy.html       # 隐私政策
├── terms.html                # 使用条款
├── 404.html                  # 404错误页面
├── partials/                 # 共享组件
│   └── site-style.css        # 主样式表
├── social-share.js           # 社交分享功能
├── content-management.js     # 内容管理系统
├── sitemap.xml               # 网站地图
├── robots.txt                # 爬虫指令
└── ads.txt                   # AdSense验证文件
```

## 📝 内容管理

网站使用自定义的内容管理系统(`content-management.js`)，提供以下功能：

- **文章数据库**：集中管理所有文章元数据
- **标签系统**：对内容进行分类和组织
- **相关文章推荐**：基于标签的智能推荐算法
- **搜索功能**：多维度内容搜索

## 🔍 SEO优化

网站实现了全面的SEO优化：

- **技术SEO**：结构化数据，canonical URL，hreflang标签
- **内容SEO**：关键词优化，内部链接结构
- **用户体验**：快速加载时间，移动端优化
- **分析跟踪**：Google Analytics集成

详细信息请参考 [SEO优化指南](SEO_OPTIMIZATION_GUIDE.md)。

## 🚀 部署指南

网站可以部署在多种平台上：

- **Netlify**：简单快速，适合初学者
- **Vercel**：性能优秀，全球CDN
- **GitHub Pages**：免费且易于使用

详细部署步骤请参考 [部署指南](AI_BLOG_DEPLOYMENT.md)。

## 💰 AdSense集成

网站已针对Google AdSense审核进行了优化：

- 高质量原创内容
- 完整的网站结构
- 必要的法律页面
- ads.txt文件配置

详细信息请参考 [AdSense审核指南](ADSENSE_APPROVAL_GUIDE.md)。

## 🔄 内容更新流程

1. 使用`post-template.html`作为新文章的模板
2. 在`content-management.js`中添加文章元数据
3. 更新`sitemap.xml`以包含新文章
4. 在主页添加新文章的链接和摘要

## 📊 性能优化

网站实现了多种性能优化技术：

- **资源预加载**：关键资源的预连接和预加载
- **延迟加载**：非关键CSS和JavaScript的延迟加载
- **图片优化**：响应式图片和延迟加载
- **代码最小化**：减少不必要的代码和依赖

## 📱 移动端优化

网站采用响应式设计，确保在各种设备上的良好体验：

- **流体布局**：适应不同屏幕尺寸
- **触摸友好**：适当的按钮大小和间距
- **优化性能**：移动端特定的性能优化

## 🔮 未来计划

- [ ] 实现深色模式
- [ ] 添加更多语言支持
- [ ] 开发PWA功能
- [ ] 实现用户账户系统
- [ ] 添加更多AI工具评测

## 📄 许可证

本项目采用 [MIT许可证](LICENSE)。

## 📞 联系方式

- **Email**: hello@aiblogs.tech
- **网站**: [www.aiblogs.tech/contact](https://www.aiblogs.tech/contact)

---

© 2025 MyAI - 帮助创作者和企业家更好地使用AI工具