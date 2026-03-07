# myPAGEgo - 个人导航页

一个简洁美观、高度可自定义的个人导航页，基于 Vue3 + TypeScript + Vite 构建。

## ✨ 特性

- 🎨 **配置文件驱动**：所有展示内容通过 JSON 文件管理，无需修改代码
- 📱 **响应式设计**：完美适配手机、平板、PC、智能手表等各种设备
- 🚀 **自动化部署**：支持 GitHub + Cloudflare Pages 自动构建
- 💻 **现代技术栈**：Vue 3 + TypeScript + Vite
- 🎯 **简洁优雅**：精心设计的 UI，支持自定义背景图和主题

## 📁 项目结构

```
myPAGEgo/
├── yours/                 # 用户配置文件目录（重要！）
│   ├── config.json        # 站点配置
│   ├── text.json          # 个人介绍文字
│   ├── links.json         # 链接列表
│   ├── icon.png           # 网站图标（可选）
│   ├── my.jpg             # 头像图片（可选）
│   └── background.jpg     # 背景图片（可选）
├── codes/                 # 项目源代码
│   ├── src/
│   │   ├── api/           # 数据获取服务
│   │   ├── components/    # Vue 组件
│   │   ├── types/         # TypeScript 类型定义
│   │   ├── App.vue        # 主应用组件
│   │   ├── main.ts        # 入口文件
│   │   └── style.css      # 全局样式
│   ├── public/            # 静态资源
│   ├── index.html         # HTML 模板
│   └── package.json       # 项目依赖
└── README.md              # 项目文档
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/your-username/myPAGEgo.git
cd myPAGEgo
```

### 2. 安装依赖

```bash
cd codes
npm install
```

### 3. 本地开发

```bash
npm run dev
```

访问 `http://localhost:5173` 查看效果。

### 4. 构建生产版本

```bash
npm run build
```

构建产物输出到 `codes/dist` 目录。

## ⚙️ 配置说明

### 配置站点信息 (`yours/config.json`)

```json
{
  "title": "我的个人导航",
  "description": "这里是我的个人空间，欢迎访问",
  "avatarUrl": "/yours/my.jpg",
  "backgroundUrl": "/yours/background.jpg",
  "faviconUrl": "/yours/icon.png"
}
```

**字段说明：**
- `title`: 页面标题（浏览器标签页显示）
- `description`: 页面描述（SEO 优化）
- `avatarUrl`: 头像图片 URL（支持外部链接或本地路径）
- `backgroundUrl`: 背景图片 URL（支持外部链接或本地路径）
- `faviconUrl`: 网站图标 URL

### 配置个人介绍 (`yours/text.json`)

支持两种格式：

**格式 1：对象格式（推荐）**
```json
{
  "content": "你好，我是张三\n热爱编程和摄影\n欢迎来到我的个人空间"
}
```

**格式 2：纯字符串**
```json
"你好，我是张三\n热爱编程和摄影"
```

**提示：** 使用 `\n` 进行换行。

### 配置链接列表 (`yours/links.json`)

```json
[
  {
    "title": "个人博客",
    "url": "https://blog.example.com",
    "icon": "📝",
    "target": "_blank"
  },
  {
    "title": "GitHub",
    "url": "https://github.com/username",
    "icon": "https://github.githubassets.com/favicon.ico",
    "target": "_blank"
  }
]
```

**字段说明：**
- `title`: 链接标题（必填）
- `url`: 链接地址（必填）
- `icon`: 图标（可选），支持 Emoji 或图片 URL
- `target`: 打开方式（可选），`_blank`（新窗口）或 `_self`（当前窗口），默认 `_blank`

### 添加图片资源

将图片文件放入 `yours/` 目录：

- `icon.png`: 网站图标（建议 32x32 或 64x64）
- `my.jpg`: 个人头像（建议正方形，如 200x200）
- `background.jpg`: 背景图片（建议 1920x1080 或更大）

然后在 `config.json` 中引用：

```json
{
  "avatarUrl": "/yours/my.jpg",
  "backgroundUrl": "/yours/background.jpg",
  "faviconUrl": "/yours/icon.png"
}
```

## 🌐 部署指南

### 使用 Cloudflare Pages 部署

1. **推送代码到 GitHub**

   确保你的仓库包含 `yours/` 目录和所有配置文件。

2. **在 Cloudflare 中创建 Pages 项目**

   - 访问 [Cloudflare Pages](https://pages.cloudflare.com/)
   - 点击 "Create a project"
   - 选择你的 GitHub 仓库

3. **配置构建设置**

   - **Framework preset**: `Vite`
   - **Build command**: `cd codes && npm install && npm run build`
   - **Build output directory**: `codes/dist`
   - **Root directory**: 保持默认

4. **部署**

   点击 "Save and Deploy"，Cloudflare Pages 会自动构建并部署你的网站。

5. **自定义域名（可选）**

   在 Cloudflare Pages 设置中添加自定义域名。

### 自动化更新

每次你修改 `yours/` 目录下的配置文件并推送到 GitHub 时，Cloudflare Pages 会自动重新构建和部署，无需手动操作。

## 🎨 自定义样式

如需修改主题色或样式，可编辑以下文件：

- `codes/src/style.css`: 全局样式
- `codes/src/App.vue`: 主容器样式
- `codes/src/components/*.vue`: 各组件样式

## 📱 响应式断点

- **PC**: > 1024px（内容宽度限制为 800px，居中显示）
- **平板**: 600px - 1024px（适当调整元素大小）
- **手机**: < 600px（头像 80px，字体缩小）
- **手表/极小屏**: < 300px（进一步缩小元素）

## 🔧 开发指南

### 添加新组件

在 `codes/src/components/` 目录下创建新的 `.vue` 文件。

### 类型定义

在 `codes/src/types/index.ts` 中添加或修改 TypeScript 接口。

### API 服务

在 `codes/src/api/index.ts` 中封装数据获取逻辑。

## 📝 常见问题

### Q: 为什么图片不显示？

A: 检查图片路径是否正确。本地图片应放在 `yours/` 目录，并使用 `/yours/文件名` 的路径格式。

### Q: 如何禁用背景图？

A: 在 `config.json` 中删除或不设置 `backgroundUrl` 字段，将使用默认的渐变色背景。

### Q: 链接无法点击？

A: 确保 `links.json` 中的 `url` 字段包含完整的协议（如 `https://`）。

## 📄 许可证

MIT License

## 🙏 致谢

感谢所有使用和支持本项目的开发者！

---

**Happy Coding! 🎉**
