import React, { useState, useEffect } from 'react';

export default function Navbar({ isDark, setIsDark }) {
  const [isOpen, setIsOpen] = useState(false);

  // 1. Navigation items array
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  // Close mobile menu on resize to prevent layout ghosts
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setIsOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 backdrop-blur-xl border-b ${
      isDark ? "bg-slate-950/90 border-white/10" : "bg-white/90 border-slate-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 md:py-5 flex justify-between items-center">
        
        {/* Brand Logo */}
        <a href="#" onClick={() => setIsOpen(false)}>
          <h1 className={`text-xl md:text-2xl font-black tracking-tighter transition-colors cursor-pointer ${
            isDark ? "text-white" : "text-slate-900"
          }`}>
            Ritika
          </h1>
        </a>

        {/* Right Side: Desktop Nav + Controls */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
          
          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`uppercase tracking-widest text-[10px] transition-all hover:text-blue-500 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Theme Toggle Button (Always Visible) */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl border transition-all active:scale-90 ${
              isDark 
                ? "border-slate-800 bg-slate-900 text-yellow-400 hover:bg-slate-800" 
                : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-white shadow-sm"
            }`}
            aria-label="Toggle Theme"
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col gap-1.5 p-2 transition-all active:scale-90"
          >
            <span className={`w-6 h-0.5 rounded-full transition-all origin-center ${isDark ? 'bg-white' : 'bg-black'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 rounded-full transition-all ${isDark ? 'bg-white' : 'bg-black'} ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 rounded-full transition-all origin-center ${isDark ? 'bg-white' : 'bg-black'} ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (Animated Slide) */}
      <div className={`md:hidden absolute w-full transition-all duration-300 ease-in-out border-b overflow-hidden ${
        isOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
      } ${isDark ? "bg-slate-950 border-white/10" : "bg-white border-slate-200"}`}>
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className={`w-full text-center py-2 uppercase tracking-[0.2em] text-[11px] font-black transition-colors ${
                isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}