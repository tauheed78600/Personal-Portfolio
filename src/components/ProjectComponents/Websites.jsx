import React from 'react'
import { SiJavascript, SiMysql, SiNestjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

function Websites() {

  const websiteProjects = [
    {
      id: 1,
      title: 'Expense Tracker Application',
      description: 'A System designed to track the daily expenses of a user. User will be able track its expenses, set monthly budget, visualize the expenses category wise or payment mode wise, get daily, monthly and weekly reports for the expenses. The backend of this system is developed using NestJS Framework and UI is designed using ReactJS.',
      techStack: [
        <SiReact className="text-cyan-500" />,
        <SiNestjs className="text-red-600" />,
        <SiMysql className="text-blue-500" />,
        <SiTypescript className="text-blue-600" />,
        <SiJavascript className="text-yellow-500" />,
        <SiTailwindcss className="text-teal-400" />
      ]
    },
    {
      id: 2,
      title: 'AI Chatbot Inspired by ChatGPT',
      description: 'This is an AI Chatbot application, inspired by ChatGPT, by using MERN Stack and OpenAI. Its a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted. Its a completely secure application using JWT Tokens, HTTP-Only Cookies, Signed Cookies, Password Encryption, and Middleware Chains.',
      techStack: [
        <SiReact className="text-cyan-500" />,
        <SiNodedotjs className="text-green-600" />,
        <SiMysql className="text-blue-500" />,
        <SiTypescript className="text-blue-600" />,
        <SiJavascript className="text-yellow-500" />,
        <SiTailwindcss className="text-teal-400" />
      ]
    },
    {
      id: 3,
      title: 'AI Resume Builder with ATS',
      description: 'AI Resume Builder with ATS is a smart web application that allows users to create professional, optimized resumes. Leveraging React + Vite for a fast and responsive frontend and NestJS with MySQL for secure backend management, the platform uses Machine Learning and Natural Language Processing (NLP) to analyze resumes for (ATS). This ensures users resumes are tailored to job descriptions.',
      techStack: [
        <SiReact className="text-cyan-500" />,
        <SiNestjs className="text-red-600" />,
        <SiMysql className="text-blue-500" />,
        <SiTypescript className="text-blue-600" />,
        <SiJavascript className="text-yellow-500" />,
        <SiTailwindcss className="text-teal-400" />
      ]
    }
  ]

  return (
    <div className='p-2 md:p-8 w-[95%]'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
        {websiteProjects.map((project, index) => (
          <div key={index} className='bg-gradient-to-br from-purple-800 via-violet-600 to-purple-900 backdrop-blur-xl shadow-2xl border border-purple-500 rounded-xl p-6 hover:scale-105 hover:shadow-purple-500/50 transition-transform duration-500 ease-in-out relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-br from-transparent to-purple-900 opacity-20 rounded-xl'></div>
            <h3 className='text-center text-purple-100 text-2xl font-semibold drop-shadow-md'>{project.title}</h3>
            <p className='mt-4 text-gray-300 text-sm leading-relaxed'>{project.description}</p>
            <div className='flex flex-wrap items-center mt-6 gap-4'>
              <p className='text-white font-medium'>Tech Stack:</p>
              {project.techStack.map((tech, index) => (
                <span key={index} className='text-white text-3xl hover:text-yellow-400 transition-transform transform hover:scale-125'>
                  {tech}
                </span>
              ))}
            </div>
            <div className='absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Websites
