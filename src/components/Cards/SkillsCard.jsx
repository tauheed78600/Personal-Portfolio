import React from 'react';

function SkillsCard({ name, icon }) {
  return (
    <>
    <div className='mb-9'>
        <div className='border rounded-sm mt-10  border-white hover:scale-110 transition-transform duration-300 ease-in-out bg-gradient-to-r from-violet-400 to-violet-800  h-[150px] w-[170px]'>
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
