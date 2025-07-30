# MyAI项目文件整理脚本
# 安全整理：创建新文件夹结构，复制文件，保留原文件备份

Write-Host "🚀 开始MyAI项目文件整理..." -ForegroundColor Green
Write-Host "📁 当前目录: $(Get-Location)" -ForegroundColor Yellow

# 创建备份文件夹
$backupFolder = "backup-original-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Write-Host "📦 创建备份文件夹: $backupFolder" -ForegroundColor Cyan

if (!(Test-Path $backupFolder)) {
    New-Item -ItemType Directory -Path $backupFolder | Out-Null
}

# 定义新的文件夹结构
$folders = @(
    "pages",
    "css", 
    "data",
    "tests",
    "docs",
    "archive",
    "temp"
)

# 创建新文件夹
Write-Host "📁 创建新文件夹结构..." -ForegroundColor Cyan
foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder | Out-Null
        Write-Host "  ✅ 创建文件夹: $folder" -ForegroundColor Green
    }
}

# 定义文件移动规则
$fileRules = @{
    # 核心页面文件 -> pages/
    "pages" = @(
        "tools-complete.html",
        "models-complete.html", 
        "agents-complete.html",
        "detail-complete.html",
        "compare-simple.html",
        "search.html",
        "about.html",
        "contact.html",
        "terms.html",
        "privacy-policy.html",
        "newsletter.html",
        "articles.html"
    )
    
    # 样式文件 -> css/
    "css" = @(
        "partials/site-style.css",
        "partials/mobile-post-style.css"
    )
    
    # 数据文件 -> data/
    "data" = @(
        "ai-tools-database.js",
        "social-share.js",
        "content-management.js"
    )
    
    # 测试文件 -> tests/
    "tests" = @(
        "test-*.html",
        "comprehensive-fix.html",
        "diagnose-database.html",
        "fix-models-issue.html",
        "project-statistics.html"
    )
    
    # 文档文件 -> docs/
    "docs" = @(
        "*.md",
        "*_REPORT*.md",
        "*_GUIDE*.md",
        "*_OPTIMIZATION*.md"
    )
    
    # 归档文件 -> archive/
    "archive" = @(
        "models-simple.html",
        "solution-summary.html",
        "compare.html",
        "tools.html",
        "tool-detail.html",
        "tool-detail-template.html",
        "submit-tool.html",
        "post-template.html"
    )
    
    # 临时文件 -> temp/
    "temp" = @(
        "final-status.html",
        "project-organization.html",
        "reorganize-safe.html"
    )
}

# 执行文件移动
$totalMoved = 0
foreach ($destination in $fileRules.Keys) {
    Write-Host "📂 处理 $destination 文件夹..." -ForegroundColor Cyan
    
    foreach ($pattern in $fileRules[$destination]) {
        $files = Get-ChildItem -Path . -Name $pattern -File 2>$null
        
        foreach ($file in $files) {
            if (Test-Path $file) {
                try {
                    # 备份原文件
                    Copy-Item $file $backupFolder -Force
                    
                    # 移动到新位置
                    $destPath = Join-Path $destination (Split-Path $file -Leaf)
                    Move-Item $file $destPath -Force
                    
                    Write-Host "  ✅ $file -> $destPath" -ForegroundColor Green
                    $totalMoved++
                }
                catch {
                    Write-Host "  ❌ 移动失败: $file - $($_.Exception.Message)" -ForegroundColor Red
                }
            }
        }
    }
}

# 处理JavaScript文件（保持在js/文件夹）
Write-Host "📂 整理JavaScript文件..." -ForegroundColor Cyan
$jsFiles = Get-ChildItem -Path "js" -Name "*.js" 2>$null
if ($jsFiles) {
    foreach ($jsFile in $jsFiles) {
        $fullPath = "js/$jsFile"
        Copy-Item $fullPath $backupFolder -Force
        Write-Host "  ✅ 备份: $fullPath" -ForegroundColor Green
    }
}

# 处理CSS文件夹重命名
if (Test-Path "partials") {
    Write-Host "📂 重命名partials文件夹为css..." -ForegroundColor Cyan
    if (!(Test-Path "css")) {
        Rename-Item "partials" "css"
        Write-Host "  ✅ partials -> css" -ForegroundColor Green
    } else {
        # 如果css文件夹已存在，合并内容
        Copy-Item "partials/*" "css/" -Recurse -Force
        Remove-Item "partials" -Recurse -Force
        Write-Host "  ✅ 合并partials到css" -ForegroundColor Green
    }
}

# 清理生成脚本文件
Write-Host "📂 整理生成脚本..." -ForegroundColor Cyan
$scriptFiles = @(
    "generate-*.js",
    "add-*.js", 
    "expand-*.js",
    "rebuild-*.js",
    "recover-*.js",
    "fix-*.js",
    "create-*.js"
)

foreach ($pattern in $scriptFiles) {
    $files = Get-ChildItem -Path . -Name $pattern -File 2>$null
    foreach ($file in $files) {
        if (Test-Path $file) {
            Copy-Item $file $backupFolder -Force
            Move-Item $file "scripts/" -Force
            Write-Host "  ✅ $file -> scripts/" -ForegroundColor Green
            $totalMoved++
        }
    }
}

# 生成整理报告
$reportPath = "reorganization-report.txt"
$report = @"
MyAI项目文件整理报告
=====================
整理时间: $(Get-Date)
备份文件夹: $backupFolder
总共移动文件: $totalMoved

新文件夹结构:
├── pages/          # 核心页面文件
├── posts/          # 博客文章（保持不变）
├── js/             # JavaScript文件（保持不变）
├── css/            # 样式文件（原partials文件夹）
├── data/           # 数据文件
├── scripts/        # 构建和生成脚本
├── tests/          # 测试文件
├── docs/           # 文档文件
├── archive/        # 归档文件
├── temp/           # 临时文件
└── $backupFolder/  # 原文件备份

核心文件保持在根目录:
- index.html
- sitemap.xml
- 404.html
- README.md

如何回滚:
1. 删除新创建的文件夹
2. 从 $backupFolder 恢复所有文件到根目录
3. 运行: Copy-Item $backupFolder/* . -Recurse -Force
"@

$report | Out-File -FilePath $reportPath -Encoding UTF8
Write-Host "📋 整理报告已保存到: $reportPath" -ForegroundColor Yellow

# 显示最终统计
Write-Host "`n🎉 文件整理完成!" -ForegroundColor Green
Write-Host "📊 统计信息:" -ForegroundColor Cyan
Write-Host "  - 总共移动文件: $totalMoved" -ForegroundColor White
Write-Host "  - 创建文件夹: $($folders.Count)" -ForegroundColor White
Write-Host "  - 备份位置: $backupFolder" -ForegroundColor White

# 显示新的文件夹结构
Write-Host "`n📁 新的项目结构:" -ForegroundColor Cyan
Get-ChildItem -Directory | ForEach-Object {
    $fileCount = (Get-ChildItem $_.Name -File -ErrorAction SilentlyContinue).Count
    Write-Host "  📂 $($_.Name)/ ($fileCount files)" -ForegroundColor Yellow
}

Write-Host "`n✅ 整理完成！你的项目现在更加整洁有序。" -ForegroundColor Green
Write-Host "🔄 如需回滚，请查看整理报告中的说明。" -ForegroundColor Yellow

# 询问是否要打开项目文件夹
$openFolder = Read-Host "`n是否要打开项目文件夹查看结果？(y/n)"
if ($openFolder -eq 'y' -or $openFolder -eq 'Y') {
    Invoke-Item .
}