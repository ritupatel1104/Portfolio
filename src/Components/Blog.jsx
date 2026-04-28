import React from 'react';

export default function Blog({ isDark }) {
  const articles = [
    {
      date: "March 25, 2026",
      title: "Getting Started with React Hooks",
      excerpt: "Master the art of functional components. A deep dive into state management, side effects, and custom hook patterns.",
      color: "from-blue-600 to-cyan-500",
      glow: "group-hover:shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]",
      icon: "⚛️"
    },
    {
      date: "April 20, 2026",
      title: "Building REST APIs in Node.js",
      excerpt: "Architect high-performance backends. Exploring Express middleware, JWT security, and scalable routing structures.",
      color: "from-emerald-600 to-teal-400",
      glow: "group-hover:shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)]",
      icon: "⚙️"
    },
    {
      date: "April 15, 2026",
      title: "Deploying MERN on AWS EC2",
      excerpt: "Cloud-native deployment strategies. Setting up VPCs, security groups, and Nginx for production-ready MERN stacks.",
      color: "from-purple-600 to-blue-500",
      glow: "group-hover:shadow-[0_0_50px_-12px_rgba(147,51,234,0.5)]",
      icon: "☁️"
    }
  ];

  const handleReadClick = (title) => {
    alert(`Decoding "${title}"... Full transmission coming soon.`);
  };

  return (
    <section id="blog" className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${isDark ? "bg-[#020617]" : "bg-slate-50"}`}>
      
      {/* BACKGROUND DECOR (Dark Mode Only) */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-5%] left-[-10%] w-[60%] sm:w-[40%] h-[40%] bg-blue-900/20 blur-[80px] md:blur-[120px] rounded-full" />
          <div className="absolute bottom-[-5%] right-[-10%] w-[60%] sm:w-[40%] h-[40%] bg-purple-900/20 blur-[80px] md:blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
        </div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 md:mb-24 text-center">
          <h2 className={`text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-[0.9] ${isDark ? "text-white" : "text-slate-900"}`}>
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Articles</span>
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mt-6 rounded-full" />
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {articles.map((article, index) => (
            <div 
              key={index} 
              className={`group relative p-[1px] rounded-[2rem] transition-all duration-500 hover:scale-[1.01] md:hover:scale-[1.02] ${article.glow}`}
            >
              {/* GRADIENT BORDER ENGINE */}
              <div className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${article.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* MAIN CONTENT CARD */}
              <div className={`relative h-full p-7 sm:p-8 md:p-10 rounded-[2rem] flex flex-col justify-between overflow-hidden ${
                isDark ? "bg-[#0B1120]" : "bg-white shadow-xl border-slate-100"
              }`}>
                
                {/* SCANLINE ANIMATION (Dark Mode Only) - Refined for performance */}
                {isDark && (
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent -translate-y-full group-hover:animate-[scan_2.5s_linear_infinite] pointer-events-none" />
                )}

                <div>
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    <span className="text-[32px] md:text-[40px] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 transform-gpu">
                      {article.icon}
                    </span>
                    <span className={`text-[9px] md:text-[10px] font-black tracking-widest uppercase transition-colors ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                      {article.date}
                    </span>
                  </div>

                  <h3 className={`text-xl md:text-2xl font-black mb-4 md:mb-6 leading-tight tracking-tight ${isDark ? "text-white" : "text-slate-900"}`}>
                    {article.title}
                  </h3>

                  <p className={`text-sm md:text-base leading-relaxed mb-8 font-medium ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {article.excerpt}
                  </p>
                </div>

                <button 
                  onClick={() => handleReadClick(article.title)}
                  className={`mt-auto w-full py-4 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 border ${
                    isDark 
                    ? "bg-slate-950 border-white/10 text-white hover:bg-white hover:text-black" 
                    : "bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-slate-900/10"
                  }`}
                >
                  Decrypt Content <span className="text-base md:text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}