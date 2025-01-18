import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react';

function Header({ refs }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setIsSidebarOpen(false);
    };

    return (
        <div>
            {/* Mobile Header */}
            <div className='lg:hidden border-none-2 border-none-b-grey w-full h-[80px] shadow-xl'>
                <div>
                    <div className='flex flex-row gap-10 md:gap-16 p-4'>
                        <Menu className='h-9 w-9 mt-2 text-purple-400 cursor-pointer' onClick={() => setIsSidebarOpen(true)} />
                        <strong onClick={() => window.location.reload()} className='cursor-pointer text-3xl mt-1 text-violet-600 font-extrabold'>&lt;Tauheed /&gt; </strong>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div
                style={{ backgroundColor: 'rgb(10, 14, 40)' }}
                className={`fixed top-0 left-0 h-full w-3/4 bg-white shadow-xl bg-purple-600 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className='p-4'>
                    <div className='flex justify-between items-start'>
                        <div className='flex flex-row gap-4'>
                            <div className='h-14 w-14 bg-black rounded-full p-3'><p className='text-white text-2xl'>TD</p></div>
                            <div className='flex flex-col gap-1'>
                                <p className='font-semibold whitespace-nowrap text-white'>Tauheed Darekar</p>
                                <p className='text-sm text-gray-100'>Hi There, I'm a Software Developer</p>
                            </div>
                        </div>
                        <X className='h-9 w-9 cursor-pointer text-purple-400' onClick={() => setIsSidebarOpen(false)} />
                    </div>
                    <hr className='mt-4 bg-gray-600' />
                    <div className='mt-4'>
                        <p onClick={() => handleScroll(refs.about)} className='cursor-pointer p-1 mt-1 text-left ml-5 border-none rounded h-[40px] w-full hover:underline underline-offset-300 text-purple-400'>About</p>
                        <p onClick={() => handleScroll(refs.education)} className='cursor-pointer p-1 mt-1 text-left ml-5 border-none rounded h-[40px] w-full hover:underline underline-offset-300 text-purple-400'>Education</p>
                        <p onClick={() => handleScroll(refs.experience)} className='cursor-pointer p-1 mt-1 text-left ml-5 border-none rounded h-[40px] w-full hover:underline underline-offset-300 text-purple-400'>Experience</p>
                        <p onClick={() => handleScroll(refs.contact)} className='cursor-pointer p-1 mt-1 text-left ml-5 border-none rounded h-[40px] w-full hover:underline underline-offset-300 text-purple-400'>Skills</p>
                        <p onClick={() => handleScroll(refs.services)} className='cursor-pointer p-1 mt-1 text-left ml-5 border-none rounded h-[40px] w-full hover:underline underline-offset-300 text-purple-400'>Services</p>
                        <p onClick={() => handleScroll(refs.projects)} className='cursor-pointer p-1 mt-1 text-left ml-5 border-none rounded h-[40px] w-full hover:underline underline-offset-300 text-purple-400'>Projects</p>
                        <p onClick={() => handleScroll(refs.contact)} className='cursor-pointer p-1 mt-1 text-left ml-5 border-none rounded h-[40px] w-full hover:underline underline-offset-300 text-purple-400'>Contact</p>

                    </div>
                </div>
            </div>

            {/* Desktop Header */}
            <div className='hidden lg:block border-none-2 border-none-b-grey w-full h-[80px] shadow-xl'>
                <div className='flex justify-between items-center p-4'>
                    <strong onClick={() => window.location.reload()} className='cursor-pointer text-3xl text-violet-600 font-extrabold'>&lt;Tauheed /&gt; </strong>
                    <div className='flex gap-8'>
                        <p onClick={() => handleScroll(refs.about)} className='cursor-pointer p-1 text-center text-2xl border-none rounded h-[40px] w-[110px] hover:text-violet-700 hover:bg-violet-300 text-purple-400'>About</p>
                        <p onClick={() => handleScroll(refs.education)} className='cursor-pointer p-1 text-center text-2xl border-none rounded h-[40px] w-[110px] hover:text-violet-700 hover:bg-violet-300 text-purple-400'>Education</p>
                        <p onClick={() => handleScroll(refs.experience)} className='cursor-pointer p-1 text-center text-2xl border-none rounded h-[40px] w-[120px] hover:text-violet-700 hover:bg-violet-300 text-purple-400'>Experience</p>
                        <p onClick={() => handleScroll(refs.skills)} className='cursor-pointer p-1 text-center text-2xl border-none rounded h-[40px] w-[110px] hover:text-violet-700 hover:bg-violet-300 text-purple-400'>Skills</p>
                        <p onClick={() => handleScroll(refs.services)} className='cursor-pointer p-1 text-center text-2xl border-none rounded h-[40px] w-[110px] hover:text-violet-700 hover:bg-violet-300 text-purple-400'>Services</p>
                        <p onClick={() => handleScroll(refs.projects)} className='cursor-pointer p-1 text-center text-2xl border-none rounded h-[40px] w-[110px] hover:text-violet-700 hover:bg-violet-300 text-purple-400'>Projects</p>
                        <p onClick={() => handleScroll(refs.contact)} className='cursor-pointer p-1 text-center text-2xl border-none rounded h-[40px] w-[110px] hover:text-violet-700 hover:bg-violet-300 text-purple-400'>Contact</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
