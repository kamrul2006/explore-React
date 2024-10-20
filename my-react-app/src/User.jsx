import { useEffect, useState } from "react"
import Use from "./use"

export default function User() {
    const [users, setUsers] = useState([])
    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    }, [])
    return (
        <div className="cla">
            <p className="cl">Total User Data: {users.length} </p>
            {
                users.map(us=>
                <Use use={us}></Use>)
            }
        </div>
    )
}






/**
 * 1. Declare a useState to hold data.
 * 2.  useEffect with callback and dependency array.
 * 3. Use fetch to load data.
 * 4. Set loaded data to state.
 * 5. Display Data on the component.
 */