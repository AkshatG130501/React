import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex justify-around bg-gray-100 shadow-xl'>
        <div className='font-bold'>Your Logo</div>
        <div className='flex gap-x-12'>
            <div className='flex flex-col items-start gap-y-4'>
                <p className='font-bold'>Resources</p>
                <button className='text-gray-500'>Home</button>
                <button className='text-gray-500'>About</button>
            </div>
            <div className='flex flex-col items-start gap-y-4'>
                <p className='font-bold'>Follow us</p>
                <button className='text-gray-500'>Github</button>
                <button className='text-gray-500'>Discord</button>
            </div>
            <div className='flex flex-col items-start gap-y-4'>
                <p className='font-bold'>Legal</p>
                <button className='text-gray-500'>Privacy Policy</button>
                <button className='text-gray-500'>Terms & Conditions</button>
            </div>
        </div>
    </div>
    <div>
        <p className='text-center text-gray-500'>© 2024 Akshat Gupta. All rights reserved.</p>
    </div>
    </div>
  )
}

export default Footer