import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Product from './product';
import Product2 from './Product2';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/product2/:id' element={<Product2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
