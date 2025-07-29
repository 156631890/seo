/**
 * 项目统计脚本
 * 统计文件数量、代码行数、项目规模等信息
 */

const fs = require('fs');
const path = require('path');

class ProjectStats {
    constructor() {
        this.stats = {
            totalFiles: 0,
            totalLines: 0,
            totalSize: 0,
            fileTypes: {},
            directories: {},
            largestFiles: [],
            codeFiles: 0,
            codeLines: 0,
            documentFiles: 0,
            documentLines: 0
        };
        
        // 定义文件类型
        this.fileTypeCategories = {
            code: ['.js', '.html', '.css', '.json'],
            documents: ['.md', '.txt'],
            images: ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico'],
            config: ['.xml', '.yml', '.yaml', '.toml'],
            other: []
        };
        
        // 忽略的目录和文件
        this.ignorePatterns = [
            'node_modules',
            '.git',
            '.vscode',
            'dist',
            'build',
            '.DS_Store',
            'Thumbs.db'
        ];
    }

    /**
     * 检查是否应该忽略文件/目录
     */
    shouldIgnore(filePath) {
        return this.ignorePatterns.some(pattern => 
            filePath.includes(pattern)
        );
    }

    /**
     * 获取文件类型分类
     */
    getFileCategory(ext) {
        for (const [category, extensions] of Object.entries(this.fileTypeCategories)) {
            if (extensions.includes(ext)) {
                return category;
            }
        }
        return 'other';
    }

    /**
     * 统计单个文件
     */
    async analyzeFile(filePath) {
        try {
            const stats = fs.statSync(filePath);
            const ext = path.extname(filePath).toLowerCase();
            const category = this.getFileCategory(ext);
            
            // 基本统计
            this.stats.totalFiles++;
            this.stats.totalSize += stats.size;
            
            // 文件类型统计
            if (!this.stats.fileTypes[ext]) {
                this.stats.fileTypes[ext] = { count: 0, size: 0, lines: 0 };
            }
            this.stats.fileTypes[ext].count++;
            this.stats.fileTypes[ext].size += stats.size;
            
            // 读取文件内容统计行数
            if (category === 'code' || category === 'documents') {
                try {
                    const content = fs.readFileSync(filePath, 'utf8');
                    const lines = content.split('\n').length;
                    
                    this.stats.totalLines += lines;
                    this.stats.fileTypes[ext].lines += lines;
                    
                    if (category === 'code') {
                        this.stats.codeFiles++;
                        this.stats.codeLines += lines;
                    } else if (category === 'documents') {
                        this.stats.documentFiles++;
                        this.stats.documentLines += lines;
                    }
                    
                    // 记录大文件
                    this.stats.largestFiles.push({
                        path: filePath,
                        size: stats.size,
                        lines: lines,
                        ext: ext
                    });
                } catch (error) {
                    // 二进制文件或读取错误，跳过行数统计
                }
            }
            
        } catch (error) {
            console.error(`分析文件失败: ${filePath}`, error.message);
        }
    }

    /**
     * 递归分析目录
     */
    async analyzeDirectory(dirPath, relativePath = '') {
        try {
            const items = fs.readdirSync(dirPath);
            
            // 目录统计
            if (relativePath) {
                this.stats.directories[relativePath] = { files: 0, size: 0 };
            }
            
            for (const item of items) {
                const fullPath = path.join(dirPath, item);
                const relativeItemPath = relativePath ? path.join(relativePath, item) : item;
                
                if (this.shouldIgnore(fullPath)) {
                    continue;
                }
                
                const stats = fs.statSync(fullPath);
                
                if (stats.isDirectory()) {
                    await this.analyzeDirectory(fullPath, relativeItemPath);
                } else if (stats.isFile()) {
                    await this.analyzeFile(fullPath);
                    
                    // 更新目录统计
                    if (relativePath && this.stats.directories[relativePath]) {
                        this.stats.directories[relativePath].files++;
                        this.stats.directories[relativePath].size += stats.size;
                    }
                }
            }
        } catch (error) {
            console.error(`分析目录失败: ${dirPath}`, error.message);
        }
    }

