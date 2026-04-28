import React from 'react';

const Footer = ({ isDark }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`relative py-12 px-6 overflow-hidden border-t transition-all duration-500 ${
      isDark ? "bg-[#020617] border-white/5" : "bg-white border-slate-100"
    }`}>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
        
        {/* 1. Left Side: Brand Identity */}
        <div className="flex-1 flex justify-center md:justify-start order-1 group">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl md:text-2xl font-black tracking-tighter transition-transform duration-300 group-hover:scale-105">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                RITIKA PATEL
              </span>
            </h2>
            <p className={`text-[10px] font-black uppercase tracking-[0.2em] mt-1 transition-colors duration-300 ${
              isDark ? "text-slate-500 group-hover:text-slate-300" : "text-slate-400 group-hover:text-slate-600"
            }`}>
              MERN Stack & Cloud Enthusiast
            </p>
          </div>
        </div>

        {/* 2. Middle: Copyright Centerpiece */}
        <div className="flex-1 flex justify-center order-3 md:order-2">
          <p className={`text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold opacity-60 ${
            isDark ? "text-slate-400" : "text-slate-500"
          }`}>
            © {currentYear} • Built with React & Tailwind CSS
          </p>
        </div>

        {/* 3. Right Side: Work Status Badge */}
        <div className="flex-1 flex justify-center md:justify-end order-2 md:order-3">
          <div className={`flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-300 transform hover:-translate-y-1 ${
            isDark 
              ? "bg-slate-900/50 border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-slate-800" 
              : "bg-slate-50 border-slate-200 shadow-sm hover:bg-white hover:shadow-md"
          }`}>
            {/* Status Indicator */}
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </div>
            
            <span className={`text-[10px] md:text-xs font-black uppercase tracking-widest ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}>
              Available for Work
            </span>
          </div>
        </div>

      </div>

      {/* Decorative Blur Glow - Pure CSS */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-24 blur-[100px] pointer-events-none -z-10 transition-opacity duration-1000 ${
          isDark ? "bg-blue-600/10 opacity-100" : "bg-blue-200/20 opacity-50"
        }`} 
      />
    </footer>
  );
};

export default Footer;