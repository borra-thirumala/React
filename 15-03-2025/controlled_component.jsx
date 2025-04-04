import React,{Component} from 'react'
export default class Controlled_comp extends Component {
    constructor() {
        super()
        this.state={
            name:"",
            email:"",
            password:"",
            mob:0
        }

    }

    handleChange=(event)=>{
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
        
    }


render() {
    return (
    <div>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder='name'/>
        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder='email'/>
        <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder='password'/>
        <input type="text" name="mob" value={this.state.mob} onChange={this.handleChange} placeholder='mob'/>

        <h1>name:{this.state.name}</h1>
        <h1>email:{this.state.email}</h1>
        <h1>password:{this.state.password}</h1>
        <h1>mob:{this.state.mob}</h1>

    </div>
    )

}
}
