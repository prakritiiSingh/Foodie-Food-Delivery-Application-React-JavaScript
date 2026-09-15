import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart();

  const [user, setUser] = useState(null);

 useEffect(() => {
  const loadUser = () => {
    const savedUser = localStorage.getItem("foodieUser");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setUser(null);
    }
  };

  loadUser();

  window.addEventListener("userLogin", loadUser);
  window.addEventListener("userLogout", loadUser);

  return () => {
    window.removeEventListener("userLogin", loadUser);
    window.removeEventListener("userLogout", loadUser);
  };
}, []);

  const handleLogout = () => {
  localStorage.removeItem("foodieUser");

  setUser(null);

  window.dispatchEvent(new Event("userLogout"));

  navigate("/");
};

  const cartQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">

      {/* LOGO */}

      <Link to="/" className="navbar-logo">
        🍔 <span>Foodie</span>
      </Link>

      {/* NAVIGATION */}

      <div className="navbar-links">

        <Link to="/" className="nav-link">
          Home
        </Link>

        <Link to="/restaurants" className="nav-link">
          Restaurants
        </Link>

        <Link to="/orders" className="nav-link">
          Orders
        </Link>

        {/* CART */}

        <Link to="/cart" className="cart-link">
          🛒 Cart

          {cartQuantity > 0 && (
            <span className="cart-badge">
              {cartQuantity}
            </span>
          )}
        </Link>

        {/* PROFILE / LOGIN */}

        {user ? (

          <div className="profile-menu">

            <div className="profile-trigger">
              👤 {user.name} ▾
            </div>

            <div className="profile-dropdown">

              <div className="profile-info">
                <strong>{user.name}</strong>
                <span>{user.email}</span>
              </div>

              <hr />

              <Link to="/profile">
                👤 My Profile
              </Link>

              <Link to="/orders">
                📦 My Orders
              </Link>

              <button onClick={handleLogout}>
                🚪 Logout
              </button>

            </div>

          </div>

        ) : (

          <Link
            to="/login"
            className="nav-link"
          >
            👤 Login
          </Link>

        )}

      </div>

    </nav>
  );
}

export default Navbar;