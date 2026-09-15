import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantCard from "../components/RestaurantCard";
import restaurants from "../data/restaurants";

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const searchText = search.toLowerCase();

    return (
      restaurant.name.toLowerCase().includes(searchText) ||
      restaurant.category.toLowerCase().includes(searchText)
    );
  });

  const categories = [
    { name: "Pizza", emoji: "🍕" },
    { name: "Burgers", emoji: "🍔" },
    { name: "Biryani", emoji: "🍗" },
    { name: "Chinese", emoji: "🍜" },
    { name: "Desserts", emoji: "🍰" },
    { name: "Healthy", emoji: "🥗" },
  ];

  const handleCategoryClick = (category) => {
    setSearch(category);
  };

  return (
    <div className="home-page">

      {/* =========================
          HERO
      ========================= */}

      <section className="home-hero">

        <div className="hero-content">

          <span className="hero-tag">
            🍴 Delicious food, delivered fast
          </span>

          <h1>
            Good food.
            <br />
            <span>Good mood.</span> 🍔
          </h1>

          <p>
            Discover delicious meals from the best
            restaurants around you.
          </p>

          <div className="hero-buttons">

            <button
              className="hero-primary-button"
              onClick={() => navigate("/restaurants")}
            >
              Explore Restaurants →
            </button>

            <button
              className="hero-secondary-button"
              onClick={() =>
                document
                  .getElementById("popular-restaurants")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
            >
              View Popular
            </button>

          </div>

        </div>

        <div className="hero-food">

          <div className="hero-food-circle">
            🍕
          </div>

          <div className="floating-food floating-one">
            🍔
          </div>

          <div className="floating-food floating-two">
            🍟
          </div>

          <div className="floating-food floating-three">
            🥤
          </div>

        </div>

      </section>


      {/* =========================
          CATEGORIES
      ========================= */}

      <section className="food-categories">

        <div className="section-heading">

          <span>WHAT ARE YOU CRAVING?</span>

          <h2>
            Explore by category
          </h2>

        </div>

        <div className="category-list">

          {categories.map((category) => (

            <button
              key={category.name}
              className="category-card"
              onClick={() =>
                handleCategoryClick(category.name)
              }
            >

              <div className="category-icon">
                {category.emoji}
              </div>

              <span>
                {category.name}
              </span>

            </button>

          ))}

        </div>

      </section>


      {/* =========================
          RESTAURANTS
      ========================= */}

      <section
        className="home-restaurants"
        id="popular-restaurants"
      >

        <div className="restaurants-heading">

          <div>

            <span className="section-label">
              TOP PICKS FOR YOU
            </span>

            <h2>
              Popular Restaurants
            </h2>

            <p>
              Explore some of the best places to
              satisfy your cravings.
            </p>

          </div>

          <button
            className="view-all-button"
            onClick={() =>
              navigate("/restaurants")
            }
          >
            View All →
          </button>

        </div>


        {/* SEARCH */}

        <div className="search-container">

          <div className="home-search">

            <span className="search-icon">
              🔍
            </span>

            <input
              type="text"
              placeholder="Search restaurants or cuisines..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

            {search && (

              <button
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ✕
              </button>

            )}

          </div>

        </div>


        {/* RESTAURANT CARDS */}

        <div className="home-restaurant-list">

          {filteredRestaurants.map((restaurant) => (

            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
            />

          ))}

          {filteredRestaurants.length === 0 && (

            <div className="no-results">

              <div className="no-results-icon">
                🔎
              </div>

              <h2>
                No restaurants found
              </h2>

              <p>
                Try searching for a different
                restaurant or cuisine.
              </p>

              <button
                onClick={() => setSearch("")}
              >
                Clear Search
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =========================
          WHY FOODIE
      ========================= */}

      <section className="why-foodie">

        <div className="section-heading">

          <span>WHY CHOOSE US?</span>

          <h2>
            Everything you need for a great meal
          </h2>

        </div>

        <div className="why-foodie-list">

          <div className="why-card">

            <div>⚡</div>

            <h3>
              Fast Delivery
            </h3>

            <p>
              Get your favourite food delivered
              quickly to your doorstep.
            </p>

          </div>

          <div className="why-card">

            <div>🍽️</div>

            <h3>
              Great Food
            </h3>

            <p>
              Discover delicious dishes from
              restaurants you will love.
            </p>

          </div>

          <div className="why-card">

            <div>🔒</div>

            <h3>
              Secure Ordering
            </h3>

            <p>
              Your account and orders are kept
              safe and private.
            </p>

          </div>

          <div className="why-card">

            <div>❤️</div>

            <h3>
              Made for Foodies
            </h3>

            <p>
              A simple and enjoyable way to
              discover your next meal.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          BOTTOM CTA
      ========================= */}

      <section className="home-cta">

        <div>

          <h2>
            Hungry already? 😋
          </h2>

          <p>
            Find something delicious and place
            your order in just a few clicks.
          </p>

          <button
            onClick={() =>
              navigate("/restaurants")
            }
          >
            Start Ordering →
          </button>

        </div>

      </section>

    </div>
  );
}

export default Home;