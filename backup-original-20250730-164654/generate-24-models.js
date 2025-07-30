/**
 * 生成24个AI模型数据
 */

const fs = require('fs');

console.log('🧠 开始生成24个AI模型...');

// 模型模板生成函数
function generateModel(id, name, provider, type, category, description, features, pricing, strengths, limitations, rating, url) {
    return {
        id,
        name,
        provider,
        type,
        category,
        description,
        features,
        pricing,
        apiAccess: true,
        webInterface: true,
        strengths,
        limitations,
        rating,
        url,
        lastUpdated: '2024-12-20'
    };
}

// 24个AI模型
const models24 = [
    // OpenAI模型 (5个)
    generateModel('gpt-4o', 'GPT-4o', 'OpenAI', '多模态大语言模型', 'text-generation', 'OpenAI最新的多模态模型', ['文本生成', '图像理解', '代码编写', '数学推理'], '按token计费', ['推理能力强', '多模态支持', '代码能力优秀'], ['成本较高', '有使用限制'], 4.8, 'https://openai.com/gpt-4o'),
    generateModel('gpt-4-turbo', 'GPT-4 Turbo', 'OpenAI', '大语言模型', 'text-generation', 'GPT-4的优化版本，更快更便宜', ['文本生成', '代码编写', '分析推理', '多语言'], '按token计费', ['速度快', '成本较低', '性能稳定'], ['上下文有限', '知识截止'], 4.7, 'https://openai.com/gpt-4'),
    generateModel('gpt-3-5-turbo', 'GPT-3.5 Turbo', 'OpenAI', '大语言模型', 'text-generation', '经济实惠的GPT模型', ['文本生成', '对话交互', '代码辅助', '翻译'], '按token计费', ['价格便宜', '响应快速', '易于使用'], ['能力有限', '推理较弱'], 4.5, 'https://openai.com/gpt-3-5'),
    generateModel('o1-preview', 'OpenAI o1-preview', 'OpenAI', '推理优化模型', 'text-generation', '专门优化推理能力的模型', ['深度推理', '数学解题', '科学分析', '逻辑思考'], '按token计费（高价）', ['推理能力极强', '数学优秀', '逻辑清晰'], ['成本极高', '速度很慢', '功能单一'], 4.8, 'https://openai.com/o1'),
    generateModel('o1-mini', 'OpenAI o1-mini', 'OpenAI', '推理优化模型', 'text-generation', 'o1的轻量版本', ['推理能力', '成本优化', '数学解题', '代码分析'], '按token计费（中等）', ['推理能力强', '成本合理', '速度适中'], ['能力有限', '仍然较慢', '应用场景窄'], 4.5, 'https://openai.com/o1'),

    // Anthropic模型 (3个)
    generateModel('claude-3-5-sonnet', 'Claude 3.5 Sonnet', 'Anthropic', '大语言模型', 'text-generation', 'Anthropic的高性能语言模型', ['长文本处理', '代码分析', '创意写作', '逻辑推理'], '按token计费', ['安全性高', '长上下文', '分析能力强'], ['图像处理有限', '可用性受限'], 4.7, 'https://claude.ai'),
    generateModel('claude-3-opus', 'Claude 3 Opus', 'Anthropic', '大语言模型', 'text-generation', 'Anthropic最强大的语言模型', ['复杂推理', '创意写作', '代码分析', '多模态'], '按token计费', ['推理能力顶级', '安全性高', '创意优秀'], ['成本最高', '速度较慢', '可用性限制'], 4.8, 'https://claude.ai'),
    generateModel('claude-3-5-haiku', 'Claude 3.5 Haiku', 'Anthropic', '快速响应模型', 'text-generation', 'Claude 3.5系列的快速版本', ['快速响应', '成本优化', '多模态', '安全对话'], '按token计费（低成本）', ['响应极快', '成本低', '安全性高'], ['能力相对有限', '创意一般', '推理较弱'], 4.3, 'https://claude.ai'),

    // Google模型 (3个)
    generateModel('gemini-pro', 'Gemini Pro', 'Google', '多模态大语言模型', 'text-generation', 'Google的多模态AI模型', ['多模态理解', '实时信息', '代码生成', '数学计算'], '免费/付费版本', ['免费使用', '实时信息', '多语言支持'], ['响应速度一般', '创意能力有限'], 4.5, 'https://gemini.google.com'),
    generateModel('gemini-2-0-flash', 'Gemini 2.0 Flash', 'Google', '多模态模型', 'text-generation', 'Google最新的多模态模型', ['实时交互', '多模态', '快速响应', '工具调用'], '免费/付费版本', ['实时能力', '多模态强', '免费使用'], ['相对较新', '稳定性待验证', '功能待完善'], 4.4, 'https://gemini.google.com'),
    generateModel('palm-2', 'PaLM 2', 'Google', '大语言模型', 'text-generation', 'Google的Pathways Language Model第二代', ['多语言精通', '推理能力', '代码生成', '数学计算'], 'Google Cloud计费', ['多语言强', '推理优秀', '技术先进'], ['主要API访问', '成本较高', '复杂部署'], 4.6, 'https://cloud.google.com/vertex-ai'),

    // Meta模型 (2个)
    generateModel('llama-3-1-405b', 'Llama 3.1 405B', 'Meta', '开源大语言模型', 'text-generation', 'Meta最大的开源语言模型', ['开源免费', '多语言支持', '代码生成', '推理能力'], '开源免费', ['完全开源', '性能强大', '可自部署'], ['硬件要求高', '部署复杂', '商业限制'], 4.6, 'https://llama.meta.com'),
    generateModel('llama-3-3-70b', 'Llama 3.3 70B', 'Meta', '开源大语言模型', 'text-generation', 'Meta最新的开源模型', ['开源免费', '性能提升', '多语言', '工具调用'], '开源免费', ['完全开源', '性能优秀', '部署灵活'], ['硬件要求', '部署复杂', '商业限制'], 4.6, 'https://llama.meta.com'),

    // 中国AI模型 (6个)
    generateModel('qwen-2-5-72b', 'Qwen 2.5 72B', '阿里云', '大语言模型', 'text-generation', '阿里云通义千问系列的最新模型', ['中文优化', '代码生成', '数学推理', '多模态'], '按token计费', ['中文能力强', '本土化好', '价格便宜'], ['国际化程度低', '英文能力一般', '生态有限'], 4.3, 'https://tongyi.aliyun.com'),
    generateModel('deepseek-v3', 'DeepSeek V3', 'DeepSeek', '大语言模型', 'text-generation', '深度求索的最新模型', ['推理能力强', '代码生成', '数学解题', '逻辑分析'], '按token计费', ['推理能力突出', '代码质量高', '价格实惠'], ['知名度较低', '生态建设中', '多模态有限'], 4.5, 'https://deepseek.com'),
    generateModel('yi-large', 'Yi Large', '零一万物', '大语言模型', 'text-generation', '零一万物的大规模语言模型', ['长上下文', '多语言', '推理能力', '代码生成'], '按token计费', ['长上下文处理', '性价比高', '中文友好'], ['市场份额小', '生态待建设', '国际化不足'], 4.2, 'https://01.ai'),
    generateModel('ernie-4-0', '文心一言 4.0', '百度', '大语言模型', 'text-generation', '百度文心大模型4.0版本', ['中文优化', '多模态', '知识问答', '创意写作'], '免费/付费版', ['中文能力顶级', '知识丰富', '本土化好'], ['国际化不足', '创新性一般', '生态有限'], 4.4, 'https://yiyan.baidu.com'),
    generateModel('doubao-pro', '豆包 Pro', '字节跳动', '大语言模型', 'text-generation', '字节跳动的大语言模型', ['对话交互', '内容创作', '代码生成', '多模态'], '免费/会员版', ['产品集成好', '用户体验佳', '更新频繁'], ['技术细节少', '开放程度低', '主要面向C端'], 4.2, 'https://doubao.com'),
    generateModel('spark-3-5', '讯飞星火 3.5', '科大讯飞', '大语言模型', 'text-generation', '科大讯飞的多模态认知大模型', ['多模态理解', '语音交互', '图像理解', '代码生成'], '免费/付费版', ['多模态强', '语音优势', '中文优秀'], ['创新性一般', '生态有限', '国际化不足'], 4.2, 'https://xinghuo.xfyun.cn'),

    // 其他国际模型 (5个)
    generateModel('mistral-large', 'Mistral Large', 'Mistral AI', '大语言模型', 'text-generation', '欧洲领先的AI公司Mistral的旗舰模型', ['多语言优秀', '推理能力', '代码生成', '函数调用'], '按token计费', ['欧洲数据合规', '多语言强', '性价比高'], ['生态较小', '知名度低', '功能待完善'], 4.4, 'https://mistral.ai'),
    generateModel('mixtral-8x22b', 'Mixtral 8x22B', 'Mistral AI', '混合专家模型', 'text-generation', 'Mistral最大的混合专家模型', ['混合专家', '高效推理', '多语言', '代码生成'], '按token计费', ['效率高', '性能强', '多语言优秀'], ['部署复杂', '硬件要求', '相对较新'], 4.5, 'https://mistral.ai'),
    generateModel('grok-2', 'Grok-2', 'xAI', '大语言模型', 'text-generation', 'xAI的第二代模型', ['实时信息', '图像理解', '幽默对话', '推理能力'], 'X Premium订阅', ['实时信息', '个性鲜明', '图像能力'], ['平台限制', '可用性有限', '成本较高'], 4.3, 'https://x.ai'),
    generateModel('command-r-plus', 'Command R+', 'Cohere', '企业级模型', 'text-generation', 'Cohere最新的企业级语言模型', ['企业优化', 'RAG增强', '工具调用', '多语言'], '按token计费', ['企业友好', 'RAG优秀', '工具调用强'], ['主要B2B', '知名度低', '生态有限'], 4.4, 'https://cohere.com'),
    generateModel('phi-4', 'Phi-4', 'Microsoft', '小型语言模型', 'text-generation', 'Microsoft的小型高效语言模型', ['小型高效', '推理能力', '数学优秀', '代码生成'], '开源免费', ['效率极高', '推理强', '资源需求低'], ['参数较少', '知识有限', '应用场景窄'], 4.5, 'https://huggingface.co/microsoft/phi-4')
];

try {
    let content = fs.readFileSync('ai-tools-database.js', 'utf8');
    
    // 替换models数组
    const modelsStr = JSON.stringify(models24, null, 8);
    content = content.replace(
        /models:\s*\[\]/,
        `models: ${modelsStr}`
    );
    
    fs.writeFileSync('ai-tools-database.js', content);
    
    // 验证语法
    const { execSync } = require('child_process');
    execSync('node -c ai-tools-database.js');
    
    console.log(`✅ 成功添加 ${models24.length} 个模型到数据库`);
    
    // 显示提供商统计
    const providerStats = {};
    models24.forEach(model => {
        providerStats[model.provider] = (providerStats[model.provider] || 0) + 1;
    });
    
    console.log('📊 模型提供商统计:');
    Object.entries(providerStats).forEach(([provider, count]) => {
        console.log(`  ${provider}: ${count}个`);
    });
    
} catch (error) {
    console.error('❌ 添加模型失败:', error.message);
}