import React from 'react'
import SplitText from './AnimatedComponents/SplitText'
import { Github, Instagram, Linkedin, LocateIcon, Phone, X } from 'lucide-react'
import { SiLeetcode } from 'react-icons/si'

function Contact() {
  const socialLinks = [
    { icon: <Github className='mt-1' />, link: 'https://github.com/tauheed78600' },
    { icon: <Linkedin className='mt-1' />, link: 'https://www.linkedin.com/in/tauheed-darekar/' },
    { icon: <SiLeetcode className='mt-1' />, link: 'https://leetcode.com/u/tauheeddarekar786/' },
    { icon: <X className='mt-1' />, link: 'https://x.com/Tauheed41942247' },
    { icon: <Instagram className='mt-1' />, link: 'https://www.instagram.com/tauheed21__/' }
  ];

  return (
    <div>
      <div className='md:ml-[70px] ml-4 mt-20'>
        <SplitText
          text="Contact me"
          className="text-6xl font-extrabold text-violet-500 text-center"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />

        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 mt-9 w-[95%]'>
          <div>
            <div className='brder border-purple-500 shadow-2xl border-gray-300 md:w-[600px] p-6 bg-transparent border border-gray-300 md:w-[90%] md:h-[520px] rounded-lg shadow-xl transition-transform duration-300 ease-in-out'>
              <p className='text-white'>If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
              <div className='mt-4 ml-4'>
                <input type='text' placeholder='Name' className='mt-4 text-white p-2 w-[90%] rounded-full h-16 p-6 bg-transparent border border-white'></input>
                <input type='text' placeholder='Email' className='mt-4 text-white p-2 w-[90%] rounded-full h-16 p-6 bg-transparent border border-white'></input>
                <textarea rows='4' placeholder='Message' className='mt-4 text-white p-2 w-[90%] rounded-xl p-6 bg-transparent border border-white'></textarea>
                <button className='mt-4 h-16  w-[150px] bg-violet-900 text-white p-2 rounded-full hover:scale-105 transition-transform duration-300 ease-in-out'>
                  Send</button>
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-row gap-4'>
                <div className='h-12 w-12 rounded-full bg-purple-300 p-2'><p className='text-black font-semibold ml-1 text-2xl'>@</p></div>
                <p className='text-white md:text-2xl text-xl mt-1'>tauheeddarekar786@gmail.com</p>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='h-12 w-12 rounded-full bg-purple-300 p-2'><p className='text-black ml-1 text-2xl'><Phone className='mt-1' /></p></div>
                <p className='text-white md:text-2xl text-xl mt-1'>+91-9021492752</p>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='h-12 w-12 rounded-full bg-purple-300 p-2'><p className='text-black ml-1 text-2xl'><LocateIcon className='mt-1' /></p></div>
                <p className='text-white md:text-2xl text-xl mt-1'>Pune, Maharashtra, India</p>
              </div>
            </div>
            <div className='flex flex-row md:gap-14 gap-4 mt-20 md:ml-0 ml-5'>
              {socialLinks.map((item, index) => (
                <div key={index} className='h-12 w-12 rounded-full bg-purple-300 p-2 cursor-pointer' onClick={() => window.open(item.link, '_blank')}>
                  <p className='text-black ml-1 text-2xl'>{item.icon}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-0 mt-10 flex justify-center'>
        <hr />
        <div className='p-4'>
          <p className='text-white'>Developed with ❤ by Tauheed</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
