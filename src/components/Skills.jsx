import React from 'react';
import { Code, Database, Server, Layers, GitBranch, Codepen, FileText, Layout, Terminal, NotebookText, Box, Code2 } from 'lucide-react';
import SplitText from './AnimatedComponents/SplitText';
import SkillsCard from './Cards/SkillsCard';
import { SiAndroid, SiAwsamplify, SiBitbucket, SiBootstrap, SiC, SiConfluence, SiDocker, SiExpress, SiJavascript, SiJinja, SiJira, SiMaterialdesign, SiMongodb, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostman, SiPython, SiReacthookform, SiRedux, SiSpringboot, SiSwagger, SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
  { name: 'C', icon: <SiC /> },
  { name: 'Python', icon: <SiPython /> },
  { name: 'Java', icon: <Code /> },
  { name: 'Javascript', icon: <SiJavascript /> },
  { name: 'Typescript', icon: <SiTypescript /> },
  { name: 'MySQL', icon: <Database /> },
  { name: 'DBMS', icon: <Server /> },
  { name: 'ReactJS', icon: <Codepen /> },
  { name: 'Junit Testing', icon: <FileText /> },
  { name: 'Git/Github', icon: <GitBranch /> },
  { name: 'Spring Tool Suite', icon: <SiSpringboot /> },
  { name: 'Visual Studio', icon: <Code2 /> },
  { name: 'Android Studio', icon: <SiAndroid /> },
  { name: 'DSA', icon: <Terminal /> },
  { name: 'SDLC', icon: <Terminal /> },
  { name: 'NestJS', icon: <SiNestjs /> },
  { name: 'HTML/CSS', icon: <Layout /> },
  { name: 'React Native', icon: <SiReacthookform /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'NodeJS', icon: <SiNodedotjs /> },
  { name: 'NextJS', icon: <SiNextdotjs /> },
  { name: 'ExpressJS', icon: <SiExpress /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'Material UI', icon: <SiMaterialdesign /> },
  { name: 'Bootstrap', icon: <SiBootstrap /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Bitbucket', icon: <SiBitbucket /> },
  { name: 'JIRA', icon: <SiJira /> },
  { name: 'Confluence', icon: <SiConfluence /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'Swagger', icon: <SiSwagger /> },
  { name: 'Docker', icon: <SiDocker /> },
  { name: 'AWS', icon: <SiAwsamplify /> }
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

        {/* Add a gradient overlay to soften the edges
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div> */}
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${skills.length * 208}px); /* 200px card width + 8px gap */
          }
        }

        .animate-slide {
          animation: slide 60s linear infinite;
          will-change: transform;
        }

        /* Pause on hover */
        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Skills;