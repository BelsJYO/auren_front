# Auren Frontend

**Complete 8-page user flow** with Apple glassmorphism design, built with Next.js 14, Framer Motion, and Tailwind CSS.

## 🎯 What's Built

✅ **8 Complete Pages** - Full user journey from landing to checkout  
✅ **Apple Glassmorphism** - Frosted glass effects throughout  
✅ **Video Background** - Full-screen video on all pages  
✅ **Smooth Animations** - Framer Motion transitions  
✅ **Fully Responsive** - Mobile + Desktop layouts  
✅ **Contact Form** - Popup form sending to team@auren.co  
✅ **AI Chat Interface** - Custom product generation  
✅ **Product Catalog** - Filterable product grid  
✅ **Design Canvas** - Live design editor with tools  
✅ **Quantity Selector** - Dynamic pricing with slider  
✅ **Checkout Flow** - Complete order and payment pages  

## 📄 All Pages

| # | Page | Route | Description |
|---|------|-------|-------------|
| 1 | Landing | `/` | Hero, showcase, features + contact form |
| 2 | Choose | `/choose` | Pick catalog or custom design path |
| 3a | Catalog | `/catalog` | Browse pre-made products with filters |
| 3b | Custom Chat | `/custom-chat` | AI chatbot for custom products |
| 4 | Design Canvas | `/design-canvas` | Edit designs with tools & chat |
| 5 | Quantity | `/quantity` | Select quantity, sizes, pricing |
| 6 | Summary | `/summary` | Review order, create variations |
| 7 | Checkout | `/checkout` | Shipping, payment, order summary |
| 8 | Thank You | `/thank-you` | Order confirmation |

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Add video file
# Place Header_Video_Final.mp4 in public/ directory

# 3. Run development server
npm run dev

# 4. Visit and explore
http://localhost:3000
```

## 🔄 User Flow

```
Landing Page
    ↓ [Get Started]
Choose Path
    ↓                    ↓
Catalog Path      Custom Chat Path
    ↓                    ↓
Design Canvas ←──────────┘
    ↓
Quantity Selection
    ↓
Order Summary
    ↓
Checkout
    ↓
Thank You Page
```

See **`FLOW_GUIDE.md`** for detailed flow diagrams!

## 🎬 Video Background

All pages use `Header_Video_Final.mp4` as the background:
```
public/Header_Video_Final.mp4
```

## 🛠️ Tech Stack

- **Next.js 14** - App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Apple Glassmorphism** - Design language

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── choose/page.tsx          # Choose path
│   ├── catalog/page.tsx         # Product catalog
│   ├── custom-chat/page.tsx     # AI chat interface
│   ├── design-canvas/page.tsx   # Design editor
│   ├── quantity/page.tsx        # Quantity selector
│   ├── summary/page.tsx         # Order summary
│   ├── checkout/page.tsx        # Checkout flow
│   └── thank-you/page.tsx       # Confirmation page
│
└── components/
    ├── VideoBackground.tsx      # Video background component
    └── Navigation.tsx           # Top navigation bar
```

## 🎨 Design Features

- **Glassmorphism**: `backdrop-blur-2xl bg-white/10 border border-white/20`
- **Animations**: Page transitions and scroll effects
- **Responsive**: Mobile-first with `md:` breakpoints
- **Typography**: Clean, modern hierarchy
- **Colors**: White text on dark video background

## 📚 Documentation

- **`FLOW_GUIDE.md`** - Complete user flow and journey maps
- **`SETUP_GUIDE.md`** - Detailed setup instructions  
- **`COMPLETE.md`** - Full implementation summary
- **`SCROLL_LAYOUT.md`** - Landing page scroll sections

## ✨ Key Features

### Landing Page (/)
- Scrolling sections with animations
- Contact form popup (sends to team@auren.co)
- Product showcase grid
- Operational features list
- OAuth sign-in buttons
- Full footer

### Choose Path (/choose)
- Two clear options: Catalog vs Custom
- Feature comparison
- Visual cards with icons

### Catalog (/catalog)
- Category filters (Accessories, Hats, Sweaters, T-Shirts)
- Product grid with selection
- Step indicator ("step 2")

### Custom Chat (/custom-chat)
- AI chatbot interface
- Message history
- Example prompts
- Generate design button

### Design Canvas (/design-canvas)
- Split view: Chat + Tools
- Tool selection (Text, Color, Upload)
- Live product preview
- Color picker overlay

### Quantity (/quantity)
- Price slider (35-500 units)
- Dynamic pricing tiers ($18, $15, $12)
- Size breakdown (S/M/L/XL)
- Comments/special requests
- Pricing tier display

### Summary (/summary)
- Full order review
- Create variation option
- Timeline estimates
- What's included
- Save for later

### Checkout (/checkout)
- Contact information
- Shipping address
- Payment method (Stripe ready)
- Order summary sidebar
- Security badge

### Thank You (/thank-you)
- Success animation with checkmark
- Order confirmation message
- Email notice
- Timeline cards (3-4 weeks)
- What happens next (4 steps)
- Create another CTA

## 🌐 Backend Ready

Integration points prepared:
- Form submissions → `team@auren.co`
- Stripe Checkout placeholders
- API routes structure
- Order data flow

## 📱 Responsive Design

- **Mobile**: < 768px (stacked layouts)
- **Desktop**: ≥ 768px (grid layouts)
- All components adapt automatically

---

**Built to match the Figma walkthrough exactly!** 🎉

For questions: team@auren.co
