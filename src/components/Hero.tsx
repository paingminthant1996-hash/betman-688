import React from 'react';
import { Play, MessageCircle } from 'lucide-react';

interface HeroProps {
  gameUrl?: string;
}

const Hero: React.FC<HeroProps> = ({ gameUrl = "https://m.bat688.com/" }) => {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center">

      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-70">
          <source src="/slot.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #000000 0%, #000000 35%, rgba(0,0,0,0.4) 100%)' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent z-15" />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 md:px-20 z-20 relative">
        <div className="max-w-4xl">

          {/* ✨ Always Glowing Badge (အစိမ်းစက်လေးနဲ့) */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-yellow-500/5 border border-yellow-500/30 mb-10 backdrop-blur-md 
               shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_35px_rgba(234,179,8,0.5)] transition-all duration-500 group">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <div className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
            </div>
            <span className="text-yellow-500 text-xs font-black uppercase tracking-[0.25em]">
              Official <span className="text-white">Premium Agent</span>
            </span>
          </div>

          {/* Headline Section - စာလုံးတွေ မကျပ်အောင် ညှိထားသည် */}
          <div className="relative mb-14">
            <h1 className="text-white text-7xl md:text-[10rem] font-black italic tracking-normal leading-[0.85] opacity-95">
              JACKPOT
            </h1>
            <div className="mt-6 md:mt-8">
              <span className="text-4xl md:text-7xl font-bold bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                စောင့်ကြိုနေသည်
              </span>
            </div>
          </div>

          {/* Paragraph - လေဝင်လေထွက်ကောင်းအောင် Line Height ချဲ့ထားသည် */}
          <p className="text-gray-300 text-lg md:text-2xl font-medium mb-16 max-w-2xl leading-[1.8] border-l-4 border-yellow-500/60 pl-8">
            အကောင်းဆုံး <span className="text-yellow-400">Slot</span> ဂိမ်းများနှင့် တိုက်ရိုက်ကာစီနိုများကို <br className="hidden md:block" />
            <span className="text-white font-extrabold">BETMAN 688</span> တွင် ယုံကြည်စိတ်ချစွာ ကစားလိုက်ပါ။
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-8">
            <a href={gameUrl} target="_blank" rel="noopener noreferrer"
              className="px-12 py-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl text-black font-black text-2xl italic uppercase shadow-[0_20px_50px_rgba(234,179,8,0.3)] hover:scale-105 transition-all flex items-center gap-4">
              ယခုပဲကစားမည် <Play size={28} fill="black" />
            </a>
            <a href="#contact" className="px-12 py-6 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-2xl hover:bg-white/10 transition-all flex items-center gap-4">
              ဆက်သွယ်ရန် <MessageCircle size={28} />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;