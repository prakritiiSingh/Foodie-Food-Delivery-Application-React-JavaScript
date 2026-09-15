import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const savedUser = JSON.parse(
    localStorage.getItem("foodieUser") || "null"
  );

  const savedAddress = JSON.parse(
    localStorage.getItem("foodieAddress") || "null"
  );

  const [user, setUser] = useState(savedUser);

  const [editing, setEditing] = useState(false);

  const [name, setName] = useState(
    savedUser?.name || ""
  );

  const [phone, setPhone] = useState(
    savedUser?.phone || ""
  );

  if (!user) {
    return (
      <div className="profile-page">
        <div className="profile-card">
          <h2>Please login first</h2>

          <button
            onClick={() => navigate("/login")}
            className="profile-login-button"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name,
      phone,
    };

    localStorage.setItem(
      "foodieUser",
      JSON.stringify(updatedUser)
    );

    setUser(updatedUser);
    setEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("foodieUser");

    navigate("/login");
  };

  return (
    <div className="profile-page">

      <div className="profile-card">

        {/* HEADER */}

        <div className="profile-header">

          <div className="profile-avatar">
            {user.name
              ? user.name.charAt(0).toUpperCase()
              : "U"}
          </div>

          <div>
            <h1>{user.name}</h1>

            <p>{user.email}</p>
          </div>

        </div>


        {/* PERSONAL INFORMATION */}

        <div className="profile-section">

          <div className="section-title">
            <h2>Personal Information</h2>

            {!editing && (
              <button
                className="edit-button"
                onClick={() => setEditing(true)}
              >
                ✏️ Edit
              </button>
            )}
          </div>


          {editing ? (

            <div className="profile-form">

              <label>
                Full Name
              </label>

              <input
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
              />

              <label>
                Email
              </label>

              <input
                value={user.email}
                disabled
              />

              <label>
                Phone
              </label>

              <input
                value={phone}
                onChange={(event) =>
                  setPhone(event.target.value)
                }
                placeholder="Enter phone number"
              />

              <div className="profile-actions">

                <button
                  className="save-button"
                  onClick={handleSave}
                >
                  Save Changes
                </button>

                <button
                  className="cancel-button"
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </button>

              </div>

            </div>

          ) : (

            <div className="profile-details">

              <div>
                <span>Name</span>
                <strong>{user.name}</strong>
              </div>

              <div>
                <span>Email</span>
                <strong>{user.email}</strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>
                  {user.phone || "Not added"}
                </strong>
              </div>

            </div>

          )}

        </div>


        {/* SAVED ADDRESS */}

        <div className="profile-section">

          <div className="section-title">

            <h2>📍 Saved Address</h2>

          </div>

          {savedAddress ? (

            <div className="saved-address">

              <strong>
                {savedAddress.name}
              </strong>

              <p>
                📞 {savedAddress.phone}
              </p>

              <p>
                {savedAddress.address}
              </p>

              <p>
                {savedAddress.city} -{" "}
                {savedAddress.pincode}
              </p>

            </div>

          ) : (

            <div className="no-address">

              <p>
                You haven't saved a delivery address yet.
              </p>

              <button
                onClick={() => navigate("/checkout")}
              >
                Add Address
              </button>

            </div>

          )}

        </div>


        {/* QUICK ACTIONS */}

        <div className="profile-section">

          <h2>Quick Actions</h2>

          <div className="profile-actions-grid">

            <button
              onClick={() => navigate("/orders")}
            >
              📦
              <span>My Orders</span>
            </button>

            <button
              onClick={() => navigate("/cart")}
            >
              🛒
              <span>My Cart</span>
            </button>

          </div>

        </div>


        {/* LOGOUT */}

        <button
          className="profile-logout"
          onClick={handleLogout}
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
}

export default Profile;