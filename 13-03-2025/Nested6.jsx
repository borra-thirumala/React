import React from 'react'
import Conditional_rendering from './Conditional_rendering.jsx'
const Nested6=({val})=>{
    console.log(val)

    let details={
        username:"Thirumala",
        password:"123456"
    }
    return (
        <>
        <div>Nested6</div>
        <h3 style={{color:"red"}}>{val}</h3>
        <Conditional_rendering val={details}></Conditional_rendering>
        </>
    )
}
export default Nested6