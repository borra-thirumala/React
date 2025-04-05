import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Product = () =>{
    const {id}=useParams() //from here we get id,object destructuring
    console.log(id)

    const [pro,setPro]=useState(null) //creating state
    //const [P_id,setid]=useState(null) //state
    

    useEffect(()=>{
        
        fetch(`https://fakestoreapi.com/products/${id}`) //we pass id here
        .then(res=>res.json())
        //.then(json=>console.log(json))
        .then(json=>setPro(json)) 
    },[id])
    return (
        <div>
            Product
            <hr/>
            <h1>
                {pro?.title}
            </h1>
            <img src={pro?.image} alt="Product" style={{ width: "200px", height: "200px" }} />

            <hr/>

            <button>
                <Link to={`/product/${10}`}>go to product 15</Link>
            </button>
            
            

            
            
            </div>
    )
}

export default Product