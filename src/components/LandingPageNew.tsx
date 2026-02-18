'use client'

import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import Games from './Games';
import Features from './Features';
import Contact from './Contact';
import Footer from './Footer';
import Marquee from './Marquee';

// Font Awesome သို့မဟုတ် Icon များအတွက်
import { FaTelegramPlane, FaViber } from 'react-icons/fa';

interface LandingPageProps {
    gameUrl?: string;
    companyName?: string;
    copyrightYear?: number;
    brandName?: string;
    marqueeText?: string;
    viberNumber?: string;
    telegramUsername?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({
    gameUrl = "https://m.bat688.com/",
    companyName = "BETMAN 688",
    copyrightYear = 2026,
    brandName = "BETMAN 688",
    marqueeText = "BETMAN 688 မှကြိုဆိုပါသည် - အခုပဲ အကောင်းဆုံးနှင့် ယုံကြည်ရဆုံး Slot ဂိမ်းဝန်ဆောင်မှု - ပိတ်ရက်မရှိ • အမြန်ဆုံး ငွေသွင်းငွေထုတ် စိတ်ချရမှု ၁၀၀% • 24/7 Service ",
    viberNumber = "+959777778056",
    telegramUsername = "Myat-2"
}) => {

    // Facebook Pixel Logic
    useEffect(() => {
        // @ts-ignore
        !(function (f: any, b: any, e: any, v: any, n: any, t: any, s: any) {
            if ((f as any).fbq) return;
            (n as any) = (f as any).fbq = function () {
                // @ts-ignore
                (n as any).callMethod ? (n as any).callMethod.apply(n, arguments) : (n as any).queue.push(arguments);
            };
            if (!(f as any)._fbq) (f as any)._fbq = n;
            (n as any).push = f;
            (n as any).loaded = !0;
            (n as any).version = '2.0';
            (n as any).queue = [];
            (t as any) = (b as any).createElement(e);
            (t as any).async = !0;
            (t as any).src = v;
            (s as any) = (b as any).getElementsByTagName(e)[0];
            (s as any).parentNode.insertBefore(t, s);
        }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', (window as any).fbq));
        (window as any).fbq('init', '486727724522896');
        (window as any).fbq('track', 'PageView');
    }, []);

    const handleNavigate = (section: string) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleGamePlay = (gameName: string) => {
        // @ts-ignore
        if (window.fbq) {
            // @ts-ignore
            fbq('track', 'ViewContent', { content_name: gameName });
        }
        window.open(gameUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500 selection:text-black">
            {/* Navigation & Marquee */}
            <Navigation onNavigate={handleNavigate} />
            <Marquee text={marqueeText} />

            {/* Main Content */}
            <main>
                <Hero gameUrl={gameUrl} />
                <Games onGamePlay={handleGamePlay} />
                <Features />
                <Contact />
            </main>

            {/* Footer */}
            <Footer
                companyName={companyName}
                copyrightYear={copyrightYear}
                brandName={brandName}
            />

            {/* Floating Contact Buttons */}
            <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
                <a
                    href={`viber://chat?number=${viberNumber}`}
                    className="float-btn viber-btn"
                    aria-label="Contact on Viber"
                >
                    <FaViber size={28} />
                </a>
                <a
                    href={`https://t.me/${telegramUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="float-btn telegram-btn"
                    aria-label="Contact on Telegram"
                >
                    <FaTelegramPlane size={28} />
                </a>
            </div>

            {/* Global Styles */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Noto+Sans+Myanmar:wght@400;700&display=swap');

                :root {
                    --neon-gold: #d4af37;
                    --neon-gold-light: #f3cf65;
                    --dark-bg: #0a0a0a;
                    --glass-bg: rgba(255, 255, 255, 0.05);
                    --glass-border: rgba(255, 255, 255, 0.1);
                }

                body {
                    font-family: 'Noto Sans Myanmar', sans-serif;
                    background: var(--dark-bg);
                    overflow-x: hidden;
                }

                .orbitron { font-family: 'Orbitron', sans-serif; }

                /* Floating Action Buttons */
                .float-btn {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.5);
                    color: white;
                }

                .viber-btn { background: linear-gradient(135deg, #7360f2, #5948cc); }
                .telegram-btn { 
                    background: linear-gradient(135deg, #0088cc, #0077b5); 
                    animation: bounce 2s infinite;
                }

                .float-btn:hover {
                    transform: scale(1.15) rotate(5deg);
                }

                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }

                /* Layout Utilities */
                .glass {
                    background: var(--glass-bg);
                    backdrop-filter: blur(12px);
                    border: 1px solid var(--glass-border);
                }

                /* Marquee Styling */
                .marquee-container {
                    background: #111;
                    border-bottom: 1px solid var(--neon-gold);
                    padding: 8px 0;
                }

                @media (max-width: 768px) {
                    .float-btn {
                        width: 52px;
                        height: 52px;
                    }
                }
                `
            }} />
        </div>
    );
};

export default LandingPage;