
import React from 'react'
const Nested5=({val})=>{
    console.log(val)
    return (
        <>
        <div>Nested5</div>
        <h3 style={{color:"red"}}>{val}</h3>
        </>
    )
}
export default Nested5