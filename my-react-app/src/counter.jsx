import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    const HandleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }

    const HandleReduce=()=>{
        const newCount = count - 1;
        setCount(newCount)
    }

    // console.log(abc)
    return (
        <div style={{ border: '2px solid red', paddingBottom: '10px', borderRadius: "10px" }}>
            <h3>Counter: {count}</h3>
            <button  style={{ backgroundColor:'green', color:'white', borderRadius: "10px" }} onClick={HandleAdd}>Add</button> <br /><br />
            <button style={{ backgroundColor:'red', color:'white', borderRadius: "10px" }}  onClick={HandleReduce}>Reduce</button>
        </div>
    )
}