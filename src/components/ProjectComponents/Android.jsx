import React from 'react'
import { SiAndroid, SiFirebase, SiMysql, SiSpring, SiJavascript } from 'react-icons/si'


function Android() {

  const androidProjects = [
    {
      id: 1,
      title: 'An Automation System for Leave Applications and other Requests.',
      description: 'The Automatic Leave Approval System is an app-based tool designed to automate leave requests and approvals in organizations or educational institutions. It supports multiple user roles—students, teachers, deans, and directors—with role-specific access and responsibilities. Key features include user authentication, leave submission, hierarchical approval workflows, real-time tracking, and revision requests.',
      techStack: [
        <SiAndroid className="text-green-500" />,
        <SiFirebase className="text-orange-500" />
      ]
    },
    {
      id: 2,
      title: 'Food Ordering App',
      description: 'The Food Ordering App is a user-friendly platform for browsing restaurants, ordering meals, and tracking deliveries. Built with Android Studio for the mobile interface and Spring Boot for the backend, it ensures smooth performance and secure data handling with MySQL. The app leverages Java and JavaScript for seamless interaction, offering features like real-time order tracking, secure payments, and personalized recommendations.',
      techStack: [
        <SiAndroid className="text-green-500" />,
        <SiMysql className="text-blue-500" />,
        <SiSpring className="text-green-700" />,
        <SiJavascript className="text-yellow-500" />
      ]
    }
  ]


  return (
    <div>
      <div className='p-8'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
        {androidProjects.map((project, index) => (
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
    </div>
  )
}

export default Android
