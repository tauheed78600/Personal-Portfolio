import React from 'react'
import SplitText from './AnimatedComponents/SplitText'

function About() {
  return (
    <div className='md:ml-[70px] ml-4 mt-32'>
      <hr className='w-[90%]'/>
      <div className="md:grid mt-5 grid-cols-[45%_45%_10%] gap-4 mb-5">
        
        <div className='text-white'>
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
        </div>
        <div>
          <img src='codersGif.gif' className='md:h-[400px] md:w-[600px] w-[400px] rounded-full' />
        </div>
        <div className='w-[50px] hidden md:block'>
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
        </div>
      </div>
    </div>
  )
}

export default About
