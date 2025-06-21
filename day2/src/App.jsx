import { useState } from 'react'
import './App.css'


function App() {

  let [counter, setcounter] = useState(12)
  
  const addTriple=() =>{
    for(let i=0;i<3;i++)
    {
      setcounter(prevCounter =>prevCounter+1); //this is the best way to update the state as it is asynchronous and we can use the previous value to update the current value
      //setcounter(counter+1); //this is not the best way to update the state as it is asynchronous and we cannot use the previous value to update the current value
    }
  }
 const  removeValue=()=>{  //it is always better to write function separetly and then call it in the button
  if(counter<=0)   
  {
    alert("ruk ja miya aur kitti niche jaata");
    return;
  }
  setcounter(counter-1);
 }
  return (
    //also u ccant write commments below this aka div me nai likh sakte and wo jo inline arrow function kare better not to do as we can see if any logic is requierd then it gets messier 
    <>
      <h1>chai aur react</h1>   
      <button onClick={()=> {if (counter>=20) {alert("abi kitti uppar jaata"); return; } setcounter(counter+1)}} >add value {counter} </button>
      <br></br>
      <button onClick={removeValue}> remove value {counter}</button>
      <button onClick={addTriple}> add thrice {counter} </button>

    </>
  )
}

export default App
/*
had some convo with gpt to bring clarity just for reference
✅ Your understanding (polished):
"setState is async by meaning here the states don't update until the whole function is executed."

✅ 100% correct.

React waits for your function (event handler/render function/etc.) to finish before applying any state updates.

"It batches something whatever u called it for optimization purposes."

✅ Right again.

React batches multiple setState calls together to:

avoid unnecessary re-renders

improve performance

keep behavior predictable

This “batching” means if you call setState 3 times in a row, React combines them into one final update (unless you use the functional form, which does apply all 3).

"Hence if I write log counter inside the function, it will say 'not happening big boy'"

😂 Absolutely right, in spirit and tech!

If you write:

js
Copy
Edit
setCounter(counter + 1);
console.log(counter); // Still prints the old value!
React says: “Not happening, big boy. I haven’t updated it yet. Wait till I’m done with your whole function first.”

"It is the help given by React to us. It controls the state, not us."

✅ ✅ 🔥

Yes — React manages the state lifecycle, not you. That’s why it’s called a declarative library.
You say: “I want the state to be this,” and React figures out the best time and way to apply that.

"If it were to be sync then would've updated then and there, but it is no more React thingy."

Exactly.

If state updated immediately (like regular variables), React would:

Lose control over updates

Waste performance

Introduce UI bugs or out-of-sync rendering
That would turn React into a manual, imperative mess, not the nice declarative UI engine it is.
*/