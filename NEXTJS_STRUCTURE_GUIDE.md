# 🚀 Next.js Structure Guide for BETMAN 688 Gaming Platform

## 📁 **Project Structure Overview**

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page (uses LandingPageNew)
└── components/
    ├── Navigation.tsx       # Navigation bar with scroll effects
    ├── Hero.tsx            # Hero section with jackpot text
    ├── Games.tsx           # Games grid section
    ├── GameCard.tsx        # Individual game card component
    ├── Features.tsx        # Features section
    ├── Contact.tsx         # Contact section
    ├── Footer.tsx          # Footer component
    ├── FloatingButtons.tsx # Floating Viber/Telegram buttons
    ├── Marquee.tsx         # Animated marquee
    ├── LandingPageNew.tsx  # Main landing page (modular)
    └── LandingPage.tsx     # Old landing page (can be deleted)
```

## 🧹 **Cleaning Guide (မဆိုင်သော ဖိုင်များကို ဖျက်ထုတ်ခြင်း)**

### ✅ **Files to Delete:**
```bash
# HTML files (can be deleted after Next.js conversion)
index.html

# Old component (can be deleted)
src/components/LandingPage.tsx

# Any other .html or .xhtml files in src/app folder
```

### ❌ **DO NOT DELETE:**
- `package.json` - Project dependencies
- `tailwind.config.js` - Tailwind configuration
- `tsconfig.json` - TypeScript configuration
- `node_modules/` - Required dependencies
- `src/app/globals.css` - Global styles
- `src/app/layout.tsx` - Root layout
- `src/app/page.tsx` - Main page

## 🎯 **Component Breakdown**

### 1. **Navigation.tsx**
- **Purpose**: Responsive navigation with scroll effects
- **Props**: `onNavigate` callback for section navigation
- **Features**: Mobile menu, scroll-based styling, logo animation

### 2. **Hero.tsx**
- **Purpose**: Main hero section with jackpot text
- **Props**: `gameUrl` for play button
- **Features**: Animated text, call-to-action buttons

### 3. **Games.tsx**
- **Purpose**: Games grid section
- **Props**: `games` array, `onGamePlay` callback
- **Features**: Responsive grid, hover effects

### 4. **GameCard.tsx**
- **Purpose**: Individual game card
- **Props**: `name`, `provider`, `imageUrl`, `featured`, `onPlay`
- **Features**: Hover animations, featured badge

### 5. **Features.tsx**
- **Purpose**: Features showcase section
- **Props**: `features` array
- **Features**: Icon animations, glassmorphism

### 6. **Contact.tsx**
- **Purpose**: Contact information section
- **Props**: `contacts` array
- **Features**: Telegram/Viber integration

### 7. **Footer.tsx**
- **Purpose**: Footer with company info
- **Props**: `companyName`, `copyrightYear`, `brandName`
- **Features**: Minimalist design, blur effects

### 8. **FloatingButtons.tsx**
- **Purpose**: Floating contact buttons
- **Props**: `contacts` array
- **Features**: Bounce animation, gradient backgrounds

### 9. **Marquee.tsx**
- **Purpose**: Animated scrolling text
- **Props**: `text`, `speed`
- **Features**: Continuous animation, customizable text

### 10. **LandingPageNew.tsx**
- **Purpose**: Main landing page component
- **Props**: All configuration options
- **Features**: Facebook Pixel, component orchestration

## 🎨 **Props Configuration**

### **Main Page (src/app/page.tsx)**
```tsx
<LandingPage 
  gameUrl="https://m.bat688.com/"
  companyName="AZONE PREMIUM SELLER"
  copyrightYear={2026}
  brandName="Betman 688"
  marqueeText="🔥 စိတ်ချရဆုံး ဂိမ်းဝန်ဆောင်မှုများ • မနက် ၇ နာရီမှ ည ၁ နာရီအထိ • အမြန်ဆုံး ငွေသွင်းငွေထုတ် စိတ်ချရမှု ၁၀၀% • 24/7 Service 🔥"
/>
```

### **Custom Games Data**
```tsx
const customGames = [
  { name: 'Custom Game', provider: 'CUSTOM', imageUrl: 'image.jpg', featured: true },
  // ... more games
];
<Games games={customGames} />
```

### **Custom Features**
```tsx
const customFeatures = [
  { icon: 'fas fa-star', title: 'Custom Feature', description: 'Description' },
  // ... more features
];
<Features features={customFeatures} />
```

## 🔧 **Customization Options**

### **Colors & Styling**
- **Neon Gold**: `--neon-gold: #d4af37`
- **Dark Background**: `--dark-bg: #0a0a0a`
- **Glass Effects**: `--glass-bg: rgba(255, 255, 255, 0.05)`

### **Fonts**
- **Myanmar**: 'Noto Sans Myanmar'
- **Gaming**: 'Orbitron'

### **Animations**
- Logo pulse, button shimmer, card hover effects
- Marquee scrolling, floating button bounce

## 📱 **Responsive Design**
- **Mobile**: Optimized for 320px+
- **Tablet**: Optimized for 768px+
- **Desktop**: Optimized for 1024px+

## 🚀 **Deployment Ready**
- **Facebook Pixel**: Integrated (ID: 486727724522896)
- **SEO**: Meta tags, semantic HTML
- **Performance**: Optimized images, lazy loading
- **Accessibility**: ARIA labels, keyboard navigation

## 🎮 **Next Steps**
1. **Delete old files** as mentioned in cleaning guide
2. **Customize props** in page.tsx
3. **Add custom games/features** if needed
4. **Test all components** work correctly
5. **Deploy to production**

## 📞 **Support**
- **Telegram**: @BETMAN688
- **Viber**: +959777737964
- **Developer**: Modular Next.js structure

---

**✨ Your BETMAN 688 gaming platform is now fully modular and ready for production!**
