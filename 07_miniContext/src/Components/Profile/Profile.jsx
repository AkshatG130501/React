import React from 'react'
import UserContext from '../../Context/UserContext'
import { useContext } from 'react'

const Profile = () => {
  const {user} = useContext(UserContext);

  if(!user) return <div className=' flex justify-center mt-10 text-white text-3xl'>Please Login</div>

  return <div className='flex justify-center mt-10 text-white text-3xl '>Welcome: {user.username}</div>
}

export default Profile