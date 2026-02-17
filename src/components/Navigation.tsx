'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X, Gift, UserPlus } from 'lucide-react';

interface NavigationProps {
  onNavigate?: (section: string) => void;
}

const Navigation = ({ onNavigate }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        if (!isMenuOpen) setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isMenuOpen]);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        style={{ top: isVisible ? (scrolled ? '0' : '40px') : '-120px' }}
        className={`fixed left-0 right-0 z-[100] w-full transition-all duration-500 ease-in-out ${scrolled || isMenuOpen
          ? 'bg-black/95 backdrop-blur-md border-b border-yellow-500/20 shadow-2xl py-2'
          : 'bg-transparent py-4'
          }`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* Logo Section */}
          <div className="flex items-center space-x-3 z-[110] cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.4)]">
              <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg md:text-3xl font-black text-white leading-none italic">BETMAN 688</h1>
              <span className="text-[8px] md:text-[11px] text-yellow-500 font-bold tracking-[0.2em] uppercase">Premium Agent</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => handleNavClick('home')} className="text-white hover:text-yellow-400 font-bold text-sm tracking-widest transition-colors">ပင်မစာမျက်နှာ</button>
            <button onClick={() => handleNavClick('games')} className="text-white hover:text-yellow-400 font-bold text-sm tracking-widest transition-colors">ဂိမ်းများ</button>

            {/* Special Event (Beta) Button for Desktop */}
            <a
              href="https://m.bat688.com/promotions"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 group"
            >
              <span className="absolute -top-2 -right-2 bg-red-600 text-[8px] font-black text-white px-2 py-0.5 rounded-full animate-bounce">
                BETA
              </span>
              <Gift size={16} className="text-yellow-500 group-hover:rotate-12 transition-transform" />
              <span className="text-white font-bold text-xs uppercase tracking-widest">Special Event</span>
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              className="bg-yellow-500 px-8 py-3 rounded-xl font-black text-black text-sm hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] active:scale-95 flex items-center gap-2"
            >
              <UserPlus size={16} />
              အကောင့်ဖွင့်ရန်
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-yellow-500 p-2 z-[110]"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (!isVisible) setIsVisible(true);
            }}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-[90] bg-black/98 backdrop-blur-lg transition-all duration-500 flex flex-col items-center justify-center gap-6 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
        <div className="flex flex-col gap-6 text-center w-full px-12">
          <button onClick={() => handleNavClick('home')} className="text-white text-xl font-bold tracking-[0.2em] py-4 border-b border-white/5">ပင်မစာမျက်နှာ</button>
          <button onClick={() => handleNavClick('games')} className="text-white text-xl font-bold tracking-[0.2em] py-4 border-b border-white/5">ဂိမ်းများ</button>
          <button onClick={() => handleNavClick('contact')} className="text-white text-xl font-bold tracking-[0.2em] py-4 border-b border-white/5">ဆက်သွယ်ရန်</button>

          {/* Special Event for Mobile */}
          <a
            href="https://m.bat688.com/promotions"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-5 rounded-2xl relative"
          >
            <span className="absolute top-0 right-4 bg-red-600 text-[10px] font-black text-white px-2 py-0.5 rounded-full">BETA</span>
            <Gift size={24} className="text-yellow-500" />
            <span className="text-white font-black text-lg uppercase tracking-widest">Special Event</span>
          </a>

          <button
            onClick={() => handleNavClick('contact')}
            className="bg-yellow-500 text-black py-5 rounded-2xl font-black text-xl shadow-[0_0_30px_rgba(234,179,8,0.3)] flex items-center justify-center gap-3"
          >
            <UserPlus size={24} />
            အကောင့်ဖွင့်ရန်
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;