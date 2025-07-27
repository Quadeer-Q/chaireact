import React, { useContext,useState } from 'react'
import userContext from '../Context/userContext'

function Login() {
    const [username, setUsername]=useState('')
    const [password, setpassword]=useState('')

    const {setUser} = useContext(userContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})

    }

  return (
    <div>
        <h2>login</h2> 
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="UserName" />
        <input type="text" value={password} onChange={(e)=> setpassword(e.target.value)} placeholder="password" />
        <button onClick={handleSubmit}>Button</button>
    </div>
  )
}

export default Login