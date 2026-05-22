import "./Navbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";   // ← yeh use karo

function Navbar({ setCartOpen, search, setSearch }) {

  const { user, logout } = useAuth();     // ← improved hook
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // smooth scroll function
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">

      {/* TOP BAR */}
      <div className="nav-top">

        <div className="nav-left">

          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <Link to="/" className="logo">
            <span>Grand</span>
            <span className="gold">Cart</span>
          </Link>

        </div>

        {/* SEARCH */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search">
            <FaSearch />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="right-actions">

          {user ? (
            <div className="user-actions">
              <span className="welcome-text">Hi, {user.name}</span>
              <button onClick={handleLogout} className="logout-btn" style={{
                marginLeft:"10px",}}>
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={() => navigate("/login")} 
              className="login-btn"
            >
              Login
            </button>
          )}

          {/* CART */}
          <div
            className="cart"
           onClick={() => navigate("/cart")}
            style={{ position: "relative", cursor: "pointer" }}
          >
            🛒
            {cartCount > 0 && (
              <span className="cart-badge">
                {cartCount}
              </span>
            )}
          </div>

        </div>

      </div>

      {/* BOTTOM NAV */}
      <div className={`nav-bottom ${menuOpen ? "active" : ""}`}>

        <div onClick={() => navigate("/wishlist")} style={{ cursor: "pointer" }}>
          ❤️ Wishlist
        </div>
        <div
  onClick={() => navigate("/orders")}
  style={{ cursor: "pointer" }}
>
  📦 My Orders
</div>

        <a onClick={() => scrollToSection("electronics")}>Electronics</a>
        <a onClick={() => scrollToSection("fashion")}>Fashion</a>
        <a onClick={() => scrollToSection("mobiles")}>Mobiles</a>
        <a onClick={() => scrollToSection("home")}>Home</a>
        <a onClick={() => scrollToSection("beauty")}>Beauty</a>
        <a onClick={() => scrollToSection("groceries")}>Groceries</a>

      </div>

    </nav>
  );
}

export default Navbar;