import React from 'react';

export default function About({ isDark }) {
  const stats = [
    { label: "Years Experience", value: "0", color: "from-blue-500 to-cyan-400" },
    { label: "Projects Built", value: "4+", color: "from-purple-500 to-pink-400" },
  ];

  const awsServices = [
    { name: "EC2", desc: "Compute" },
    { name: "VPC", desc: "Networking" },
    { name: "S3", desc: "Storage" },
    { name: "EBS", desc: "Block Storage" }
  ];

  return (
    <section id="about" className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-500`}>
      {/* Header - Scalable text */}
      <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight italic ${isDark ? "text-white" : "text-slate-900"}`}>
          About Me
        </h2>
        <div className="w-12 h-1 bg-blue-500 mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8">
        
        {/* Left Column: The Narrative (Full width on mobile/tablet, 7-cols on large) */}
        <div className={`md:col-span-2 lg:col-span-7 p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-500 ${
          isDark ? "bg-slate-900/40 border-white/5 shadow-2xl" : "bg-white border-slate-100 shadow-xl"
        }`}>
          <h3 className={`text-xl sm:text-2xl font-bold mb-6 italic ${isDark ? "text-slate-100" : "text-slate-900"}`}>
            A developer driven by curiosity.
          </h3>
          
          <div className={`space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            <p>
              I am an enthusiastic <span className={isDark ? "text-white font-semibold" : "text-slate-900 font-semibold"}>Full-Stack Cloud Engineer</span> eager to kickstart my career. My core stack centers on the <span className="text-blue-500 font-bold">MERN ecosystem</span>, complemented by hands-on experience in <span className="text-indigo-500 font-bold">AWS Cloud infrastructure</span>.
            </p>
            <p>
              I specialize in deploying scalable applications using <span className={isDark ? "text-slate-200" : "text-slate-800"}>EC2</span>, managing secure isolated networks via <span className={isDark ? "text-slate-200" : "text-slate-800"}>VPC</span>, and optimizing data through <span className={isDark ? "text-slate-200" : "text-slate-800"}>S3</span> and <span className={isDark ? "text-slate-200" : "text-slate-800"}>EBS</span>. I love creating web applications from scratch and am ready to adapt to professional environments seamlessly.
            </p>
            <p>
              While I am at the beginning of my professional journey, I am highly motivated to contribute to real-world projects and grow under the guidance of experienced mentors.
            </p>
          </div>
        </div>

        {/* Right Column: Bento Stats & Tech Grid (Full width on mobile/tablet, 5-cols on large) */}
        <div className="md:col-span-2 lg:col-span-5 flex flex-col gap-6">
          
          {/* Stats Row - Responsive sizing for stat values */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className={`p-6 sm:p-8 rounded-[1.5rem] md:rounded-[2rem] border flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-2 ${
                isDark ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-100 shadow-lg"
              }`}>
                <span className={`text-4xl sm:text-5xl font-black mb-2 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </span>
                <span className={`text-[9px] sm:text-[10px] uppercase tracking-widest font-bold opacity-60 ${isDark ? "text-slate-300" : "text-slate-900"}`}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* AWS Services Card - Responsive Grid internal */}
          <div className={`p-6 sm:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border ${
            isDark ? "bg-slate-900/40 border-white/5" : "bg-white border-slate-200 shadow-lg"
          }`}>
            <h4 className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-50">Cloud Infrastructure</h4>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {awsServices.map((service) => (
                <div key={service.name} className={`p-3 sm:p-4 rounded-xl md:rounded-2xl border transition-all hover:border-blue-500/50 ${
                  isDark ? "bg-slate-950/50 border-white/5" : "bg-slate-50 border-slate-200"
                }`}>
                  <p className="text-blue-500 font-black text-base sm:text-lg">{service.name}</p>
                  <p className="text-[9px] sm:text-[10px] font-bold opacity-50 uppercase tracking-tighter">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Callout */}
          <div className={`p-6 sm:p-8 rounded-[1.5rem] md:rounded-[2rem] border relative overflow-hidden flex flex-col items-center justify-center text-center group ${
            isDark ? "bg-blue-600/10 border-blue-500/20" : "bg-blue-600 text-white"
          }`}>
            <h4 className="text-xl sm:text-2xl font-black mb-1 relative z-10">Eager & Ready</h4>
            <p className={`text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold relative z-10 ${isDark ? "text-blue-400" : "text-blue-100"}`}>
              To Learn & Grow
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}