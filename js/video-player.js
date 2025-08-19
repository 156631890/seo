// 视频播放器和教程管理系统
class VideoTutorialPlayer {
    constructor() {
        this.currentVideo = null;
        this.videoSources = {
            // 可以集成多种视频源
            youtube: 'https://www.youtube.com/embed/',
            bilibili: 'https://player.bilibili.com/player.html?bvid=',
            vimeo: 'https://player.vimeo.com/video/',
            local: '/videos/' // 本地视频文件
        };
        this.init();
    }

    init() {
        this.setupVideoModal();
        this.setupProgressTracking();
    }

    // 设置视频模态框
    setupVideoModal() {
        const modal = document.createElement('div');
        modal.id = 'video-player-modal';
        modal.className = 'video-modal';
        modal.innerHTML = `
            <div class="video-modal-content">
                <span class="close-video" onclick="videoPlayer.closeVideo()">&times;</span>
                <div class="video-container">
                    <div id="video-player"></div>
                </div>
                <div class="video-info">
                    <h3 id="video-title"></h3>
                    <div class="video-controls">
                        <button onclick="videoPlayer.previousStep()">⏮️ 上一步</button>
                        <button onclick="videoPlayer.togglePlay()">⏸️ 暂停</button>
                        <button onclick="videoPlayer.nextStep()">⏭️ 下一步</button>
                    </div>
                    <div class="video-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" id="progress-fill"></div>
                        </div>
                        <span id="progress-text">0% 完成</span>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // 播放视频教程
    playVideo(videoId, source = 'youtube') {
        const video = this.getVideoData(videoId);
        if (!video) return;

        this.currentVideo = video;
        const modal = document.getElementById('video-player-modal');
        const player = document.getElementById('video-player');
        const title = document.getElementById('video-title');

        title.textContent = video.title;

        // 根据视频源类型创建播放器
        switch (source) {
            case 'youtube':
                this.createYouTubePlayer(player, video.videoUrl);
                break;
            case 'bilibili':
                this.createBilibiliPlayer(player, video.videoUrl);
                break;
            case 'local':
                this.createLocalPlayer(player, video.videoUrl);
                break;
            default:
                this.createInteractivePlayer(player, video);
        }

        modal.style.display = 'flex';
        this.trackVideoStart(videoId);
    }

    // 创建YouTube播放器
    createYouTubePlayer(container, videoUrl) {
        container.innerHTML = `
            <iframe width="100%" height="400" 
                src="${this.videoSources.youtube}${videoUrl}?autoplay=1&rel=0" 
                frameborder="0" allowfullscreen>
            </iframe>
        `;
    }

    // 创建B站播放器
    createBilibiliPlayer(container, videoUrl) {
        container.innerHTML = `
            <iframe width="100%" height="400" 
                src="${this.videoSources.bilibili}${videoUrl}&autoplay=1" 
                frameborder="0" allowfullscreen>
            </iframe>
        `;
    }

    // 创建本地视频播放器
    createLocalPlayer(container, videoUrl) {
        container.innerHTML = `
            <video width="100%" height="400" controls autoplay>
                <source src="${this.videoSources.local}${videoUrl}" type="video/mp4">
                您的浏览器不支持视频播放。
            </video>
        `;
    }

    // 创建交互式教程播放器（图文+步骤）
    createInteractivePlayer(container, video) {
        let currentStep = 0;
        const steps = video.steps || [];

        const renderStep = (stepIndex) => {
            const step = steps[stepIndex];
            if (!step) return;

            container.innerHTML = `
                <div class="interactive-tutorial">
                    <div class="tutorial-visual">
                        ${step.image ? `<img src="${step.image}" alt="${step.title}">` : 
                          `<div class="step-illustration">${step.icon || '📋'}</div>`}
                    </div>
                    <div class="tutorial-content">
                        <h4>步骤 ${stepIndex + 1}: ${step.title}</h4>
                        <p>${step.content}</p>
                        ${step.code ? `<pre><code>${step.code}</code></pre>` : ''}
                        ${step.tips ? `<div class="step-tips">💡 ${step.tips}</div>` : ''}
                    </div>
                    <div class="step-navigation">
                        <button ${stepIndex === 0 ? 'disabled' : ''} 
                                onclick="videoPlayer.goToStep(${stepIndex - 1})">
                            ⏮️ 上一步
                        </button>
                        <span class="step-counter">${stepIndex + 1} / ${steps.length}</span>
                        <button ${stepIndex === steps.length - 1 ? 'disabled' : ''} 
                                onclick="videoPlayer.goToStep(${stepIndex + 1})">
                            下一步 ⏭️
                        </button>
                    </div>
                </div>
            `;
            
            this.updateProgress((stepIndex + 1) / steps.length * 100);
        };

        this.currentStep = 0;
        this.goToStep = (stepIndex) => {
            if (stepIndex >= 0 && stepIndex < steps.length) {
                this.currentStep = stepIndex;
                renderStep(stepIndex);
            }
        };

        renderStep(0);
    }

    // 更新进度条
    updateProgress(percentage) {
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        
        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }
        if (progressText) {
            progressText.textContent = `${Math.round(percentage)}% 完成`;
        }
    }

    // 关闭视频
    closeVideo() {
        const modal = document.getElementById('video-player-modal');
        modal.style.display = 'none';
        
        if (this.currentVideo) {
            this.trackVideoEnd(this.currentVideo.id);
        }
    }

    // 获取视频数据
    getVideoData(videoId) {
        // 这里可以从API或本地数据获取视频信息
        const videoDatabase = {
            'chatgpt-basics': {
                id: 'chatgpt-basics',
                title: 'ChatGPT基础使用教程',
                videoUrl: 'dQw4w9WgXcQ', // YouTube视频ID
                steps: [
                    {
                        title: '注册ChatGPT账户',
                        content: '访问chat.openai.com，点击"Sign up"按钮开始注册流程。',
                        icon: '📝',
                        tips: '建议使用Gmail账户快速注册'
                    },
                    {
                        title: '验证邮箱',
                        content: '检查邮箱中的验证邮件，点击验证链接完成账户激活。',
                        icon: '📧',
                        tips: '如果没收到邮件，检查垃圾邮件文件夹'
                    },
                    {
                        title: '首次登录',
                        content: '使用注册的账户信息登录ChatGPT，熟悉界面布局。',
                        icon: '🔑',
                        tips: '建议保存登录信息以便下次快速访问'
                    },
                    {
                        title: '开始对话',
                        content: '在输入框中输入你的第一个问题，体验AI对话功能。',
                        icon: '💬',
                        tips: '从简单的问题开始，比如"你好"或"介绍一下自己"'
                    }
                ]
            },
            'midjourney-basics': {
                id: 'midjourney-basics',
                title: 'Midjourney入门教程',
                videoUrl: 'BV1xx411c7mu', // B站视频ID
                steps: [
                    {
                        title: '加入Discord',
                        content: '下载Discord应用，注册账户并加入Midjourney服务器。',
                        icon: '💬',
                        tips: 'Discord是Midjourney的主要使用平台'
                    },
                    {
                        title: '订阅服务',
                        content: '选择合适的Midjourney订阅计划，完成付费流程。',
                        icon: '💳',
                        tips: '新用户可以先试用基础计划'
                    },
                    {
                        title: '生成第一张图',
                        content: '使用/imagine命令，输入简单的描述生成图像。',
                        icon: '🎨',
                        code: '/imagine a beautiful sunset over mountains',
                        tips: '从简单的自然景观开始练习'
                    },
                    {
                        title: '学习基础参数',
                        content: '了解--ar（比例）、--v（版本）等基础参数的使用。',
                        icon: '⚙️',
                        code: '/imagine a cat --ar 16:9 --v 6',
                        tips: '--ar 16:9 适合做壁纸，--ar 1:1 适合头像'
                    }
                ]
            }
        };

        return videoDatabase[videoId];
    }

    // 跟踪视频开始
    trackVideoStart(videoId) {
        console.log(`开始观看视频: ${videoId}`);
        // 这里可以发送分析数据到服务器
    }

    // 跟踪视频结束
    trackVideoEnd(videoId) {
        console.log(`结束观看视频: ${videoId}`);
        // 这里可以记录观看完成情况
    }

    // 上一步
    previousStep() {
        if (this.goToStep && this.currentStep > 0) {
            this.goToStep(this.currentStep - 1);
        }
    }

    // 下一步
    nextStep() {
        if (this.goToStep) {
            this.goToStep(this.currentStep + 1);
        }
    }

    // 切换播放/暂停
    togglePlay() {
        // 这里可以控制视频播放状态
        console.log('切换播放状态');
    }
}

// 创建全局视频播放器实例
const videoPlayer = new VideoTutorialPlayer();

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VideoTutorialPlayer;
}