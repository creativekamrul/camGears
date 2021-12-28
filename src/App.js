import Home from "./components/home/Home";
import AllProducts from "./components/all-products/AllProducts";
import Cart from "./components/cart/Cart";
import NotFound from "./components/NotFound";
import SingleProduct from "./components/single-product/SingleProduct";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/all-products" element={<AllProducts/>}/>
        <Route path="/all-products/:product_id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
