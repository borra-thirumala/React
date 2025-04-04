import GetDerivedStateFromProps from './getderivestatefromprops.jsx';  
import GetDerive2 from './getderive2.jsx';  
import ComponentDidMount from './ComponentDidMount.jsx'


function App() {
  return (
    <div className="App">
    
      <GetDerivedStateFromProps count={10}/>
      <GetDerive2/>
      <ComponentDidMount/>
    </div>
  );
}

export default App;