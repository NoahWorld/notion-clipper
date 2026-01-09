# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Step 1: Install the Extension

1. Open Chrome and go to `chrome://extensions/`
2. Enable **Developer mode** (top-right toggle)
3. Click **Load unpacked**
4. Select the `notion-clipper` folder
5. ✅ Extension installed!

### Step 2: Create Notion Integration

1. Visit [https://www.notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Click **+ New integration**
3. Name it "DevClip" (or anything you like)
4. Click **Submit**
5. Copy the **Internal Integration Token** (starts with `secret_`)
6. ✅ Keep this token safe!

### Step 3: Setup Your Database

1. Open Notion and create a new database (or use existing)
2. Add these properties (if not already present):
   - **Title** (title) - Auto-created
   - **URL** (url) - Click **+** → **URL**
   - **Tags** (multi-select) - Click **+** → **Multi-select**
3. Click the **...** menu (top-right of database)
4. Select **Add connections**
5. Choose your integration (e.g., "DevClip")
6. ✅ Database connected!

### Step 4: Get Database ID

Your database URL looks like this:
```
https://www.notion.so/workspace/abc123def456?v=...
                              ^^^^^^^^^^^^
                              This is your Database ID
```

Copy the part between the last `/` and the `?`

### Step 5: Configure Extension

1. Click the DevClip extension icon
2. Click the ⚙️ (settings) button
3. Paste your **API Token**
4. Paste your **Database ID**
5. Click **Test Connection** (should show success ✓)
6. Click **Save Settings**
7. ✅ All set!

### Step 6: Save Your First Page

1. Navigate to any webpage (e.g., a blog post)
2. Click the DevClip icon
3. (Optional) Add tags: `javascript, tutorial`
4. (Optional) Add notes
5. Click **Save to Notion**
6. ✅ Check your Notion database!

## 🎉 You're Done!

Now you can save any webpage to Notion with one click.

## 💡 Pro Tips

- Use descriptive tags for easy searching
- Add notes to remember why you saved something
- Code blocks are automatically extracted
- Works great with technical articles and documentation

## ❓ Need Help?

- Check the [README.md](README.md) for detailed documentation
- Report issues on [GitHub](https://github.com/NoahWorld/notion-clipper/issues)
- Email: resetshi@gmail.com
