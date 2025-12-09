# Images Folder

Place your images here for the landing page.

## Recommended Images

### 1. Logo/Favicon
- `logo.svg` or `logo.png` - Main Klokd logo (square, transparent background)
- `favicon.ico` - Browser favicon (16x16, 32x32, 48x48)

### 2. Dashboard Screenshots
- `dashboard-hero.png` - Main dashboard screenshot for hero section (1200x800px recommended)
- `analytics-screenshot.png` - Analytics view
- `focus-mode-screenshot.png` - Focus mode activated
- `usage-limits-screenshot.png` - Usage limits interface

### 3. Feature Images (Optional)
- `feature-blocking.png`
- `feature-analytics.png`
- `feature-focus.png`

### 4. Social Media
- `og-image.png` - Open Graph image for social sharing (1200x630px)
- `twitter-card.png` - Twitter card image (1200x600px)

## Image Optimization Tips

1. **Use WebP format** when possible for better compression
2. **Optimize PNGs** with tools like TinyPNG or ImageOptim
3. **Provide retina versions** (@2x) for crisp displays
4. **Lazy load images** below the fold for faster page load
5. **Add alt text** for accessibility and SEO

## Example Usage in HTML

```html
<!-- Basic image -->
<img src="images/logo.png" alt="Klokd Logo" width="200" height="200">

<!-- Responsive image with srcset -->
<img
  src="images/dashboard.png"
  srcset="images/dashboard@2x.png 2x"
  alt="Klokd Dashboard"
  loading="lazy"
>

<!-- Background image in CSS -->
.hero {
  background-image: url('../images/hero-bg.png');
}
```

## Current Status

✅ Folder created and ready for images
⏳ Add your actual product screenshots here
⏳ Generate social media preview images
⏳ Create and add favicon
