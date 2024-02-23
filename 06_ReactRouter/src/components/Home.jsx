import React from 'react'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'


const Home = () => {
  return (
    <div>
        <div className='flex h-[700px]'>
          <div className='flex justify-center mt-20 w-1/2'>
            <div className='w-1/2 '>
            <img src={img1} alt='home'/>
            </div>
          </div>
          <div className='flex flex-col items-end justify-center ml-80 gap-y-4'>
            <div className='flex flex-col items-end'>
            <p className='text-4xl font-bold'>Download now</p>
            <p className='text-2xl'>Lorem Ipsum</p>
            </div>
            <div>
              <button className='text-white bg-red-500 rounded-lg h-[40px] w-[150px]'>Download now</button>
            </div>
          </div>
        </div>
        <div>
          <img src={img2} alt='img2'/>
        </div>
    </div>
  )
}

export default Home