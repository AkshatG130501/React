import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex h-[520px]'>
        <div className='flex w-1/2  justify-end mr-2 h-[210px] mt-[159px]'>
        <div className='flex flex-col gap-y-5 bg-gray-300 rounded-lg p-6 shadow-md w-1/2'>
          <div className=''>
              <p className='text-3xl font-bold'>Get in Touch:</p>
              <p>Fill form to start conversation</p>
          </div>
          <div className='flex flex-col gap-y-3'>
            <div className='flex'>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
            <p className='ml-2'>Jaipur, Rajasthan</p>
            </div>
            <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
            <p className='ml-2'>9999999999</p>
            </div>
            <div className='flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
            <p className='ml-2'>guptaakshat370@gmail.com</p>
            </div>
          </div>
        </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col justify-center gap-y-3'>
              <input className='h-[40px] w-[250px] outline outline-1 rounded-lg px-2' type='text' placeholder='Full Name'/>
              <input className='h-[40px] w-[250px] outline outline-1 rounded-lg px-2' type='email' placeholder='Email'/>
              <input className='h-[40px] w-[250px] outline outline-1 rounded-lg px-2' type='text' placeholder='Phone Number'/>
              <button className='text-white bg-red-500 rounded-lg h-[40px] w-[150px]'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact