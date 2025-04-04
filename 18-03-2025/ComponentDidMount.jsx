import React from "react";

class ComponentDidMount extends React.Component{
constructor(props){
    super(props)
    console.log("hello from constructor")
    this.state={
        count:null,
        data:null
        //count:props
    }
    
}



componentDidMount(){
    console.log("component did mount")

    fetch ("https://fakestoreapi.com/products")
    .then((data)=>(data.json())
    .then((prodata)=>
        //console.log(data))
         this.setState({data:prodata}))
    
    .catch((err)=>
    console.log(err))

   
    )}

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
        <>
        {console.log(this.state.data)}
        <h1>{this.state.count}</h1>
        
        {this.state.data?.map((ele,index)=><h1 key={index}>{ele.title}</h1>)}
        {console.log("hello from render")}
        </>
    )
}
}
export default ComponentDidMount