import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
  const data = useLoaderData()

  return (
    <div>
        <div className='w-screen h-[530px]'>Github Followers :  {data.followers}</div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
  const response = await fetch('https://api.github.com/users/AkshatG130501')
  return response.json()
}