    /**
     * 格式化文件大小
     */
    formatSize(bytes) {
        const units = ['B', 'KB', 'MB', 'GB'];
        let size = bytes;
        let unitIndex = 0;
        
        while (size >= 1024 && unitIndex < units.length - 1) {
            size /= 1024;
            unitIndex++;
        }
        
        return `${size.toFixed(1)} ${units[unitIndex]}`;
    }

    /**
     * 生成统计报告
     */
    generateReport() {
        // 排序最大文件
        this.stats.largestFiles.sort((a, b) => b.lines - a.lines);
        this.stats.largestFiles = this.stats.largestFiles.slice(0, 10);
        
        const report = {
            summary: {
                totalFiles: this.stats.totalFiles,
                totalLines: this.stats.totalLines,
                totalSize: this.formatSize(this.stats.totalSize),
                codeFiles: this.stats.codeFiles,
                codeLines: this.stats.codeLines,
                documentFiles: this.stats.documentFiles,
                documentLines: this.stats.documentLines
            },
            fileTypes: {},
            largestFiles: this.stats.largestFiles.map(file => ({
                path: file.path.replace(process.cwd(), ''),
                lines: file.lines,
                size: this.formatSize(file.size),
                type: file.ext
            })),
            directories: {}
        };
        
        // 文件类型统计
        Object.entries(this.stats.fileTypes)
            .sort((a, b) => b[1].count - a[1].count)
            .forEach(([ext, data]) => {
                report.fileTypes[ext] = {
                    count: data.count,
                    lines: data.lines,
                    size: this.formatSize(data.size)
                };
            });
        
        // 目录统计
        Object.entries(this.stats.directories)
            .sort((a, b) => b[1].files - a[1].files)
            .slice(0, 10)
            .forEach(([dir, data]) => {
                report.directories[dir] = {
                    files: data.files,
                    size: this.formatSize(data.size)
                };
            });
        
        return report;
    }

    /**
     * 运行统计
     */
    async run(projectPath = '.') {
        console.log('🔍 开始分析项目...');
        const startTime = Date.now();
        
        await this.analyzeDirectory(path.resolve(projectPath));
        
        const endTime = Date.now();
        const report = this.generateReport();
        
        console.log('\n📊 项目统计报告');
        console.log('='.repeat(50));
        
        console.log('\n📈 总体概况:');
        console.log(`  总文件数: ${report.summary.totalFiles}`);
        console.log(`  总行数: ${report.summary.totalLines.toLocaleString()}`);
        console.log(`  总大小: ${report.summary.totalSize}`);
        console.log(`  代码文件: ${report.summary.codeFiles} (${report.summary.codeLines.toLocaleString()} 行)`);
        console.log(`  文档文件: ${report.summary.documentFiles} (${report.summary.documentLines.toLocaleString()} 行)`);
        
        console.log('\n📁 文件类型分布:');
        Object.entries(report.fileTypes).slice(0, 10).forEach(([ext, data]) => {
            console.log(`  ${ext.padEnd(8)}: ${data.count.toString().padStart(3)} 个文件, ${data.lines.toString().padStart(6)} 行, ${data.size}`);
        });
        
        console.log('\n📂 主要目录:');
        Object.entries(report.directories).slice(0, 8).forEach(([dir, data]) => {
            console.log(`  ${dir.padEnd(25)}: ${data.files.toString().padStart(3)} 个文件, ${data.size}`);
        });
        
        console.log('\n📄 最大文件 (按行数):');
        report.largestFiles.slice(0, 8).forEach((file, index) => {
            console.log(`  ${(index + 1).toString().padStart(2)}. ${file.path.padEnd(40)} ${file.lines.toString().padStart(6)} 行 (${file.size})`);
        });
        
        console.log(`\n⏱️  分析耗时: ${endTime - startTime}ms`);
        console.log('='.repeat(50));
        
        return report;
    }
}

// 如果直接运行此脚本
if (require.main === module) {
    const stats = new ProjectStats();
    stats.run().catch(console.error);
}

module.exports = ProjectStats;