import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, CreditCard } from 'lucide-react';

interface FooterProps {
  companyName?: string;
  copyrightYear?: number;
  brandName?: string;
}

const Footer: React.FC<FooterProps> = ({
  companyName = "AZONE PREMIUM SELLER",
  copyrightYear = 2026,
  brandName = "Betman 688"
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "အကောင့်ဘယ်လိုဖွင့်ရမလဲ?",
      a: "ကျွန်ုပ်တို့၏ 'အကောင့်ဖွင့်ရန်' ခလုတ်ကို နှိပ်ပြီး Viber သို့မဟုတ် Telegram မှတစ်ဆင့် အမည်နှင့် ဖုန်းနံပါတ်ပေးရုံဖြင့် ၅ မိနစ်အတွင်း အကောင့်ရရှိနိုင်ပါသည်။"
    },
    {
      q: "ငွေသွင်း/ငွေထုတ်က ဘယ်လောက်ကြာတတ်သလဲ?",
      a: "အလိုအလျောက်စနစ်ကို အသုံးပြုထားသောကြောင့် ငွေသွင်းလျှင် ၁ မိနစ်၊ ငွေထုတ်လျှင် ၅ မိနစ်ထက် မပိုစေရဘဲ အချိန်နှင့်တပြေးညီ ဆောင်ရွက်ပေးပါသည်။"
    },
    {
      q: "ဘယ်လိုဂိမ်းအမျိုးအစားတွေ ရှိသလဲ?",
      a: "Slot ဂိမ်းပေါင်း ၁၀၀၀ ကျော်၊ Live Casino (ရှမ်းကိုးမီး၊ ဘာကာရတ်)၊ ဘောလုံးနှင့် အားကစားပွဲစဉ်များကို တစ်နေရာတည်းတွင် ကစားနိုင်ပါသည်။"
    }
  ];

  return (
    <footer className="bg-black text-white pt-20 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-40 bg-blue-600/10 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        {/* FAQ Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 underline decoration-blue-500/30 underline-offset-8">
              Support
            </h3>
            <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">
              သိလိုသည်များ
            </h2>
          </div>

          <div className="grid gap-4 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:bg-white/[0.04]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={openFaq === index}
                >
                  <span className="font-bold text-base md:text-lg text-gray-200 italic">{faq.q}</span>
                  <ChevronDown
                    className={`text-blue-500 transition-transform duration-500 ${openFaq === index ? 'rotate-180' : ''}`}
                  />
                </button>

                {/* Smooth Expansion Wrapper */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-8 pb-6 text-gray-400 font-medium leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand & Trust Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 border-b border-white/5 items-center text-center md:text-left">
          <div className="space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center p-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                {/* Fallback color if image fails */}
                <img
                  src="/logo.png"
                  alt={`${brandName} Logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => (e.currentTarget.style.display = 'none')}
                />
              </div>
              <span className="text-xl font-black italic tracking-tighter uppercase">{brandName}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              အကောင်းဆုံး ဝန်ဆောင်မှုအတွက် <span className="text-blue-400 font-bold">{brandName}</span> တွင် ယုံကြည်စိတ်ချစွာ ကစားနိုင်ပါသည်။ မြန်မာနိုင်ငံ၏ ယုံကြည်စိတ်ချရဆုံး Platform ဖြစ်ပါသည်။
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            <div className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/5">
              <ShieldCheck size={18} className="text-blue-500" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Verified Seller</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/5">
              <CreditCard size={18} className="text-blue-400" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">Fast Payout</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-12 flex flex-col items-center space-y-6">
          <div className="h-[1px] w-24 bg-blue-500/20"></div>

          <div className="text-center space-y-3">
            <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.6em]">
              © {copyrightYear} {companyName}
            </p>
            <div className="flex gap-6 justify-center pt-2">
              <a href="#privacy" className="text-slate-700 hover:text-blue-500 text-[9px] font-bold uppercase tracking-widest transition-colors">Privacy Policy</a>
              <a href="#terms" className="text-slate-700 hover:text-blue-500 text-[9px] font-bold uppercase tracking-widest transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;