# ZhiBo Chen — Cybersecurity Portfolio

这是一个 React + Vite 本地作品集网站。源码、背景视频和本地素材均位于当前文件夹内，可以直接复制到 GitHub 仓库。

## 最简单的启动方式（Windows）

安装 Node.js 20 或更新版本，然后双击 `start-local.bat`。第一次启动会自动安装依赖。

## 命令行启动

需要 Node.js 20 或更新版本。

```bash
npm install
npm run dev
```

打开终端中显示的本地网址。

## 生成生产版本

```bash
npm run build
npm run preview
```

优化后的静态网站会生成在 `dist/` 文件夹。

## Cloudflare Pages 部署说明

- 正式域名：`https://chenzhibo.com/`
- 将本目录内容推送到 GitHub 仓库。
- 在 Cloudflare Pages 中导入该仓库。
- Build command：`pnpm run build`
- Build output directory：`dist`
- 部署完成后，在 Pages 项目的 Custom domains 中添加 `chenzhibo.com`。
- 不要提交 `node_modules/` 或 `dist/`；它们已经被 `.gitignore` 排除。

## 视频来源

首页背景视频来自 Pexels，可免费使用。来源页面：https://www.pexels.com/video/abstract-background-with-blue-lines-and-dots-27980029/
