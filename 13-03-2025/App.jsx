
import Nested1 from "./Nested1.jsx";
import Nested2 from "./Nested2.jsx";
function App(){
    let name="react component"
    return (
        <>
        <h1>{name}</h1>
        <Nested1></Nested1>
        <Nested2></Nested2>
        
        </>
    )
}

export default App