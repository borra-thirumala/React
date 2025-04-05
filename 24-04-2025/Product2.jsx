import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Product2 = () =>{
    const {id}=useParams()
    const navigate=useNavigate()
    //console.log(id)

    const [pro,setpro]=useState(null)
    //const [P_id,setid]=useState(null) //state
    

   

    useEffect(() => {
        if (id) {
            navigate(`/product/${id}`); // ✅ Now it correctly redirects
        }
    }, [id, navigate]);


    useEffect(()=>{
        
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        //.then(json=>console.log(json))
        .then(json=>setpro(json))
        .catch((err)=>setpro)
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

export default Product2