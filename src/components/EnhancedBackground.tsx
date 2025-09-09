import React from 'react';

const EnhancedBackground: React.FC = () => {
  return (
    <>
      {/* Main gradient background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Large circles */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          
          {/* Medium shapes */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-2xl animate-pulse"></div>
          
          {/* Small floating particles */}
          <div className="absolute top-1/6 left-1/6 w-4 h-4 bg-blue-400/40 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-2/3 left-2/3 w-3 h-3 bg-cyan-400/40 rounded-full animate-pulse opacity-50 animation-delay-1000"></div>
          <div className="absolute top-1/3 right-1/6 w-2 h-2 bg-indigo-400/40 rounded-full animate-pulse opacity-40 animation-delay-2000"></div>
          <div className="absolute bottom-1/6 left-1/3 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse opacity-30"></div>
          
          {/* Tech-inspired grid overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          ></div>
        </div>
        
        {/* Subtle noise texture for premium feel */}
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
             }}>
        </div>
      </div>
    </>
  );
};

export default EnhancedBackground;