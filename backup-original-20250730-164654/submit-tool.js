/**
 * 提交工具页面逻辑
 * 负责提交工具页面的交互和表单处理
 */

class SubmitToolPage {
  constructor() {
    this.loader = window.aiToolsLoader;
    this.tags = [];
  }

  /**
   * 初始化页面
   */
  async initialize() {
    try {
      // 加载数据库
      await this.loader.load();

      // 填充分类选项
      this.populateCategories();

      // 设置标签输入
      this.setupTagInput();

      // 设置表单提交
      this.setupFormSubmission();

      // 绑定资源类型切换事件
      document.getElementById('resource-type').addEventListener('change', () => {
        this.updateFormFields(document.getElementById('resource-type').value);
      });
    } catch (error) {
      console.error('初始化提交页面出错:', error);
      this.showMessage('加载数据失败: ' + error.message, 'error');
    }
  }

  /**
   * 显示消息
   * @param {string} message 消息内容
   * @param {string} type 消息类型 (success, error)
   */
  showMessage(message, type) {
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    if (type === 'success') {
      successMessage.style.display = 'block';
      successMessage.querySelector('p').textContent = message;
      errorMessage.style.display = 'none';
    } else {
      errorMessage.style.display = 'block';
      errorMessage.querySelector('p').textContent = message;
      successMessage.style.display = 'none';
    }

    // 5秒后自动隐藏
    setTimeout(() => {
      successMessage.style.display = 'none';
      errorMessage.style.display = 'none';
    }, 5000);
  }

  /**
   * 填充分类选项
   */
  async populateCategories() {
    const categorySelect = document.getElementById('resource-category');
    if (!categorySelect) return;

    try {
      const database = await this.loader.getDatabase();
      const categories = database.categories;

      Object.keys(categories).forEach(catKey => {
        const category = categories[catKey];
        const option = document.createElement('option');
        option.value = catKey;
        option.textContent = `${category.icon} ${category.name}`;
        categorySelect.appendChild(option);
      });
    } catch (error) {
      console.error('填充分类选项出错:', error);
    }
  }

  /**
   * 根据资源类型更新表单字段
   * @param {string} type 资源类型
   */
  async updateFormFields(type) {
    const categorySelect = document.getElementById('resource-category');
    if (!categorySelect) return;

    // 清空当前选项
    categorySelect.innerHTML = '<option value="">-- 选择分类 --</option>';

    try {
      const database = await this.loader.getDatabase();

      // 根据类型填充不同的分类选项
      switch (type) {
        case 'tool':
          Object.keys(database.categories).forEach(catKey => {
            const category = database.categories[catKey];
            const option = document.createElement('option');
            option.value = catKey;
            option.textContent = `${category.icon} ${category.name}`;
            categorySelect.appendChild(option);
          });
          break;
        case 'model':
          Object.keys(database.modelTypes).forEach(typeKey => {
            const modelType = database.modelTypes[typeKey];
            const option = document.createElement('option');
            option.value = typeKey;
            option.textContent = modelType.name;
            categorySelect.appendChild(option);
          });
          break;
        case 'agent':
          Object.keys(database.agentTypes).forEach(typeKey => {
            const agentType = database.agentTypes[typeKey];
            const option = document.createElement('option');
            option.value = typeKey;
            option.textContent = agentType.name;
            categorySelect.appendChild(option);
          });
          break;
      }
    } catch (error) {
      console.error('更新表单字段出错:', error);
    }
  }

  /**
   * 设置标签输入
   */
  setupTagInput() {
    const tagInput = document.getElementById('tag-input');
    const tagsContainer = document.getElementById('tags-container');
    const hiddenTagsInput = document.getElementById('resource-tags');
    
    if (!tagInput || !tagsContainer || !hiddenTagsInput) return;
    
    tagInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && e.target.value.trim()) {
        e.preventDefault();
        
        const tag = e.target.value.trim();
        if (!this.tags.includes(tag)) {
          this.tags.push(tag);
          this.renderTags();
        }
        
        e.target.value = '';
      }
    });
    
    this.renderTags = () => {
      tagsContainer.innerHTML = '';
      this.tags.forEach((tag, index) => {
        const tagElement = document.createElement('div');
        tagElement.className = 'tag';
        tagElement.innerHTML = `
          ${tag}
          <span class="tag-remove" data-index="${index}">×</span>
        `;
        tagsContainer.appendChild(tagElement);
      });
      
      // 更新隐藏输入
      hiddenTagsInput.value = JSON.stringify(this.tags);
      
      // 添加删除事件
      document.querySelectorAll('.tag-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const index = parseInt(e.target.getAttribute('data-index'));
          this.tags.splice(index, 1);
          this.renderTags();
        });
      });
    };
  }

  /**
   * 设置表单提交
   */
  setupFormSubmission() {
    const form = document.getElementById('submit-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // 验证表单
      if (!this.validateForm()) {
        this.showMessage('请填写所有必填字段', 'error');
        return;
      }
      
      // 收集表单数据
      const formData = this.collectFormData();
      
      // 在实际应用中，这里会发送数据到服务器
      // 这里我们只是模拟成功提交
      console.log('提交的数据:', formData);
      
      // 显示成功消息
      this.showMessage('感谢您的提交！我们会尽快审核您的内容。', 'success');
      
      // 重置表单
      form.reset();
      this.tags = [];
      this.renderTags();
    });
  }

  /**
   * 验证表单
   * @returns {boolean} 表单是否有效
   */
  validateForm() {
    const requiredFields = [
      'resource-type',
      'resource-name',
      'resource-description',
      'resource-category',
      'resource-url',
      'resource-features',
      'resource-pricing'
    ];
    
    for (const fieldId of requiredFields) {
      const field = document.getElementById(fieldId);
      if (!field || !field.value.trim()) {
        if (field) field.focus();
        return false;
      }
    }
    
    return true;
  }

  /**
   * 收集表单数据
   * @returns {Object} 表单数据
   */
  collectFormData() {
    const type = document.getElementById('resource-type').value;
    const name = document.getElementById('resource-name').value;
    const provider = document.getElementById('resource-provider').value;
    const description = document.getElementById('resource-description').value;
    const category = document.getElementById('resource-category').value;
    const url = document.getElementById('resource-url').value;
    const features = document.getElementById('resource-features').value.split('\n').filter(f => f.trim());
    const pricing = document.getElementById('resource-pricing').value;
    const pros = document.getElementById('resource-pros').value.split('\n').filter(p => p.trim());
    const cons = document.getElementById('resource-cons').value.split('\n').filter(c => c.trim());
    const extra = document.getElementById('resource-extra').value;
    const submitterName = document.getElementById('submitter-name').value;
    const submitterEmail = document.getElementById('submitter-email').value;
    
    return {
      type,
      name,
      provider,
      description,
      category,
      url,
      features,
      tags: this.tags,
      pricing,
      pros,
      cons,
      extra,
      submitter: {
        name: submitterName,
        email: submitterEmail
      },
      submissionDate: new Date().toISOString()
    };
  }
}

// 创建页面实例
const submitToolPage = new SubmitToolPage();

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  submitToolPage.initialize();
});