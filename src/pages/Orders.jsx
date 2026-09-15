import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Orders() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  // Get logged-in user
  const savedUser = localStorage.getItem("foodieUser");
  const user = savedUser ? JSON.parse(savedUser) : null;

  // User-specific orders key
  const ordersKey = user
    ? `foodieOrders_${user.email}`
    : null;

  // Check login
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  // Load user's orders
  useEffect(() => {
    if (!ordersKey) {
      return;
    }

    const savedOrders = JSON.parse(
      localStorage.getItem(ordersKey) || "[]"
    );

    setOrders(savedOrders);
  }, [ordersKey]);

  // If no orders
  if (orders.length === 0) {
    return (
      <div className="orders-page">

        <div className="empty-orders">

          <h1>My Orders 📦</h1>

          <div className="empty-orders-box">

            <h2>No orders yet</h2>

            <p>
              Your orders will appear here after you
              place an order.
            </p>

            <button
              className="view-order-button"
              onClick={() => navigate("/")}
            >
              Start Ordering →
            </button>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="orders-page">

      <h1>My Orders 📦</h1>

      <div className="orders-list">

        {orders.map((order) => (

          <div
            className="order-card"
            key={order.id}
          >

            {/* ORDER HEADER */}

            <div className="order-top">

              <div>

                <h3>
                  Order #{order.id}
                </h3>

                <p>
                  {order.restaurantName}
                </p>

                <small>
                  {order.date}
                </small>

              </div>

              <span className="order-status">
                {order.status || "Placed"}
              </span>

            </div>


            {/* ITEMS */}

            <div className="order-items">

              {order.items.map((item) => (

                <div
                  className="order-item"
                  key={item.id}
                >

                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>

                </div>

              ))}

            </div>


            {/* TOTAL */}

            <div className="order-bottom">

              <span>
                Total
              </span>

              <strong>
                ₹{order.total}
              </strong>

            </div>


            {/* DETAILS */}

            <button
              className="view-order-button"
              onClick={() =>
                navigate(`/orders/${order.id}`)
              }
            >
              View Details →
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Orders;