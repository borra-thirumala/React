import React,{Component} from 'react';
export default class Class_comp extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }

    handleDecrement=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1})
        }
        else{
            this.setState({count:0})
        }
    }

    render(){
        return(
            <div>
                hello from class 
                <h1>Count:{this.state.count}</h1>

                <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </div>
        )
    }
}
