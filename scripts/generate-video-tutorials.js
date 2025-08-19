// 视频教程内容生成工具
// 可以根据AI工具的使用步骤自动生成教程内容

const fs = require('fs');
const path = require('path');

class VideoTutorialGenerator {
    constructor() {
        this.tutorialTemplates = {
            'text-generation': {
                icon: '💬',
                commonSteps: [
                    { title: '注册账户', content: '访问官网，完成账户注册流程' },
                    { title: '了解界面', content: '熟悉工具的主要功能区域和操作界面' },
                    { title: '基础使用', content: '学习基本的操作方法和功能使用' },
                    { title: '高级技巧', content: '掌握提升效率的高级使用技巧' }
                ]
            },
            'image-generation': {
                icon: '🎨',
                commonSteps: [
                    { title: '环境准备', content: '完成必要的软件安装和账户设置' },
                    { title: '基础生成', content: '学习基本的图像生成命令和参数' },
                    { title: '参数调优', content: '掌握各种参数对生成效果的影响' },
                    { title: '风格控制', content: '学习如何控制生成图像的风格和质量' }
                ]
            },
            'code-assistant': {
                icon: '💻',
                commonSteps: [
                    { title: '安装配置', content: '在开发环境中安装和配置代码助手' },
                    { title: '基础补全', content: '体验智能代码补全和建议功能' },
                    { title: '高级功能', content: '学习代码生成、重构等高级功能' },
                    { title: '最佳实践', content: '掌握提升开发效率的使用技巧' }
                ]
            }
        };
    }

    // 生成单个工具的教程
    generateTutorial(tool) {
        const template = this.tutorialTemplates[tool.category] || this.tutorialTemplates['text-generation'];
        
        return {
            id: `${tool.id}-tutorial`,
            title: `${tool.name}使用教程`,
            category: tool.category,
            description: `详细学习${tool.name}的使用方法，从基础操作到高级技巧`,
            duration: this.estimateDuration(tool),
            difficulty: this.determineDifficulty(tool),
            views: this.generateViews(),
            thumbnail: tool.icon || template.icon,
            steps: this.generateSteps(tool, template),
            tips: this.generateTips(tool),
            videoUrl: this.generateVideoUrl(tool),
            tags: this.generateTags(tool)
        };
    }

    // 生成教程步骤
    generateSteps(tool, template) {
        const steps = [...template.commonSteps];
        
        // 根据工具特性添加特定步骤
        if (tool.features) {
            tool.features.forEach((feature, index) => {
                if (index < 2) { // 只添加前两个特性
                    steps.push({
                        title: `使用${feature}功能`,
                        content: `学习如何有效使用${tool.name}的${feature}功能`,
                        icon: this.getFeatureIcon(feature),
                        tips: `充分利用${feature}功能可以大幅提升工作效率`
                    });
                }
            });
        }

        // 添加实际案例步骤
        steps.push({
            title: '实际案例演示',
            content: `通过具体案例演示${tool.name}在实际工作中的应用`,
            icon: '🎯',
            tips: '跟着案例练习是最好的学习方法'
        });

        return steps;
    }

    // 生成使用技巧
    generateTips(tool) {
        const baseTips = [
            '从简单的任务开始练习，逐步掌握复杂功能',
            '多参考官方文档和社区最佳实践',
            '定期关注工具更新，学习新功能'
        ];

        // 根据工具类型添加特定技巧
        if (tool.category === 'text-generation') {
            baseTips.push('学习提示词工程，提高AI回答质量');
            baseTips.push('保存常用的对话模板，提升效率');
        } else if (tool.category === 'image-generation') {
            baseTips.push('建立自己的提示词库，积累优质描述');
            baseTips.push('学习艺术风格术语，提升生成质量');
        } else if (tool.category === 'code-assistant') {
            baseTips.push('写清晰的注释来引导代码生成');
            baseTips.push('定期审查生成的代码质量');
        }

        return baseTips;
    }

