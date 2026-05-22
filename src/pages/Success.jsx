import "./Success.css";
import { useNavigate } from "react-router-dom";

function Success() {

  const navigate = useNavigate();

  // random order id
  const orderId = "ORD-" + Math.floor(Math.random() * 1000000);

  return (
    <div className="success-page">

      <div className="box">

        <h1>🎉 Thank You!</h1>

        <p>Your order has been placed successfully.</p>

        <h3>Order ID:</h3>
        <p className="order-id">{orderId}</p>

        <button onClick={() => navigate("/")}>
          🏠 Go Home
        </button>

      </div>

    </div>
  );
}

export default Success;