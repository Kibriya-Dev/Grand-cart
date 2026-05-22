import "./Payment.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
function Payment() {
    const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { items, address, total } = location.state || {};

  const [method, setMethod] = useState("cod");

  // 🔥 MUST be inside component
const currentUser =
  JSON.parse(localStorage.getItem("user"));

  const handlePlaceOrder = () => {
    if (!currentUser) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    if (!items || items.length === 0) {
      alert("No items found");
      return;
    }

    const newOrder = {
  id: Date.now(),
  userId: user.id,
  items,
  address,
  total,
  status: "Pending",
  date: new Date().toLocaleString()
};

    const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];

    localStorage.setItem(
      "orders",
      JSON.stringify([newOrder, ...oldOrders])
    );

    alert("Order Placed Successfully 🎉");

    navigate("/success");
  };

  return (
    <div className="payment-page">

      <h1>Payment</h1>

      <div className="box">
        <h2>Order Summary</h2>

        {items?.map((item) => (
          <div key={item.id} className="row">
            <p>{item.title}</p>
            <p>Qty: {item.qty}</p>
            <p>Rs {item.price * item.qty}</p>
          </div>
        ))}

        <h3>Total: Rs {total}</h3>
      </div>

      <div className="box">
        <h2>Delivery Address</h2>
        <p>{address}</p>
      </div>

      <div className="box">
        <h2>Payment Method</h2>

        <label>
          <input
            type="radio"
            value="cod"
            checked={method === "cod"}
            onChange={(e) => setMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        <br />

        <label>
          <input
            type="radio"
            value="card"
            checked={method === "card"}
            onChange={(e) => setMethod(e.target.value)}
          />
          Card Payment
        </label>
      </div>

      <button onClick={handlePlaceOrder}>
        Place Order
      </button>

    </div>
  );
}

export default Payment;