    // 估算教程时长
    estimateDuration(tool) {
        const baseMinutes = 15;
        const complexityMultiplier = tool.userExperience?.learningCurve === '高' ? 1.5 : 
                                   tool.userExperience?.learningCurve === '中等' ? 1.2 : 1;
        const featureCount = tool.features?.length || 4;
        
        const totalMinutes = Math.round(baseMinutes * complexityMultiplier + featureCount * 2);
        return `${totalMinutes}分钟`;
    }

    // 确定难度等级
    determineDifficulty(tool) {
        if (tool.userExperience?.learningCurve === '低' || tool.userExperience?.easeOfUse >= 8) {
            return 'beginner';
        } else if (tool.userExperience?.learningCurve === '高' || tool.userExperience?.easeOfUse <= 6) {
            return 'advanced';
        } else {
            return 'intermediate';
        }
    }

    // 生成观看量
    generateViews() {
        const viewCounts = ['5万+', '10万+', '25万+', '50万+', '100万+'];
        return viewCounts[Math.floor(Math.random() * viewCounts.length)];
    }

    // 生成视频URL
    generateVideoUrl(tool) {
        // 这里可以根据实际情况返回YouTube、B站或本地视频URL
        return `tutorial-${tool.id}`;
    }

    // 生成标签
    generateTags(tool) {
        const tags = [tool.name, tool.category];
        if (tool.provider) tags.push(tool.provider);
        if (tool.pricing?.includes('免费')) tags.push('免费工具');
        if (tool.rating >= 4.5) tags.push('高评分');
        return tags;
    }

    // 获取功能图标
    getFeatureIcon(feature) {
        const iconMap = {
            '文本生成': '✍️',
            '代码生成': '💻',
            '图像理解': '👁️',
            '数据分析': '📊',
            '多语言': '🌍',
            'API': '🔌',
            '自定义': '⚙️',
            '协作': '👥'
        };
        
        for (const [key, icon] of Object.entries(iconMap)) {
            if (feature.includes(key)) return icon;
        }
        return '🔧';
    }

    // 批量生成教程
    async generateAllTutorials(tools) {
        const tutorials = tools.map(tool => this.generateTutorial(tool));
        
        // 保存到文件
        const tutorialData = {
            tutorials,
            categories: Object.keys(this.tutorialTemplates),
            totalCount: tutorials.length,
            lastUpdated: new Date().toISOString()
        };

        const outputPath = path.join(__dirname, '../data/video-tutorials.json');
        fs.writeFileSync(outputPath, JSON.stringify(tutorialData, null, 2));
        
        console.log(`✅ 生成了 ${tutorials.length} 个视频教程`);
        return tutorials;
    }

    // 生成教程页面HTML
    generateTutorialHTML(tutorial) {
        return `
        <div class="tutorial-page">
            <h1>${tutorial.title}</h1>
            <div class="tutorial-meta">
                <span>⏱️ ${tutorial.duration}</span>
                <span>📊 ${tutorial.difficulty}</span>
                <span>👁️ ${tutorial.views}</span>
            </div>
            
            <div class="tutorial-description">
                <p>${tutorial.description}</p>
            </div>

            <div class="tutorial-steps">
                <h2>📋 学习步骤</h2>
                ${tutorial.steps.map((step, index) => `
                    <div class="step">
                        <div class="step-number">${index + 1}</div>
                        <div class="step-content">
                            <h3>${step.icon} ${step.title}</h3>
                            <p>${step.content}</p>
                            ${step.tips ? `<div class="step-tip">💡 ${step.tips}</div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>

            <div class="tutorial-tips">
                <h2>💡 实用技巧</h2>
                <ul>
                    ${tutorial.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
        `;
    }
}

// 如果直接运行此脚本
if (require.main === module) {
    // 这里可以加载工具数据并生成教程
    console.log('视频教程生成器已准备就绪');
    console.log('使用方法：');
    console.log('const generator = new VideoTutorialGenerator();');
    console.log('const tutorial = generator.generateTutorial(toolData);');
}

module.exports = VideoTutorialGenerator;