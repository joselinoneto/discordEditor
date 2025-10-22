# Discord Rich Text Editor

A simple web-based rich text editor for creating Discord-formatted messages using standard markdown syntax. Format your text with ease and copy it directly to Discord!

## 🌟 Features

- **Markdown-Based**: Uses standard markdown syntax for Discord formatting
- **Live Preview**: See exactly how your text will look in Discord in real-time
- **Simple Interface**: Clean, easy-to-use editor with toolbar buttons
- **Copy to Clipboard**: One-click copying of formatted markdown
- **No Dependencies**: Pure HTML/CSS/JavaScript - works offline

## 🚀 Getting Started

### Download and Install

1. **Download the project**:
   - Go to the GitHub repository
   - Click the "Code" button
   - Select "Download ZIP"
   - Extract the ZIP file to your desired location

2. **Open the editor**:
   - Navigate to the extracted folder
   - Double-click `index.html` to open it in your default web browser
   - Alternatively, right-click `index.html` and select "Open with" → your preferred browser

### Optional: Using Python Web Server

For the best experience, you can serve the files using Python's built-in web server:

```bash
# Navigate to the project folder in terminal/command prompt
cd /path/to/discordEditor

# Start the web server (Python 3)
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

### Quick Start

1. Start typing or paste your content into the editor
2. Use the toolbar buttons to format your text
3. Copy the markdown output and paste it into Discord!

## 📝 How to Use

### Formatting Text

This editor uses standard markdown syntax that Discord supports. You can format text in two ways:

#### Method 1: Toolbar Buttons
Click any toolbar button to apply formatting to selected text:

- **Bold**: `**text**` → **text**
- **Italic**: `*text*` → *text*
- **Underline**: `__text__` → __text__
- **Strikethrough**: `~~text~~` → ~~text~~
- **Inline Code**: `` `text` `` → `text`
- **Code Block**: ` ```text``` ` → ```text```
- **Spoiler**: `||text||` → ||spoiler||
- **Quote**: `> text` → > quote
- **Block Quote**: `>>> text` → >>> block quote
- **Headers**: `# H1`, `## H2`, `### H3`
- **List**: `- item` → • item
- **Link**: `[text](url)` → [text](url)

#### Method 2: Type Markdown Directly
You can also type the markdown syntax directly in the editor:

1. Type your content using markdown syntax
2. The live preview will show how it will appear in Discord
3. Copy the formatted text and paste it into Discord

#### Keyboard Shortcuts
- **Ctrl/Cmd + B**: Bold
- **Ctrl/Cmd + I**: Italic
- **Ctrl/Cmd + U**: Underline

## 🎨 Markdown Formatting Reference

This editor supports standard markdown syntax that Discord recognizes:

| Format | Syntax | Example |
|--------|--------|---------|
| Bold | `**text**` | **text** |
| Italic | `*text*` or `_text_` | *text* |
| Underline | `__text__` | __text__ |
| Strikethrough | `~~text~~` | ~~text~~ |
| Inline Code | `` `text` `` | `text` |
| Code Block | ` ```text``` ` | ```text``` |
| Spoiler | `\|\|text\|\|` | ||spoiler|| |
| Quote | `> text` | > quote |
| Block Quote | `>>> text` | >>> block quote |
| Header 1 | `# text` | # Large |
| Header 2 | `## text` | ## Medium |
| Header 3 | `### text` | ### Small |
| Bullet List | `- text` | • text |
| Link | `[text](url)` | [text](url) |

## 💡 Tips

1. **Combine Formats**: You can combine multiple formats, e.g., `***bold italic***`
2. **Code Blocks**: Add a language identifier for syntax highlighting: ` ```js code``` `
3. **Live Preview**: Watch the preview panel to see how your message will appear in Discord
4. **Save Your Work**: Copy your markdown to a text file to save formatted messages

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript**: No dependencies, no build process required
- **Modern Browser Required**: Uses ES6+ features and Clipboard API
- **Offline Compatible**: Works without an internet connection
- **Cross-Platform**: Works on Windows, Mac, and Linux

## 📱 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support  
- Safari: ✅ Full support
- Opera: ✅ Full support

## 🔗 Resources

- [Discord Markdown Documentation](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101)
- [Standard Markdown Guide](https://www.markdownguide.org/)

---

Made with ❤️ for the Discord community

