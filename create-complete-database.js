/**
 * 创建包含52工具+24模型+29Agent的完整数据库
 */

const fs = require('fs');

console.log('🚀 开始创建完整数据库...');

// 完整的数据库模板
const completeDatabase = `// AI工具、模型和Agent数据库
const aiToolsDatabase = {
    // 工具分类 (15个)
    categories: {
        'text-generation': { name: '文本生成', icon: '✍️', description: 'AI写作、内容创作工具' },
        'image-generation': { name: '图像生成', icon: '🎨', description: 'AI绘画、图片创作工具' },
        'code-assistant': { name: '代码助手', icon: '💻', description: '编程辅助、代码生成工具' },
        'productivity': { name: '效率工具', icon: '⚡', description: '提升工作效率的AI工具' },
        'data-analysis': { name: '数据分析', icon: '📊', description: 'AI数据处理和分析工具' },
        'voice-audio': { name: '语音音频', icon: '🎵', description: '语音合成、音频处理工具' },
        'video-creation': { name: '视频创作', icon: '🎬', description: 'AI视频生成和编辑工具' },
        'automation': { name: '自动化', icon: '🤖', description: 'AI自动化和工作流工具' },
        'research': { name: '研究助手', icon: '🔍', description: 'AI研究和信息收集工具' },
        'design': { name: '设计工具', icon: '🎯', description: 'AI设计和创意工具' },
        'education': { name: '教育学习', icon: '📚', description: 'AI教育和学习辅助工具' },
        'marketing': { name: '营销工具', icon: '📣', description: 'AI营销和广告工具' },
        'customer-service': { name: '客户服务', icon: '🤝', description: 'AI客服和用户支持工具' },
        'translation': { name: '翻译工具', icon: '🌐', description: 'AI翻译和语言处理工具' },
        'music': { name: '音乐创作', icon: '🎹', description: 'AI音乐生成和编辑工具' }
    },

    // 模型类型
    modelTypes: {
        'llm': { name: '大语言模型', description: '处理和生成文本的AI模型' },
        'multimodal': { name: '多模态模型', description: '处理文本、图像、音频等多种模态的AI模型' },
        'image': { name: '图像模型', description: '生成和处理图像的AI模型' },
        'audio': { name: '音频模型', description: '处理和生成音频的AI模型' },
        'video': { name: '视频模型', description: '处理和生成视频的AI模型' }
    },

    // Agent类型
    agentTypes: {
        'autonomous': { name: '自主代理', description: '能够独立执行任务的AI代理' },
        'assistant': { name: '助手代理', description: '辅助人类完成任务的AI代理' },
        'multi-agent': { name: '多代理系统', description: '多个AI代理协作完成任务的系统' },
        'specialized': { name: '专业领域代理', description: '针对特定领域优化的AI代理' }
    },

    // AI模型数据 (24个) - 占位符，将在后续脚本中填充
    models: [],

    // AI工具数据 (52个) - 占位符，将在后续脚本中填充  
    tools: [],

    // AI Agent数据 (29个) - 占位符，将在后续脚本中填充
    agents: [],

    // 工具函数
    utils: {
        // 根据ID查找工具
        findToolById(id) {
            return this.tools.find(tool => tool.id === id);
        },

        // 根据ID查找模型
        findModelById(id) {
            return this.models.find(model => model.id === id);
        },

        // 根据ID查找Agent
        findAgentById(id) {
            return this.agents.find(agent => agent.id === id);
        },

        // 根据分类获取工具
        getToolsByCategory(category) {
            return this.tools.filter(tool => tool.category === category);
        },

        // 搜索工具
        searchTools(query) {
            const searchTerm = query.toLowerCase();
            return this.tools.filter(tool =>
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }
    }
};

// 数据管理器类
class AIToolsManager {
    constructor(database) {
        this.db = database;
    }

    // 搜索工具
    searchTools(query, category = null, priceRange = null, features = [], rating = 0) {
        let results = this.db.tools;

        // 按查询词过滤
        if (query) {
            const searchTerm = query.toLowerCase();
            results = results.filter(tool =>
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }

        // 按分类过滤
        if (category) {
            results = results.filter(tool => tool.category === category);
        }

        // 按评分过滤
        if (rating > 0) {
            results = results.filter(tool => tool.rating >= rating);
        }

        return results.sort((a, b) => b.rating - a.rating);
    }

    // 获取推荐工具
    getRecommendedTools(limit = 6) {
        return this.db.tools
            .sort((a, b) => b.rating - a.rating)
            .slice(0, limit);
    }

    // 获取分类统计
    getCategoryStats() {
        const stats = {};
        Object.keys(this.db.categories).forEach(cat => {
            stats[cat] = this.db.tools.filter(tool => tool.category === cat).length;
        });
        return stats;
    }
}

// 导出数据库和管理器
(function () {
    // 导出到window对象
    window.aiToolsDatabase = aiToolsDatabase;

    // 创建管理器实例
    const manager = new AIToolsManager(aiToolsDatabase);
    window.aiToolsManager = manager;
})();

// 绑定工具函数到数据库对象
Object.keys(aiToolsDatabase.utils).forEach(key => {
    if (typeof aiToolsDatabase.utils[key] === 'function') {
        aiToolsDatabase.utils[key] = aiToolsDatabase.utils[key].bind(aiToolsDatabase);
    }
});

// 导出数据库
if (typeof module !== 'undefined' && module.exports) {
    module.exports = aiToolsDatabase;
}`;

try {
    // 写入基础数据库结构
    fs.writeFileSync('ai-tools-database.js', completeDatabase);
    
    // 验证语法
    const { execSync } = require('child_process');
    execSync('node -c ai-tools-database.js');
    
    console.log('✅ 基础数据库结构创建成功');
    console.log('📋 下一步: 运行数据填充脚本');
    
} catch (error) {
    console.error('❌ 创建数据库失败:', error.message);
}