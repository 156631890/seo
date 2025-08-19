// 用户反馈系统
class FeedbackSystem {
    constructor() {
        this.feedbackData = this.loadFeedbackData();
        this.initializeSystem();
    }

    // 初始化反馈系统
    initializeSystem() {
        this.createFeedbackUI();
        this.bindEvents();
        this.loadExistingFeedback();
    }

    // 创建反馈界面
    createFeedbackUI() {
        // 创建反馈按钮
        const feedbackButton = document.createElement('div');
        feedbackButton.id = 'feedback-button';
        feedbackButton.innerHTML = `
            <button class="feedback-btn">
                💬 反馈建议
            </button>
        `;
        feedbackButton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        `;

        // 创建反馈模态框
        const feedbackModal = document.createElement('div');
        feedbackModal.id = 'feedback-modal';
        feedbackModal.innerHTML = `
            <div class="feedback-overlay">
                <div class="feedback-content">
                    <div class="feedback-header">
                        <h3>💬 用户反馈</h3>
                        <button class="close-btn">&times;</button>
                    </div>
                    <div class="feedback-body">
                        <div class="feedback-tabs">
                            <button class="tab-btn active" data-tab="feedback">提交反馈</button>
                            <button class="tab-btn" data-tab="rating">工具评分</button>
                            <button class="tab-btn" data-tab="comments">查看评论</button>
                        </div>
                        
                        <!-- 反馈表单 -->
                        <div class="tab-content" id="feedback-tab">
                            <form id="feedback-form">
                                <div class="form-group">
                                    <label>反馈类型</label>
                                    <select name="type" required>
                                        <option value="">请选择</option>
                                        <option value="bug">Bug报告</option>
                                        <option value="feature">功能建议</option>
                                        <option value="improvement">改进建议</option>
                                        <option value="content">内容反馈</option>
                                        <option value="other">其他</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>相关工具/页面</label>
                                    <input type="text" name="related" placeholder="如：ChatGPT、工具页面等">
                                </div>
                                <div class="form-group">
                                    <label>详细描述 *</label>
                                    <textarea name="description" required placeholder="请详细描述您的反馈..."></textarea>
                                </div>
                                <div class="form-group">
                                    <label>联系方式（可选）</label>
                                    <input type="email" name="contact" placeholder="您的邮箱，用于回复">
                                </div>
                                <button type="submit" class="submit-btn">提交反馈</button>
                            </form>
                        </div>

                        <!-- 评分表单 -->
                        <div class="tab-content" id="rating-tab" style="display: none;">
                            <form id="rating-form">
                                <div class="form-group">
                                    <label>选择工具</label>
                                    <select name="tool" required>
                                        <option value="">请选择工具</option>
                                        <option value="chatgpt-plus">ChatGPT Plus</option>
                                        <option value="claude-pro">Claude Pro</option>
                                        <option value="midjourney-v7">Midjourney V7</option>
                                        <option value="github-copilot">GitHub Copilot</option>
                                        <option value="cursor">Cursor</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label>整体评分</label>
                                    <div class="star-rating" data-rating="0">
                                        <span class="star" data-value="1">★</span>
                                        <span class="star" data-value="2">★</span>
                                        <span class="star" data-value="3">★</span>
                                        <span class="star" data-value="4">★</span>
                                        <span class="star" data-value="5">★</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label>使用体验</label>
                                    <textarea name="experience" placeholder="分享您的使用体验..."></textarea>
                                </div>
                                <div class="form-group">
                                    <label>推荐指数</label>
                                    <select name="recommend">
                                        <option value="5">强烈推荐</option>
                                        <option value="4">推荐</option>
                                        <option value="3">一般</option>
                                        <option value="2">不太推荐</option>
                                        <option value="1">不推荐</option>
                                    </select>
                                </div>
                                <button type="submit" class="submit-btn">提交评分</button>
                            </form>
                        </div>

                        <!-- 评论展示 -->
                        <div class="tab-content" id="comments-tab" style="display: none;">
                            <div class="comments-filter">
                                <select id="comments-tool-filter">
                                    <option value="all">所有工具</option>
                                    <option value="chatgpt-plus">ChatGPT Plus</option>
                                    <option value="claude-pro">Claude Pro</option>
                                    <option value="midjourney-v7">Midjourney V7</option>
                                </select>
                                <select id="comments-sort">
                                    <option value="newest">最新</option>
                                    <option value="rating">评分</option>
                                    <option value="helpful">最有用</option>
                                </select>
                            </div>
                            <div id="comments-list">
                                <!-- 评论将在这里动态加载 -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // 添加样式
        const style = document.createElement('style');
        style.textContent = `
            .feedback-btn {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                border: none;
                padding: 12px 20px;
                border-radius: 25px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 600;
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
                transition: all 0.3s ease;
            }
            .feedback-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
            }
            .feedback-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
            }
            .feedback-content {
                background: white;
                border-radius: 12px;
                width: 90%;
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
            }
            .feedback-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 20px;
                border-bottom: 1px solid #e5e7eb;
            }
            .feedback-header h3 {
                margin: 0;
                color: #374151;
            }
            .close-btn {
                background: none;
                border: none;
                font-size: 24px;
                cursor: pointer;
                color: #6b7280;
            }
            .feedback-tabs {
                display: flex;
                border-bottom: 1px solid #e5e7eb;
            }
            .tab-btn {
                flex: 1;
                padding: 12px;
                border: none;
                background: none;
                cursor: pointer;
                color: #6b7280;
                transition: all 0.2s;
            }
            .tab-btn.active {
                color: #667eea;
                border-bottom: 2px solid #667eea;
            }
            .tab-content {
                padding: 20px;
            }
            .form-group {
                margin-bottom: 16px;
            }
            .form-group label {
                display: block;
                margin-bottom: 6px;
                font-weight: 600;
                color: #374151;
            }
            .form-group input,
            .form-group select,
            .form-group textarea {
                width: 100%;
                padding: 10px;
                border: 1px solid #d1d5db;
                border-radius: 6px;
                font-size: 14px;
            }
            .form-group textarea {
                height: 100px;
                resize: vertical;
            }
            .star-rating {
                display: flex;
                gap: 4px;
                font-size: 24px;
                cursor: pointer;
            }
            .star {
                color: #d1d5db;
                transition: color 0.2s;
            }
            .star.active {
                color: #fbbf24;
            }
            .submit-btn {
                background: #667eea;
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 6px;
                cursor: pointer;
                font-weight: 600;
                width: 100%;
            }
            .submit-btn:hover {
                background: #5a67d8;
            }
            .comments-filter {
                display: flex;
                gap: 12px;
                margin-bottom: 16px;
            }
            .comments-filter select {
                padding: 8px;
                border: 1px solid #d1d5db;
                border-radius: 4px;
            }
            .comment-item {
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                padding: 16px;
                margin-bottom: 12px;
            }
            .comment-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8px;
            }
            .comment-rating {
                color: #fbbf24;
            }
            .comment-date {
                color: #6b7280;
                font-size: 12px;
            }
            #feedback-modal {
                display: none;
            }
        `;

        document.head.appendChild(style);
        document.body.appendChild(feedbackButton);
        document.body.appendChild(feedbackModal);
    }

