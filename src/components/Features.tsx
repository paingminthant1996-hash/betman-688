import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesProps {
  features?: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  const defaultFeatures: Feature[] = [
    { 
      icon: 'fas fa-bolt', 
      title: 'Instant Deposit/Withdraw', 
      description: 'ငွေသွင်းငွေထုတ် အလွန်အမြန်ဆန်' 
    },
    { 
      icon: 'fas fa-users', 
      title: '24/7 VIP Support', 
      description: '၂၄နာရီ VIP ဝန်ဆောင်မှု' 
    },
    { 
      icon: 'fas fa-shield-alt', 
      title: 'Fair Play Guaranteed', 
      description: 'တရားမျှတသော ဂိမ်းကစားမှု' 
    },
  ];

  const featuresData = features || defaultFeatures;

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className="glass p-8 text-center group hover:border-yellow-500/30 transition-all">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <i className={`${feature.icon} text-2xl text-yellow-400`}></i>
              </div>
              <h3 className="text-xl font-black mb-3 neon-text">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
