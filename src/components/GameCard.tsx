import React from 'react';

interface GameCardProps {
  name: string;
  provider: string;
  videoUrl?: string; // Pinterest link ဒါမှမဟုတ် Online link
  localUrl?: string; // စက်ထဲက backup ဖိုင် (ဥပမာ- /slot.mp4)
  featured?: boolean;
  onPlay?: () => void;
}

const GameCard: React.FC<GameCardProps> = ({
  name,
  provider,
  videoUrl,
  localUrl = '/slot.mp4', // backup အနေနဲ့ တစ်ခုခု အမြဲထည့်ထားမယ်
  featured = false,
  onPlay
}) => {
  return (
    <div
      className={`game-card group cursor-pointer ${featured ? 'border-2 border-yellow-500/50' : ''}`}
      onClick={onPlay}
    >
      <div className="h-full flex flex-col">
        <div className="flex-1 relative overflow-hidden bg-black">
          {/* ဗီဒီယိုပြမယ့်အပိုင်း - Fallback Logic ပါတယ် */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
          >
            {/* ပထမ ဦးစားပေး - Pinterest URL (အကယ်၍ ရှိခဲ့လျှင်) */}
            {videoUrl && <source src={videoUrl} type="video/mp4" />}

            {/* ဒုတိယ ဦးစားပေး - URL ပျက်နေရင် ဒါကို ပြမယ် */}
            <source src={localUrl} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent pointer-events-none"></div>

          {featured && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-xs font-black uppercase">Featured</span>
            </div>
          )}
        </div>

        <div className="p-4 text-center">
          <span className="text-xs font-black text-yellow-400 uppercase tracking-wider neon-text">{provider}</span>
          <h4 className="text-sm font-black text-white uppercase truncate mt-1">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default GameCard;