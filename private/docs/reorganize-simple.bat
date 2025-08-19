@echo off
chcp 65001 >nul
echo 🚀 MyAI项目文件整理工具
echo ========================
echo.

:: 创建备份文件夹
set "backup_folder=backup-original-%date:~0,4%%date:~5,2%%date:~8,2%-%time:~0,2%%time:~3,2%%time:~6,2%"
set "backup_folder=%backup_folder: =0%"
echo 📦 创建备份文件夹: %backup_folder%
mkdir "%backup_folder%" 2>nul

:: 创建新文件夹结构
echo 📁 创建新文件夹结构...
mkdir pages 2>nul
mkdir css 2>nul
mkdir data 2>nul
mkdir tests 2>nul
mkdir docs 2>nul
mkdir archive 2>nul
mkdir temp 2>nul

echo   ✅ 文件夹结构创建完成

:: 移动核心页面文件
echo 📂 移动核心页面文件到 pages/...
for %%f in (
    tools-complete.html
    models-complete.html
    agents-complete.html
    detail-complete.html
    compare-simple.html
    search.html
    about.html
    contact.html
    terms.html
    privacy-policy.html
    newsletter.html
    articles.html
) do (
    if exist "%%f" (
        copy "%%f" "%backup_folder%\" >nul 2>&1
        move "%%f" "pages\" >nul 2>&1
        echo   ✅ %%f
    )
)

:: 移动样式文件
echo 📂 移动样式文件到 css/...
if exist "partials\site-style.css" (
    copy "partials\site-style.css" "%backup_folder%\" >nul 2>&1
    move "partials\site-style.css" "css\" >nul 2>&1
    echo   ✅ site-style.css
)
if exist "partials\mobile-post-style.css" (
    copy "partials\mobile-post-style.css" "%backup_folder%\" >nul 2>&1
    move "partials\mobile-post-style.css" "css\" >nul 2>&1
    echo   ✅ mobile-post-style.css
)

:: 移动数据文件
echo 📂 移动数据文件到 data/...
for %%f in (
    ai-tools-database.js
    social-share.js
    content-management.js
) do (
    if exist "%%f" (
        copy "%%f" "%backup_folder%\" >nul 2>&1
        move "%%f" "data\" >nul 2>&1
        echo   ✅ %%f
    )
)

:: 移动测试文件
echo 📂 移动测试文件到 tests/...
for %%f in (
    test-*.html
    comprehensive-fix.html
    diagnose-database.html
    fix-models-issue.html
    project-statistics.html
) do (
    if exist "%%f" (
        copy "%%f" "%backup_folder%\" >nul 2>&1
        move "%%f" "tests\" >nul 2>&1
        echo   ✅ %%f
    )
)

:: 移动文档文件
echo 📂 移动文档文件到 docs/...
for %%f in (
    *.md
) do (
    if exist "%%f" (
        if not "%%f"=="README.md" (
            copy "%%f" "%backup_folder%\" >nul 2>&1
            move "%%f" "docs\" >nul 2>&1
            echo   ✅ %%f
        )
    )
)

:: 移动归档文件
echo 📂 移动归档文件到 archive/...
for %%f in (
    models-simple.html
    solution-summary.html
    compare.html
    tools.html
    tool-detail.html
    tool-detail-template.html
    submit-tool.html
    post-template.html
) do (
    if exist "%%f" (
        copy "%%f" "%backup_folder%\" >nul 2>&1
        move "%%f" "archive\" >nul 2>&1
        echo   ✅ %%f
    )
)

:: 移动临时文件
echo 📂 移动临时文件到 temp/...
for %%f in (
    final-status.html
    project-organization.html
    reorganize-safe.html
) do (
    if exist "%%f" (
        copy "%%f" "%backup_folder%\" >nul 2>&1
        move "%%f" "temp\" >nul 2>&1
        echo   ✅ %%f
    )
)

:: 移动生成脚本到scripts文件夹
echo 📂 移动生成脚本到 scripts/...
for %%f in (
    generate-*.js
    add-*.js
    expand-*.js
    rebuild-*.js
    recover-*.js
    create-*.js
) do (
    if exist "%%f" (
        copy "%%f" "%backup_folder%\" >nul 2>&1
        move "%%f" "scripts\" >nul 2>&1
        echo   ✅ %%f
    )
)

:: 生成整理报告
echo 📋 生成整理报告...
echo MyAI项目文件整理报告 > reorganization-report.txt
echo ===================== >> reorganization-report.txt
echo 整理时间: %date% %time% >> reorganization-report.txt
echo 备份文件夹: %backup_folder% >> reorganization-report.txt
echo. >> reorganization-report.txt
echo 新文件夹结构: >> reorganization-report.txt
echo ├── pages/          # 核心页面文件 >> reorganization-report.txt
echo ├── posts/          # 博客文章（保持不变） >> reorganization-report.txt
echo ├── js/             # JavaScript文件（保持不变） >> reorganization-report.txt
echo ├── css/            # 样式文件 >> reorganization-report.txt
echo ├── data/           # 数据文件 >> reorganization-report.txt
echo ├── scripts/        # 构建和生成脚本 >> reorganization-report.txt
echo ├── tests/          # 测试文件 >> reorganization-report.txt
echo ├── docs/           # 文档文件 >> reorganization-report.txt
echo ├── archive/        # 归档文件 >> reorganization-report.txt
echo ├── temp/           # 临时文件 >> reorganization-report.txt
echo └── %backup_folder%/  # 原文件备份 >> reorganization-report.txt
echo. >> reorganization-report.txt
echo 如何回滚: >> reorganization-report.txt
echo 1. 删除新创建的文件夹 >> reorganization-report.txt
echo 2. 从 %backup_folder% 恢复所有文件到根目录 >> reorganization-report.txt

echo.
echo 🎉 文件整理完成！
echo ==================
echo 📊 项目现在更加整洁有序
echo 📁 所有原文件已备份到: %backup_folder%
echo 📋 详细报告: reorganization-report.txt
echo.
echo ✅ 你的MyAI项目现在有了清晰的文件结构！
echo 🔄 如需回滚，请查看整理报告中的说明。
echo.

:: 询问是否打开文件夹
set /p open_folder="是否要打开项目文件夹查看结果？(y/n): "
if /i "%open_folder%"=="y" (
    start .
)

pause