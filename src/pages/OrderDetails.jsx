import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateOrderStatus } from "../utils/updateOrderStatus";

function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("foodieUser");

    if (!savedUser) {
      navigate("/login");
      return;
    }

    const user = JSON.parse(savedUser);
    const ordersKey = `foodieOrders_${user.email}`;

    const loadOrder = () => {
      const orders = JSON.parse(
        localStorage.getItem(ordersKey) || "[]"
      );

      const foundOrder = orders.find(
        (order) => String(order.id) === String(id)
      );

      if (!foundOrder) {
        setOrder(null);
        return;
      }

      // Automatically calculate current status
      const updatedOrder = updateOrderStatus(foundOrder);

      // Save updated order
      const updatedOrders = orders.map((existingOrder) =>
        existingOrder.id === updatedOrder.id
          ? updatedOrder
          : existingOrder
      );

      localStorage.setItem(
        ordersKey,
        JSON.stringify(updatedOrders)
      );

      setOrder(updatedOrder);
    };

    // Load immediately
    loadOrder();

    // Check status every second
    const interval = setInterval(loadOrder, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [id, navigate]);

  // Order not found
  if (!order) {
    return (
      <div className="order-details-page">

        <div className="order-details-card">

          <h2>Order not found 😕</h2>

          <button
            className="back-button"
            onClick={() => navigate("/orders")}
          >
            ← Back to Orders
          </button>

        </div>

      </div>
    );
  }

  const statusSteps = [
    {
      key: "Placed",
      title: "Order Placed",
      description: "Your order has been placed.",
      icon: "✓",
    },
    {
      key: "Preparing",
      title: "Preparing",
      description:
        "Restaurant is preparing your food.",
      icon: "🍳",
    },
    {
      key: "Out for Delivery",
      title: "Out for Delivery",
      description:
        "Your food is on the way.",
      icon: "🛵",
    },
    {
      key: "Delivered",
      title: "Delivered",
      description:
        "Enjoy your meal! 🍔",
      icon: "✓",
    },
  ];

  const currentStatus = order.status || "Placed";

  const currentStatusIndex =
    statusSteps.findIndex(
      (step) => step.key === currentStatus
    );

  return (
    <div className="order-details-page">

      {/* BACK BUTTON */}

      <button
        className="back-button"
        onClick={() => navigate("/orders")}
      >
        ← Back to Orders
      </button>

      <div className="order-details-card">

        {/* HEADER */}

        <div className="order-details-header">

          <div>
            <h1>Order Details</h1>

            <p>
              Order #{order.id}
            </p>
          </div>

          <span className="order-status">
            🟢 {currentStatus}
          </span>

        </div>

        {/* RESTAURANT */}

        <div className="order-restaurant">

          <h2>
            {order.restaurantName}
          </h2>

          <p>
            Ordered on: {order.date}
          </p>

        </div>

        {/* ITEMS */}

        <div className="details-section">

          <h2>Items</h2>

          {order.items.map((item) => (

            <div
              className="details-item"
              key={item.id}
            >

              <div>

                <strong>
                  {item.name}
                </strong>

                <p>
                  ₹{item.price} × {item.quantity}
                </p>

              </div>

              <strong>
                ₹{item.price * item.quantity}
              </strong>

            </div>

          ))}

        </div>

        {/* TOTAL */}

        <div className="details-total">

          <span>Total</span>

          <strong>
            ₹{order.total}
          </strong>

        </div>

        {/* ADDRESS */}

        <div className="details-section">

          <h2>Delivery Address</h2>

          <p>
            <strong>
              {order.address?.name}
            </strong>
          </p>

          <p>
            📞 {order.address?.phone}
          </p>

          <p>
            📍 {order.address?.address}
          </p>

          <p>
            {order.address?.city} -{" "}
            {order.address?.pincode}
          </p>

        </div>

        {/* ORDER PROGRESS */}

        <div className="order-progress">

          <h2>Order Status</h2>

          {statusSteps.map((step, index) => {

            const completed =
              index <= currentStatusIndex;

            return (
              <div
                className={`status-step ${
                  completed ? "active" : ""
                }`}
                key={step.key}
              >

                <span>
                  {completed
                    ? "✓"
                    : step.icon}
                </span>

                <div>

                  <strong>
                    {step.title}
                  </strong>

                  <p>
                    {step.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

export default OrderDetails;