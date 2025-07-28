/**
 * 增强的Google Analytics配置
 * 包含事件跟踪和用户行为分析
 */

// 初始化增强的Analytics功能
function initEnhancedAnalytics() {
    // 确保gtag已加载
    if (typeof gtag === 'undefined') {
        console.warn('Google Analytics not loaded');
        return;
    }

    // 跟踪页面滚动深度
    trackScrollDepth();
    
    // 跟踪外部链接点击
    trackExternalLinks();
    
    // 跟踪文件下载
    trackFileDownloads();
    
    // 跟踪搜索行为
    trackSearchBehavior();
    
    // 跟踪工具页面交互
    trackToolInteractions();
}

// 跟踪滚动深度
function trackScrollDepth() {
    let scrollDepths = [25, 50, 75, 90];
    let scrollTracked = [];
    
    window.addEventListener('scroll', function() {
        let scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        scrollDepths.forEach(function(depth) {
            if (scrollPercent >= depth && scrollTracked.indexOf(depth) === -1) {
                gtag('event', 'scroll_depth', {
                    event_category: 'engagement',
                    event_label: depth + '%',
                    value: depth
                });
                scrollTracked.push(depth);
            }
        });
    });
}

// 跟踪外部链接点击
function trackExternalLinks() {
    document.addEventListener('click', function(e) {
        let link = e.target.closest('a');
        if (link && link.hostname !== window.location.hostname) {
            gtag('event', 'click', {
                event_category: 'external_link',
                event_label: link.href,
                transport_type: 'beacon'
            });
        }
    });
}

// 跟踪文件下载
function trackFileDownloads() {
    document.addEventListener('click', function(e) {
        let link = e.target.closest('a');
        if (link && link.href) {
            let fileExtensions = /\.(pdf|doc|docx|xls|xlsx|ppt|pptx|zip|rar|7z|exe|dmg)$/i;
            if (fileExtensions.test(link.href)) {
                gtag('event', 'file_download', {
                    event_category: 'downloads',
                    event_label: link.href,
                    transport_type: 'beacon'
                });
            }
        }
    });
}

// 跟踪搜索行为
function trackSearchBehavior() {
    // 跟踪站内搜索
    const searchInputs = document.querySelectorAll('input[type="search"], #searchInput');
    searchInputs.forEach(function(input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && this.value.trim()) {
                gtag('event', 'search', {
                    search_term: this.value.trim(),
                    event_category: 'site_search'
                });
            }
        });
    });
    
    // 跟踪搜索按钮点击
    const searchButtons = document.querySelectorAll('#searchButton, .search-btn');
    searchButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const searchInput = document.querySelector('#searchInput');
            if (searchInput && searchInput.value.trim()) {
                gtag('event', 'search', {
                    search_term: searchInput.value.trim(),
                    event_category: 'site_search'
                });
            }
        });
    });
}

// 跟踪工具页面交互
function trackToolInteractions() {
    // 跟踪工具分类筛选
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-tab')) {
            const category = e.target.getAttribute('data-category');
            gtag('event', 'filter_tools', {
                event_category: 'tool_interaction',
                event_label: category
            });
        }
    });
    
    // 跟踪标签页切换
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('tab-btn')) {
            const tab = e.target.getAttribute('data-tab');
            gtag('event', 'tab_switch', {
                event_category: 'tool_interaction',
                event_label: tab
            });
        }
    });
    
    // 跟踪工具卡片点击
    document.addEventListener('click', function(e) {
        const toolCard = e.target.closest('.tool-card');
        if (toolCard) {
            const toolName = toolCard.querySelector('h3')?.textContent || 'unknown';
            gtag('event', 'tool_click', {
                event_category: 'tool_interaction',
                event_label: toolName
            });
        }
    });
}

// 跟踪页面性能
function trackPagePerformance() {
    window.addEventListener('load', function() {
        // 获取页面加载时间
        if ('performance' in window) {
            const loadTime = Math.round(performance.timing.loadEventEnd - performance.timing.navigationStart);
            
            gtag('event', 'timing_complete', {
                name: 'page_load',
                value: loadTime,
                event_category: 'performance'
            });
            
            // 跟踪首次内容绘制时间
            if ('getEntriesByType' in performance) {
                const paintEntries = performance.getEntriesByType('paint');
                paintEntries.forEach(function(entry) {
                    gtag('event', 'timing_complete', {
                        name: entry.name.replace('-', '_'),
                        value: Math.round(entry.startTime),
                        event_category: 'performance'
                    });
                });
            }
        }
    });
}

// 跟踪用户参与度
function trackUserEngagement() {
    let startTime = Date.now();
    let isActive = true;
    
    // 跟踪页面可见性变化
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            isActive = false;
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            gtag('event', 'page_view_time', {
                event_category: 'engagement',
                value: timeSpent
            });
        } else {
            isActive = true;
            startTime = Date.now();
        }
    });
    
    // 页面卸载时记录停留时间
    window.addEventListener('beforeunload', function() {
        if (isActive) {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            gtag('event', 'page_view_time', {
                event_category: 'engagement',
                value: timeSpent,
                transport_type: 'beacon'
            });
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initEnhancedAnalytics();
    trackPagePerformance();
    trackUserEngagement();
});

// 导出函数供其他脚本使用
window.analyticsUtils = {
    trackCustomEvent: function(eventName, category, label, value) {
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: category,
                event_label: label,
                value: value
            });
        }
    },
    
    trackToolUsage: function(toolName, action) {
        this.trackCustomEvent('tool_usage', 'tools', toolName + '_' + action);
    },
    
    trackArticleRead: function(articleTitle, readingTime) {
        this.trackCustomEvent('article_read', 'content', articleTitle, readingTime);
    }
};