import React from 'react';
import { Code, Database, Server, Layers, GitBranch, Codepen, FileText, Layout, Terminal, NotebookText, Box, Code2 } from 'lucide-react';
import SplitText from './AnimatedComponents/SplitText';
import SkillsCard from './Cards/SkillsCard';
import { SiAndroid, SiAwsamplify, SiBitbucket, SiBootstrap, SiC, SiConfluence, SiDocker, SiExpress, SiJavascript, SiJinja, SiJira, SiMaterialdesign, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostman, SiPython, SiReacthookform, SiRedux, SiSpringboot, SiSwagger, SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'C', icon: <SiC className="text-[#A8B9CC] text-6xl" /> },
  { name: 'Python', icon: <SiPython className="text-[#306998] text-6xl" /> },
  { name: 'Java', icon: <Code className="text-[#007396] text-6xl" /> },
  { name: 'Javascript', icon: <SiJavascript className="text-[#F7DF1E] text-6xl" /> },
  { name: 'Typescript', icon: <SiTypescript className="text-[#3178C6] text-6xl" /> },
  { name: 'MySQL', icon: <Database className="text-[#4479A1] text-6xl" /> },
  { name: 'DBMS', icon: <Server className="text-[#00A0A0] text-6xl" /> },
  { name: 'ReactJS', icon: <Codepen className="text-[#61DAFB] text-6xl" /> },
  { name: 'Junit Testing', icon: <FileText className="text-[#25A162] text-6xl" /> },
  { name: 'Git/Github', icon: <GitBranch className="text-[#181717] text-6xl" /> },
  { name: 'Spring Tool Suite', icon: <SiSpringboot className="text-[#6DB33F] text-6xl" /> },
  { name: 'Visual Studio', icon: <Code2 className="text-[#5C2D91] text-6xl" /> },
  { name: 'Android Studio', icon: <SiAndroid className="text-[#3DDC84] text-6xl" /> },
  { name: 'DSA', icon: <Terminal className="text-[#6C6C6C] text-6xl" /> },
  { name: 'SDLC', icon: <Terminal className="text-[#1C1C1C] text-6xl" /> },
  { name: 'NestJS', icon: <SiNestjs className="text-[#E0234E] text-6xl" /> },
  { name: 'HTML/CSS', icon: <Layout className="text-[#E34F26] text-6xl" /> },
  { name: 'React Native', icon: <SiReacthookform className="text-[#61DAFB] text-6xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] text-6xl" /> },
  { name: 'NodeJS', icon: <SiNodedotjs className="text-[#8CC84B] text-6xl" /> },
  { name: 'NextJS', icon: <SiNextdotjs className="text-[#000000] text-6xl" /> },
  { name: 'ExpressJS', icon: <SiExpress className="text-[#000000] text-6xl" /> },
  { name: 'Redux', icon: <SiRedux className="text-[#764ABC] text-6xl" /> },
  { name: 'Material UI', icon: <SiMaterialdesign className="text-[#1976D2] text-6xl" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="text-[#563D7C] text-6xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38BDF8] text-6xl" /> },
  { name: 'Bitbucket', icon: <SiBitbucket className="text-[#0052CC] text-6xl" /> },
  { name: 'JIRA', icon: <SiJira className="text-[#0052CC] text-6xl" /> },
  { name: 'Confluence', icon: <SiConfluence className="text-[#172B4D] text-6xl" /> },
  { name: 'Postman', icon: <SiPostman className="text-[#FF6A00] text-6xl" /> },
  { name: 'Swagger', icon: <SiSwagger className="text-[#85B324] text-6xl" /> },
  { name: 'Docker', icon: <SiDocker className="text-[#2496ED] text-6xl" /> },
  { name: 'AWS', icon: <SiAwsamplify className="text-[#FF9900]" /> }
];


function Skills() {
  return (
    <div className="md:ml-[70px] ml-4 mt-16">
      <SplitText
        text="Skills"
        className="text-6xl font-extrabold text-violet-500 text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />

      <div className="relative overflow-hidden mt-10 w-[93%]">
        <div className="flex gap-8 animate-slide">
          {skills.map((skill, index) => (
            <SkillsCard
              key={`first-${index}`}
              name={skill.name}
              icon={skill.icon}
              className="min-w-[200px]"
            />
          ))}

          {skills.map((skill, index) => (
            <SkillsCard
              key={`second-${index}`}
              name={skill.name}
              icon={skill.icon}
              className="min-w-[200px]"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${skills.length * 208}px);
          }
        }

        .animate-slide {
          animation: slide 60s linear infinite;
          will-change: transform;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Skills;