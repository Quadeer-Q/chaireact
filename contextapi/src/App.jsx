import { useState } from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './Context/UserContextProvider'
function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Hi welcome to testing context api</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  )
}

export default App
