import React, {Component,createRef} from 'react'
export default class Uncontrolled_comp extends Component {
    constructor() {
        super();
        this.nameRef=createRef();
        this.emailRef=createRef();
        console.log(this.nameRef,this.emailRef)
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.nameRef=this.nameRef.current.value
        this.emailRef=this.emailRef.current.value
        console.log(this.nameRef,this.emailRef)
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" ref={this.nameRef} defaultValue="name"/>
                    <input type="text" name="email" ref={this.emailRef} defaultValue="email"/>
                    <button type="submit">submit</button>
                    
                </form>
            </div>
        );
    }
}