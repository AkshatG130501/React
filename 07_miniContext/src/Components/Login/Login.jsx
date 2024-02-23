import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../../Context/UserContext'

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(UserContext)

    const handleClick = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }

  return (
    <div className='flex justify-center mt-[200px]'>
        <div className='bg-gray-300 flex flex-col w-[400px] h-[300px] rounded-lg gap-y-10'>
        <div className='flex justify-center mt-3'>
            <h1 className=' font-mono text-2xl font-bold'>User Login</h1>
        </div>
        <div className='flex flex-col gap-y-3 ml-14'>
            <input value={username} onChange={(e)=>setUsername(e.target.value)} className='font-mono rounded-lg w-[300px] h-[50px] pl-2  ' type="text" placeholder="Username" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} className='font-mono rounded-lg w-[300px] h-[50px] pl-2 ' type="password" placeholder="Password" />
        </div>
        <div className='flex justify-center'>
            <button onClick={handleClick} className='font-mono text-xl text-white bg-red-500 rounded-lg w-[80px] h-[35px]'>LogIn</button>
        </div>
    </div>
    </div>
  )
}

export default Login