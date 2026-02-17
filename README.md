# Gaming Slot Agent - Link in Bio

A high-converting "Link in Bio" landing page for Gaming/Slot Agent services built with Next.js, Tailwind CSS, Lucide React, and Framer Motion.

## Features

- 🎮 Gaming-themed design with neon and gold accents
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 High-conversion layout optimized for gaming services
- 🌟 Interactive hover effects and micro-interactions
- 🏆 Professional gaming aesthetic

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Framer Motion** - Animation library

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
gaming-link-bio/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and Tailwind
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Main page
│   ├── components/
│   │   ├── HeroSection.tsx  # Hero section with animations
│   │   └── LinkCard.tsx     # Interactive link cards
│   └── lib/                 # Utility functions
├── public/                  # Static assets
└── tailwind.config.js      # Tailwind configuration
```

## Customization

### Colors
The theme uses custom gaming colors defined in `tailwind.config.js`:
- `gaming-gold`: #FFD700
- `gaming-neon`: #00FFFF
- `gaming-purple`: #9333EA
- `gaming-dark`: #0F0F23

### Links
Update the links array in `src/app/page.tsx` to customize your services:
```typescript
const links = [
  {
    title: 'Your Service',
    description: 'Service description',
    url: 'https://your-link.com',
    icon: 'gamepad', // or 'trophy', 'zap', 'star', 'crown', 'external'
    color: 'gold',   // or 'purple', 'pink', 'blue', 'green'
    delay: 0.1
  }
]
```

### Icons
Available icons from Lucide React:
- `gamepad` - Gamepad2
- `trophy` - Trophy
- `zap` - Zap
- `star` - Star
- `crown` - Crown
- `external` - ExternalLink

## Build for Production

```bash
npm run build
npm start
```

## License

MIT License
