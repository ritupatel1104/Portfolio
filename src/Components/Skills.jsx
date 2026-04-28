import React from 'react';

export default function Skills({ isDark }) {
  const skillCategories = [
    {
      title: "UI/UX Design",
      icon: "🎨",
      color: "text-pink-500",
      barColor: "bg-pink-500",
      skills: [
        { name: "Figma", level: 90 },
        { name: "Wireframing", level: 85 },
        { name: "Prototyping", level: 80 },
      ],
    },
    {
      title: "Frontend",
      icon: "💻",
      color: "text-blue-500",
      barColor: "bg-blue-500",
      skills: [
        { name: "HTML, CSS, & Tailwind", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      color: "text-purple-500",
      barColor: "bg-purple-500",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "PHP", level: 40 },
      ],
    },
    {
      title: "Cloud",
      icon: "☁️",
      color: "text-cyan-500",
      barColor: "bg-cyan-500",
      skills: [
        { name: "AWS (EC2, S3)", level: 90 },
        { name: "VPC & Networking", level: 70 },
        { name: "Linux Admin", level: 55 },
      ],
    },
    {
      title: "Database",
      icon: "🗄️",
      color: "text-emerald-500",
      barColor: "bg-emerald-500",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 75 },
      ],
    },
    {
      title: "Programming",
      icon: "🚀",
      color: "text-orange-500",
      barColor: "bg-orange-500",
      skills: [
        { name: "C ", level: 70 },
        { name: "C++", level: 50 },
      ],
    },
  ];

  return (
    <section id="skills" className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-colors duration-500`}>
      
      {/* Header - Scalable Typography */}
      <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
        <span className="text-blue-500 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-3 bg-blue-500/10 px-4 py-1 rounded-full">
          Expertise
        </span>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black tracking-tight italic ${isDark ? "text-white" : "text-slate-900"}`}>
          My Skills
        </h2>
      </div>

      {/* Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {skillCategories.map((cat, i) => (
          <div 
            key={i} 
            className={`p-6 sm:p-8 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col ${
              isDark ? "bg-slate-900/40 border-white/5 hover:bg-slate-900/60 shadow-inner" : "bg-white border-slate-100 shadow-sm"
            }`}
          >
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <span className="text-xl md:text-2xl">{cat.icon}</span>
              <h3 className={`text-lg md:text-xl font-black tracking-tight ${cat.color}`}>{cat.title}</h3>
            </div>

            {/* Skills List */}
            <div className="space-y-5 md:space-y-6">
              {cat.skills.map((skill, si) => (
                <div key={si}>
                  <div className="flex justify-between mb-2">
                    <span className={`text-xs md:text-sm font-bold tracking-tight ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {skill.name}
                    </span>
                    <span className={`text-[10px] md:text-xs font-bold opacity-40 ${isDark ? "text-white" : "text-slate-900"}`}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className={`h-1.5 md:h-2 w-full rounded-full overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-100"}`}>
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ease-out ${cat.barColor}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}