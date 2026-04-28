import React from 'react';

export default function Hero({ isDark }) {
  return (
    <section className={`relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden px-4 sm:px-6 lg:px-8 text-center transition-colors duration-500 ${isDark ? "bg-[#020617]" : "bg-slate-50"}`}>
      
      {/* Background Ambient Glows - Made responsive sizing */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[600px] h-[300px] md:h-[400px] blur-[80px] md:blur-[120px] rounded-full -z-10 transition-colors duration-700 ${isDark ? "bg-blue-600/20" : "bg-blue-400/10"}`} />
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* 1. ROLE: Auto-adjusting padding and text size */}
        <div className={`inline-flex items-center gap-2 mb-4 md:mb-6 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full border text-[9px] md:text-[11px] font-black tracking-[0.2em] md:tracking-[0.3em] uppercase transition-all ${
          isDark 
            ? "bg-slate-900/80 border-white/10 text-blue-400" 
            : "bg-white border-slate-200 text-blue-600 shadow-sm"
        }`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Cloud-Native Web Developer
        </div>

        {/* 2. NAME: Using 'clamp' logic via Tailwind's arbitrary values for perfect scaling */}
        <h1 className={`text-[12vw] sm:text-[10vw] md:text-8xl lg:text-9xl xl:text-[10rem] font-black mb-4 md:mb-8 tracking-tighter leading-[0.9] block ${isDark ? "text-white" : "text-slate-900"}`}>
          Ritika <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent px-2">
            Patel
          </span>
        </h1>

        {/* 3. TAGLINE: Controlled width for better readability on large screens */}
        <p className={`max-w-[90%] sm:max-w-2xl mx-auto mb-8 md:mb-12 text-sm sm:text-base md:text-xl font-medium leading-relaxed tracking-tight ${
          isDark ? "text-slate-400" : "text-slate-500"
        }`}>
          Modern Web Apps. Scalable Cloud Solutions. <br className="hidden md:block" />
          Seamless Digital Experiences. Specializing in the intersection of <span className={isDark ? "text-blue-400" : "text-blue-600"}>MERN Stack</span> and <span className={isDark ? "text-indigo-400" : "text-indigo-600"}>AWS architecture</span>.
        </p>

        {/* 4. CTA: Full width on mobile, side-by-side on tablet+ */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-0">
          <a 
            href="#projects" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-12 py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-1 active:scale-95 text-sm md:text-base"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className={`w-full sm:w-auto px-8 md:px-12 py-4 rounded-2xl border-2 font-bold transition-all hover:bg-blue-600/5 active:scale-95 text-sm md:text-base ${
              isDark ? "border-slate-800 text-white" : "border-slate-200 text-slate-900"
            }`}
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}