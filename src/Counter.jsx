import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)
    const manageCount=()=>{
        const newCount=count+1;
        setCount(newCount);
    }

    return(
        <div>
            <h3>Count: {count}</h3>
            <button onClick={manageCount}>Add</button>
        </div>
    )
}