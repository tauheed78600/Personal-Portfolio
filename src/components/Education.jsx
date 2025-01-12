import React from 'react'
import { GraduationCap } from 'lucide-react'
import  SplitText from './AnimatedComponents/SplitText'

function Education() {
  return (
    <div className='md:ml-[70px] ml-4'>
      <hr className='w-[90%]'/>
      <div className='mt-5'>
        
      <SplitText
            text="Education"
            className="text-6xl font-extrabold text-violet-500 text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        <div className='md:grid md:grid-cols-2 gap-10 mt-10'>
          <div>
            <img src='eduImg.jpg' className='hidden md:block h-[500px]'></img>
          </div>
          <div>
            <div className='flex flex-col gap-10 mt-8 text-white'>
              <div className='border border-violet-500 shadow-2xl border-gray-300 md:w-[600px] bg-gradient-to-r from-violet-800 to-violet-400 w-[90%] md:h-[120px] rounded-lg shadow-xl p-2 hover:scale-105 transition-transform duration-300 ease-in-out'>
                <p className='text-center text-white font-extrabold'>2022-2024</p>
                <div className='flex flex-col'>
                  <div className='flex flex-row gap-2'>
                    <GraduationCap className='h-9 w-9' />
                    <p className=' text-lg font-semibold mt-1'>MTech in Computer Science Engineering</p>
                  </div>
                  <div className='flex flex-col'>
                  <p className='md:md:ml-12 ml-8 ml-8 text-sm text-gray-200'>National Institute of Technology, Goa</p>
                  <p className='md:md:ml-12 ml-8 ml-8 text-sm text-gray-200'>Completed Mtech with a CGPA of 7.55</p>
                  </div>
                </div>
              </div>
              <div className='border border-violet-500 shadow-2xl border-gray-300 md:w-[600px] bg-gradient-to-r from-violet-800 to-violet-400 w-[90%] md:h-[120px] rounded-lg shadow-xl p-2 hover:scale-105 transition-transform duration-300 ease-in-out'>
                <p className='text-center text-white font-extrabold'>2018-2022</p>
                <div className='flex flex-col'>
                  <div className='flex flex-row gap-2'>
                    <GraduationCap className=' h-9 w-9' />
                    <p className=' text-lg font-semibold mt-1'>BTech in Computer Science Engineering</p>
                  </div>
                  <div className='flex flex-col'>
                  <p className='md:ml-12 ml-8 text-sm text-gray-200'>KJEI's Trinity Academy of Engineering, Pune</p>
                  <p className='md:ml-12 ml-8 text-sm text-gray-200'>Completed Btech with a CGPA of 8.56</p>
                  </div>
                </div>
              </div>
              <div className='border border-violet-500 shadow-2xl border-gray-300 md:w-[600px] bg-gradient-to-r from-violet-800 to-violet-400 w-[90%] md:h-[120px] rounded-lg shadow-xl p-2 hover:scale-105 transition-transform duration-300 ease-in-out'>
                <p className='text-center text-white font-extrabold'>2018</p>
                <div className='flex flex-col'>
                  <div className='flex flex-row gap-2'>
                    <GraduationCap className=' h-9 w-9' />
                    <p className=' text-lg font-semibold mt-1'>HSC</p>
                  </div>
                  <div className='flex flex-col'>
                  <p className='md:ml-12 ml-8 text-sm text-gray-200'>S.V. Union Jr. College</p>
                  <p className='md:ml-12 ml-8 text-sm text-gray-200'>Completed HSC with 79%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
