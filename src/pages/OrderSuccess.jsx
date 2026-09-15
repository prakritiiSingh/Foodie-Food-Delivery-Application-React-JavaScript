import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="order-success">

      <div className="success-icon">
        🎉
      </div>

      <h1>Order Placed Successfully!</h1>

      <p>
        Your delicious food is on its way.
      </p>

      <p>
        Thank you for ordering with Foodie.
      </p>

      <Link to="/">
        Back to Home
      </Link>

    </div>
  );
}

export default OrderSuccess;