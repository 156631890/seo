// 检查网站链接的简单脚本
// 在浏览器控制台中运行此脚本来检查链接状态

const linksToCheck = [
    '/',
    '/about.html',
    '/contact.html',
    '/privacy.html',
    '/terms.html',
    '/search.html',
    '/newsletter.html',
    '/tools.html',
    '/nano-banana.html',
    '/pages/tools-complete.html',
    '/pages/models-complete.html',
    '/pages/agents-complete.html',
    '/pages/nano-banana.html',
    '/posts/chatgpt-beginner-prompts.html',
    '/posts/gpt4o-guide.html',
    '/404.html'
];

async function checkLinks() {
    console.log('🔍 开始检查链接状态...\n');
    
    const results = [];
    
    for (const link of linksToCheck) {
        try {
            const response = await fetch(link, { method: 'HEAD' });
            const status = response.status;
            const statusText = response.statusText;
            
            if (status === 200) {
                console.log(`✅ ${link} - OK (${status})`);
                results.push({ link, status: 'OK', code: status });
            } else if (status === 404) {
                console.log(`❌ ${link} - NOT FOUND (${status})`);
                results.push({ link, status: 'NOT FOUND', code: status });
            } else {
                console.log(`⚠️ ${link} - ${statusText} (${status})`);
                results.push({ link, status: statusText, code: status });
            }
        } catch (error) {
            console.log(`💥 ${link} - ERROR: ${error.message}`);
            results.push({ link, status: 'ERROR', code: 'N/A', error: error.message });
        }
    }
    
    console.log('\n📊 检查结果总结:');
    console.log('==================');
    
    const okLinks = results.filter(r => r.status === 'OK');
    const errorLinks = results.filter(r => r.status !== 'OK');
    
    console.log(`✅ 正常链接: ${okLinks.length}/${results.length}`);
    console.log(`❌ 问题链接: ${errorLinks.length}/${results.length}`);
    
    if (errorLinks.length > 0) {
        console.log('\n❌ 需要修复的链接:');
        errorLinks.forEach(link => {
            console.log(`   ${link.link} - ${link.status} (${link.code})`);
        });
    }
    
    return results;
}

// 运行检查
checkLinks().then(results => {
    console.log('\n🎉 链接检查完成！');
    
    // 如果在浏览器环境中，可以将结果保存到全局变量
    if (typeof window !== 'undefined') {
        window.linkCheckResults = results;
        console.log('💾 结果已保存到 window.linkCheckResults');
    }
});

// 导出函数供Node.js使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { checkLinks, linksToCheck };
}