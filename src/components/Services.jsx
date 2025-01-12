import React from 'react'
import SplitText from './AnimatedComponents/SplitText'

function Services() {
  return (
    <div className='md:ml-[70px] ml-4 mt-20'>
      <SplitText
        text="Services"
        className="text-6xl font-extrabold text-violet-500 text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
    </div>
  )
}

export default Services
