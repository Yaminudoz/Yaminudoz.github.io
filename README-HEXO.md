# 拾阶：Hexo 博客

本站迁移为 Hexo 静态博客，并使用 NexT 主题。

## 发布文章

1. 在 `source/_posts/` 下新建 Markdown 文件。
2. 在文件顶部添加 Front Matter，例如：

```yaml
---
title: 我的第一篇笔记
date: 2026-10-21 18:00:00
tags:
  - 学习
categories:
  - 编程
---
```

3. 使用 Markdown 编写正文。
4. 提交并推送到 `main` 分支。GitHub Actions 会自动构建并部署到 GitHub Pages。

## 本地预览

需要安装 Node.js 20 或更高版本：

```bash
npm install
git clone --depth 1 https://github.com/next-theme/hexo-theme-next.git themes/next
npx hexo server
```

浏览器打开 http://localhost:4000。

## 部署说明

GitHub 仓库的 Pages 设置需要选择 **GitHub Actions** 作为构建和部署来源。工作流位于 `.github/workflows/pages.yml`。

迁移通过独立分支和 Pull Request 准备，原有首页和目录不会被直接删除。合并前请先检查工作流和生成结果。
