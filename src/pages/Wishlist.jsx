import "./Wishlist.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Footer from "../components/Footer";

function Wishlist() {

  const navigate = useNavigate();

  // ✅ SAFE (NO CRASH)
  const { wishlist = [], addToCart, addToWishlist } =
    useContext(CartContext);

  return (
    <div className="wishlist-page">
        <div className="wish">

      <h1 className="title">❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="empty-box">
          <h2>No Items Yet</h2>
          <p>Save your favourite products ❤️</p>

          <button onClick={() => navigate("/")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="wishlist-grid">

          {wishlist.map(item => (
            <div key={item.id} className="wishlist-card">

              <div
                className="img-box"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img src={item.image} />
              </div>

              <div className="info">
                <h3>{item.title}</h3>
                <p>Rs {item.price}</p>

                <div className="actions">

                  <button
                    className="cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>

                  <button
                    className="remove-btn"
                    onClick={() => addToWishlist(item)}
                  >
                    Remove
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}

      <Footer />
      </div>

    </div>
  );
}

export default Wishlist;