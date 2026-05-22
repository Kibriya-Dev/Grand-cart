import "./Checkout.css";
import { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";


function Checkout() {

  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const location = useLocation();
  const buyNowItem = location.state?.buyNowItem;

  const items = buyNowItem ? [buyNowItem] : cart;
const savedAddress =
  JSON.parse(localStorage.getItem("address"));

const [address, setAddress] = useState(
  savedAddress?.address || ""
);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleNext = () => {
    if (!address) return alert("Enter address");

    navigate("/payment", {
      state: { items, address, total }
    });
  };

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      {/* ADDRESS */}
      <div className="box">
  <h2>Delivery Address</h2>

  {savedAddress ? (
    <div className="saved-address">
      <h3>{savedAddress.name}</h3>
      <p>{savedAddress.phone}</p>
      <p>{savedAddress.city}</p>
      <p>{savedAddress.address}</p>
    </div>
  ) : (
    <button onClick={() => navigate("/address")}>
      ➕ Add Address
    </button>
  )}

  <textarea
    placeholder="Edit address..."
    value={address}
    onChange={(e) => setAddress(e.target.value)}
  />
</div>
      {/* ITEMS */}
      <div className="box">
        <h2>Order Summary</h2>

        {items.map(item => (
          <div key={item.id} className="row">
            <p>{item.title}</p>
            <p>Qty: {item.qty}</p>
            <p>Rs {item.price * item.qty}</p>
          </div>
        ))}

        <h3>Total: Rs {total}</h3>
      </div>

      <button onClick={handleNext}>
        Continue to Payment
      </button>
      

    </div>
  );
}

export default Checkout;