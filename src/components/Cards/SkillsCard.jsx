import React from 'react';

function SkillsCard({ name, icon }) {
  return (
    <>
    <div className='mb-9'>
        <div className='border rounded-xl mt-10  border-white hover:scale-110 backdrop-blur-xl hover:shadow-purple-500/50 shadow-2xl transition-transform duration-300 ease-in-out bg-transparent border border-gray-200  shadow-2xl h-[150px] w-[170px]'>
        <div className='absolute inset-0 bg-gradient-to-br from-transparent to-purple-900 opacity-20 rounded-xl'></div>
            <div className='flex flex-col items-center justify-center h-full '>
                <div className='text-3xl text-white'>{icon}</div>
                <p className='text-white text-xl break-words font-semibold mt-2'>{name}</p>
            </div>
        </div>
    </div>
    </>
  );
}

export default SkillsCard;
