import React from 'react';

const technologies = [
  { name: "HTML5", logo: "/logos/html5.svg" },
  { name: "CSS3", logo: "/logos/css_old.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "React", logo: "/logos/react_dark.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "GitHub", logo: "/logos/github_dark.svg" },
  { name: "Three.js", logo: "/logos/threejs-dark.svg" },
  { name: "MongoDB", logo: "/logos/mongodb-icon-dark.svg" },
  { name: "Next.js", logo: "/logos/nextjs_icon_dark.svg" },
  { name: "NodeJS", logo: "/logos/nodejs.svg" },
  { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
];

const TechStack = () => {
  return (
    <section className="w-full bg-[#0e0e0e] py-6 relative z-20 overflow-visible">
      
      <div className="w-full px-2 md:px-4 flex flex-col items-center">
        
        <h3 className="text-white text-2xl font-bold mb-6 tracking-tight">
          Tech <span className="text-[#FFB703]">Stack</span>
        </h3>

        <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 w-full place-items-center">
          
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group relative h-16 w-full flex items-center justify-center p-1"
            >
              
              {/* --- ETIQUETA TIPO MÁQUINA DE ESCRIBIR --- */}
              <div className="
                absolute -top-10 left-1/2 -translate-x-1/2 
                px-2 py-1 
                bg-white text-black text-xs font-bold font-mono rounded 
                opacity-0 group-hover:opacity-100 
                transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
                pointer-events-none z-50 whitespace-nowrap shadow-md
              ">
                {/* 👆 Agregué 'font-mono' en la línea de arriba */}
                
                {tech.name}
                
                <div className="
                  absolute left-1/2 -translate-x-1/2 top-full 
                  w-0 h-0 
                  border-l-[4px] border-l-transparent
                  border-r-[4px] border-r-transparent
                  border-t-[4px] border-t-white
                "></div>
              </div>

              <img 
                src={tech.logo} 
                alt={`${tech.name} logo`}
                className="
                  h-full w-full object-contain 
                  filter grayscale opacity-50 
                  transition-all duration-300 ease-out
                  group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
                  cursor-default
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TechStack;