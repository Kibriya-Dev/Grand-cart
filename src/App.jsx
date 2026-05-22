import { useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";

import CartProvider from "./context/CartContext";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { AuthProvider } from "./context/AuthContext";
import Address from "./pages/Address";
import Orders from "./pages/Orders";
function App() {

  const [cartOpen, setCartOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  return (

    <AuthProvider>
    <CartProvider>

      <BrowserRouter>

        <Navbar
          setCartOpen={setCartOpen}
          search={search}
          setSearch={setSearch}
        />

       

        <Routes>

          <Route
            path="/"
            element={
              <Home search={search} />
            }
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />
<Route path="/wishlist" element={<Wishlist />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/payment" element={<Payment />} />
<Route path="/success" element={<Success />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/address" element={<Address />} />
<Route path="/orders" element={<Orders />} />
        </Routes>

      </BrowserRouter>

    </CartProvider>
    </AuthProvider>
  );
}

export default App;