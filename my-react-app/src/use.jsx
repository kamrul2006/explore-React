import './index.css'
export default function Use(use) {
    console.log(use)
    return (

        <div  className="cl">
            <h4>Name: {use.use.name}</h4>
            <p>Email: {use.use.email }</p>
            <p>User Name: {use.use.username }</p>
        </div>

    )
}