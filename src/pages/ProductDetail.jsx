import "./ProductDetail.css";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";   // ← useEffect added

import products from "../data/products";
import { CartContext } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/Footer";

function ProductDetail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();
  const { addToCart, addToWishlist, wishlist } = useContext(CartContext);

  const [qty, setQty] = useState(1);

  const product = products.find(p => p.id == id);

  if (!product) return <h2>Product not found</h2>;

  const isWishlisted = wishlist?.some(item => item.id === product.id);

  const related = products.filter(
    p => p.category === product.category && p.id !== product.id
  );

  // ==================== SCROLL TO TOP ====================
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // ==================== HANDLERS WITH LOGIN CHECK ====================
  const handleAddToCart = () => {
    if (!user) {
      alert("Please login to add items to cart");
      navigate("/login");
      return;
    }
    addToCart({ ...product, qty });
    alert("✅ Added to Cart!");
  };

  const handleBuyNow = () => {
    if (!user) {
      alert("Please login to buy this product");
      navigate("/login");
      return;
    }

    const orderItem = { ...product, qty };
    addToCart(orderItem);

    navigate("/checkout", {
      state: { buyNowItem: orderItem }
    });
  };

  const handleWishlist = () => {
    if (!user) {
      alert("Please login to add to wishlist");
      navigate("/login");
      return;
    }
    addToWishlist(product);
  };

  // ==================== RETURN ====================
  return (
    <div className="product-page-wrapper">

      {/* MAIN SECTION */}
      <div className="product-detail-page">

        {/* IMAGE */}
        <div className="detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        {/* INFO */}
        <div className="detail-info">

          <h1>{product.title}</h1>

          <div className="detail-price">
            <span className="new-price">Rs {product.price}</span>
            <span className="old-price">Rs {product.oldPrice}</span>
          </div>

          <p className="detail-description">
            High quality product with fast delivery all over Pakistan.
          </p>

          {/* QTY */}
          <div className="qty-section">
            <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          {/* BUTTONS */}
          <div className="detail-buttons">

            <button className="add-cart-btn" onClick={handleAddToCart}>
              Add To Cart
            </button>

            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>

            <button 
              className="wishlist-btn"
              onClick={handleWishlist}
              style={{ background: isWishlisted ? "red" : "#c9a227" }}
            >
              ❤️ Wishlist
            </button>

          </div>

        </div>

      </div>

      {/* REVIEWS */}
      <div className="reviews-section">
        <h2>Reviews</h2>

        <div className="review-box">
          <h4>Ali</h4>
          <p>Great product 👍</p>
        </div>

        <div className="review-box">
          <h4>Ahmed</h4>
          <p>Very good quality 🔥</p>
        </div>
      </div>

      {/* RELATED */}
      <div className="related-section">
        <h2>Related Products</h2>

        <div className="related-products">
          {related.map(item => (
            <div
              key={item.id}
              className="related-card"
              onClick={() => navigate(`/product/${item.id}`)}
            >
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
              <p>Rs {item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetail;