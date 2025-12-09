# 🚀 Klokd Landing Page - Deployment Guide

Quick guide to get your landing page live on the internet!

## 🎯 Fastest Deployment Options (Free)

### Option 1: Netlify (Recommended - 5 minutes)

**Why Netlify?**
- ✅ Free hosting
- ✅ Auto SSL certificate
- ✅ Custom domain support
- ✅ Automatic deployments from Git
- ✅ Form handling built-in

**Steps:**

1. **Create Netlify Account**
   - Go to https://netlify.com
   - Sign up with GitHub/GitLab/Email

2. **Deploy via Drag & Drop** (Easiest)
   - Login to Netlify
   - Drag the entire `klokd-landing` folder onto Netlify
   - Your site is live in seconds!
   - You'll get a URL like: `random-name-123.netlify.app`

3. **Deploy via Git** (Better for updates)
   ```bash
   cd klokd-landing
   git init
   git add .
   git commit -m "Initial commit"
   # Push to GitHub (create repo first)
   git remote add origin https://github.com/yourusername/klokd-landing.git
   git push -u origin main
   ```
   - In Netlify, click "New site from Git"
   - Connect to GitHub
   - Select your repo
   - Click Deploy!

4. **Custom Domain** (Optional)
   - In Netlify dashboard: Site settings → Domain management
   - Add your custom domain (e.g., `klokd.com`)
   - Update DNS records as shown
   - SSL auto-configured!

---

### Option 2: Vercel (Also Great - 5 minutes)

**Steps:**

1. **Sign up at https://vercel.com**
2. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   cd klokd-landing
   vercel
   ```
3. **Or use GitHub**
   - Push code to GitHub
   - Import project in Vercel dashboard
   - Deploy automatically

**Your site**: `klokd-landing.vercel.app`

---

### Option 3: GitHub Pages (Free)

**Steps:**

1. **Push to GitHub**
   ```bash
   cd klokd-landing
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/klokd-landing.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Source: Deploy from main branch
   - Save

**Your site**: `yourusername.github.io/klokd-landing`

---

### Option 4: Cloudflare Pages (Free + Fast CDN)

**Steps:**

1. **Sign up at https://pages.cloudflare.com**
2. **Connect GitHub repo**
3. **Deploy**
4. **Bonus**: Super fast global CDN

---

## 💳 Adding Payment Integration

### Stripe Checkout (Recommended)

1. **Create Stripe Account**
   - https://stripe.com

2. **Create Product**
   - Dashboard → Products → Add Product
   - Name: Klokd Complete Edition
   - Price: $14.99 one-time

3. **Create Payment Link**
   - Products → Your Product → Create payment link
   - Copy the link

4. **Update HTML**
   ```html
   <!-- Replace button hrefs in index.html -->
   <a href="https://buy.stripe.com/YOUR_LINK_HERE" class="btn btn-primary btn-large">
     Get Klokd Now - $14.99 →
   </a>
   ```

### Alternative: Gumroad (Easier)

1. **Sign up at https://gumroad.com**
2. **Create product for $14.99**
3. **Get product link**
4. **Replace button hrefs with Gumroad link**

### Alternative: LemonSqueezy

1. **Sign up at https://lemonsqueezy.com**
2. **Create product**
3. **Update button links**

---

## 📊 Adding Analytics

### Google Analytics

```html
<!-- Add before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible (Privacy-friendly, Recommended)

```html
<!-- Add before </head> in index.html -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 🎨 Before Going Live Checklist

- [ ] **Replace payment button links** with real Stripe/Gumroad links
- [ ] **Add real screenshots** of your app in `images/` folder
- [ ] **Update domain** in analytics script
- [ ] **Add favicon** (create one at https://favicon.io)
- [ ] **Create `robots.txt`**:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://yourdomain.com/sitemap.xml
  ```
- [ ] **Create `sitemap.xml`** (use https://www.xml-sitemaps.com)
- [ ] **Add Open Graph tags** for social sharing:
  ```html
  <meta property="og:title" content="Klokd - Take Control of Your Screen Time">
  <meta property="og:description" content="Stop endless scrolling. Block distractions. $14.99 one-time.">
  <meta property="og:image" content="https://yourdomain.com/images/og-image.png">
  <meta property="og:url" content="https://yourdomain.com">
  <meta name="twitter:card" content="summary_large_image">
  ```
- [ ] **Test on mobile devices**
- [ ] **Check loading speed** (https://pagespeed.web.dev)
- [ ] **Set up email** (support@yourdomain.com)
- [ ] **Create Privacy Policy** (use https://getterms.io)
- [ ] **Create Terms of Service**
- [ ] **Set up domain email forwarding** (in domain registrar)

---

## 🌐 Custom Domain Setup

### Buy Domain (Recommended Registrars)

1. **Namecheap** - https://namecheap.com (~$10/year for .com)
2. **Cloudflare** - https://cloudflare.com (cheapest, at-cost pricing)
3. **Google Domains** - https://domains.google

### Connect to Netlify

1. **In Netlify**: Site settings → Domain management → Add custom domain
2. **Add DNS records** (Netlify will show you what to add):
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```
3. **Wait** (can take 1-48 hours for DNS propagation)
4. **SSL certificate auto-enabled** by Netlify

---

## 📈 SEO Optimization

1. **Submit to Google**
   - https://search.google.com/search-console
   - Add your domain
   - Submit sitemap

2. **Submit to Bing**
   - https://www.bing.com/webmasters

3. **Create Backlinks**
   - List on Product Hunt
   - Share on Reddit (r/productivity, r/selfimprovement)
   - Tweet about it
   - Write blog posts

---

## 🆘 Troubleshooting

### Site Not Loading
- Check if files are uploaded correctly
- Clear browser cache
- Check browser console for errors

### Payment Not Working
- Verify Stripe/Gumroad link is correct
- Test in incognito mode
- Check payment provider dashboard

### Slow Loading
- Optimize images (use https://tinypng.com)
- Enable Cloudflare CDN
- Minimize CSS/JS (if needed)

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Use https://dnschecker.org to verify
- Double-check DNS records

---

## 📞 Need Help?

- **Netlify Docs**: https://docs.netlify.com
- **Vercel Docs**: https://vercel.com/docs
- **Stripe Docs**: https://stripe.com/docs
- **Web.dev Guide**: https://web.dev

---

## 🎉 Next Steps After Launch

1. **Monitor Analytics** - See where visitors come from
2. **A/B Test Headlines** - Try different hero text
3. **Collect Emails** - Add email signup (Mailchimp, ConvertKit)
4. **Add Live Chat** - Crisp.chat or Intercom
5. **Create Content** - Blog about productivity, screen time
6. **Social Media** - Share on Twitter, LinkedIn
7. **Paid Ads** (optional) - Google Ads, Facebook Ads
8. **SEO** - Write content, build backlinks
9. **Email Marketing** - Send updates to subscribers
10. **Iterate** - Improve based on user feedback

---

**🚀 Ready to launch? Start with Netlify drag-and-drop - it's the fastest way!**

Good luck with your launch! 💚
