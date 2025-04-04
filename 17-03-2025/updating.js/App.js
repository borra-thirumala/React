import React,{Component} from 'react'
export default class App extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    static getDerivedStateFromProps(props,state){
        console.log("derived state from props")
        return ({count:props.count})
    }
    render(){
        console.log("rendering")
        return(
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}