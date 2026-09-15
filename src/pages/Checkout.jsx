import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // Get logged-in user
  const savedUser = localStorage.getItem("foodieUser");
  const user = savedUser ? JSON.parse(savedUser) : null;

  // Create user-specific storage keys
  const userKey = user?.email || "guest";

  const addressKey = `foodieAddress_${userKey}`;
  const ordersKey = `foodieOrders_${userKey}`;

  // Protect checkout page
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  // Load saved address
  const [address, setAddress] = useState(() => {
    const savedAddress = localStorage.getItem(addressKey);

    return savedAddress
      ? JSON.parse(savedAddress)
      : {
          name: "",
          phone: "",
          address: "",
          city: "",
          pincode: "",
        };
  });

  const [editingAddress, setEditingAddress] = useState(
    !localStorage.getItem(addressKey)
  );

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Address input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setAddress((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // Save address
  const handleSaveAddress = (event) => {
    event.preventDefault();

    localStorage.setItem(
      addressKey,
      JSON.stringify(address)
    );

    setEditingAddress(false);
  };

  // Place order
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    if (
      !address.name ||
      !address.phone ||
      !address.address ||
      !address.city ||
      !address.pincode
    ) {
      alert("Please complete your delivery address.");
      return;
    }

    // Save address for this user
    localStorage.setItem(
      addressKey,
      JSON.stringify(address)
    );

    // Get this user's existing orders
    const existingOrders = JSON.parse(
      localStorage.getItem(ordersKey) || "[]"
    );

    // Create order
   const newOrder = {
  id: "FOOD" + Date.now(),

  placedAt: Date.now(),

  userEmail: user.email,

  restaurantName:
    cart.length > 0
      ? cart[0].restaurantName
      : "Foodie Restaurant",

  items: cart,

  total: total,

  status: "Placed",

  date: new Date().toLocaleString(),

  createdAt: Date.now(),

  address: address,
};

    // Save order specifically for this user
    localStorage.setItem(
      ordersKey,
      JSON.stringify([
        newOrder,
        ...existingOrders,
      ])
    );
 
    // Empty cart
    clearCart();

    // Go to success page
    navigate("/order-success");
  };

  // If cart is empty
  if (cart.length === 0) {
    return (
      <div className="checkout-page">

        <h1>Checkout</h1>

        <div className="empty-orders-box">

          <h2>Your cart is empty 🛒</h2>

          <p>
            Add some delicious food before checking out.
          </p>

          <button
            onClick={() => navigate("/")}
            className="place-order-button"
          >
            Browse Restaurants
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="checkout-page">

      <h1>Checkout</h1>

      <div className="checkout-container">

        {/* =========================
            DELIVERY ADDRESS
        ========================= */}

        <div className="address-section">

          <h2>Delivery Address</h2>

          {!editingAddress && address.name ? (

            <div className="saved-address">

              <h3>{address.name}</h3>

              <p>
                📞 {address.phone}
              </p>

              <p>
                📍 {address.address}
              </p>

              <p>
                {address.city} - {address.pincode}
              </p>

              <button
                type="button"
                className="change-address-button"
                onClick={() =>
                  setEditingAddress(true)
                }
              >
                Change Address
              </button>

            </div>

          ) : (

            <form onSubmit={handleSaveAddress}>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={address.name}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={address.phone}
                onChange={handleChange}
                required
              />

              <textarea
                name="address"
                placeholder="House No, Street, Area"
                value={address.address}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="pincode"
                placeholder="Pincode"
                value={address.pincode}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="save-address-button"
              >
                Save Address
              </button>

            </form>

          )}

        </div>


        {/* =========================
            ORDER SUMMARY
        ========================= */}

        <div className="order-summary">

          <h2>Order Summary</h2>

          {cart.map((item) => (

            <div
              className="summary-item"
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

          <hr />

          <div className="summary-total">

            <strong>Total</strong>

            <strong>
              ₹{total}
            </strong>

          </div>


          {/* PLACE ORDER */}

          <button
            type="button"
            className="place-order-button"
            onClick={handleSubmit}
            disabled={
              !address.name ||
              !address.phone ||
              !address.address ||
              !address.city ||
              !address.pincode
            }
          >
            Place Order • ₹{total}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Checkout;