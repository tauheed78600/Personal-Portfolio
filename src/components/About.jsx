import React from 'react'
import SplitText from './AnimatedComponents/SplitText'
import { ArrowUp } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import avatar from '../assets/avatar.svg'

function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <div className='md:ml-[70px] ml-4 mt-32' ref={ref}>
      <hr className='w-[90%]' />
      <div className="md:grid mt-5 grid-cols-[45%_45%_10%] gap-4 mb-5">

        <motion.div
          className='text-white'
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 1 }}
        >
          <SplitText
            text="Who I am?"
            className="text-6xl font-extrabold text-violet-500 text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />

          <div className='font-semibold'>
            <p className='text-lg mt-10'>
              I’m a full-stack web developer who loves building websites that look great and work seamlessly. I work with technologies like React, Next.js, Node.js, NestJS, React Native, MongoDB, and MySQL to create scalable and user-friendly applications.</p>
            <p className='text-lg mt-4'>On the backend, I’ve worked with Spring Boot, MVC frameworks, and Android Studio for mobile app development. I’m always eager to learn and experiment with new tools to improve my skills and take on exciting challenges.</p>
            <blockquote className='text-lg mt-4 '><i>“I have no special talent. I am only passionately curious” – Albert Einstein</i></blockquote>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 1 }}
        >
          <img src={avatar} className='md:h-[400px] md:w-[600px] w-[400px] rounded-full' />
        </motion.div>
        <motion.div
          className='w-[50px] hidden md:block'
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 1 }}
        >
          <div className='h-[230px] w-[38px] bg-violet-300 rounded-none mt-20'>
            <div className='flex flex-col ml-2 mt-2 text-black mr-2 text-xl '>
              <p className='rotate-90 mt-4'>A</p>
              <p className='rotate-90'>B</p>
              <p className='rotate-90'>O</p>
              <p className='rotate-90'>U</p>
              <p className='rotate-90'>T</p>
              <p className='rotate-90 mt-4'>M</p>
              <p className='rotate-90'>E</p>
            </div>
            <div className='h-[100px] ml-4 w-[5px] bg-violet-300 rounded-none'></div>
          </div>
        </motion.div>
      </div>
      <motion.div
        className='fixed bottom-4 right-4 z-50'
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 1 }}
      >
        <div onClick={scrollToTop} className='bg-gradient-to-r from-violet-400 to-violet-800 h-14 w-14 rounded-full border p-1 cursor-pointer'>
          <ArrowUp className='text-white h-12 w-12' />
        </div>
      </motion.div>
    </div>
  )
}

export default About
