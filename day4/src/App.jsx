import { useState } from 'react'
import './index.css'
function App() {
  const [colour, setColour] = useState("beige")

  return (
    <>
    <div className="w-full h-screen duration-200 ease-in-out"  style={{backgroundColor: colour}}>
    </div>
    <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className= " flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl "> 
        <button className="outline-none px-4 rounded-full text-white " style={{backgroundColor: "red"}} onClick= {()=> setColour("red")}>red</button>
        <button className="outline-none px-4 rounded-full text-white " style={{backgroundColor: "green"}} onClick= {()=> setColour("green")}>green</button>
        <button className="outline-none px-4 rounded-full text-white " style={{backgroundColor: "grey"}} onClick= {()=> setColour("grey")}>grey</button>
        <button className="outline-none px-4 rounded-full text-white " style={{backgroundColor: "blue"}} onClick= {()=> setColour("blue")}>blue</button>
        <button className="outline-none px-4 rounded-full text-white " style={{backgroundColor: "black"}} onClick= {()=> setColour("black")}>black</button>
      </div>
    </div>
    
    </>
  )
}

export default App
//// ✅ React expects a function for onClick, not the result of a function call.

// ❌ WRONG:
// onClick={setColour("red")} 
// → This calls the function immediately during render and passes its result (undefined) to onClick.

// ✅ CORRECT:
// onClick={() => setColour("red")}
// → This passes an anonymous function as a callback, which React will call only when the button is clicked.

// 🔍 Why we use double curly braces in `style`:
// style={{ backgroundColor: colour }}
// → First {} is for embedding JS expression in JSX
// → Second {} is the actual JS object being passed as inline CSS

// ✅ Callback Explanation:
// - We're passing a function (callback) to be called later.
// - `() => setColour("red")` is an arrow function that calls `setColour("red")` when executed.
// - React stores this function and runs it only on user click event.

// 🧠 React's onClick needs a function reference, not the result of calling a function.
