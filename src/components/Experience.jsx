import React from 'react'
import SplitText from './AnimatedComponents/SplitText'
import { Laptop2, User2 } from 'lucide-react'

function Experience() {
  return (
    <div className='md:ml-[70px] ml-4 mt-20'>
      <SplitText
        text="Experience"
        className="text-6xl font-extrabold text-violet-500 text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
      <div className='flex justify-center md:flex-row flex-col md:gap-40 gap-9 mt-10 '>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-9'>
          <div className='flex flex-col'>
            <div className='border p-4 rounded-xl mt-10  border-violet-500 shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out bg-gradient-to-r from-violet-900 to-violet-500  h-[150px] w-[700px]'>
              <div className='items-center justify-center'>
                <p className='text-xl text-white text-center font-extrabold'>(2024 - Present)</p>
              </div>
              <div>

                <div className='flex flex-row'>
                  <Laptop2 className='h-9 w-9 text-white mr-2' />
                  <p className='text-white font-extrabold text-xl'>Parkar Digital </p>
                </div>
                <p className='text-white ml-10'>Role: Software Engineer 1</p>
                <p className='text-white ml-10'>Location: Pune, India</p>
              </div>
            </div>
            <div className='border p-4 border-violet-500 shadow-2xl rounded-xl mt-10  border-white hover:scale-105 transition-transform duration-300 ease-in-out bg-gradient-to-r from-violet-900 to-violet-500  h-[150px] w-[700px]'>
              <div className='items-center justify-center'>
                <p className='text-xl text-white text-center font-extrabold'>(2023 Jun - 2023 Dec)</p>
              </div>
              <div>
                <div className='flex flex-row'>
                  <Laptop2 className='h-9 w-9 text-white mr-2' />
                  <p className='text-white font-extrabold text-xl'>Thinkseed Systems</p>
                </div>
                <p className='text-white ml-10'>Role: Software Development Engineering Intern</p>
                <p className='text-white ml-10'>Location: Bangalore, India</p>
              </div>
            </div>
          </div>
          <div>
            <img src='expImg.png' className='hidden md:block h-[400px]'></img>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Experience
