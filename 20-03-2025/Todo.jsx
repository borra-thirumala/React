import React from 'react'
import { useState} from 'react'

const Todo = () =>{
    const [todo,setTodo]=useState([])
    console.log(todo)
    const handleTodo=(event)=>{
        event.preventDefault()
        console.log("push todo",event.target.value)
        setTodo(...todo,event.target.value)
    }

    return (
        <div>

            <input type='text' placeholder='enter todo' onChange={handleTodo} />
            {/*<button onClick={handleTodo}>Button</button>}
            {todo.map((ele,ind)=>{
                return <p key={ind}>{ele}</p>
            })*/}


        </div>
    )
}
export default Todo