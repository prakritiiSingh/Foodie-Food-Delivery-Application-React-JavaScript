import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import restaurants from "../data/restaurants";

function Restaurants() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Pizza",
    "Burgers",
    "Indian",
    "Chinese",
    "Desserts",
  ];

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch =
      restaurant.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      restaurant.category
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      restaurant.category
        .toLowerCase()
        .includes(category.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="restaurants-page">

      <div className="restaurants-header">

        <h1>Restaurants Near You 🍽️</h1>

        <p>
          Discover the best restaurants and food around you.
        </p>

        <input
          type="text"
          placeholder="🔍 Search restaurants..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />

      </div>

      <div className="category-filter">

        {categories.map((item) => (
          <button
            key={item}
            className={
              category === item
                ? "category-button active"
                : "category-button"
            }
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}

      </div>

      {filteredRestaurants.length > 0 ? (

        <div className="restaurant-list">

          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />
          ))}

        </div>

      ) : (

        <div className="no-results">
          <h2>😕 No restaurants found</h2>

          <p>
            Try a different search or category.
          </p>
        </div>

      )}

    </div>
  );
}

export default Restaurants;