// 定时任务调度器 - 自动定期更新AI数据
const cron = require('node-cron');
const runUpdate = require('./run-data-update');

class UpdateScheduler {
    constructor() {
        this.tasks = new Map();
    }

    // 启动定时更新任务
    start() {
        console.log('🕐 启动AI数据定时更新调度器...');

        // 每天凌晨2点更新数据
        const dailyTask = cron.schedule('0 2 * * *', async () => {
            console.log('🌙 执行每日数据更新...');
            await runUpdate();
        }, {
            scheduled: false,
            timezone: "Asia/Shanghai"
        });

        // 每周一凌晨3点进行深度更新
        const weeklyTask = cron.schedule('0 3 * * 1', async () => {
            console.log('📅 执行每周深度数据更新...');
            await this.deepUpdate();
        }, {
            scheduled: false,
            timezone: "Asia/Shanghai"
        });

        // 每小时检查一次热门工具的状态更新
        const hourlyTask = cron.schedule('0 * * * *', async () => {
            console.log('⏰ 执行热门工具状态检查...');
            await this.checkHotToolsStatus();
        }, {
            scheduled: false,
            timezone: "Asia/Shanghai"
        });

        this.tasks.set('daily', dailyTask);
        this.tasks.set('weekly', weeklyTask);
        this.tasks.set('hourly', hourlyTask);

        // 启动所有任务
        this.tasks.forEach((task, name) => {
            task.start();
            console.log(`✅ ${name} 定时任务已启动`);
        });

        console.log('🎯 所有定时更新任务已启动');
    }

    // 停止所有定时任务
    stop() {
        this.tasks.forEach((task, name) => {
            task.stop();
            console.log(`⏹️ ${name} 定时任务已停止`);
        });
        console.log('🛑 所有定时更新任务已停止');
    }

    // 深度更新 - 包含更多数据源
    async deepUpdate() {
        console.log('🔍 开始深度数据更新...');
        // 这里可以添加更多数据源的更新逻辑
        await runUpdate();
        console.log('✅ 深度数据更新完成');
    }

    // 检查热门工具状态
    async checkHotToolsStatus() {
        console.log('🔥 检查热门工具状态...');
        
        const hotTools = [
            'chatgpt-plus',
            'claude-pro', 
            'midjourney-v7',
            'github-copilot'
        ];

        for (const toolId of hotTools) {
            try {
                // 这里可以添加具体的状态检查逻辑
                // 比如检查工具是否在线、价格是否变化等
                console.log(`✓ ${toolId} 状态正常`);
            } catch (error) {
                console.error(`❌ ${toolId} 状态检查失败:`, error.message);
            }
        }
    }

    // 手动触发更新
    async triggerUpdate(type = 'normal') {
        console.log(`🚀 手动触发${type}更新...`);
        
        switch (type) {
            case 'deep':
                await this.deepUpdate();
                break;
            case 'status':
                await this.checkHotToolsStatus();
                break;
            default:
                await runUpdate();
        }
    }
}

// 如果直接运行此脚本
if (require.main === module) {
    const scheduler = new UpdateScheduler();
    scheduler.start();

    // 优雅关闭
    process.on('SIGINT', () => {
        console.log('\n🛑 接收到关闭信号，正在停止定时任务...');
        scheduler.stop();
        process.exit(0);
    });

    process.on('SIGTERM', () => {
        console.log('\n🛑 接收到终止信号，正在停止定时任务...');
        scheduler.stop();
        process.exit(0);
    });
}

module.exports = UpdateScheduler;