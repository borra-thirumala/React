import React from 'react';
class Firstcomp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            name:"thirumala"
        }
    }

render(){
return<>
<h2>{this.state.name}</h2>
<h2>{this.state.count}</h2>
<h3>{this.props.user}</h3>

<button onClick={()=>{
    this.setState({count:this.state.count+10})
}}>increment</button>

</>
}
}
export default Firstcomp