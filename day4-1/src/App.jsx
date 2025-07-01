import { useState, useCallback,useEffect, useRef } from 'react'

function App() {

  const [length, setlength]= useState(8)
  const [numberallowed, setNumberAllowed] =useState(false)
  const [charallowed, setCharAllowed]= useState(false)
  const [password, setPassword ]= useState("")
  const inputRef= useRef(null)

  const passwordGenerator= useCallback( () => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+= "0123456789"
    if(charallowed) str+= "!@#$%^&*()_+[]{}|;:,.<>?/~`"

    for(let i=0; i<length; i++){
      let char=Math.floor(Math.random()*str.length)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberallowed, charallowed, setPassword])
  
  const copyToClipboard= useCallback(() => {
      inputRef.current.select();
      inputRef.current.setSelectionRange(0,100)
      window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberallowed, charallowed, passwordGenerator  ])
  
  return (
    <>
      <div className= 'w-full max-w-md mx-auto shadow-md rounded-lg  px-4 my-8 text-orange-500 bg-gray-700 py-4'> <h1 className='text-white text-center'>Password Generator </h1> 
      <div className= 'flex shadow rounded-lg overflow-hidden bg-white mb-4 my-4  '>
        <input type="text"
        value={password}
        className= 'outline-none w-full px-4 py-2 text-white-900 '
        placeholder='Generated Password'
        readOnly
        ref={inputRef}   /*linking the DOM element to the ref variable. so that we can use it later as inputRef.current as in the callback above  */ 
        />
        <button className= " outline-none bg-blue-700 text-white px-4 py-2" onClick={copyToClipboard}>
        copy
        </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className=' flex items-center gap-x-2'>
            <input type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange= {(e)=>{setlength(e.target.value)}}
            />
            <label>length: {length}</label>
         </div>
        </div>
        <div className='flex items-center gap-x-2'>
          <input
          type='checkbox'
          checked={numberallowed}
           onChange= {()=> {setNumberAllowed((prev)=>!prev)}}
          />
          <label>Include Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type='checkbox'
          checked={charallowed}
          onChange= {()=> {setCharAllowed((prev)=>!prev)}}
          />
          <label>Include Special Characters</label>
          </div>
          <div className="mt-4">
  <button
    onClick={passwordGenerator}
    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
  >
    Generate Password
  </button>
</div>  
      </div>
    </>
  )
}
export default App
