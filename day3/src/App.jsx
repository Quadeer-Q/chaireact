  import { useState } from 'react'
  import Card from './components/card.jsx'


  function App() {
    const [count, setCount] = useState(0)
    let  myObj={
      name: "quadeer",
      age: 20
    }
    let myObj2={
      name: "chup ree"
    }
    return (
      <>
      <div className="bg-blue-500 text-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold">Hello Tailwind!</h1>
      </div>
      <Card objName= {myObj}/>   {/*react uses lowercase jsx tags for html elements and will be treated as such, components should be captilised even during import*/ }
      {/* in react the img tags and Components should always be closed i e all tags shluld be clsoing tags ig */}
      < Card objName= {myObj2}/>
      </>
    )
  }

  export default App
