/**
 * 测试map错误修复的脚本
 */

// 模拟不同类型的数据对象来测试map错误修复
const testCases = [
  {
    name: '完整的工具对象',
    data: {
      id: 'test-tool-1',
      name: '测试工具',
      description: '这是一个测试工具',
      features: ['功能1', '功能2', '功能3'],
      pros: ['优势1', '优势2'],
      cons: ['劣势1', '劣势2'],
      tags: ['标签1', '标签2', '标签3'],
      rating: 4.5,
      pricing: '免费'
    },
    type: 'tool'
  },
  {
    name: '缺少部分属性的工具对象',
    data: {
      id: 'test-tool-2',
      name: '不完整工具',
      description: '这是一个不完整的工具对象',
      features: ['功能1'],
      // 缺少 pros, cons, tags
      rating: 4.0,
      pricing: '付费'
    },
    type: 'tool'
  },
  {
    name: '属性为undefined的工具对象',
    data: {
      id: 'test-tool-3',
      name: 'undefined属性工具',
      description: '这个工具有undefined属性',
      features: undefined,
      pros: undefined,
      cons: undefined,
      tags: undefined,
      rating: 3.5,
      pricing: '免费试用'
    },
    type: 'tool'
  },
  {
    name: '完整的模型对象',
    data: {
      id: 'test-model-1',
      name: '测试模型',
      description: '这是一个测试模型',
      features: ['特性1', '特性2'],
      strengths: ['优势1', '优势2'],
      limitations: ['限制1', '限制2'],
      rating: 4.8,
      provider: 'TestAI'
    },
    type: 'model'
  },
  {
    name: '缺少属性的模型对象',
    data: {
      id: 'test-model-2',
      name: '不完整模型',
      description: '这是一个不完整的模型对象',
      // 缺少 features, strengths, limitations
      rating: 4.2,
      provider: 'TestAI'
    },
    type: 'model'
  },
  {
    name: '完整的Agent对象',
    data: {
      id: 'test-agent-1',
      name: '测试Agent',
      description: '这是一个测试Agent',
      features: ['能力1', '能力2'],
      tags: ['标签1', '标签2'],
      rating: 4.3,
      category: 'assistant'
    },
    type: 'agent'
  }
];

/**
 * 测试渲染函数是否会抛出map错误
 */
