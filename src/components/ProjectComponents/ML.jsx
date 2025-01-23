import React from 'react'
import { SiReact, SiNestjs, SiMysql, SiTypescript, SiJavascript, SiTailwindcss, SiPython, SiPycharm } from 'react-icons/si'

function ML() {

  const MLProjects = [
    {
      id: 1,
      title: 'A Novel Clustering-Validity Index(NCVI)',
      description: 'A Novel External clustering validity index developed for evaluating the quality of clustering results. This metric incorporates the usage of Adjusted Rand index and Jaccard Index using two parameters alpha and beta.',
      techStack: [
        <SiPython className="text-yellow-500" />,
        <SiPycharm className="text-purple-600" />
      ]
    },
    {
      id: 2,
      title: 'Disease Prediction based on Early Symptoms',
      description: 'A Disease Prediction System designed to predict the disease of the user based on the symptoms provided. The disease will be predicted based on various Machine Learning Models like Naive Bayes Algorithm, Decision Tree and Random Forest Algorithm',
      techStack: [
        <SiPython className="text-yellow-500" />,
        <SiPycharm className="text-purple-600" />
      ]
    }
  ]

  return (
    <div>
      <div className='p-8'>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
        {MLProjects.map((project, index) => (
          <div key={index} className='bg-transparent border border-gray-300 backdrop-blur-xl shadow-2xl border border-purple-500 rounded-xl p-6 hover:scale-105 hover:shadow-purple-500/50 transition-transform duration-500 ease-in-out relative overflow-hidden'>
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

export default ML
