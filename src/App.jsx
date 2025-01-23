import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Services from './components/Services';
import LoaderScreen from './components/LoaderScreen';
import { ArrowDown, ArrowDownAZ, ArrowUp } from 'lucide-react'

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const refs = {
    home: homeRef,
    about: aboutRef,
    education: educationRef,
    experience: experienceRef,
    projects: projectsRef,
    contact: contactRef,
    skills: skillsRef,
    services: servicesRef
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoaderScreen />
      ) : (
        <div>
          
          <Header refs={refs} />
          <div ref={homeRef}>
            <Home contactRefs = {contactRef}/>
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          
          <div ref={educationRef}>
            <Education />
          </div>
          <div ref={experienceRef}>
            <Experience />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={servicesRef}>
            <Services />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
