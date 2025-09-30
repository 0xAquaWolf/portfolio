# MDX Documentation for 0xAquaWolf Portfolio

This documentation is based on the `content/posts/mdx-kitchen-sink.mdx` file and serves as a reference for creating blog posts.

## Frontmatter Structure

All MDX blog posts must start with frontmatter:

```yaml
---
title: Your Blog Post Title
date: '2024-05-01'
description: A brief description of your post
imageUrl: /images/png/your-featured-image.png
featured: true  # Set to true for featured posts
published: true # Set to false to hide from production
---
```

## Available MDX Features

### 1. Code Blocks with Syntax Highlighting

Basic code block:
```js
function example() {
  return "Hello World";
}
```

With line numbers:
```js showLineNumbers
function example() {
  return "Hello World";
}
```

With line highlighting:
```js {2-3} showLineNumbers
function example() {
  const message = "Hello World";
  return message;
}
```

With title and caption:
```js showLineNumbers {2-4} title="example.js" caption="Example function"
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}
```

### 2. Word Highlighting in Code

Highlight specific words or patterns:
```js /floatingStyles/
import { useFloating } from "@floating-ui/react";

function MyComponent() {
  const { refs, floatingStyles } = useFloating();
  return <div style={floatingStyles} />;
}
```

### 3. Language Support

The system supports many languages including:
- JavaScript/TypeScript: `js`, `jsx`, `ts`, `tsx`
- PHP: `php`
- CSS: `css`, `scss`
- HTML: `html`
- JSON: `json`
- Shell/Bash: `bash`, `sh`
- And many more...

### 4. ANSI Terminal Output

For terminal output with colors:
```ansi
\u001b[0;36m  vite v5.0.0\u001b[0;32m dev server running at:\u001b[0m

  > Local: \u001b[0;36mhttp://localhost:\u001b[0;36;1m3000\u001b[0;36m/\u001b[0m
  > Network: \u001b[0;2muse `--host` to expose\u001b[0m

  \u001b[0;36mready in 125ms.\u001b[0m
```

### 5. Inline Code with ANSI

Inline terminal output: `> Local: \u001b[0;36mhttp://localhost:\u001b[0;36;1m3000\u001b[0;36m/\u001b[0m{:ansi}`

### 6. Standard Markdown Elements

- **Bold text**
- *Italic text*
- Lists (ordered and unordered)
- Links: [Example Link](https://example.com)
- Images: ![Alt text](/path/to/image.png)
- Horizontal rules: `---`

### 7. Advanced Code Block Features

All meta string options can be combined:
```js showLineNumbers {2-4} title="advanced.js" /console/ caption="Advanced example with multiple features"
function complexFunction() {
  const data = "Important data";
  console.log(data);
  return data.toUpperCase();
}
```

## Best Practices for Blog Posts

### 1. File Naming
- Use kebab-case: `how-to-setup-laravel.mdx`
- Be descriptive and SEO-friendly
- Include technology keywords when relevant

### 2. Images
- Store in `/public/images/png/` or `/public/images/jpeg/`
- Use descriptive filenames
- Optimize for web (reasonable file sizes)

### 3. Content Structure
- Start with a clear introduction
- Use headings to break up content (`##`, `###`)
- Include code examples for technical posts
- End with a conclusion or call-to-action

### 4. SEO Considerations
- Write descriptive titles (60 characters or less)
- Create compelling descriptions (155 characters or less)
- Use relevant keywords naturally
- Include alt text for images

## Focus Areas for New Content

Given the career focus on PHP, WordPress, and Laravel, blog posts should cover:

### PHP Topics
- Modern PHP features and best practices
- PHP performance optimization
- PHP frameworks comparison
- Testing in PHP

### WordPress Topics
- Custom theme development
- Plugin development
- WordPress security
- Performance optimization
- Custom post types and fields
- Gutenberg block development

### Laravel Topics
- Laravel best practices
- Eloquent ORM tips
- Laravel API development
- Testing in Laravel
- Laravel deployment strategies
- Package development

### General Web Development
- Modern development workflows
- Database optimization
- Server administration
- DevOps practices
- Security considerations

## Example Blog Post Structure

```mdx
---
title: "Building Custom WordPress Blocks with PHP and JavaScript"
date: '2024-09-30'
description: "Learn how to create custom Gutenberg blocks for WordPress using PHP backend logic and modern JavaScript."
imageUrl: /images/png/wordpress-custom-blocks.png
featured: true
published: true
---

## Introduction

Brief introduction explaining what the post will cover...

## Prerequisites

- PHP 8.0+
- WordPress 6.0+
- Basic JavaScript knowledge

## Setting Up Your Development Environment

```bash
# Clone the starter theme
git clone https://github.com/example/wp-block-theme.git
cd wp-block-theme
npm install
```

## Creating Your First Custom Block

```php title="blocks/example-block/block.php"
<?php
function register_example_block() {
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'register_example_block');
```

## Frontend JavaScript

```jsx title="blocks/example-block/src/edit.js"
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    const blockProps = useBlockProps();
    return (
        <div {...blockProps}>
            <p>Your custom block content here</p>
        </div>
    );
}
```

## Conclusion

Wrap up the post with key takeaways and next steps...
```

This documentation should serve as your reference when creating new blog posts focused on PHP, WordPress, Laravel, and modern web development practices.