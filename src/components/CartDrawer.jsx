import "./CartDrawer.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartDrawer({ open, setOpen }) {

  const navigate = useNavigate();

  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    cartTotal
  } = useContext(CartContext);

  return (
    <>
      {/* OVERLAY */}
      <div
        className={`cart-overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* DRAWER */}
      <div className={`cart-drawer ${open ? "open" : ""}`}>

        <div className="cart-header">
          <h2>Your Cart</h2>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="cart-items">

          {cart.length === 0 ? (
            <p className="empty-cart">Cart empty</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">

                <img src={item.image} alt={item.title} />

                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p>Rs {item.price}</p>

                  <div className="qty-box">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>
            ))
          )}

        </div>

        <div className="cart-footer">

          <h3>Total: Rs {cartTotal}</h3>

          <button
            className="checkout-btn"
            onClick={() => {
              setOpen(false);
              navigate("/checkout");
            }}
          >
            Checkout
          </button>

        </div>

      </div>
    </>
  );
}

export default CartDrawer;