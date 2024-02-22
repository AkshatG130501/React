import './App.css'
import { useCallback, useEffect, useState, useRef } from 'react'

function App() {

  const [length,setLength] = useState(10);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState('');

  const handleLength = (e) => {
    setLength(parseInt(e.target.value));
  };

  const passwordGenerator = useCallback(() => {
    const numbers = '1234567890';
    const chars = '!@#$%^&*()_+';
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let password = '';
    if (number && characters) {
      letters += numbers + chars;
    } else if (number) {
      letters += numbers;
    } else if (characters) {
      letters += chars;
    }
    for (let i = 0; i < length; i++) {
      password += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    setPassword(password);
  },[length,number,characters,setPassword])

  useEffect(()=>{
    passwordGenerator();
  },[length,number,characters,passwordGenerator])

  const passRef = useRef(null);

  const handlecopyButton = useCallback(()=>{
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <h1 className='flex justify-center text-4xl text-white mt-4'>Password Generator</h1>
      <div className='sm:w-[600px] sm:h-[200px] w-[300px] h-[300px] bg-slate-900 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg'>
        <div className='flex justify-center mt-5'>
          <input type='text' ref={passRef} value={password} className='text-orange-500 text-xl font-normal rounded-l-lg sm:w-[400px] h-[40px] w-[200px]' readOnly></input>
          <button onClick={handlecopyButton} className='text-white bg-blue-700 rounded-r-lg w-[70px]'>Copy</button>
        </div>
        <div className='flex sm:flex-row flex-col items-center justify-center sm:gap-x-4 gap-y-3  mt-10'>
          <input onChange={handleLength} id='slider' className='cursor-pointer' type='range' min={5} max={25} step={1} defaultValue={10}></input>
          <label htmlFor='slider' className='text-orange-500'>Password Length: {length}</label>
          <div>
          <input id='check' className='cursor-pointer' type='checkbox' onChange={()=>{setNumber((prev)=>!prev)}}></input>
          <label htmlFor='check' className=' text-orange-500'>Numbers</label>
          </div>
          <div>
          <input id='char' className='cursor-pointer' type='checkbox' onChange={()=>{setCharacters((prev)=>!prev)}}></input>
          <label htmlFor='char' className='text-orange-500'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
