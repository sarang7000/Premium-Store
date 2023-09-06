import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Routes, Route } from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';
import Cart from './Components/cart';


function App() {
  return (
      <>
        <Navbar />
        <Cart/>
        <Routes>
          <Route exact path="/" Component={Home}/>
          <Route exact path="/Products" Component={Products}/>
          <Route exact path="/Products/:id" Component={Product}/>
        </Routes>
      </>
  );
}

export default App;
