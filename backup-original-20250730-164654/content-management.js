// Content Management System for MyAI Blog
// This file manages articles, tags, and related content

const ContentManager = {
  // Articles Database
  articles: [
    {
      id: 'chatgpt-beginner-prompts',
      title: '10 ChatGPT Prompts to Instantly Level Up Your AI Game',
      slug: 'chatgpt-beginner-prompts',
      excerpt: 'Copy-paste prompts for better answers from day one. Perfect for beginners who want immediate results.',
      content: 'Full article content here...',
      author: 'MyAI Team',
      publishDate: '2025-01-16',
      modifiedDate: '2025-01-16',
      readTime: '5 min',
      category: 'Tutorials',
      tags: ['ChatGPT', 'Prompts', 'Beginner'],
      featured: true,
      views: 1250,
      likes: 89,
      shares: 34,
      seoTitle: '10 ChatGPT Prompts to Instantly Level Up Your AI Game | MyAI',
      seoDescription: 'Discover 10 powerful ChatGPT prompts that will transform your AI interactions. Perfect for beginners looking to get better results from day one.',
      keywords: ['ChatGPT prompts', 'AI prompts', 'ChatGPT tips', 'AI beginner guide'],
      ogImage: '/images/chatgpt-prompts-og.jpg',
      status: 'published'
    },
    {
      id: 'gpt4o-guide',
      title: 'Complete Beginner\'s Guide to GPT-4o',
      slug: 'gpt4o-guide',
      excerpt: 'Everything you need to know about OpenAI\'s flagship model: capabilities, pricing, and best prompts.',
      content: 'Full article content here...',
      author: 'MyAI Team',
      publishDate: '2025-01-15',
      modifiedDate: '2025-01-15',
      readTime: '8 min',
      category: 'Guides',
      tags: ['GPT-4o', 'OpenAI', 'Guide'],
      featured: true,
      views: 2100,
      likes: 156,
      shares: 67,
      seoTitle: 'Complete Beginner\'s Guide to GPT-4o | MyAI',
      seoDescription: 'Master GPT-4o with our comprehensive beginner\'s guide. Learn capabilities, pricing, and best practices for OpenAI\'s most advanced model.',
      keywords: ['GPT-4o guide', 'OpenAI GPT-4o', 'AI model guide', 'GPT-4o tutorial'],
      ogImage: '/images/gpt4o-guide-og.jpg',
      status: 'published'
    },
    {
      id: 'top10-free-ai-tools',
      title: 'Top 10 Free AI Tools for Content Creators (2025)',
      slug: 'top10-free-ai-tools',
      excerpt: 'No-code tools that can save you hours every week. Tested and reviewed by our team.',
      content: 'Full article content here...',
      author: 'MyAI Team',
      publishDate: '2025-01-14',
      modifiedDate: '2025-01-14',
      readTime: '12 min',
      category: 'Tool Reviews',
      tags: ['Tools', 'Free', 'Content Creation'],
      featured: true,
      views: 3200,
      likes: 234,
      shares: 89,
      seoTitle: 'Top 10 Free AI Tools for Content Creators (2025) | MyAI',
      seoDescription: 'Discover the best free AI tools for content creators in 2025. Save hours every week with these tested and reviewed no-code solutions.',
      keywords: ['free AI tools', 'content creation tools', 'AI tools 2025', 'no-code AI tools'],
      ogImage: '/images/free-ai-tools-og.jpg',
      status: 'published'
    },
    {
      id: 'prompt-cheatsheet',
      title: 'The Ultimate Prompt Engineering Cheat Sheet',
      slug: 'prompt-cheatsheet',
      excerpt: 'Copy-paste formulas for consistently better answers from any LLM. Bookmark this guide.',
      content: 'Full article content here...',
      author: 'MyAI Team',
      publishDate: '2025-01-13',
      modifiedDate: '2025-01-13',
      readTime: '15 min',
      category: 'Guides',
      tags: ['Prompts', 'Engineering', 'Advanced'],
      featured: true,
      views: 4500,
      likes: 312,
      shares: 156,
      seoTitle: 'The Ultimate Prompt Engineering Cheat Sheet | MyAI',
      seoDescription: 'Master prompt engineering with our comprehensive cheat sheet. Copy-paste formulas for consistently better AI responses.',
      keywords: ['prompt engineering', 'AI prompts', 'prompt cheat sheet', 'LLM prompts'],
      ogImage: '/images/prompt-cheatsheet-og.jpg',
      status: 'published'
    }
  ],

  // Tags Database
  tags: {
    'ChatGPT': {
      name: 'ChatGPT',
      description: 'Articles about ChatGPT usage, tips, and tutorials',
      color: '#10b981',
      count: 15
    },
    'Prompts': {
      name: 'Prompts',
      description: 'Prompt engineering and AI prompt techniques',
      color: '#3b82f6',
      count: 23
    },
    'Tools': {
      name: 'Tools',
      description: 'AI tool reviews and recommendations',
      color: '#f59e0b',
      count: 18
    },
    'Beginner': {
      name: 'Beginner',
      description: 'Beginner-friendly AI tutorials and guides',
      color: '#10b981',
      count: 12
    },
    'Advanced': {
      name: 'Advanced',
      description: 'Advanced AI techniques and strategies',
      color: '#ef4444',
      count: 8
    },
    'GPT-4o': {
      name: 'GPT-4o',
      description: 'GPT-4o specific content and tutorials',
      color: '#8b5cf6',
      count: 6
    },
    'OpenAI': {
      name: 'OpenAI',
      description: 'OpenAI products and services',
      color: '#06b6d4',
      count: 10
    },
    'Free': {
      name: 'Free',
      description: 'Free AI tools and resources',
      color: '#10b981',
      count: 14
    },
    'Content Creation': {
      name: 'Content Creation',
      description: 'AI tools for content creators',
      color: '#f97316',
      count: 16
    },
    'Engineering': {
      name: 'Engineering',
      description: 'Technical AI implementation guides',
      color: '#6366f1',
      count: 9
    }
  },

  // Categories
  categories: {
    'Tutorials': {
      name: 'Tutorials',
      description: 'Step-by-step AI tutorials',
      count: 25
    },
    'Guides': {
      name: 'Guides',
      description: 'Comprehensive AI guides',
      count: 18
    },
    'Tool Reviews': {
      name: 'Tool Reviews',
      description: 'AI tool reviews and comparisons',
      count: 22
    },
    'News': {
      name: 'News',
      description: 'Latest AI industry news',
      count: 15
    }
  },

  // Utility Functions
  getArticleById(id) {
    return this.articles.find(article => article.id === id);
  },

  getArticlesByTag(tag) {
    return this.articles.filter(article => 
      article.tags.includes(tag) && article.status === 'published'
    );
  },

  getArticlesByCategory(category) {
    return this.articles.filter(article => 
      article.category === category && article.status === 'published'
    );
  },

  getFeaturedArticles() {
    return this.articles.filter(article => 
      article.featured && article.status === 'published'
    );
  },

  getRelatedArticles(currentArticleId, limit = 3) {
    const currentArticle = this.getArticleById(currentArticleId);
    if (!currentArticle) return [];

    return this.articles
      .filter(article => 
        article.id !== currentArticleId && 
        article.status === 'published'
      )
      .map(article => {
        const commonTags = article.tags.filter(tag => 
          currentArticle.tags.includes(tag)
        );
        return {
          ...article,
          relevanceScore: commonTags.length
        };
      })
      .sort((a, b) => b.relevanceScore - a.relevanceScore)
      .slice(0, limit);
  },

  searchArticles(query) {
    const searchTerm = query.toLowerCase();
    return this.articles.filter(article => {
      return article.status === 'published' && (
        article.title.toLowerCase().includes(searchTerm) ||
        article.excerpt.toLowerCase().includes(searchTerm) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        article.category.toLowerCase().includes(searchTerm)
      );
    });
  },

  getPopularArticles(limit = 5) {
    return this.articles
      .filter(article => article.status === 'published')
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
  },

  getRecentArticles(limit = 5) {
    return this.articles
      .filter(article => article.status === 'published')
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
      .slice(0, limit);
  },

  getAllTags() {
    return Object.values(this.tags).sort((a, b) => b.count - a.count);
  },

  getTagByName(name) {
    return this.tags[name];
  },

  // Analytics Functions
  incrementViews(articleId) {
    const article = this.getArticleById(articleId);
    if (article) {
      article.views++;
    }
  },

  incrementLikes(articleId) {
    const article = this.getArticleById(articleId);
    if (article) {
      article.likes++;
    }
  },

  incrementShares(articleId) {
    const article = this.getArticleById(articleId);
    if (article) {
      article.shares++;
    }
  },

  // SEO Functions
  generateSitemap() {
    return this.articles
      .filter(article => article.status === 'published')
      .map(article => ({
        url: `/posts/${article.slug}.html`,
        lastmod: article.modifiedDate,
        changefreq: 'monthly',
        priority: article.featured ? 0.9 : 0.7
      }));
  },

  generateRSSFeed() {
    return this.articles
      .filter(article => article.status === 'published')
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
      .slice(0, 20);
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ContentManager;
} else if (typeof window !== 'undefined') {
  window.ContentManager = ContentManager;
}