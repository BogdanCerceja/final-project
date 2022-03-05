import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/products" element={<div>Products</div>} />
          <Route path="/products/:productId" element={<div>Product Details</div>} />
          <Route path="/categories" element={<div>Categories</div>} />
          <Route path="/products/:categoryName" element={<div>Category Details</div>} />
          <Route path="/cart" element={<div>Shopping Cart</div>} />
          <Route path="/checkout" element={<div>Checkout</div>} />
          <Route path="/thanks" element={<div>Thank You</div>} />
          <Route path="/faq" element={<div>Frequently asked questions</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>

      </BrowserRouter>

      <footer>Footer</footer>

    </div>
  );
}

export default App;
