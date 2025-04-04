import React from 'react'
const Conditional_rendering=({val})=>{
    console.log(val)
    if(val.username==="Thirumala" && val.password==="123456"){
        return <h1>Welcome user</h1>
    }
    else{
        return <>invalid crendentials</>
    }
}
export default Conditional_rendering