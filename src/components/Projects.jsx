import React, { useState } from 'react'
import SplitText from './AnimatedComponents/SplitText'
import Websites from './ProjectComponents/Websites'
import Android from './ProjectComponents/Android'
import ML from './ProjectComponents/ML'
import Coding from './ProjectComponents/Coding'

function Projects() {

  const [state, setState] = useState('website')

  return (
    <div className='md:ml-[70px] ml-4 mt-20'>
      <SplitText
        text="Projects"
        className="text-6xl font-extrabold text-violet-500 text-center"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        easing="easeOutCubic"
        threshold={0.2}
        rootMargin="-50px"
      />
      <div>
        <div className='flex flex-row gap-12'>
          <p onClick={()=>setState('website')} className='text-white mt-10 cursor-pointer hover:underline decoration-violet-500 underline-offset-8'>Website Projects</p>
          <p onClick={()=>setState('android')} className='text-white mt-10 cursor-pointer hover:underline decoration-violet-500 underline-offset-8'>Android Projects</p>
          <p onClick={()=>setState('ML')} className='text-white mt-10 cursor-pointer hover:underline decoration-violet-500 underline-offset-8'>ML Projects</p>
          <p onClick={()=>setState('coding')} className='text-white mt-10 cursor-pointer hover:underline decoration-violet-500 underline-offset-8'>Coding Profiles</p>
        </div>
        <hr className='w-[50%] mt-5'/>
      </div>
      {state === 'website' ?(<Websites/>):
      state === 'android' ? (<Android/>):
      state === 'ML' ? (<ML/>):
      state === 'coding' ? (<Coding/>):
      null}
    </div>
  )
}

export default Projects
