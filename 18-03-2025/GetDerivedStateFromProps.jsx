import React from "react";

class GetDerivedStateFromProps extends React.Component{
constructor(props){
    super(props)
    this.state={
        count:0
        //count:props
    }
    console.log("hello from constructor")
}



static getDerivedStateFromProps(props,state){
    console.log("Hello from getDerivedStateFromProps");
     if(props.count===state.count){
        console.log(props.count)
         return null
     }
     else{
        return ({count:props.count});
     }
   
    
    //return null

    
}

render(){
    return(
        <>hello from getDerivedStateFromProps
        <h1>{this.state.count}</h1>
        {console.log("hello from render")}
        </>
    )
}
}
export default GetDerivedStateFromProps