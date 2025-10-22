# 🚀 Auren Frontend - Setup Guide

## ✅ What's Been Built

A **single-page scrolling website** with all sections from your screenshots, using:

- **Apple Glassmorphism Design** - Frosted glass effects throughout
- **Header_Video_Final.mp4** - Background video throughout
- **Framer Motion** - Scroll-triggered animations
- **Tailwind CSS** - Utility-first styling
- **Next.js 14** - Latest React framework

## 📜 How It Works

**One Page, Scroll Down!**

Instead of separate pages, everything is on **one scrolling page** at `/`:

```
Scroll Down ↓
├── Hero Section ("Make it here. Share it everywhere.")
├── Showcase ("Already made with Auren")
├── Operational ("Make it operational")
├── Brand ("Ready to start your brand?")
├── Create (AI chat input)
├── Result ("Here's what you made" + OAuth)
├── Final CTA ("Make with Auren")
└── Footer (Links + Newsletter)
```

## 🎨 Scroll Animation Features

- **`whileInView`** - Elements animate when scrolled into view
- **`viewport={{ once: true }}`** - Animations trigger only once
- **Smooth scroll** - Click buttons to smoothly scroll to sections
- **Fade & slide** - Content fades in and slides up on scroll
- **Glass effects** - Backdrop blur throughout

## 🚀 Installation

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Visit & Scroll
Visit: **http://localhost:3000**

Then **scroll down** to see all sections animate in!

## 🎯 Sections Breakdown

### Section 1: Hero
- Large heading with tagline
- "Get Started" button
- Scroll indicator
- **Triggers**: Fades in on load

### Section 2: Showcase  
- Product grid (3 cards)
- "Already made with Auren"
- **Triggers**: Animates when scrolled into view

### Section 3: Operational
- Split layout (text + features)
- 5 feature items
- **Triggers**: Slides in from left/right on scroll

### Section 4: Brand
- "Ready to start your brand?"
- Custom design card
- **Triggers**: Slides in on scroll

### Section 5: Create
- AI chat input
- "Now, make it real."
- **Triggers**: Scales up on scroll

### Section 6: Result
- Product preview
- OAuth sign-in buttons
- **Triggers**: Multiple animations on scroll

### Section 7: Final CTA
- Simple call to action
- "Make with Auren"
- **Triggers**: Fades in

### Section 8: Footer
- 4-column layout
- Links and newsletter
- **Always visible** at bottom

## 🎬 Video Background

The `VideoBackground` component:
- Plays behind all content
- Fixed position
- Auto-plays and loops
- Covers entire viewport
- Subtle overlay for readability

## 📱 Responsive Design

All sections adapt to mobile:
- `md:` breakpoint at 768px
- Stacked layouts on mobile
- Adjusted font sizes
- Touch-friendly buttons

## 🛠️ Customization

### Adjust Scroll Animation Speed
```tsx
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }} // ← Change duration
```

### Change Glass Effect
```tsx
className="backdrop-blur-2xl bg-white/10"
//         ↑ blur         ↑ transparency
```

### Smooth Scroll to Section
```tsx
onClick={() => document.getElementById('section-id')?.scrollIntoView({ behavior: 'smooth' })}
```

## ✨ Key Features

✅ **Single-page layout** - No route changes  
✅ **Scroll animations** - Content appears on scroll  
✅ **Smooth scrolling** - Native smooth scroll behavior  
✅ **Glass morphism** - Apple-style UI throughout  
✅ **Video background** - Full-screen video  
✅ **Responsive** - Mobile & desktop  
✅ **All buttons work** - Functional CTAs  
✅ **Footer included** - Full footer with links  

## 🐛 Troubleshooting

**Animations not triggering?**
- Make sure you're scrolling down
- Check browser supports Intersection Observer
- Try refreshing the page

**Video not playing?**
- Ensure `Header_Video_Final.mp4` is in `public/`
- Check browser console for errors
- Try different browser

**Scroll feels jerky?**
- Disable browser extensions
- Check CPU usage
- Try reducing `backdrop-blur` amount

## 🚀 Build for Production

```bash
# Build
npm run build

# Start production server
npm start
```

## 📝 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── globals.css         # Global styles
│   └── page.tsx            # ✨ Single scrolling page
│
└── components/
    ├── VideoBackground.tsx # Video background
    └── Navigation.tsx      # Top nav bar
```

## 🎯 Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ Visit http://localhost:3000
4. ✅ **Scroll down** to see all sections!
5. 🎨 Customize text/colors as needed
6. 🔌 Connect to backend when ready

---

**Everything is on one page - just scroll down!** 🎉
