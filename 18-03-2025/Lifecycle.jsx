import React from "react";

class Lifecycle extends React.Component{
constructor(){
    super()
    this.state={
        count:0
    }
    console.log("hello from constructor")
}
static getDerivedStateFromProps(){
    console.log("Hello from getDerivedStateFromProps");
    return null;
    
}
render(){
    return(
        <>hello from lifecycle
        {console.log("hello from render")}
        </>
    )
}
}
export default Lifecycle