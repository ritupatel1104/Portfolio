import React, { useState } from 'react';

export default function Contact({ isDark }) {
  // State for form and popup
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [showPopup, setShowPopup] = useState(false);

  // Simple Validation & Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3s
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } else {
      alert("Please fill in all required fields.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className={`py-16 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500 ${isDark ? "bg-[#020617]" : "bg-slate-50"}`}>
      
      {/* Success Popup - Responsive positioning */}
      {showPopup && (
        <div className="fixed top-6 md:top-10 left-1/2 -translate-x-1/2 z-[100] animate-bounce px-4 w-full max-w-xs sm:max-w-sm">
          <div className="bg-green-500 text-white px-5 py-3 md:px-8 md:py-4 rounded-2xl shadow-2xl font-bold flex items-center justify-center gap-3 text-xs md:text-base">
            <i className="fa-solid fa-circle-check"></i>
            Message Sent Successfully!
          </div>
        </div>
      )}

      {/* Ambient Glows - Scale down on mobile to prevent overflow issues */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none opacity-40 md:opacity-50">
          <div className="absolute top-[10%] right-[-10%] w-64 md:w-[500px] h-64 md:h-[500px] bg-blue-600/20 blur-[80px] md:blur-[120px] rounded-full" />
          <div className="absolute bottom-[5%] left-[-10%] w-56 md:w-[400px] h-56 md:h-[400px] bg-purple-600/20 blur-[70px] md:blur-[100px] rounded-full" />
        </div>
      )}

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10 md:mb-16 text-center">
          <span className="text-blue-500 font-black tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] uppercase mb-3 md:mb-4 bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20">
            Let's Collaborate
          </span>
          <h2 className={`text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter italic leading-tight ${isDark ? "text-white" : "text-slate-900"}`}>
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Touch</span>
          </h2>
        </div>

        <div className={`p-5 sm:p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] border transition-all duration-500 ${
          isDark ? "bg-[#0B1120] border-white/5 shadow-2xl" : "bg-white border-slate-100 shadow-xl"
        }`}>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              <div className="flex flex-col gap-2 md:gap-3">
                <label className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40 ml-2 ${isDark ? "text-white" : "text-slate-900"}`}>Full Name *</label>
                <input 
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text" 
                  placeholder="John Doe" 
                  className={`p-4 md:p-5 text-sm md:text-base rounded-xl md:rounded-2xl border outline-none transition-all ${isDark ? "bg-[#020617] border-slate-800 text-white focus:border-blue-500" : "bg-slate-50 border-slate-200 focus:border-blue-400"}`} 
                />
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <label className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40 ml-2 ${isDark ? "text-white" : "text-slate-900"}`}>Email Address *</label>
                <input 
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email" 
                  placeholder="john@example.com" 
                  className={`p-4 md:p-5 text-sm md:text-base rounded-xl md:rounded-2xl border outline-none transition-all ${isDark ? "bg-[#020617] border-slate-800 text-white focus:border-blue-500" : "bg-slate-50 border-slate-200 focus:border-blue-400"}`} 
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              <label className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40 ml-2 ${isDark ? "text-white" : "text-slate-900"}`}>Subject</label>
              <input 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                type="text" 
                placeholder="Project Inquiry" 
                className={`p-4 md:p-5 text-sm md:text-base rounded-xl md:rounded-2xl border outline-none transition-all ${isDark ? "bg-[#020617] border-slate-800 text-white focus:border-blue-500" : "bg-slate-50 border-slate-200 focus:border-blue-400"}`} 
              />
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              <label className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40 ml-2 ${isDark ? "text-white" : "text-slate-900"}`}>Message *</label>
              <textarea 
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello, I'd like to work with you on..." 
                className={`p-4 md:p-5 text-sm md:text-base rounded-xl md:rounded-2xl border outline-none transition-all h-32 md:h-44 resize-none ${isDark ? "bg-[#020617] border-slate-800 text-white focus:border-blue-500" : "bg-slate-50 border-slate-200 focus:border-blue-400"}`} 
              />
            </div>

            <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-black py-4 md:py-5 px-8 md:px-10 rounded-xl md:rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-500/20 w-full md:w-fit flex justify-center items-center gap-3 uppercase tracking-widest text-[10px] md:text-xs">
              Send Message <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>

          {/* Footer Section: Optimized for all screens */}
          <div className={`mt-10 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-6 ${isDark ? "border-white/10" : "border-slate-200"}`}>
            
            {/* 1. GITHUB (Responsive alignment) */}
            <div className="flex items-center gap-3 md:gap-4 w-full sm:w-auto">
              <a 
                href="https://github.com/ritupatel1104" 
                target="_blank" 
                rel="noreferrer" 
                className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl border transition-all hover:-translate-y-1 ${
                  isDark ? "bg-slate-900 border-white/10 hover:bg-white hover:text-black" : "bg-white border-slate-200 hover:bg-black hover:text-white"
                }`}
              >
                <i className="fa-brands fa-github text-xl md:text-2xl"></i>
              </a>
              <div className="flex flex-col">
                <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40 ${isDark ? "text-white" : "text-slate-900"}`}>Github</span>
                <span className={`text-xs md:text-sm font-bold ${isDark ? "text-slate-400" : "text-slate-600"}`}>Profile</span>
              </div>
            </div>

            {/* 2. LINKEDIN (Responsive alignment) */}
            <div className="flex items-center gap-3 md:gap-4 flex-row sm:flex-row-reverse w-full sm:w-auto text-left sm:text-right">
              <a 
                href="https://www.linkedin.com/in/ritika-patel-9a3642377?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noreferrer" 
                className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-xl border transition-all hover:-translate-y-1 ${
                  isDark ? "bg-slate-900 border-white/10 hover:bg-[#0077B5] hover:text-white" : "bg-white border-slate-200 hover:bg-[#0077B5] hover:text-white"
                }`}
              >
                <i className="fa-brands fa-linkedin-in text-xl md:text-2xl"></i>
              </a>
              <div className="flex flex-col">
                <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-40 ${isDark ? "text-white" : "text-slate-900"}`}>LinkedIn</span>
                <span className={`text-xs md:text-sm font-bold ${isDark ? "text-slate-400" : "text-slate-600"}`}>Profile</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}