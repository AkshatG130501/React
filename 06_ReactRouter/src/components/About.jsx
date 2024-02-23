import React from 'react'
import Navbar from './Navbar'
import img3 from '../assets/images/img3.jpg'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <div className='flex'>
        <div className='w-[50%] h-screen '>
          <img className='w-[500px] h-[300px] mt-48 ml-32' src={img3}/>
        </div>
        <div className=' flex flex-col gap-y-5 ml-48 mt-64 '>
          <p className='text-3xl font-bold '>React Development is carried<br/>out by passionate developers</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ducimus illo explicabo iusto ea. Animi recusandae rerum consequatur vitae exercitationem necessitatibus error, deleniti eligendi aut beatae ea quo cum non.</p>
        </div>
      </div>
    </div>
  )
}

export default About