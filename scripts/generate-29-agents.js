/**
 * 生成29个AI Agent数据
 */

const fs = require('fs');

console.log('🤖 开始生成29个AI Agent...');

// Agent模板生成函数
function generateAgent(id, name, provider, type, category, description, features, pricing, tags, rating, users, url) {
    return {
        id,
        name,
        provider,
        type,
        category,
        description,
        features,
        pricing,
        tags,
        rating,
        users,
        url,
        pros: ['功能强大', '易于使用', '开源免费'],
        cons: ['需要技术背景', '可能不稳定', '文档待完善'],
        lastUpdated: '2024-12-20'
    };
}

// 29个AI Agent
const agents29 = [
    // 自主代理 (8个)
    generateAgent('autogpt', 'AutoGPT', 'Significant Gravitas', 'autonomous', 'automation', '自主执行任务的AI代理', ['任务分解', '自主执行', '工具调用', '长期记忆'], '开源免费', ['自主', '任务', '开源'], 4.1, '500K+', 'https://github.com/Significant-Gravitas/AutoGPT'),
    generateAgent('babyagi', 'BabyAGI', 'Yohei Nakajima', 'autonomous', 'automation', '轻量级的自主任务执行代理', ['任务规划', '优先级管理', '结果评估', '循环执行'], '开源免费', ['轻量', '简单', '教育'], 4.0, '200K+', 'https://github.com/yoheinakajima/babyagi'),
    generateAgent('agentgpt', 'AgentGPT', 'AgentGPT Team', 'autonomous', 'automation', '基于Web的自主AI代理平台', ['Web界面', '目标设定', '任务执行', '结果展示'], '免费/Pro版', ['Web界面', '易用', '可视化'], 4.2, '1M+', 'https://agentgpt.reworkd.ai'),
    generateAgent('godmode', 'GodMode', 'GodMode Team', 'autonomous', 'automation', '自主AI代理的Web界面', ['任务自动化', '多步骤执行', '结果跟踪', 'Web界面'], '免费', ['免费', 'Web', '简单'], 3.9, '300K+', 'https://godmode.space'),
    generateAgent('superagi', 'SuperAGI', 'SuperAGI', 'autonomous', 'automation', '开源的自主AI代理框架', ['多代理协作', '工具集成', 'GUI界面', '插件系统'], '开源免费', ['多代理', '插件', '协作'], 4.3, '150K+', 'https://github.com/TransformerOptimus/SuperAGI'),
    generateAgent('jarvis', 'JARVIS', 'Microsoft', 'autonomous', 'automation', '微软的多模态AI代理系统', ['多模态理解', '任务规划', '工具调用', '协作执行'], '研究项目', ['多模态', '微软', '先进'], 4.4, '研究阶段', 'https://github.com/microsoft/JARVIS'),
    generateAgent('voyager', 'Voyager', 'NVIDIA', 'autonomous', 'automation', '终身学习的Minecraft代理', ['终身学习', '技能获取', '探索发现', '自我改进'], '研究项目', ['学习', '游戏', '探索'], 4.2, '研究阶段', 'https://voyager.minedojo.org'),
    generateAgent('reflexion', 'Reflexion', 'Princeton University', 'autonomous', 'automation', '具有反思能力的AI代理', ['自我反思', '错误纠正', '经验学习', '性能提升'], '研究项目', ['反思', '学习', '改进'], 4.1, '研究阶段', 'https://github.com/noahshinn024/reflexion'),

    // 助手代理 (7个)
    generateAgent('langchain-agents', 'LangChain Agents', 'LangChain', 'assistant', 'automation', 'LangChain的代理框架', ['工具调用', '链式推理', '记忆管理', '多模态'], '开源免费', ['框架', '工具', '链式'], 4.5, '2M+', 'https://python.langchain.com/docs/modules/agents'),
    generateAgent('llamaindex-agents', 'LlamaIndex Agents', 'LlamaIndex', 'assistant', 'automation', 'LlamaIndex的智能代理系统', ['数据查询', '推理代理', '工具使用', 'RAG增强'], '开源免费', ['数据', 'RAG', '查询'], 4.4, '800K+', 'https://docs.llamaindex.ai/en/stable/module_guides/deploying/agents'),
    generateAgent('semantic-kernel', 'Semantic Kernel', 'Microsoft', 'assistant', 'automation', '微软的AI编排框架', ['技能编排', '插件系统', '多语言支持', '企业集成'], '开源免费', ['微软', '企业', '编排'], 4.3, '500K+', 'https://github.com/microsoft/semantic-kernel'),
    generateAgent('haystack-agents', 'Haystack Agents', 'deepset', 'assistant', 'automation', 'Haystack的对话代理框架', ['对话管理', '文档问答', '搜索增强', 'NLP流水线'], '开源免费', ['对话', '搜索', 'NLP'], 4.2, '300K+', 'https://haystack.deepset.ai/overview/agents'),
    generateAgent('autogen', 'AutoGen', 'Microsoft', 'multi-agent', 'automation', '多代理对话框架', ['多代理对话', '角色扮演', '协作解决', '代码生成'], '开源免费', ['多代理', '对话', '协作'], 4.6, '1.2M+', 'https://github.com/microsoft/autogen'),
    generateAgent('crew-ai', 'CrewAI', 'CrewAI', 'multi-agent', 'automation', '多代理协作平台', ['团队协作', '角色分工', '任务分配', '结果整合'], '开源免费', ['团队', '协作', '分工'], 4.4, '400K+', 'https://github.com/joaomdmoura/crewAI'),
    generateAgent('multi-on', 'MultiOn', 'MultiOn', 'assistant', 'automation', 'Web自动化AI代理', ['Web自动化', '浏览器控制', '任务执行', 'API集成'], '免费/付费版', ['Web', '自动化', '浏览器'], 4.1, '200K+', 'https://multion.ai'),

    // 专业领域代理 (8个)
    generateAgent('devin', 'Devin', 'Cognition AI', 'specialized', 'code-assistant', 'AI软件工程师代理', ['代码编写', '调试测试', '项目管理', '部署发布'], '私有Beta', ['编程', '工程师', '全栈'], 4.7, 'Beta用户', 'https://cognition-labs.com/devin'),
    generateAgent('cursor-composer', 'Cursor Composer', 'Anysphere', 'specialized', 'code-assistant', 'Cursor的AI编程代理', ['代码生成', '重构优化', '错误修复', '文档生成'], '集成在Cursor中', ['编程', '重构', '优化'], 4.5, '500K+', 'https://cursor.sh'),
    generateAgent('github-copilot-workspace', 'GitHub Copilot Workspace', 'GitHub', 'specialized', 'code-assistant', 'GitHub的AI开发环境', ['项目规划', '代码生成', '测试编写', '文档创建'], 'GitHub订阅', ['GitHub', '开发', '集成'], 4.4, '1M+', 'https://github.com/features/copilot'),
    generateAgent('aider-chat', 'Aider', 'Aider', 'specialized', 'code-assistant', '命令行AI编程助手', ['代码编辑', 'Git集成', '多文件处理', '命令行界面'], '开源免费', ['命令行', 'Git', '编辑'], 4.3, '100K+', 'https://aider.chat'),
    generateAgent('continue-dev', 'Continue', 'Continue', 'specialized', 'code-assistant', 'VS Code的AI编程助手', ['代码补全', '聊天界面', '自定义模型', '插件扩展'], '开源免费', ['VS Code', '插件', '自定义'], 4.2, '200K+', 'https://continue.dev'),
    generateAgent('coderabbit', 'CodeRabbit', 'CodeRabbit', 'specialized', 'code-assistant', 'AI代码审查代理', ['代码审查', '安全检测', '性能分析', '建议优化'], '免费/Pro版', ['审查', '安全', '分析'], 4.1, '150K+', 'https://coderabbit.ai'),
    generateAgent('sweep-ai', 'Sweep', 'Sweep AI', 'specialized', 'code-assistant', 'GitHub问题自动修复代理', ['问题修复', '代码生成', 'PR创建', '自动化'], '免费/付费版', ['修复', '自动化', 'GitHub'], 4.0, '80K+', 'https://sweep.dev'),
    generateAgent('mentat-ai', 'Mentat', 'Mentat AI', 'specialized', 'code-assistant', '命令行代码编辑代理', ['代码编辑', '文件操作', '批量修改', '智能建议'], '开源免费', ['命令行', '编辑', '批量'], 3.9, '50K+', 'https://github.com/biobootloader/mentat'),

    // 研究和分析代理 (6个)
    generateAgent('research-agent', 'Research Agent', 'Various', 'specialized', 'research', '自动化研究代理', ['文献搜索', '信息整理', '报告生成', '数据分析'], '开源/付费版', ['研究', '文献', '分析'], 4.2, '100K+', 'https://github.com/assafelovic/gpt-researcher'),
    generateAgent('scite-assistant', 'Scite Assistant', 'Scite', 'specialized', 'research', '科学文献分析代理', ['文献分析', '引用检查', '研究验证', '趋势发现'], '免费/付费版', ['科学', '文献', '验证'], 4.3, '200K+', 'https://scite.ai'),
    generateAgent('elicit', 'Elicit', 'Ought', 'specialized', 'research', 'AI研究助手', ['文献搜索', '数据提取', '假设验证', '研究设计'], '免费/Plus版', ['研究', '假设', '验证'], 4.4, '500K+', 'https://elicit.org'),
    generateAgent('consensus', 'Consensus', 'Consensus', 'specialized', 'research', '科学共识搜索引擎', ['科学搜索', '共识分析', '证据评估', '结论总结'], '免费/Pro版', ['科学', '共识', '证据'], 4.1, '300K+', 'https://consensus.app'),
    generateAgent('semantic-scholar-ai', 'Semantic Scholar AI', 'Allen Institute', 'specialized', 'research', '学术搜索和分析代理', ['学术搜索', '论文分析', '引用网络', '研究趋势'], '免费', ['学术', '论文', '引用'], 4.5, '10M+', 'https://semanticscholar.org'),
    generateAgent('connected-papers', 'Connected Papers', 'Connected Papers', 'specialized', 'research', '论文关系可视化代理', ['论文关系', '可视化', '研究脉络', '发现相关'], '免费/付费版', ['可视化', '关系', '发现'], 4.2, '1M+', 'https://connectedpapers.com')
];

try {
    let content = fs.readFileSync('ai-tools-database.js', 'utf8');
    
    // 替换agents数组
    const agentsStr = JSON.stringify(agents29, null, 8);
    content = content.replace(
        /agents:\s*\[\]/,
        `agents: ${agentsStr}`
    );
    
    fs.writeFileSync('ai-tools-database.js', content);
    
    // 验证语法
    const { execSync } = require('child_process');
    execSync('node -c ai-tools-database.js');
    
    console.log(`✅ 成功添加 ${agents29.length} 个Agent到数据库`);
    
    // 显示类型统计
    const typeStats = {};
    agents29.forEach(agent => {
        typeStats[agent.type] = (typeStats[agent.type] || 0) + 1;
    });
    
    console.log('📊 Agent类型统计:');
    Object.entries(typeStats).forEach(([type, count]) => {
        console.log(`  ${type}: ${count}个`);
    });
    
} catch (error) {
    console.error('❌ 添加Agent失败:', error.message);
}