# DevClip for Notion

English | [简体中文](README_CN.md)

A developer-focused Chrome extension for saving web pages, articles, and code snippets to Notion with one click.

## ✨ Features

- **One-Click Save** - Save any webpage to your Notion database instantly
- **Code Detection** - Automatically extracts and formats code blocks
- **Custom Tags** - Add tags for easy organization
- **Notes Support** - Add your own notes before saving
- **Privacy First** - Your API token stays local, no external servers
- **Clean UI** - Simple and intuitive interface

## 🚀 Installation

### From Source

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top-right)
4. Click **Load unpacked** and select the `notion-clipper` folder
5. The extension icon will appear in your toolbar

## ⚙️ Setup

### 1. Create a Notion Integration

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click **+ New integration**
3. Give it a name (e.g., "DevClip")
4. Copy the **Internal Integration Token** (starts with `secret_`)

### 2. Prepare Your Notion Database

1. Create a new database in Notion (or use existing one)
2. Make sure it has these properties:
   - **Title** (title type) - Required
   - **URL** (url type) - Optional but recommended
   - **Tags** (multi-select type) - Optional
3. Click **...** menu → **Add connections** → Select your integration
4. Copy the database ID from the URL:
   ```
   https://notion.so/your-workspace/DATABASE_ID?v=...
                                    ^^^^^^^^^^^^
   ```

### 3. Configure the Extension

1. Click the extension icon
2. Click the ⚙️ settings button
3. Paste your **API Token**
4. Paste your **Database ID**
5. Click **Test Connection** to verify
6. Click **Save Settings**

## 📖 Usage

1. Navigate to any webpage you want to save
2. Click the DevClip extension icon
3. (Optional) Add tags: `javascript, tutorial, react`
4. (Optional) Add notes
5. Click **Save to Notion**
6. Done! The page is now in your Notion database

## 🎯 Perfect For

- Saving technical articles and tutorials
- Bookmarking Stack Overflow solutions
- Collecting code examples
- Research and learning
- Building a personal knowledge base

## 🔒 Privacy

- Your API token is stored locally in your browser
- No data is sent to external servers (except Notion API)
- No tracking or analytics
- Open source - you can verify the code

## 🛠️ Technical Details

- Built with Manifest V3
- Uses Notion API v2022-06-28
- Minimal permissions required
- No external dependencies

## 📝 Notion Database Schema

For best results, create a database with these properties:

| Property | Type | Required |
|----------|------|----------|
| Title | Title | Yes |
| URL | URL | Recommended |
| Tags | Multi-select | Optional |
| Created | Created time | Optional |

## 🐛 Troubleshooting

**"Connection failed" error:**
- Verify your API token is correct
- Make sure you've connected the integration to your database
- Check that the database ID is correct

**"Failed to save" error:**
- Ensure the database has a Title property
- Verify the integration has write permissions
- Check your internet connection

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - Free and open source

## 🔗 Links

- **Repository**: https://github.com/NoahWorld/notion-clipper
- **Issues**: https://github.com/NoahWorld/notion-clipper/issues
- **Notion API Docs**: https://developers.notion.com/

---

Made with ❤️ for developers
