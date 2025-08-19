#!/bin/bash
# 低价值内容清理脚本 - 避免Google审核失败

echo "🚨 开始清理低价值内容..."
echo "这将删除测试文件、重复页面和技术文档"
echo "按 Ctrl+C 取消，或按 Enter 继续..."
read

# 创建备份
echo "📦 创建备份..."
mkdir -p backup/$(date +%Y%m%d_%H%M%S)
cp -r . backup/$(date +%Y%m%d_%H%M%S)/ 2>/dev/null || true

# 统计删除文件数量
deleted_count=0

# 删除测试文件
echo "🗑️ 删除测试文件..."
for file in test-*.html debug-*.html *-test.html; do
    if [ -f "$file" ]; then
        echo "  删除: $file"
        rm -f "$file"
        ((deleted_count++))
    fi
done

# 删除重复页面
echo "🗑️ 删除重复页面..."
duplicate_pages=(
    "index-new.html"
    "index-simple.html" 
    "index-beautiful.html"
    "404-enhanced.html"
    "404-optimized.html"
    "tool-detail-optimized.html"
    "models-complete.html"
    "tools-complete.html"
    "agents-complete.html"
)

for file in "${duplicate_pages[@]}"; do
    if [ -f "$file" ]; then
        echo "  删除: $file"
        rm -f "$file"
        ((deleted_count++))
    fi
done

# 删除临时和诊断文件
echo "🗑️ 删除临时文件..."
temp_files=(
    "error-fallback.html"
    "quick-test.html"
    "final-test-all.html"
    "homepage-diagnosis.html"
    "project-verification.html"
    "final-verification.html"
    "project-statistics.html"
    "404-status-check.html"
    "fix-404-errors.html"
    "fix-homepage.html"
    "verify-pages.html"
)

for file in "${temp_files[@]}"; do
    if [ -f "$file" ]; then
        echo "  删除: $file"
        rm -f "$file"
        ((deleted_count++))
    fi
done

# 移动技术文档到私有目录
echo "📁 移动技术文档到私有目录..."
mkdir -p private/docs
moved_count=0

# 移动Markdown文件
for file in *.md; do
    if [ -f "$file" ]; then
        echo "  移动: $file -> private/docs/"
        mv "$file" private/docs/
        ((moved_count++))
    fi
done

# 移动脚本文件
for file in *.ps1 *.bat; do
    if [ -f "$file" ]; then
        echo "  移动: $file -> private/docs/"
        mv "$file" private/docs/
        ((moved_count++))
    fi
done

# 移动其他技术文件
tech_files=(
    "create-complete-database.js"
    "reorganization-report.txt"
)

for file in "${tech_files[@]}"; do
    if [ -f "$file" ]; then
        echo "  移动: $file -> private/docs/"
        mv "$file" private/docs/
        ((moved_count++))
    fi
done

# 清理空的备份文件
echo "🧹 清理备份文件..."
for file in *.backup.* *.broken; do
    if [ -f "$file" ]; then
        echo "  删除: $file"
        rm -f "$file"
        ((deleted_count++))
    fi
done

echo ""
echo "✅ 清理完成！"
echo "📊 统计信息:"
echo "  - 删除文件: $deleted_count 个"
echo "  - 移动文件: $moved_count 个"
echo "  - 备份位置: backup/$(date +%Y%m%d_%H%M%S)/"
echo ""
echo "🎯 建议下一步:"
echo "1. 检查网站功能是否正常"
echo "2. 更新sitemap.xml移除已删除页面"
echo "3. 重新提交到Google Search Console"
echo "4. 监控Google审核状态"
echo ""
echo "🚀 现在你的网站更适合Google审核了！"