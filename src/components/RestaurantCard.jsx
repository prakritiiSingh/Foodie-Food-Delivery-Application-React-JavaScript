import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
  return (
    <Link
      to={`/restaurants/${restaurant.id}`}
      className="restaurant-link"
    >
      <div className="restaurant-card">

        <div className="restaurant-image">
          {restaurant.image}
        </div>

        <h3>{restaurant.name}</h3>

        <p>{restaurant.category}</p>

        <span>⭐ {restaurant.rating}</span>

      </div>
    </Link>
  );
}

export default RestaurantCard;