import React from 'react'
import SplitText from './AnimatedComponents/SplitText'

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
    <div className='flex justify-center gap-40 mt-10 items-center'>
      <div className='border border-gray-300 md:w-[450px] w-[90%] md:h-[600px] rounded-lg shadow-xl p-2 hover:scale-105 transition-transform duration-300 ease-in-out'>

      </div>
      <div className='border border-gray-300 md:w-[450px] w-[90%] md:h-[600px] rounded-lg shadow-xl p-2 hover:scale-105 transition-transform duration-300 ease-in-out'>

      </div>
    </div>

    </div>
  )
}

export default Experience
