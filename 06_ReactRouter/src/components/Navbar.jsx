import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='flex w-full h-[70px] shadow-lg items-center justify-around'>
        <div>Your Logo</div>
        <div className='flex gap-x-4'>
          <NavLink className={({isActive})=>`${isActive?"text-red-500":"text-gray-500"}`} to='/'>Home</NavLink>
          <NavLink className={({isActive})=>`${isActive?"text-red-500":"text-gray-500"}`} to='/about'>About</NavLink>
          <NavLink className={({isActive})=>`${isActive?"text-red-500":"text-gray-500"}`} to='/contact'>Contact</NavLink>
          <NavLink className={({isActive})=>`${isActive?"text-red-500":"text-gray-500"}`} to='/github'>Github</NavLink>
        </div>
        <div className='flex gap-x-4'>
          <button>Login</button>
          <button className='text-white bg-red-500 rounded-lg h-[40px] w-[100px]'>Get started</button>  
        </div>  
      </div>
  )
}

export default Navbar