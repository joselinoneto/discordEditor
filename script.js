// Discord Rich Text Editor
class DiscordEditor {
    constructor() {
        this.editor = document.getElementById('editor');
        this.markdownOutput = document.getElementById('markdown-text');
        this.embedOutput = document.getElementById('embed-json');
        this.preview = document.getElementById('preview-content');
        this.toast = document.getElementById('toast');
        
        this.embedTitle = document.getElementById('embed-title');
        this.embedColor = document.getElementById('embed-color');
        this.embedColorHex = document.getElementById('embed-color-hex');
        this.embedAuthor = document.getElementById('embed-author');
        this.embedFooter = document.getElementById('embed-footer');
        
        this.init();
    }

    init() {
        // Editor event listeners
        this.editor.addEventListener('input', () => this.updateOutputs());
        this.editor.addEventListener('paste', () => {
            setTimeout(() => this.updateOutputs(), 10);
        });

        // Toolbar buttons
        document.querySelectorAll('.tool-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const format = btn.getAttribute('data-format');
                this.applyFormat(format);
            });
        });

        // Keyboard shortcuts
        this.editor.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                switch(e.key.toLowerCase()) {
                    case 'b':
                        e.preventDefault();
                        this.applyFormat('bold');
                        break;
                    case 'i':
                        e.preventDefault();
                        this.applyFormat('italic');
                        break;
                    case 'u':
                        e.preventDefault();
                        this.applyFormat('underline');
                        break;
                }
            }
        });

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const tab = btn.getAttribute('data-tab');
                this.switchTab(tab);
            });
        });

        // Copy buttons
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-target');
                this.copyToClipboard(target);
            });
        });

        // Embed config listeners
        this.embedTitle.addEventListener('input', () => this.updateOutputs());
        this.embedAuthor.addEventListener('input', () => this.updateOutputs());
        this.embedFooter.addEventListener('input', () => this.updateOutputs());
        
        this.embedColor.addEventListener('input', (e) => {
            this.embedColorHex.value = e.target.value.toUpperCase();
            this.updateOutputs();
        });
        
        this.embedColorHex.addEventListener('input', (e) => {
            let hex = e.target.value;
            if (hex.match(/^#[0-9A-Fa-f]{6}$/)) {
                this.embedColor.value = hex;
                this.updateOutputs();
            }
        });

        // Initial update
        this.updateOutputs();
    }

    applyFormat(format) {
        const start = this.editor.selectionStart;
        const end = this.editor.selectionEnd;
        const text = this.editor.value;
        const selectedText = text.substring(start, end) || 'text';

        let formattedText = '';
        let cursorOffset = 0;

        switch(format) {
            case 'bold':
                formattedText = `**${selectedText}**`;
                cursorOffset = 2;
                break;
            case 'italic':
                formattedText = `*${selectedText}*`;
                cursorOffset = 1;
                break;
            case 'underline':
                formattedText = `__${selectedText}__`;
                cursorOffset = 2;
                break;
            case 'strikethrough':
                formattedText = `~~${selectedText}~~`;
                cursorOffset = 2;
                break;
            case 'code':
                formattedText = `\`${selectedText}\``;
                cursorOffset = 1;
                break;
            case 'codeblock':
                formattedText = `\`\`\`\n${selectedText}\n\`\`\``;
                cursorOffset = 4;
                break;
            case 'spoiler':
                formattedText = `||${selectedText}||`;
                cursorOffset = 2;
                break;
            case 'quote':
                formattedText = `> ${selectedText}`;
                cursorOffset = 2;
                break;
            case 'blockquote':
                formattedText = `>>> ${selectedText}`;
                cursorOffset = 4;
                break;
            case 'header1':
                formattedText = `# ${selectedText}`;
                cursorOffset = 2;
                break;
            case 'header2':
                formattedText = `## ${selectedText}`;
                cursorOffset = 3;
                break;
            case 'header3':
                formattedText = `### ${selectedText}`;
                cursorOffset = 4;
                break;
            case 'list':
                formattedText = `- ${selectedText}`;
                cursorOffset = 2;
                break;
            case 'link':
                const url = prompt('Enter URL:', 'https://');
                if (url) {
                    formattedText = `[${selectedText}](${url})`;
                    cursorOffset = 1;
                } else {
                    return;
                }
                break;
        }

        const newText = text.substring(0, start) + formattedText + text.substring(end);
        this.editor.value = newText;

        // Set cursor position
        if (selectedText === 'text') {
            this.editor.setSelectionRange(start + cursorOffset, start + cursorOffset + 4);
        } else {
            this.editor.setSelectionRange(start + formattedText.length, start + formattedText.length);
        }

        this.editor.focus();
        this.updateOutputs();
    }

    updateOutputs() {
        const text = this.editor.value;
        
        // Update markdown output
        this.markdownOutput.textContent = text || 'Your Discord markdown will appear here...';
        
        // Update embed JSON
        this.updateEmbedJSON(text);
        
        // Update preview
        this.updatePreview(text);
    }

    updateEmbedJSON(text) {
        const embed = {
            embeds: [{
                description: text || "Your content here"
            }]
        };

        // Add optional fields
        if (this.embedTitle.value.trim()) {
            embed.embeds[0].title = this.embedTitle.value.trim();
        }

        if (this.embedAuthor.value.trim()) {
            embed.embeds[0].author = {
                name: this.embedAuthor.value.trim()
            };
        }

        if (this.embedFooter.value.trim()) {
            embed.embeds[0].footer = {
                text: this.embedFooter.value.trim()
            };
        }

        // Convert hex color to decimal
        const hexColor = this.embedColorHex.value.replace('#', '');
        const decimalColor = parseInt(hexColor, 16);
        embed.embeds[0].color = decimalColor;

        this.embedOutput.textContent = JSON.stringify(embed, null, 2);
    }

    updatePreview(text) {
        if (!text) {
            this.preview.innerHTML = 'Your formatted text will appear here...';
            return;
        }

        let html = this.parseDiscordMarkdown(text);
        this.preview.innerHTML = html;
    }

    parseDiscordMarkdown(text) {
        // Escape HTML
        text = text.replace(/&/g, '&amp;')
                   .replace(/</g, '&lt;')
                   .replace(/>/g, '&gt;');

        // Code blocks (must be done first)
        text = text.replace(/```([^`]+)```/g, '<pre><code>$1</code></pre>');

        // Inline code
        text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

        // Bold + Italic
        text = text.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
        text = text.replace(/__\*(.+?)\*__/g, '<u><em>$1</em></u>');
        text = text.replace(/\*\*__(.+?)__\*\*/g, '<strong><u>$1</u></strong>');

        // Bold
        text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

        // Italic
        text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
        text = text.replace(/_(.+?)_/g, '<em>$1</em>');

        // Underline
        text = text.replace(/__(.+?)__/g, '<u>$1</u>');

        // Strikethrough
        text = text.replace(/~~(.+?)~~/g, '<s>$1</s>');

        // Spoiler
        text = text.replace(/\|\|(.+?)\|\|/g, '<span class="spoiler">$1</span>');

        // Headers
        text = text.replace(/^### (.+)$/gm, '<h3>$1</h3>');
        text = text.replace(/^## (.+)$/gm, '<h2 style="font-size: 1.3em; font-weight: bold;">$1</h2>');
        text = text.replace(/^# (.+)$/gm, '<h1 style="font-size: 1.5em; font-weight: bold;">$1</h1>');

        // Block quotes
        text = text.replace(/^>>> (.+)$/gm, '<blockquote>$1</blockquote>');
        text = text.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');

        // Lists
        text = text.replace(/^- (.+)$/gm, '• $1');
        text = text.replace(/^\* (.+)$/gm, '• $1');
        text = text.replace(/^\+ (.+)$/gm, '• $1');

        // Links
        text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" style="color: #00b0f4; text-decoration: none;">$1</a>');

        // Line breaks
        text = text.replace(/\n/g, '<br>');

        return text;
    }

    switchTab(tab) {
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-tab') === tab);
        });

        // Update panels
        document.querySelectorAll('.output-panel').forEach(panel => {
            panel.classList.toggle('active', panel.id === `${tab}-output`);
        });
    }

    async copyToClipboard(target) {
        let textToCopy = '';
        let message = 'Copied to clipboard!';

        if (target === 'markdown') {
            textToCopy = this.editor.value;
            message = 'Discord markdown copied!';
        } else if (target === 'embed') {
            textToCopy = this.embedOutput.textContent;
            message = 'Embed JSON copied!';
        }

        try {
            await navigator.clipboard.writeText(textToCopy);
            this.showToast(message);
        } catch (err) {
            // Fallback for older browsers
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            this.showToast(message);
        }
    }

    showToast(message) {
        const toastMessage = document.getElementById('toast-message');
        toastMessage.textContent = message;
        this.toast.classList.add('show');

        setTimeout(() => {
            this.toast.classList.remove('show');
        }, 3000);
    }
}

// Initialize the editor when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new DiscordEditor();
});

