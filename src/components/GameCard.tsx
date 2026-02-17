import React from 'react';

interface GameCardProps {
  name: string;
  provider: string;
  imageUrl: string;
  featured?: boolean;
  onPlay?: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ 
  name, 
  provider, 
  imageUrl, 
  featured = false, 
  onPlay 
}) => {
  return (
    <div 
      className={`game-card group cursor-pointer ${featured ? 'border-2 border-yellow-500/50' : ''}`}
      onClick={onPlay}
    >
      <div className="h-full flex flex-col">
        <div className="flex-1 relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent"></div>
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
