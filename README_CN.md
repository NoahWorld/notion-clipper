# DevClip for Notion

[English](README.md) | 简体中文

一个专为开发者设计的 Chrome 扩展，用于一键保存网页、文章和代码片段到 Notion。

## ✨ 功能特性

- **一键保存** - 将任何网页即时保存到你的 Notion 数据库
- **代码识别** - 自动提取并格式化代码块
- **自定义标签** - 添加标签便于组织管理
- **笔记支持** - 保存前添加你自己的笔记
- **隐私优先** - API 令牌仅存储在本地，无外部服务器
- **简洁界面** - 简单直观的用户界面
- **多语言支持** - 支持 9 种语言（英语、简体中文、繁体中文、日语、韩语、西班牙语、葡萄牙语、印地语、阿拉伯语）

## 🚀 安装方法

### 从源码安装

1. 克隆或下载此仓库
2. 打开 Chrome 浏览器，访问 `chrome://extensions/`
3. 开启右上角的**开发者模式**
4. 点击**加载已解压的扩展程序**，选择 `notion-clipper` 文件夹
5. 扩展图标将出现在工具栏中

## ⚙️ 设置

### 1. 创建 Notion Integration

1. 访问 [Notion Integrations](https://www.notion.so/my-integrations)
2. 点击 **+ New integration**
3. 给它起个名字（例如 "DevClip"）
4. 复制 **Internal Integration Token**（以 `secret_` 开头）

### 2. 准备你的 Notion 数据库

1. 在 Notion 中创建一个新数据库（或使用现有的）
2. 确保它有以下属性：
   - **Title**（标题类型）- 必需
   - **URL**（url 类型）- 可选但推荐
   - **Tags**（多选类型）- 可选
3. 点击 **...** 菜单 → **Add connections** → 选择你的 integration
4. 从 URL 复制数据库 ID：
   ```
   https://notion.so/your-workspace/DATABASE_ID?v=...
                                    ^^^^^^^^^^^^
   ```

### 3. 配置扩展

1. 点击扩展图标
2. 点击 ⚙️ 设置按钮
3. 粘贴你的 **API Token**
4. 粘贴你的 **Database ID**
5. 点击 **测试连接** 验证
6. 点击 **保存设置**

## 📖 使用方法

1. 访问任何你想保存的网页
2. 点击 DevClip 扩展图标
3. （可选）添加标签：`javascript, 教程, react`
4. （可选）添加笔记
5. 点击 **保存到 Notion**
6. 完成！页面现在已在你的 Notion 数据库中

## 🎯 适用场景

- 保存技术文章和教程
- 收藏 Stack Overflow 解决方案
- 收集代码示例
- 研究和学习
- 构建个人知识库

## 🔒 隐私保护

- 你的 API 令牌仅存储在浏览器本地
- 数据不会发送到外部服务器（除了 Notion API）
- 无跟踪或分析
- 开源 - 你可以验证代码

## 🛠️ 技术细节

- 使用 Manifest V3 构建
- 使用 Notion API v2022-06-28
- 所需权限最少
- 无外部依赖

## 📝 Notion 数据库结构

为获得最佳效果，创建一个包含以下属性的数据库：

| 属性 | 类型 | 必需 |
|----------|------|----------|
| Title | 标题 | 是 |
| URL | URL | 推荐 |
| Tags | 多选 | 可选 |
| Created | 创建时间 | 可选 |

## 🐛 故障排除

**"连接失败"错误：**
- 验证你的 API 令牌是否正确
- 确保你已将 integration 连接到数据库
- 检查数据库 ID 是否正确

**"保存失败"错误：**
- 确保数据库有 Title 属性
- 验证 integration 有写入权限
- 检查你的网络连接

## 🤝 贡献

欢迎贡献！随时：
- 报告 bug
- 建议功能
- 提交 pull request

## 📄 许可证

MIT 许可证 - 免费开源

## 🔗 链接

- **仓库**: https://github.com/NoahWorld/notion-clipper
- **问题**: https://github.com/NoahWorld/notion-clipper/issues
- **Notion API 文档**: https://developers.notion.com/

---

用 ❤️ 为开发者打造