    // 绑定事件
    bindEvents() {
        // 打开反馈模态框
        document.querySelector('.feedback-btn').addEventListener('click', () => {
            document.getElementById('feedback-modal').style.display = 'block';
        });

        // 关闭反馈模态框
        document.querySelector('.close-btn').addEventListener('click', () => {
            document.getElementById('feedback-modal').style.display = 'none';
        });

        // 点击遮罩关闭
        document.querySelector('.feedback-overlay').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                document.getElementById('feedback-modal').style.display = 'none';
            }
        });

        // 标签页切换
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tabName = btn.dataset.tab;
                this.switchTab(tabName);
            });
        });

        // 星级评分
        document.querySelectorAll('.star').forEach(star => {
            star.addEventListener('click', () => {
                const rating = parseInt(star.dataset.value);
                this.setStarRating(rating);
            });
        });

        // 表单提交
        document.getElementById('feedback-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitFeedback(e.target);
        });

        document.getElementById('rating-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitRating(e.target);
        });

        // 评论筛选
        document.getElementById('comments-tool-filter').addEventListener('change', () => {
            this.filterComments();
        });

        document.getElementById('comments-sort').addEventListener('change', () => {
            this.sortComments();
        });
    }

    // 切换标签页
    switchTab(tabName) {
        // 更新按钮状态
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // 显示对应内容
        document.querySelectorAll('.tab-content').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(`${tabName}-tab`).style.display = 'block';

        // 如果是评论标签，加载评论
        if (tabName === 'comments') {
            this.loadComments();
        }
    }

    // 设置星级评分
    setStarRating(rating) {
        const starContainer = document.querySelector('.star-rating');
        starContainer.dataset.rating = rating;
        
        document.querySelectorAll('.star').forEach((star, index) => {
            if (index < rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    // 提交反馈
    async submitFeedback(form) {
        const formData = new FormData(form);
        const feedback = {
            id: Date.now().toString(),
            type: formData.get('type'),
            related: formData.get('related'),
            description: formData.get('description'),
            contact: formData.get('contact'),
            timestamp: new Date().toISOString(),
            status: 'pending'
        };

        try {
            await this.saveFeedback(feedback);
            this.showMessage('反馈提交成功！感谢您的建议。', 'success');
            form.reset();
        } catch (error) {
            this.showMessage('提交失败，请稍后重试。', 'error');
        }
    }

    // 提交评分
    async submitRating(form) {
        const formData = new FormData(form);
        const starRating = document.querySelector('.star-rating').dataset.rating;
        
        const rating = {
            id: Date.now().toString(),
            tool: formData.get('tool'),
            rating: parseInt(starRating),
            experience: formData.get('experience'),
            recommend: parseInt(formData.get('recommend')),
            timestamp: new Date().toISOString()
        };

        try {
            await this.saveRating(rating);
            this.showMessage('评分提交成功！', 'success');
            form.reset();
            this.setStarRating(0);
        } catch (error) {
            this.showMessage('提交失败，请稍后重试。', 'error');
        }
    }

    // 保存反馈到本地存储
    async saveFeedback(feedback) {
        const feedbacks = this.getFeedbacks();
        feedbacks.push(feedback);
        localStorage.setItem('ai_feedbacks', JSON.stringify(feedbacks));
        
        // 这里可以添加发送到服务器的逻辑
        console.log('新反馈:', feedback);
    }

    // 保存评分到本地存储
    async saveRating(rating) {
        const ratings = this.getRatings();
        ratings.push(rating);
        localStorage.setItem('ai_ratings', JSON.stringify(ratings));
        
        // 这里可以添加发送到服务器的逻辑
        console.log('新评分:', rating);
    }

    // 获取反馈数据
    getFeedbacks() {
        const data = localStorage.getItem('ai_feedbacks');
        return data ? JSON.parse(data) : [];
    }

    // 获取评分数据
    getRatings() {
        const data = localStorage.getItem('ai_ratings');
        return data ? JSON.parse(data) : [];
    }

    // 加载评论
    loadComments() {
        const ratings = this.getRatings();
        const commentsList = document.getElementById('comments-list');
        
        if (ratings.length === 0) {
            commentsList.innerHTML = '<p style="text-align: center; color: #6b7280;">暂无评论</p>';
            return;
        }

        const commentsHTML = ratings.map(rating => `
            <div class="comment-item">
                <div class="comment-header">
                    <div>
                        <strong>${rating.tool}</strong>
                        <span class="comment-rating">${'★'.repeat(rating.rating)}${'☆'.repeat(5-rating.rating)}</span>
                    </div>
                    <span class="comment-date">${new Date(rating.timestamp).toLocaleDateString('zh-CN')}</span>
                </div>
                <p>${rating.experience || '用户未留下详细评价'}</p>
                <div style="font-size: 12px; color: #6b7280;">
                    推荐指数: ${rating.recommend}/5
                </div>
            </div>
        `).join('');

        commentsList.innerHTML = commentsHTML;
    }

    // 筛选评论
    filterComments() {
        // 实现评论筛选逻辑
        this.loadComments();
    }

    // 排序评论
    sortComments() {
        // 实现评论排序逻辑
        this.loadComments();
    }

    // 显示消息
    showMessage(message, type = 'info') {
        const messageDiv = document.createElement('div');
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 6px;
            color: white;
            font-weight: 600;
            z-index: 10001;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        `;
        messageDiv.textContent = message;
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 3000);
    }

    // 加载反馈数据
    loadFeedbackData() {
        return {
            feedbacks: this.getFeedbacks(),
            ratings: this.getRatings()
        };
    }

    // 加载现有反馈
    loadExistingFeedback() {
        // 可以在这里加载服务器端的反馈数据
        console.log('已加载反馈数据:', this.feedbackData);
    }
}

// 初始化反馈系统
document.addEventListener('DOMContentLoaded', () => {
    new FeedbackSystem();
});

// 导出类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FeedbackSystem;
}