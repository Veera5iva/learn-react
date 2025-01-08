import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [lengh, setLengh] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)
  
  const generatePAssword = useCallback(() => { // useCallback - it stores the majority of the function part in the cache 
                                               // because we want to generate password again and again and the majority of the part 
                                               //is not going to change only passwprd field is going to chaange
    let pass = ""                              
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";
    for( let i = 0; i < lengh; i++){
      const char = Math.floor(Math.random() * str.length);
      pass += str[char]
    }
    setPassword(pass)
    
  }, [lengh, numberAllowed, charAllowed]) // dependencies
  
  useEffect(() => {   // useEffect - basically it triggers the execution of functions inside it  when the dependency changes
    generatePAssword()
  }, [lengh, numberAllowed, charAllowed, generatePAssword])

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }
  
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center text-2xl my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden'>
        <input
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPassword}
        className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
      </div>

      <div className='flex mt-3 text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
          min={8}
          max={20}
          value={lengh}
          className='cursor-pointer'
          onChange={(e) => setLengh(e.target.value)}
          type="range"
          name=""
          id=""
          />
          <label htmlFor="length">Length: {lengh}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input defaultChecked = {numberAllowed}
          onChange={() => setNumberAllowed((prev)=> !prev)}
          type="checkbox"
          name="" id="" />
          <label htmlFor="numbers">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input defaultChecked = {charAllowed}
          onChange={() => setCharAllowed((prev)=> !prev)}
          type="checkbox"
          name="" id="" />
          <label htmlFor="charaters">Characters</label>
        </div>

      </div>

    </div>
    </>
  )
}

export default App
