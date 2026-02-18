import React from 'react';

const Marquee = ({ text = "🔥 မြန်မာနိုင်ငံ၏ အကောင်းဆုံးနှင့် ယုံကြည်ရဆုံး Slot ဂိမ်းဝန်ဆောင်မှု • ပိတ်ရက်မရှိအမြန်ဆုံး ငွေသွင်းငွေထုတ် စိတ်ချရမှု ၁၀၀% • 24/7 Service 🔥" }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-[110] bg-black/95 border-b border-luxury-gold/20 py-2 overflow-hidden select-none">
      <div className="marquee-container flex whitespace-nowrap">
        {/* Animation ကို အလုပ်လုပ်စေဖို့ စာသားကို အနည်းဆုံး ၂ ကြိမ် ပတ်ပေးရပါတယ် */}
        <div className="marquee-content flex items-center">
          <span className="text-[13px] font-bold tracking-wider text-luxury-gold uppercase px-4">
            {text} &nbsp;&nbsp;&nbsp;&nbsp; {text}
          </span>
        </div>
        <div className="marquee-content flex items-center">
          <span className="text-[13px] font-bold tracking-wider text-luxury-gold uppercase px-4">
            {text} &nbsp;&nbsp;&nbsp;&nbsp; {text}
          </span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
        }

        .marquee-content {
          display: flex;
          flex-shrink: 0;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Hover လုပ်ရင် ခဏရပ်ချင်တယ်ဆိုရင် ဒါလေးသုံးလို့ရပါတယ် */
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}} />
    </div>
  );
};

export default Marquee;