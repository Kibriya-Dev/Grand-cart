import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "./Cart.css";

function Cart() {

  const {
    cart,
    totalPrice,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) return;
    navigate("/checkout");
  };

  return (
    <div className="cart-page">

      <div className="cart-header">
        <h1>Shopping Cart</h1>
        {cart.length > 0 && (
          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything yet.</p>
          <button onClick={() => navigate("/")} className="shop-now-btn">
            Shop Now
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>

                <img src={item.image} alt={item.title} />

                <div className="cart-item-info">
                  <h3>{item.title}</h3>
                  <p className="price">Rs {item.price}</p>

                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>

                <div className="cart-item-total">
                  <p>Rs {item.price * item.qty}</p>
                  <button 
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h2>Total Amount: <span>Rs {totalPrice}</span></h2>
            
            <div className="summary-buttons">
              <button onClick={() => navigate("/")} className="continue-btn">
                Continue Shopping
              </button>
              <button onClick={handleCheckout} className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;