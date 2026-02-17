import React from 'react';
import { Send, UserPlus, ShieldCheck, ArrowLeft } from 'lucide-react';

const Contact = () => {
  const socialActions = [
    {
      name: 'Viber',
      icon: '/viber.png',
      link: 'viber://add?number=959777737964',
      color: 'bg-[#7360F2]',
      username: '+959777737964'
    },
    {
      name: 'Telegram',
      icon: '/telegram.png',
      link: 'http://t.me/Ouhmoo964',
      color: 'bg-[#24A1DE]',
      username: '@Ouhmoo964'
    },
    {
      name: 'Messenger',
      icon: '/messager.png',
      link: 'https://m.me/BETMAN688',
      color: 'bg-[#00B2FF]',
      username: 'BETMAN688'
    },
    {
      name: 'Phone',
      icon: '/phone.png',
      link: 'tel:09777737964',
      color: 'bg-[#22C55E]',
      username: '09-777737964'
    }
  ];

  const paymentLogos = [
    { name: 'KPay', path: '/kpay.png' },
    { name: 'WaveMoney', path: '/wave.png' },
    { name: 'AYAPay', path: '/ayapay.png' },
    { name: 'CBPay', path: '/cbpay.png' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="bg-[#0a0a0a] py-12 px-4 relative overflow-hidden text-white font-sans">
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 40s linear infinite; 
        }
        .logo-item {
          backface-visibility: hidden;
          transform: translateZ(0);
        }
      `}} />

      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-yellow-500 transition-colors font-bold uppercase text-[10px] tracking-widest group"
          >
            <div className="p-2 rounded-full bg-white/5 group-hover:bg-yellow-500/10 transition-all">
              <ArrowLeft size={16} />
            </div>
            BACK
          </button>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-black text-yellow-500 mb-2 italic uppercase tracking-tighter">
            Contact Us
          </h2>
          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            Available 24/7 Live Support
          </p>

          {/* Payment Logos Sliding Section - Fixed Spacing and Layout */}
          <div className="relative overflow-hidden bg-white/[0.02] py-10 rounded-[2.5rem] border border-white/5 mb-10">
            <div className="animate-scroll flex items-center gap-16 md:gap-32">
              {[...paymentLogos, ...paymentLogos, ...paymentLogos].map((pay, index) => (
                <div key={index} className="logo-item flex flex-col items-center gap-3 shrink-0 px-6 group">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center p-2 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={pay.path}
                      alt={pay.name}
                      className="w-full h-full object-contain"
                      onError={(e: any) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/100x100/ffffff/000000?text=" + pay.name
                      }}
                    />
                  </div>
                  <span className="text-[10px] md:text-[12px] font-black text-gray-400 uppercase tracking-[0.2em] group-hover:text-yellow-500 transition-colors">
                    {pay.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          <a
            href="https://m.bat688.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black py-6 rounded-[2rem] flex items-center justify-center gap-4 shadow-[0_10px_40px_rgba(234,179,8,0.3)] hover:scale-[1.01] active:scale-[0.98] transition-all"
          >
            <UserPlus size={32} strokeWidth={3} />
            <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter italic">Register Now</span>
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {socialActions.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${item.color} p-5 rounded-[1.8rem] flex flex-col items-center justify-center gap-3 shadow-xl hover:-translate-y-1 transition-all`}
              >
                <div className="bg-white rounded-2xl p-2 w-12 h-12 flex items-center justify-center shadow-inner">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                    onError={(e: any) => {
                      e.target.onerror = null;
                      e.target.src = "https://www.svgrepo.com/show/501340/generic-user.svg";
                    }}
                  />
                </div>
                <div className="text-center">
                  <span className="text-white text-[12px] font-black uppercase block italic">{item.name}</span>
                  <span className="text-white/70 text-[8px] mt-1 block truncate font-bold">{item.username}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-[#0f0f0f] border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl relative">
          <div className="flex flex-col items-center gap-4 mb-10 text-center">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-yellow-500/20 bg-black p-2">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-contain"
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/64x64/000000/EAB308?text=BM"
                }}
              />
            </div>
            <div>
              <h3 className="text-white text-2xl font-black italic tracking-tight uppercase">Quick Message</h3>
              <p className="text-yellow-500/50 text-[10px] font-black uppercase tracking-[0.2em]">Send us a message</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full bg-white/[0.03] border border-white/10 text-white font-bold rounded-2xl px-6 py-5 focus:border-yellow-500/50 outline-none transition-all"
              />
              <input
                type="tel"
                placeholder="Phone"
                required
                className="w-full bg-white/[0.03] border border-white/10 text-white font-bold rounded-2xl px-6 py-5 focus:border-yellow-500/50 outline-none transition-all"
              />
            </div>
            <textarea
              rows={4}
              placeholder="Message"
              required
              className="w-full bg-white/[0.03] border border-white/10 text-white font-bold rounded-2xl px-6 py-5 resize-none focus:border-yellow-500/50 outline-none transition-all"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black py-6 rounded-2xl text-xl flex items-center justify-center gap-3 italic transition-colors"
            >
              Send <Send size={24} strokeWidth={3} />
            </button>
          </form>

          <div className="mt-10 flex items-center justify-center gap-2 text-gray-800 text-[10px] font-black uppercase tracking-[0.3em]">
            <ShieldCheck size={14} /> Secure & Encrypted Chat
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;