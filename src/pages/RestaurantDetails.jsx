import { useParams } from "react-router-dom";
import restaurants from "../data/restaurants";
import { useCart } from "../context/CartContext";

function RestaurantDetails() {
  const { id } = useParams();

  const restaurant = restaurants.find(
    (restaurant) => restaurant.id === Number(id)
  );

  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  if (!restaurant) {
    return (
      <div>
        <h2>Restaurant not found</h2>
      </div>
    );
  }

  const getQuantity = (itemId) => {
    const cartItem = cart.find(
      (item) => item.id === itemId
    );

    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="restaurant-details">

      <div className="restaurant-header">

        <h1>{restaurant.image} {restaurant.name}</h1>

        <p>{restaurant.category}</p>

        <p>⭐ {restaurant.rating}</p>

        <p>🕐 {restaurant.deliveryTime}</p>

      </div>

      <h2>Menu</h2>

      <div className="menu-list">

        {restaurant.menu.map((item) => {

          const quantity = getQuantity(item.id);

          return (
            <div
              className="menu-item"
              key={item.id}
            >

              {/* FOOD INFORMATION */}

              <div className="menu-info">

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <strong>
                  ₹{item.price}
                </strong>

              </div>


              {/* FOOD IMAGE + BUTTON */}

              <div className="menu-action">

                <div className="menu-image">
                  {item.image}
                </div>

                {quantity === 0 ? (

                  <button
                    className="add-button"
                    onClick={() =>
                      addToCart(item, restaurant)
                    }
                  >
                    Add
                  </button>

                ) : (

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>

                  </div>

                )}

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default RestaurantDetails;