import { Download, Github, Linkedin, Instagram, X } from 'lucide-react';
import React from 'react';
import { SiLeetcode } from "react-icons/si";
import ShinyText from './AnimatedComponents/ShinyText';

function Home() {
  return (
    <div id='home'>
      <div className="grid md:grid-cols-2 md:ml-[70px] ml-4 mt-[70px] w-[90%] gap-28">
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
              {[
                { icon: <Github className='h-11 w-9' /> },
                { icon: <Linkedin className='h-11 w-9' /> },
                { icon: <SiLeetcode className='h-11 w-9' /> },
                { icon: <X className='h-11 w-9' /> },
                { icon: <Instagram className='h-11 w-9' /> }
              ].map((item, index) => (
                <div key={index} className="hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
              ))}
            </div>

            <div className='flex flex-row gap-4 mt-4 text-xl'>
              <button className='h-16 md:w-[170px] w-[150px] bg-violet-900 text-white p-2 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out'>
                Contact Me
              </button>

              <button className='h-16 md:w-[170px] w-[150px] bg-violet-900 text-white p-2 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out'>
                <span className='flex flex-row gap-5 ml-3 p-2'>
                  Resume
                  <Download className='mt-1 animate-bounce' />
                </span>
              </button>
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

      </div>
    </div>
  );
}

export default Home;
