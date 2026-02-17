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
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/slot.mp4" type="video/mp4" />
        </video>

        {/* Seamless Edge Fix (အရာပျောက်အောင် လုပ်ပေးတဲ့ အပိုင်း) */}
        {/* ဘယ်ဘက်က အမဲရောင်ကနေ ညာဘက် ဗီဒီယိုဆီကို ဖြည်းဖြည်းချင်း အရောင်ရောသွားစေတာပါ */}
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, #000000 0%, #000000 30%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.3) 65%, transparent 100%)'
          }}
        />

        {/* အောက်ခြေကိုလည်း အရာပျောက်လေး ဖြစ်အောင် အမဲရောင် ဖြန်းပေးထားတယ် */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/40 to-transparent z-15" />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 md:px-20 z-20 relative">
        <div className="max-w-3xl">

          {/* Official Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-red-500/30 mb-8 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_red]" />
            <span className="text-red-500 text-[10px] font-bold uppercase tracking-widest">Official Premium Agent</span>
          </div>

          {/* Headline Section */}
          <div className="relative mb-10">
            <h1 className="text-white text-7xl md:text-[10rem] font-black italic tracking-tighter leading-none select-none opacity-90">
              JACKPOT
            </h1>
            <div className="mt-[-5px] md:mt-[-15px]">
              <span className="text-4xl md:text-7xl font-bold bg-gradient-to-b from-yellow-200 via-yellow-500 to-yellow-700 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] leading-tight">
                စောင့်ကြိုနေသည်
              </span>
            </div>
          </div>

          <p className="text-gray-400 text-lg md:text-xl font-medium mb-12 max-w-lg leading-relaxed border-l-2 border-yellow-500/50 pl-6">
            အကောင်းဆုံး Slot ဂိမ်းများနှင့် တိုက်ရိုက်ကာစီနိုများကို <span className="text-white font-bold">BETMAN 688</span> တွင် ယုံကြည်စိတ်ချစွာ ကစားလိုက်ပါ။
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-2xl overflow-hidden hover:scale-105 transition-all active:scale-95 shadow-[0_15px_35px_rgba(234,179,8,0.3)] text-center"
            >
              <span className="relative z-10 flex items-center gap-3 text-black font-black text-xl italic uppercase">
                ယခုပဲကစားမည် <Play size={24} fill="black" />
              </span>
            </a>

            <a
              href="#contact"
              className="group px-10 py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-bold text-xl transition-all flex items-center gap-3 active:scale-95 backdrop-blur-sm"
            >
              ဆက်သွယ်ရန် <MessageCircle size={24} />
            </a>
          </div>

        </div>
      </div>

      {/* Floating Status Badge */}
      <div className="absolute bottom-12 right-12 hidden lg:block z-30">
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-2xl px-6 py-4 rounded-3xl border border-yellow-500/10">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
          <div className="flex flex-col">
            <span className="text-yellow-500 font-black text-[9px] uppercase tracking-widest leading-none mb-1">Live Status</span>
            <span className="text-white font-black text-sm uppercase italic">Jackpot Active 🔥</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;