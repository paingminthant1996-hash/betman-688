import React from 'react';
import { PlayCircle, ExternalLink } from 'lucide-react';

interface GameData {
  name: string;
  provider: string;
  imageUrl: string;
  featured?: boolean;
}

interface GamesProps {
  games?: GameData[];
  onGamePlay?: (gameName: string) => void;
}

const InternalGameCard = ({ name, provider, imageUrl, featured, onPlay }: any) => {
  const isVideo = imageUrl.match(/\.(mp4|webm|ogg)$/i);

  return (
    <div className="relative group cursor-pointer" onClick={onPlay}>
      <div className="bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-yellow-500/40 hover:shadow-[0_0_50px_rgba(234,179,8,0.15)]">

        {/* Media Section */}
        <div className="relative aspect-[4/5] overflow-hidden m-3 rounded-[2rem] bg-black">
          {isVideo ? (
            <video
              src={imageUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e: any) => {
                e.target.src = 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=400';
              }}
            />
          )}

          {/* Win Rate Badge - Modern Glass Look */}
          <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-2xl border border-white/10 text-center shadow-2xl">
            <p className="text-[8px] text-gray-400 uppercase font-black tracking-widest leading-none mb-1">Win Rate</p>
            <p className="text-yellow-500 font-black text-sm">98.2%</p>
          </div>

          {featured && (
            <div className="absolute top-5 left-5">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-[10px] px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg animate-pulse">
                HOT
              </span>
            </div>
          )}

          {/* Hover Play Button Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="bg-yellow-500 p-5 rounded-full shadow-[0_0_30px_rgba(234,179,8,0.6)] transform scale-90 group-hover:scale-100 transition-transform duration-500">
              <PlayCircle className="text-black w-10 h-10" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="px-6 pb-8 pt-2 flex flex-col items-center gap-1.5 text-center">
          <span className="text-yellow-500/50 text-[10px] font-black tracking-[0.3em] uppercase">
            {provider}
          </span>
          <h3 className="text-white font-black text-lg tracking-tight group-hover:text-yellow-500 transition-colors duration-300">
            {name}
          </h3>
        </div>
      </div>
    </div>
  );
};

const Games: React.FC<GamesProps> = ({ games, onGamePlay }) => {
  const defaultGames: GameData[] = [
    { name: 'GATES OF OLYMPUS', provider: 'PRAGMATIC PLAY', imageUrl: '/slot.mp4' },
    { name: 'SWEET BONANZA', provider: 'PRAGMATIC PLAY', imageUrl: '/slot.mp4' },
    { name: 'STARLIGHT PRINCESS', provider: 'PRAGMATIC PLAY', imageUrl: '/slot.mp4', featured: true },
    { name: 'FORTUNE TIGER', provider: 'PG SOFT', imageUrl: '/slot.mp4' },
  ];

  const gamesData = games || defaultGames;

  return (
    <section id="games" className="bg-[#050505] py-28 relative px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/5 blur-[120px] rounded-full -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full -z-10 opacity-30"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-yellow-500/5 border border-yellow-500/20">
            <p className="text-yellow-500 font-black text-[10px] tracking-[0.5em] uppercase">
              Premium Selection
            </p>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white leading-none mb-4 italic">
            လူကြိုက်အများဆုံး <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]">SLOTS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
          {gamesData.map((game, index) => (
            <InternalGameCard
              key={index}
              name={game.name}
              provider={game.provider}
              imageUrl={game.imageUrl}
              featured={game.featured}
              onPlay={() => onGamePlay?.(game.name)}
            />
          ))}
        </div>

        {/* Action Button Links - Styled for maximum "Premium" look */}
        <div className="mt-24 flex flex-col md:flex-row gap-8 justify-center items-center">

          {/* Link 1 - Main Golden Button */}
          <a
            href="https://m.bat688.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-80 py-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-[2rem] shadow-[0_15px_40px_rgba(234,179,8,0.4)] hover:shadow-[0_20px_50px_rgba(234,179,8,0.6)] transition-all duration-300 hover:-translate-y-1 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative z-10 flex items-center justify-center gap-3 text-black font-black text-2xl italic uppercase tracking-tighter">
              ကစားရန် Link 1
              <PlayCircle size={28} fill="black" />
            </span>
          </a>

          {/* Link 2 - Sleek Border Button */}
          <a
            href="https://m.batman688.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full md:w-80 py-6 bg-white/5 border-2 border-white/10 rounded-[2rem] hover:border-white/30 transition-all duration-300 hover:-translate-y-1 active:scale-95 backdrop-blur-xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-3 text-white font-black text-2xl italic uppercase tracking-tighter">
              ကစားရန် Link 2
              <ExternalLink size={28} className="text-yellow-500" />
            </span>
          </a>
        </div>

        {/* Helpful Info Tip */}
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-ping" />
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
              Link တစ်ခုမရပါက နောက်တစ်ခုဖြင့် စမ်းကြည့်ပါ
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Games;