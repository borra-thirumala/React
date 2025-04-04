import { useState } from "react";

function App(){
    const [value,setValue]=useState(0)
    const [data,setData]=useState([])
    const [arr,setArr]=useState(["hi","hello","heyy"])
    console.log(data)

    const handleIncrement=()=>{
        console.log("increment")
        setValue(value+1)
        setData(arr[value])

    }

    const handleChange=(event)=>{
        
    }
}