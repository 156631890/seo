/**
 * 社交分享功能
 * 用于在工具详情页面添加社交分享按钮
 */

// 初始化社交分享
function initSocialShare() {
  const shareContainers = document.querySelectorAll('.social-share');
  
  shareContainers.forEach(container => {
    const title = container.getAttribute('data-title') || document.title;
    const desc = container.getAttribute('data-desc') || '';
    const url = encodeURIComponent(window.location.href);
    const encodedTitle = encodeURIComponent(title);
    const encodedDesc = encodeURIComponent(desc);
    
    // 创建分享按钮
    container.innerHTML = `
      <div style="display: flex; gap: 10px; margin-top: 10px;">
        <a href="https://twitter.com/intent/tweet?text=${encodedTitle}&url=${url}" 
           target="_blank" rel="noopener noreferrer" 
           style="background: #1DA1F2; color: white; padding: 5px 10px; border-radius: 4px; text-decoration: none; font-size: 14px;">
          Twitter
        </a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" 
           target="_blank" rel="noopener noreferrer"
           style="background: #4267B2; color: white; padding: 5px 10px; border-radius: 4px; text-decoration: none; font-size: 14px;">
          Facebook
        </a>
        <a href="https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${encodedTitle}&summary=${encodedDesc}" 
           target="_blank" rel="noopener noreferrer"
           style="background: #0077B5; color: white; padding: 5px 10px; border-radius: 4px; text-decoration: none; font-size: 14px;">
          LinkedIn
        </a>
        <a href="https://api.whatsapp.com/send?text=${encodedTitle}%20${url}" 
           target="_blank" rel="noopener noreferrer"
           style="background: #25D366; color: white; padding: 5px 10px; border-radius: 4px; text-decoration: none; font-size: 14px;">
          WhatsApp
        </a>
      </div>
    `;
  });
}

// 添加复制链接功能
function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  
  alert('链接已复制到剪贴板！');
}

// 导出函数
window.initSocialShare = initSocialShare;
window.copyToClipboard = copyToClipboard;

// 页面加载完成后自动初始化
document.addEventListener('DOMContentLoaded', function() {
  if (document.querySelector('.social-share')) {
    initSocialShare();
  }
});