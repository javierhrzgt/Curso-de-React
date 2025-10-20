import { useState } from "react"

const NameForm = () => {
    const [name,setName] = useState("")
    return(
        <div>
            <input
                type="text"
                placeholder="Type your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Hola , {name || "Visitante"}</p>
        </div>
    )
}

export default NameForm