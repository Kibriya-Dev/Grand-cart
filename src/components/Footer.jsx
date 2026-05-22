import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-box">
          <h2>Grand<span>Cart</span></h2>
          <p>Your trusted online shopping store.</p>
        </div>

        {/* Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Deals</a>
          <a href="#">Cart</a>
        </div>

        {/* Support */}
        <div className="footer-box">
          <h3>Support</h3>
          <a href="#">Contact</a>
          <a href="#">Help</a>
          <a href="#">Privacy</a>
        </div>

        {/* Social */}
        <div className="footer-box">
          <h3>Follow Us</h3>
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 GrandCart. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;