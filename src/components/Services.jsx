import React from 'react'
import { SiAndroid,  SiFirebase,  SiJavascript, SiMaterialdesign, SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiNodedotjs, SiPostman, SiPython,  SiReact,  SiSpring,  SiTensorflow,  SiTypescript } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi'
import SplitText from './AnimatedComponents/SplitText'

function Services() {
  const services = [
    {
      id: 1,
      title: 'Full Stack Website Dev',
      description:
        'Building interactive and scalable web applications with the latest technologies such as ReactJS, NodeJS, Express, MongoDB, and more.',
      icons: [
        <SiJavascript className='text-4xl text-yellow-500' />,
        <SiTypescript className='text-4xl text-blue-500' />,
        <SiNodedotjs className='text-4xl text-green-500' />,
        <SiNestjs className='text-4xl text-red-500' />,
        <SiReact className='text-4xl text-blue-400' />,
        <SiNextdotjs className='text-4xl text-black' />,
        <SiMongodb className='text-4xl text-green-400' />,
      ],
    },
    {
      id: 2,
      title: 'Android Apps',
      description:
        'Creating intuitive and user-friendly Android mobile apps using Java and Kotlin, focusing on performance and usability.',
      icons: [
        <SiAndroid className='text-4xl text-green-500' />,
        <SiFirebase className='text-4xl text-orange-500' />,
        <SiMysql className='text-4xl text-blue-600' />,
        <SiReact className='text-4xl text-blue-400' />,
      ],
    },
    {
      id: 3,
      title: 'AI Apps',
      description:
        'Developing cutting-edge AI applications powered by Machine Learning algorithms and frameworks to solve real-world problems.',
      icons: [
        <SiTensorflow className='text-4xl text-orange-500' />,
        <SiPython className='text-4xl text-yellow-400' />,
      ],
    },
  ]

  return (
    <div className='md:ml-[70px] ml-4 mt-20 z-0'>
      <div className='mt-5'>
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
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mt-9 w-[95%]'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-transparent border border-gray-300 backdrop-blur-xl md:w-[400px] shadow-2xl border border-purple-500 rounded-xl p-6 hover:scale-105 hover:shadow-purple-500/50 transition-transform duration-500 ease-in-out relative overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-br from-transparent to-purple-900 opacity-20 rounded-xl'></div>
              <div className='flex flex-row justify-between items-center'>
                <h3 className='text-center text-white text-2xl font-semibold drop-shadow-md'>
                  {service.title}
                </h3>
              </div>
              <div className='flex flex-wrap justify-center gap-3 mt-4'>
                {service.icons.map((icon, i) => (
                  <div key={i} className='flex items-center'>
                    {icon}
                  </div>
                ))}
              </div>
              <p className='mt-4 text-gray-300 text-sm leading-relaxed'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
