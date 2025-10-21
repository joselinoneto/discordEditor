# Discord Rich Text Editor

A beautiful, modern web-based rich text editor designed specifically for creating Discord-formatted messages and embeds. Format your text with ease and copy it directly to Discord!

## 🌟 Features

- **Rich Text Editing**: Easy-to-use toolbar with all Discord formatting options
- **Live Preview**: See exactly how your text will look in Discord in real-time
- **Two Output Modes**:
  - **Discord Markdown**: Copy-paste directly into Discord messages
  - **Embed JSON**: Use with Discord webhooks or bots
- **Keyboard Shortcuts**: Fast formatting with familiar shortcuts
- **Modern UI**: Beautiful Discord-themed interface
- **Copy to Clipboard**: One-click copying for both markdown and JSON

## 🚀 Getting Started

### Quick Start

1. Open `index.html` in your web browser
2. Start typing or paste your content into the editor
3. Use the toolbar buttons to format your text
4. Copy the output and paste it into Discord!

### Using with a Local Server (Optional)

For the best experience, you can serve the files using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (npx http-server)
npx http-server -p 8000
```

Then open `http://localhost:8000` in your browser.

## 📝 How to Use

### Formatting Text

#### Toolbar Buttons
Click any toolbar button to apply formatting to selected text:

- **Bold** (Ctrl/Cmd + B): `**text**`
- **Italic** (Ctrl/Cmd + I): `*text*`
- **Underline** (Ctrl/Cmd + U): `__text__`
- **Strikethrough**: `~~text~~`
- **Inline Code**: `` `text` ``
- **Code Block**: ` ```text``` `
- **Spoiler**: `||text||`
- **Quote**: `> text`
- **Block Quote**: `>>> text`
- **Headers**: `# H1`, `## H2`, `### H3`
- **List**: `- item`
- **Link**: `[text](url)`

#### Keyboard Shortcuts
- **Ctrl/Cmd + B**: Bold
- **Ctrl/Cmd + I**: Italic
- **Ctrl/Cmd + U**: Underline

### Output Modes

#### Discord Markdown (For Regular Messages)
1. Type or format your content
2. Click the "Discord Markdown" tab
3. Click "Copy" to copy the markdown
4. Paste directly into any Discord text channel

#### Embed JSON (For Webhooks/Bots)
1. Type or format your content
2. Click the "Embed JSON" tab
3. Optionally configure:
   - Embed Title
   - Embed Color (use color picker or hex code)
   - Author Name
   - Footer Text
4. Click "Copy JSON"
5. Use this JSON with Discord webhooks or bot APIs

### Discord Webhook Example

If you're using the Embed JSON output with a Discord webhook:

```bash
curl -X POST "YOUR_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d @- << EOF
{
  "embeds": [{
    "title": "Your Title",
    "description": "**Your formatted text**",
    "color": 5793266,
    "author": {
      "name": "Author Name"
    },
    "footer": {
      "text": "Footer Text"
    }
  }]
}
EOF
```

## 🎨 Discord Formatting Reference

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

## 🎯 Use Cases

- **Content Creators**: Format announcements and updates
- **Community Managers**: Create professional-looking messages
- **Bot Developers**: Test embed designs before coding
- **Server Admins**: Design welcome messages and rules
- **Discord Users**: Make your messages stand out with proper formatting

## 💡 Tips

1. **Combine Formats**: You can combine multiple formats, e.g., `***bold italic***`
2. **Code Blocks**: Add a language identifier for syntax highlighting: ` ```js code``` `
3. **Embed Colors**: Use the color picker to match your server's branding
4. **Live Preview**: Watch the preview panel to see how your message will appear
5. **Save Your Work**: Copy your markdown to a text file to save formatted messages

## 🛠️ Technical Details

- **Pure HTML/CSS/JavaScript**: No dependencies, no build process
- **Modern Browser Required**: Uses ES6+ features and Clipboard API
- **Responsive Design**: Works on desktop and mobile devices
- **Offline Compatible**: Works without an internet connection (after initial load)

## 📱 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Opera: ✅ Full support

## 🤝 Contributing

Feel free to customize and enhance this editor for your needs!

## 📄 License

This project is open source and available for anyone to use and modify.

## 🔗 Resources

- [Discord Markdown Documentation](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101)
- [Discord Embed Documentation](https://discord.com/developers/docs/resources/channel#embed-object)
- [Discord Webhooks Guide](https://discord.com/developers/docs/resources/webhook)

---

Made with ❤️ for the Discord community

