import "./Orders.css";
import { useAuth } from "../context/AuthContext";

function Orders() {

  const { user } = useAuth();

  const allOrders =
    JSON.parse(localStorage.getItem("orders")) || [];

  const orders = user
    ? allOrders.filter(o => o.userId === user.id)
    : [];

  return (

    <div className="orders-page">

      <h1>📦 My Orders</h1>

      {!user ? (
        <div className="empty-orders">
          <h2>Please Login First</h2>
        </div>
      ) : orders.length === 0 ? (
        <div className="empty-orders">
          <h2>No Orders Yet</h2>
        </div>
      ) : (
        <div className="orders-list">

     {orders.map((order) => (
  <div key={order.id} className="order-card">

    <h3>Order #{order.id}</h3>
    <p>Total: Rs {order.total}</p>
    <p>Date: {order.date}</p>
    <p>Address: {order.address}</p>

    {/* ITEMS IMAGES */}
    <div className="order-items">
      {order.items?.map((item) => (
        <div key={item.id} className="order-item">

          <img src={item.image} alt={item.title} />

          <div>
            <p>{item.title}</p>
            <p>Qty: {item.qty}</p>
          </div>

        </div>
      ))}
    </div>

  </div>
))}

        </div>
      )}

    </div>
  );
}

export default Orders;