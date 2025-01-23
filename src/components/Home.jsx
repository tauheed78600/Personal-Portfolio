import { Download, Github, Linkedin, Instagram, X } from 'lucide-react';
import React from 'react';
import { SiLeetcode } from "react-icons/si";
import ShinyText from './AnimatedComponents/ShinyText';
import { motion } from 'framer-motion';
import avatar from '../assets/avatar.svg';

function Home() {
  const socialLinks = [
    { icon: <Github className='h-11 w-9' />, link: 'https://github.com/tauheed78600' },
    { icon: <Linkedin className='h-11 w-9' />, link: 'https://www.linkedin.com/in/tauheed-darekar/' },
    { icon: <SiLeetcode className='h-11 w-9' />, link: 'https://leetcode.com/u/tauheeddarekar786/' },
    { icon: <X className='h-11 w-9' />, link: 'https://x.com/Tauheed41942247' },
    { icon: <Instagram className='h-11 w-9' />, link: 'https://www.instagram.com/tauheed21__/' }
  ];

  return (
    <div id='home'>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }} className="grid md:grid-cols-2 md:ml-[70px] ml-4 mt-[70px] w-[90%] gap-28">
        <div className='font-extrabold md:text-6xl text-2xl'>
          <div className='text-white'>
            <p>
              <ShinyText text="Hello," speed={3} />
              <ShinyText text="This is " speed={3} />
              <ShinyText text="Tauheed Darekar" speed={3} className='text-violet-500' />,
              <br />
              <ShinyText text="I am a Professional " speed={3} />
              <ShinyText text="Software Developer" speed={3} className='text-violet-500' />.
            </p>

            <p className='text-2xl mt-4'>
              <ShinyText text="I have a passion for" speed={3} />
              <ShinyText text=" " speed={3} className='text-violet-500' />
              <ShinyText text=" developing and designing scalable " speed={3} />
              <ShinyText text="web and mobile applications" speed={3} className='text-violet-500' />
              <ShinyText text=" and I am always looking for new challenges." speed={3} />
            </p>

            <div className='flex flex-row gap-7 cursor-pointer mt-4 text-violet-500'>
              {socialLinks.map((item, index) => (
                <div key={index} className="hover:scale-110 transition-transform duration-200" onClick={() => window.open(item.link, '_blank')}>
                  {item.icon}
                </div>
              ))}
            </div>

            <div className='flex flex-row gap-4 mt-4 text-xl'>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='h-16 md:w-[170px]  backdrop-blur-xl hover:shadow-purple-500/50 shadow-2xl border border-gray-300 w-[150px] bg-transparent text-white p-2 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out'
              >
                Contact Me
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className='h-16 md:w-[170px] backdrop-blur-xl hover:shadow-purple-500/50 shadow-2xl border border-gray-300 w-[150px] bg-transparent text-white p-2 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out'
              >
                <span className='flex flex-row gap-5 ml-3 p-2'>
                  Resume
                  <Download className='mt-1 md:h-8 md:w-8 animate-bounce' />
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        <div className='mt-20 hidden md:block relative group'>
          <img
            src='carbonCode.png'
            alt="Code Illustration"
            className='h-[350px] w-[750px] relative z-10 rounded-lg'
          />
          <div className="absolute inset-0 rounded-lg animate-glow  h-[365px] w-[640px]"></div>
        </div>

      </motion.div>
    </div>
  );
}

export default Home;
