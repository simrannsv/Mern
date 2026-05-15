//usestate is a hook that allows us to add state to functional components in React. 
// It returns an array with two elements: the current state value and a function to update that state.
//We can use useState to manage and update the state of our components, allowing them to re-render when the state changes.


import { useState } from "react";

function Counter()
{
    const[count,setCount]=useState(0);
    const increment=()=>{
        setCount(count + 1);
    };
    const decrement=()=>{
        setCount(count-1);
    };
    console.log("counter component");
    return(
        <div className="text-center p-10 border">
            <h1 className="text-6xl">Count:{count}</h1>


        </div>
    )

}
