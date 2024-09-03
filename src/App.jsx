import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Shop from "./pages/shop/Shop";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/shop" element={<Shop />}/>
    </Routes>
  );
}

export default App;
