# SaltLab-Lab

实验项目的独立入口与静态项目托管站，部署到 **https://lab.salta.top/**。

与 SaltLab（个人博客主站，`https://www.salta.top/`）职责分离：Lab 承担实验项目的构建产物聚合与入口，不让主站背负相关逻辑。

## 当前功能

访问 `https://lab.salta.top/` 会重定向到 `https://www.salta.top/`：

- 主跳转：`index.html` 的 `<meta http-equiv="refresh">`（静态、无需 JS）
- 兜底：`src/routes/index.tsx` 的 `window.location.replace()`

## 技术栈

React · Vite · TypeScript · TanStack Router · Tailwind CSS · DaisyUI · Lucide React · Motion · Zustand · pnpm · GitHub Actions · GitHub Pages

## 目录结构

```text
SaltLab-Lab/
├── .github/workflows/deploy.yml   # 构建 + GitHub Pages 部署
├── public/
│   ├── 404.html                   # 未知路径的 404（当前同样跳转主站）
│   ├── frago-dossier/             # FRAGO // DOSSIER 名片生成器构建产物
│   └── infinite-title-generator/  # Infinite Title Generator 构建产物
├── src/
│   ├── index.css                  # Tailwind + DaisyUI
│   ├── main.tsx                   # 应用入口（TanStack Router）
│   └── routes/
│       ├── __root.tsx             # 根路由
│       └── index.tsx              # / → www.salta.top（JS 兜底跳转）
└── vite.config.ts                 # base: '/'（自定义域根路径）
```

## 为未来预留

以下路径将陆续通过 GitHub Actions 聚合其他 Repository 的构建产物：

```text
/infinite-title-generator/
/frago-dossier/
/project-x/
/project-y/
```

以及自定义 `404.html`。当前不实现聚合逻辑，仅保持结构清晰。

## 开发

```bash
pnpm install   # 安装依赖
pnpm dev       # 本地开发
pnpm build     # 生成路由树 + 类型检查 + 构建
```

## 部署

推送到 `main` 触发 `.github/workflows/deploy.yml`（GitHub Pages）。

> 前置要求：仓库 Settings → Pages → Source 选择 **GitHub Actions**；自定义域 `lab.salta.top` 已在 DNS 与 Pages 中配置。