function testRenderFunctions() {
  console.log('开始测试渲染函数...');
  
  testCases.forEach((testCase, index) => {
    console.log(`\n测试用例 ${index + 1}: ${testCase.name}`);
    
    try {
      // 创建一个模拟的工具详情页面实例
      const mockToolDetailPage = {
        item: testCase.data,
        itemType: testCase.type,
        
        // 模拟渲染工具详情的关键部分
        renderToolDetails() {
          const tool = this.item;
          
          // 测试主要功能渲染
          const featuresHtml = (tool.features || []).map(feature => `
            <div class="feature-item">
              <p>${feature}</p>
            </div>
          `).join('');
          
          // 测试优缺点渲染
          let prosConsHtml = '';
          if (tool.pros || tool.cons) {
            prosConsHtml = `
              <div class="pros-cons">
                ${tool.pros ? `
                <div class="pros">
                  <ul>
                    ${tool.pros.map(pro => `<li>${pro}</li>`).join('')}
                  </ul>
                </div>
                ` : ''}
                ${tool.cons ? `
                <div class="cons">
                  <ul>
                    ${tool.cons.map(con => `<li>${con}</li>`).join('')}
                  </ul>
                </div>
                ` : ''}
              </div>
            `;
          }
          
          // 测试标签渲染
          const tagsHtml = tool.tags && tool.tags.length > 0 ? 
            tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';
          
          // 测试适用场景渲染
          const scenariosHtml = tool.tags && tool.tags.length > 0 ?
            tool.tags.map(tag => `<li>${tag}相关的工作</li>`).join('') : '';
          
          console.log('  ✅ 工具详情渲染成功');
          return { featuresHtml, prosConsHtml, tagsHtml, scenariosHtml };
        },
        
        // 模拟渲染模型详情的关键部分
        renderModelDetails() {
          const model = this.item;
          
          // 测试主要功能渲染
          const featuresHtml = (model.features || []).map(feature => `
            <div class="feature-item">
              <p>${feature}</p>
            </div>
          `).join('');
          
          // 测试优缺点渲染
          let prosConsHtml = '';
          if (model.strengths || model.limitations) {
            prosConsHtml = `
              <div class="pros-cons">
                ${model.strengths ? `
                <div class="pros">
                  <ul>
                    ${model.strengths.map(strength => `<li>${strength}</li>`).join('')}
                  </ul>
                </div>
                ` : ''}
                ${model.limitations ? `
                <div class="cons">
                  <ul>
                    ${model.limitations.map(limitation => `<li>${limitation}</li>`).join('')}
                  </ul>
                </div>
                ` : ''}
              </div>
            `;
          }
          
          // 测试功能标签渲染
          const featuresTagsHtml = model.features && model.features.length > 0 ?
            model.features.map(feature => `<span class="tag">${feature}</span>`).join('') : '';
          
          console.log('  ✅ 模型详情渲染成功');
          return { featuresHtml, prosConsHtml, featuresTagsHtml };
        },
        
        // 模拟渲染Agent详情的关键部分
        renderAgentDetails() {
          const agent = this.item;
          
          // 测试主要功能渲染
          const featuresHtml = (agent.features || []).map(feature => `
            <div class="feature-item">
              <p>${feature}</p>
            </div>
          `).join('');
          
          // 测试标签渲染
          const tagsHtml = agent.tags && agent.tags.length > 0 ?
            agent.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';
          
          console.log('  ✅ Agent详情渲染成功');
          return { featuresHtml, tagsHtml };
        }
      };
      
      // 根据类型调用相应的渲染函数
      let result;
      switch (testCase.type) {
        case 'tool':
          result = mockToolDetailPage.renderToolDetails();
          break;
        case 'model':
          result = mockToolDetailPage.renderModelDetails();
          break;
        case 'agent':
          result = mockToolDetailPage.renderAgentDetails();
          break;
      }
      
      console.log('  📊 渲染结果:', {
        hasContent: Object.values(result).some(html => html.length > 0),
        contentLength: Object.values(result).reduce((sum, html) => sum + html.length, 0)
      });
      
    } catch (error) {
      console.error(`  ❌ 测试失败:`, error.message);
      console.error(`  错误堆栈:`, error.stack);
    }
  });
  
  console.log('\n测试完成！');
}

/**
 * 测试相关项目渲染
 */
function testRelatedItemsRender() {
  console.log('\n开始测试相关项目渲染...');
  
  const testRelatedItems = [
    // 正常数据
    [
      { id: '1', name: '工具1', description: '描述1', rating: 4.5 },
      { id: '2', name: '工具2', description: '描述2', rating: 4.0 }
    ],
    // 空数组
    [],
    // undefined
    undefined,
    // null
    null,
    // 包含缺少属性的项目
    [
      { id: '1', name: '工具1' }, // 缺少description和rating
      { id: '2', name: '工具2', description: '描述2', rating: undefined }
    ]
  ];
  
  testRelatedItems.forEach((relatedItems, index) => {
    console.log(`\n测试相关项目 ${index + 1}:`, relatedItems);
    
    try {
      let html = '';
      
      if (relatedItems && relatedItems.length > 0) {
        html = relatedItems.map(item => `
          <div class="related-tool-card">
            <h4><a href="/tool-detail.html?id=${item.id}&type=tool">${item.name}</a></h4>
            <p>${item.description || ''}</p>
            <div class="rating-display">
              <span class="stars">${'★'.repeat(Math.floor(item.rating || 0))}${'☆'.repeat(5-Math.floor(item.rating || 0))}</span>
              <span>${item.rating || 0}</span>
            </div>
          </div>
        `).join('');
      } else {
        html = '<div style="color:#666;padding:20px;">暂无相关项目</div>';
      }
      
      console.log('  ✅ 相关项目渲染成功');
      console.log('  📊 HTML长度:', html.length);
      
    } catch (error) {
      console.error(`  ❌ 相关项目渲染失败:`, error.message);
    }
  });
  
  console.log('\n相关项目测试完成！');
}

// 运行测试
if (typeof module !== 'undefined' && module.exports) {
  // Node.js环境
  module.exports = { testRenderFunctions, testRelatedItemsRender };
} else {
  // 浏览器环境
  console.log('🧪 开始map错误修复测试');
  testRenderFunctions();
  testRelatedItemsRender();
  console.log('🎉 所有测试完成！');
}