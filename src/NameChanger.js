import React from "react";
import { useState } from "react";

function NameChanger(){
    const [name,setName] = useState("MANUSREE")
    const changeName = ()=> setName("SAVITA")
    return(
        <div>
            <h2>Name: {name} </h2>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default NameChanger;