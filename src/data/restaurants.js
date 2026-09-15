const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    category: "Pizza • Italian",
    rating: 4.5,
    image: "🍕",
    deliveryTime: "25-30 min",
    menu: [
      {
        id: 101,
        name: "Margherita Pizza",
        price: 249,
        description: "Classic pizza with tomato, mozzarella and basil",
        image: "🍕"
      },
      {
        id: 102,
        name: "Farmhouse Pizza",
        price: 349,
        description: "Loaded with fresh vegetables and mozzarella",
        image: "🍕"
      },
      {
        id: 103,
        name: "Cheese Burst Pizza",
        price: 399,
        description: "Extra cheesy pizza with a delicious cheese burst",
        image: "🧀"
      },
      {
        id: 104,
        name: "Paneer Tikka Pizza",
        price: 379,
        description: "Spicy paneer tikka with onions and capsicum",
        image: "🍕"
      },
      {
        id: 105,
        name: "Garlic Bread",
        price: 149,
        description: "Crispy garlic bread with herbs and butter",
        image: "🥖"
      }
    ]
  },

  {
    id: 2,
    name: "Burger House",
    category: "Burgers • Fast Food",
    rating: 4.3,
    image: "🍔",
    deliveryTime: "20-25 min",
    menu: [
      {
        id: 201,
        name: "Classic Burger",
        price: 149,
        description: "Juicy patty with lettuce, tomato and cheese",
        image: "🍔"
      },
      {
        id: 202,
        name: "Cheese Burger",
        price: 199,
        description: "Classic burger with extra cheese",
        image: "🍔"
      },
      {
        id: 203,
        name: "Double Burger",
        price: 279,
        description: "Two juicy patties with fresh vegetables",
        image: "🍔"
      },
      {
        id: 204,
        name: "Peri Peri Burger",
        price: 229,
        description: "Spicy peri peri burger with crispy lettuce",
        image: "🍔"
      },
      {
        id: 205,
        name: "French Fries",
        price: 119,
        description: "Crispy golden french fries",
        image: "🍟"
      }
    ]
  },

  {
    id: 3,
    name: "Spice Garden",
    category: "Indian • North Indian",
    rating: 4.6,
    image: "🍛",
    deliveryTime: "30-35 min",
    menu: [
      {
        id: 301,
        name: "Paneer Butter Masala",
        price: 249,
        description: "Soft paneer cooked in rich tomato gravy",
        image: "🍛"
      },
      {
        id: 302,
        name: "Dal Tadka",
        price: 149,
        description: "Yellow lentils tempered with Indian spices",
        image: "🥘"
      },
      {
        id: 303,
        name: "Butter Naan",
        price: 49,
        description: "Soft naan topped with butter",
        image: "🫓"
      },
      {
        id: 304,
        name: "Kadai Paneer",
        price: 259,
        description: "Paneer cooked with capsicum and aromatic spices",
        image: "🍛"
      },
      {
        id: 305,
        name: "Veg Biryani",
        price: 219,
        description: "Aromatic basmati rice cooked with vegetables",
        image: "🍚"
      }
    ]
  },

  {
    id: 4,
    name: "Dragon Wok",
    category: "Chinese • Asian",
    rating: 4.4,
    image: "🍜",
    deliveryTime: "25-30 min",
    menu: [
      {
        id: 401,
        name: "Hakka Noodles",
        price: 189,
        description: "Stir-fried noodles with fresh vegetables",
        image: "🍜"
      },
      {
        id: 402,
        name: "Manchurian",
        price: 199,
        description: "Crispy vegetable balls in spicy sauce",
        image: "🥢"
      },
      {
        id: 403,
        name: "Schezwan Noodles",
        price: 219,
        description: "Spicy noodles tossed in schezwan sauce",
        image: "🍜"
      },
      {
        id: 404,
        name: "Veg Fried Rice",
        price: 179,
        description: "Fried rice with vegetables and Asian spices",
        image: "🍚"
      },
      {
        id: 405,
        name: "Spring Rolls",
        price: 159,
        description: "Crispy rolls filled with fresh vegetables",
        image: "🥢"
      }
    ]
  },

  {
    id: 5,
    name: "Sweet Treats",
    category: "Desserts • Bakery",
    rating: 4.7,
    image: "🍰",
    deliveryTime: "15-20 min",
    menu: [
      {
        id: 501,
        name: "Chocolate Cake",
        price: 199,
        description: "Rich and creamy chocolate cake",
        image: "🍰"
      },
      {
        id: 502,
        name: "Brownie",
        price: 129,
        description: "Warm chocolate brownie",
        image: "🍫"
      },
      {
        id: 503,
        name: "Red Velvet Cake",
        price: 249,
        description: "Soft red velvet cake with cream cheese frosting",
        image: "🍰"
      },
      {
        id: 504,
        name: "Chocolate Shake",
        price: 159,
        description: "Thick and creamy chocolate milkshake",
        image: "🥤"
      }
    ]
  },

  {
    id: 6,
    name: "South Spice",
    category: "South Indian • Breakfast",
    rating: 4.6,
    image: "🥞",
    deliveryTime: "20-25 min",
    menu: [
      {
        id: 601,
        name: "Masala Dosa",
        price: 129,
        description: "Crispy dosa filled with spicy potato masala",
        image: "🥞"
      },
      {
        id: 602,
        name: "Idli Sambar",
        price: 99,
        description: "Soft idlis served with hot sambar and chutney",
        image: "🍽️"
      },
      {
        id: 603,
        name: "Medu Vada",
        price: 109,
        description: "Crispy South Indian lentil fritters",
        image: "🍩"
      },
      {
        id: 604,
        name: "Mysore Dosa",
        price: 159,
        description: "Crispy dosa with spicy red chutney",
        image: "🥞"
      },
      {
        id: 605,
        name: "Filter Coffee",
        price: 69,
        description: "Traditional South Indian filter coffee",
        image: "☕"
      }
    ]
  },

  {
    id: 7,
    name: "Biryani Junction",
    category: "Biryani • Mughlai",
    rating: 4.5,
    image: "🍚",
    deliveryTime: "30-35 min",
    menu: [
      {
        id: 701,
        name: "Veg Biryani",
        price: 199,
        description: "Fragrant basmati rice with vegetables and spices",
        image: "🍚"
      },
      {
        id: 702,
        name: "Paneer Biryani",
        price: 249,
        description: "Aromatic biryani with soft paneer pieces",
        image: "🍚"
      },
      {
        id: 703,
        name: "Hyderabadi Biryani",
        price: 299,
        description: "Authentic Hyderabadi style biryani",
        image: "🍛"
      },
      {
        id: 704,
        name: "Raita",
        price: 59,
        description: "Refreshing yogurt with vegetables and spices",
        image: "🥣"
      }
    ]
  },

  {
    id: 8,
    name: "Taco Fiesta",
    category: "Mexican • Fast Food",
    rating: 4.2,
    image: "🌮",
    deliveryTime: "25-30 min",
    menu: [
      {
        id: 801,
        name: "Veg Tacos",
        price: 179,
        description: "Soft tacos filled with vegetables and salsa",
        image: "🌮"
      },
      {
        id: 802,
        name: "Cheese Nachos",
        price: 149,
        description: "Crispy nachos topped with melted cheese",
        image: "🧀"
      },
      {
        id: 803,
        name: "Mexican Burrito",
        price: 229,
        description: "Loaded burrito with rice, beans and vegetables",
        image: "🌯"
      },
      {
        id: 804,
        name: "Guacamole",
        price: 129,
        description: "Fresh avocado dip with herbs and lime",
        image: "🥑"
      }
    ]
  },

  {
    id: 9,
    name: "Green Bowl",
    category: "Healthy • Salads",
    rating: 4.8,
    image: "🥗",
    deliveryTime: "15-20 min",
    menu: [
      {
        id: 901,
        name: "Garden Salad",
        price: 159,
        description: "Fresh vegetables with a light dressing",
        image: "🥗"
      },
      {
        id: 902,
        name: "Paneer Protein Bowl",
        price: 249,
        description: "Healthy bowl with paneer, vegetables and grains",
        image: "🥗"
      },
      {
        id: 903,
        name: "Fruit Bowl",
        price: 179,
        description: "Fresh seasonal fruits",
        image: "🍓"
      },
      {
        id: 904,
        name: "Mango Smoothie",
        price: 149,
        description: "Fresh mango blended into a creamy smoothie",
        image: "🥭"
      }
    ]
  },

  {
    id: 10,
    name: "The Sandwich Spot",
    category: "Sandwiches • Cafe",
    rating: 4.3,
    image: "🥪",
    deliveryTime: "15-20 min",
    menu: [
      {
        id: 1001,
        name: "Veg Grilled Sandwich",
        price: 149,
        description: "Grilled sandwich loaded with fresh vegetables",
        image: "🥪"
      },
      {
        id: 1002,
        name: "Cheese Sandwich",
        price: 169,
        description: "Grilled sandwich with melted cheese",
        image: "🥪"
      },
      {
        id: 1003,
        name: "Paneer Sandwich",
        price: 199,
        description: "Spicy paneer filling with fresh vegetables",
        image: "🥪"
      },
      {
        id: 1004,
        name: "Cold Coffee",
        price: 139,
        description: "Chilled creamy coffee",
        image: "🥤"
      }
    ]
  },

  {
    id: 11,
    name: "Chai & Snacks",
    category: "Cafe • Beverages • Snacks",
    rating: 4.4,
    image: "☕",
    deliveryTime: "10-15 min",
    menu: [
      {
        id: 1101,
        name: "Masala Chai",
        price: 49,
        description: "Hot tea brewed with aromatic Indian spices",
        image: "☕"
      },
      {
        id: 1102,
        name: "Samosa",
        price: 39,
        description: "Crispy pastry filled with spiced potatoes",
        image: "🥟"
      },
      {
        id: 1103,
        name: "Paneer Roll",
        price: 129,
        description: "Soft roll filled with spicy paneer",
        image: "🌯"
      },
      {
        id: 1104,
        name: "Veg Momos",
        price: 119,
        description: "Steamed dumplings filled with vegetables",
        image: "🥟"
      },
      {
        id: 1105,
        name: "Cold Coffee",
        price: 129,
        description: "Chilled coffee topped with creamy foam",
        image: "🥤"
      }
    ]
  },

  {
    id: 12,
    name: "Royal Thali",
    category: "Indian • Thali • North Indian",
    rating: 4.7,
    image: "🍱",
    deliveryTime: "30-40 min",
    menu: [
      {
        id: 1201,
        name: "Veg Thali",
        price: 249,
        description: "Complete Indian meal with dal, sabzi, roti and rice",
        image: "🍱"
      },
      {
        id: 1202,
        name: "Paneer Thali",
        price: 299,
        description: "Special thali with paneer curry and Indian breads",
        image: "🍱"
      },
      {
        id: 1203,
        name: "Dal Fry",
        price: 129,
        description: "Yellow dal cooked with aromatic spices",
        image: "🥘"
      },
      {
        id: 1204,
        name: "Jeera Rice",
        price: 119,
        description: "Basmati rice flavored with cumin",
        image: "🍚"
      }
    ]
  },

  {
    id: 13,
    name: "Waffle World",
    category: "Desserts • Waffles • Cafe",
    rating: 4.6,
    image: "🧇",
    deliveryTime: "15-20 min",
    menu: [
      {
        id: 1301,
        name: "Chocolate Waffle",
        price: 179,
        description: "Crispy waffle topped with chocolate sauce",
        image: "🧇"
      },
      {
        id: 1302,
        name: "Strawberry Waffle",
        price: 199,
        description: "Waffle topped with strawberries and cream",
        image: "🍓"
      },
      {
        id: 1303,
        name: "Nutella Waffle",
        price: 229,
        description: "Belgian waffle with creamy chocolate spread",
        image: "🧇"
      },
      {
        id: 1304,
        name: "Vanilla Shake",
        price: 149,
        description: "Creamy vanilla milkshake",
        image: "🥤"
      }
    ]
  },

  {
    id: 14,
    name: "Pasta Corner",
    category: "Italian • Pasta • Cafe",
    rating: 4.5,
    image: "🍝",
    deliveryTime: "25-30 min",
    menu: [
      {
        id: 1401,
        name: "White Sauce Pasta",
        price: 249,
        description: "Creamy pasta cooked in white sauce",
        image: "🍝"
      },
      {
        id: 1402,
        name: "Red Sauce Pasta",
        price: 229,
        description: "Pasta tossed in rich tomato sauce",
        image: "🍝"
      },
      {
        id: 1403,
        name: "Arrabbiata Pasta",
        price: 259,
        description: "Spicy Italian pasta with tomato and herbs",
        image: "🍝"
      },
      {
        id: 1404,
        name: "Cheesy Garlic Bread",
        price: 169,
        description: "Garlic bread topped with melted cheese",
        image: "🥖"
      }
    ]
  },

  {
    id: 15,
    name: "Momo Station",
    category: "Chinese • Momos • Asian",
    rating: 4.4,
    image: "🥟",
    deliveryTime: "20-25 min",
    menu: [
      {
        id: 1501,
        name: "Veg Steamed Momos",
        price: 119,
        description: "Soft steamed dumplings filled with vegetables",
        image: "🥟"
      },
      {
        id: 1502,
        name: "Paneer Momos",
        price: 149,
        description: "Steamed momos filled with spicy paneer",
        image: "🥟"
      },
      {
        id: 1503,
        name: "Fried Momos",
        price: 159,
        description: "Crispy fried momos with spicy dip",
        image: "🥟"
      },
      {
        id: 1504,
        name: "Chilli Momos",
        price: 179,
        description: "Crispy momos tossed in spicy chilli sauce",
        image: "🌶️"
      }
    ]
  }
];

export default restaurants;