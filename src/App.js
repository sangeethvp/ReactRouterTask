import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import "./components/App.css"
import { useState} from 'react';
import ProductList from './components/ProductsList';
import CartPage from './components/CartPage.js';


function App() {

  const [cartItems,setCartItems]=useState([]);

  const addToCart = (product) => {
      setCartItems([...cartItems, product])
    };
  
    const removeFromCart = (id) => {
      setCartItems(cartItems.filter((item) => item.id !== id))
    };

  

  return (
    <Router>
    <div className="App">
     <nav >
      <ul className='flex justify-evenly p-10 text-4xl italic	text-blue-800	'>
        <li><h1>Shopping Page</h1></li>
        <li><Link to='/cart'>Cart {cartItems.length}</Link></li>
      </ul>
     </nav>
     <div>
      <Link to='/products' className='text-3xl font-bold italic hover:text-blue-500'>Show Products -></Link>
     </div>
     <Routes>

      <Route path='/products' element={<ProductList addToCart={addToCart} cartItems={cartItems}/>}/>
      <Route path='/cart' element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />}/>

     </Routes>
    </div>
    </Router>
  );
}

export default App;
