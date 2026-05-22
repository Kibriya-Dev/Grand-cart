import "./ProductCard.css";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { FaHeart } from "react-icons/fa";

function ProductCard({
  id,
  title,
  price,
  oldPrice,
  image
}) {

  const navigate = useNavigate();

  const {
    addToWishlist,
    wishlist
  } = useContext(CartContext);

  const isWishlisted = wishlist?.some(
    item => item.id === id
  );

  return (

    <div
      className="product-card"
      onClick={() => navigate(`/product/${id}`)}
      style={{ cursor: "pointer" }}
    >

      <div className="product-image">

        <img src={image} alt={title} />

        <span className="discount-badge">
          -20%
        </span>

        {/* ❤️ WISHLIST */}
        <div className="wishlist-icon">
          <FaHeart
            color={isWishlisted ? "red" : "white"}
            onClick={(e) => {
              e.stopPropagation();
              addToWishlist({
                id,
                title,
                price,
                image
              });
            }}
          />
        </div>

      </div>

      <div className="product-info">

        <h3>{title}</h3>

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>(4.8)</span>
        </div>

        <div className="price-section">

          <span className="price">
            Rs {price}
          </span>

          <span className="old-price">
            Rs {oldPrice}
          </span>

        </div>

        <p className="delivery">
          Free Delivery
        </p>

      </div>

    </div>
  );
}

export default ProductCard;