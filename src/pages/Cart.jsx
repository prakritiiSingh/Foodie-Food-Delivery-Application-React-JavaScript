import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>Your Cart 🛒</h1>

        <p>Your cart is currently empty.</p>

        <Link to="/restaurants">
          Browse Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1>Your Cart 🛒</h1>

      <div className="cart-items">

        {cart.map((item) => (
          <div className="cart-item" key={item.id}>

            <div className="cart-food">

              <div className="cart-image">
                {item.image}
              </div>

              <div>
                <h3>{item.name}</h3>

                <p>{item.restaurantName}</p>

                <strong>₹{item.price}</strong>
              </div>

            </div>

            <div className="quantity-section">

              <div className="quantity-controls">

                <button
                  onClick={() => decreaseQuantity(item.id)}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQuantity(item.id)}
                >
                  +
                </button>

              </div>

              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="cart-total">

        <h2>Total: ₹{total}</h2>

        <Link
          to="/checkout"
          className="checkout-button"
        >
          Proceed to Checkout
        </Link>

      </div>

    </div>
  );
}

export default Cart;