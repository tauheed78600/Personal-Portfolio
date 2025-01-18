import React from 'react'
import { SiAndroid, SiFirebase, SiMysql, SiSpring, SiJavascript } from 'react-icons/si'
import { FiExternalLink } from 'react-icons/fi'

function Coding() {
  const androidProjects = [
    {
      id: 1,
      title: 'Leetcode',
      description: 'Solved 500+ varied problems on Leetcode. I have a good understanding of Data Structures and Algorithms. I have solved problems on Arrays, Strings, Linked Lists, Trees, Graphs, Dynamic Programming, and many more. I have also participated in various coding contests on Codeforces and Codechef.',
      link: 'https://leetcode.com/u/tauheeddarekar786/'
    },
    {
      id: 2,
      title: 'Geeksforgeeks',
      description: 'I have solved 400+ problems on Geeksforgeeks. I have a good understanding of Data Structures and Algorithms. I have solved problems on Arrays, Strings, Linked Lists, Trees, Graphs, Dynamic Programming, and many more. I have also participated in various coding contests on Codeforces and Codechef.',
      link: 'https://www.geeksforgeeks.org/user/tauheeddarekar786/'
    }
  ]

  return (
    <div className='p-8'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
        {androidProjects.map((project, index) => (
          <div key={index} className='bg-gradient-to-br from-purple-800 via-violet-600 to-purple-900 backdrop-blur-xl shadow-2xl border border-purple-500 rounded-xl p-6 hover:scale-105 hover:shadow-purple-500/50 transition-transform duration-500 ease-in-out relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-transparent to-purple-900 opacity-20 rounded-xl'></div>
            <div className='flex flex-row justify-between'>
              <h3 className='text-center text-purple-100 text-2xl font-semibold drop-shadow-md'>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FiExternalLink className='text-white text-xl cursor-pointer' onClick={() => window.open(project.link, '_blank')} />
              </a>
            </div>
            <p className='mt-4 text-gray-300 text-sm leading-relaxed'>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Coding
