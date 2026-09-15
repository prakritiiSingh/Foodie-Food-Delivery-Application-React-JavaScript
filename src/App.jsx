import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import RestaurantDetails from "./pages/RestaurantDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";

import { CartProvider } from "./context/CartContext";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Profile from "./pages/Profile";




function App() {
  return (
    <CartProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route
            path="/restaurants"
            element={<Restaurants />}
          />


          <Route
            path="/restaurants/:id"
            element={<RestaurantDetails />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/checkout"
            element={<Checkout />}
          />

          <Route
            path="/order-success"
            element={<OrderSuccess />}
          />

          <Route
            path="/login"
            element={<Login />}
          />
          <Route
           path="/register"
           element={<Register />}
          />
          <Route
            path="/orders"
            element={<Orders />}
          />
          <Route
            path="/orders/:id"
            element={<OrderDetails />}
          />
          <Route path="/profile" 
          element={<Profile />} 
          />
          

        </Routes>

      </BrowserRouter>

    </CartProvider>
  );
}

export default App;