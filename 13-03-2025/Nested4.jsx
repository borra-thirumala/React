import React from 'react'
import Nested5 from "./Nested5.jsx";
const Nested4=()=>{
    let text="sashi"
    return (
        <>
        <div>Nested4</div>
        <Nested5 val={text}/>
        </>
    )
}
export default Nested4