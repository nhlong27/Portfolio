import React from 'react'
import {AiOutlineGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

const About = () => {
  return (
    <div className='mt-[20rem] md:mt-0 h-[50rem] flex justify-center items-start'>
      <div className='w-1/2 h-5/6 flex flex-col justify-center items-center text-stone-900 font-sans'>
        <h1 className=' text-[3.2rem] font-semibold tracking-wide pb-4'>Nguyen Hoang Long</h1>
        <h2 className='text-3xl pb-4'>Front-end Developer</h2>
        <button className='text-xl py-2 px-4 ring-2 ring-stone-900 rounded-sm my-8 bg-opacity-10 bg-stone-900 font-semibold text-stone-600 hover:bg-opacity-100 hover:text-white transition-full duration-200'>View Projects</button>
        <div className='py-4 flex gap-8 items-center justify-center'>
          <a href='' target='_blank' className='opacity-60 hover:shadow-xl rounded-full hover:opacity-100 '>
            <AiOutlineGithub size={50} />
          </a>
          <a href='' target='_blank' className='opacity-60 hover:shadow-xl hover:opacity-100 '>
            <BsLinkedin size={40}/>
          </a>
          <a href='' target='_blank' className='opacity-60 hover:shadow-xl hover:opacity-100 px-6 py-2 text-white grid place-items-center leading-4 bg-stone-900 rounded-sm tracking-wider shadow-lg h-[2.5rem]'>Resume</a>
        </div>
      </div>
    </div>
  )
}

export default About