import React from 'react'
import img1 from '../../assets/images/img1.jpg'
import ThemeContext from '../ThemeBtn/ThemeContext'
import { useContext } from 'react'

const Card = () => {

    const {theme} = useContext(ThemeContext)

  return (
    <div className='flex justify-center'>
        <div className='flex w-[400px] h-[500px] shadow-xl rounded-lg mt-[100px] flex-col '>
            <div className='flex justify-center h-[200px] ml-[50px] mr-[50px] mt-[70px]'>
                <img className='rounded-lg' src={img1} />
            </div>
            <div className=' flex justify-center mt-3'>
                <p className='text-2xl'>Beautiful Place</p>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Card