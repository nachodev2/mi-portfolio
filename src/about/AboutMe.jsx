import React from "react";

const services = [
  {
    title: "Website Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: "App Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
  },
  {
    title: "Website Hosting",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    ),
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="w-full bg-[#121212] py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-40 flex flex-col items-center">
        
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-40 w-full mb-32">
          
          <div className="relative w-80 h-80 md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden shrink-0 border-4 border-dotted border-[#FFB703] shadow-[0_0_10px_rgba(255,183,3,0.5)] transition-all duration-300 hover:scale-[1.02]">
            <img 
              src="/tomas-ruiz.png" 
              alt="Tomás Ruiz" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="flex flex-col gap-8 text-center lg:text-left w-full">
            <div className="flex justify-center lg:justify-start">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                About <span className="text-[#FFB703]">me</span>
              </h2>
            </div>
            <p className="text-gray-400 text-xl leading-relaxed text-pretty max-w-2xl mx-auto lg:mx-0">
              Passionate about turning concepts into reality. At 23, I combine my
              skills in software development with my experience in 3D design as a 
              creative hobby to craft unique digital experiences. I thrive on the 
              challenge of building things from scratch, ensuring that every 
              project faithfully represents the vision behind it.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mt-10 border-t border-white/10 pt-10">
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-white flex justify-center lg:justify-start items-center gap-1">
                  10 <span className="text-[#FFB703] text-3xl">+</span>
                </span>
                <span className="text-gray-500 text-sm mt-3 uppercase tracking-wider font-semibold">
                  Repositories
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-white flex justify-center lg:justify-start items-center gap-1">
                  100 <span className="text-[#FFB703] text-3xl">%</span>
                </span>
                <span className="text-gray-500 text-sm mt-3 uppercase tracking-wider font-semibold">
                  Commited
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-5xl font-bold text-white flex justify-center lg:justify-start items-center gap-1">
                  12 <span className="text-[#FFB703] text-3xl">+</span>
                </span>
                <span className="text-gray-500 text-sm mt-3 uppercase tracking-wider font-semibold">
                  Technologies
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-3xl flex flex-col items-center">
          <div className="flex flex-col gap-10 relative pt-2 w-full">
            <div className="absolute left-[9px] top-2 bottom-6 w-[2px] bg-[#FFB703]/30"></div>
            
            <div className="flex items-center gap-6 relative z-10 group cursor-default">
              <div className="w-5 h-5 flex-shrink-0 rounded-full border-2 border-[#FFB703] bg-[#121212] group-hover:bg-[#FFB703] transition-colors duration-300 shadow-[0_0_10px_rgba(255,183,3,0.3)]"></div>
              <div className="flex items-center gap-5 p-5 bg-[#1a1a1a] rounded-xl border border-white/5 w-full hover:border-[#FFB703]/50 hover:bg-[#1a1a1a]/80 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <div className="text-[#FFB703]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <span className="text-gray-200 font-bold text-xl">Website Development</span>
              </div>
            </div>

            <div className="flex items-center gap-6 relative z-10 group cursor-default">
              <div className="w-5 h-5 flex-shrink-0 rounded-full border-2 border-[#FFB703] bg-[#121212] group-hover:bg-[#FFB703] transition-colors duration-300 shadow-[0_0_10px_rgba(255,183,3,0.3)]"></div>
              <div className="flex items-center gap-5 p-5 bg-[#1a1a1a] rounded-xl border border-white/5 w-full hover:border-[#FFB703]/50 hover:bg-[#1a1a1a]/80 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <div className="text-[#FFB703]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <span className="text-gray-200 font-bold text-xl">App Development</span>
              </div>
            </div>

            <div className="flex items-center gap-6 relative z-10 group cursor-default">
              <div className="w-5 h-5 flex-shrink-0 rounded-full border-2 border-[#FFB703] bg-[#121212] group-hover:bg-[#FFB703] transition-colors duration-300 shadow-[0_0_10px_rgba(255,183,3,0.3)]"></div>
              <div className="flex items-center gap-5 p-5 bg-[#1a1a1a] rounded-xl border border-white/5 w-full hover:border-[#FFB703]/50 hover:bg-[#1a1a1a]/80 hover:-translate-y-1 transition-all duration-300 shadow-lg">
                <div className="text-[#FFB703]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <span className="text-gray-200 font-bold text-xl">Website Hosting</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;