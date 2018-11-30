const products = {
  dairy: [
    {
      name: '0 Percent Milk',
      avatar: require('./products/dairy/0_percent_milk.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 3.50,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 2.68,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 3.25,
          unitType: 'each'
        }
      ]
    },
    {
      name: '2 Percent Milk',
      avatar: require('./products/dairy/2_percent_milk.jpeg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.78,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 2.89,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 3.25,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.35,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Organic Whole Milk',
      avatar: require('./products/dairy/organic_whole_milk.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 4.99,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 4.50,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 5,
          unitType: 'each'
        },
        {
          store: 'safeway',
          unitPrice: 5.32,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Butter',
      avatar: require('./products/dairy/butter.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 4.25,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 4.62,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 4.33,
          unitType: 'each'
        },
        {
          store: 'safeway',
          unitPrice: 4.29,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Blue Cheese',
      avatar: require('./products/dairy/blue_cheese.jpeg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.08,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 3.22,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 2.52,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.79,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Cheddar Cheese',
      avatar: require('./products/dairy/cheddar_cheese.jpg'),
      price: [
        {
          store: 'safeway',
          unitPrice: 2.22,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 2.52,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 2.99,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.99,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Mozzarella Cheese',
      avatar: require('./products/dairy/mozzarella_cheese.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.27,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 2.59,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 2.11,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.32,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Parmesan Cheese',
      avatar: require('./products/dairy/parmesan_cheese.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 5.79,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 6.69,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 6.89,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Cottage Cheese',
      avatar: require('./products/dairy/cottage_cheese.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 3.99,
          unitType: 'each'
        },
        {
          store: 'safeway',
          unitPrice: 4.49,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 3.34,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Cage Free Brown Eggs',
      avatar: require('./products/dairy/cage_free_brown_eggs.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 3.29,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 3.12,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 2.99,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Ben&Jerry Chocolate Fudge Brownie Ice Cream',
      avatar: require('./products/dairy/ben_and_jerry_chocolet_fudge_brownie.png'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 1.99,
          unitType: 'each'
        },
        {
          store: 'safeway',
          unitPrice: 1.79,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 1.89,
          unitType: 'each'
        }

      ]
    },
    {
      name: 'Ben&Jerry Resist Ice Cream',
      avatar: require('./products/dairy/ben_and_jerry_chocolet.png'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.45,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 2.52,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 2.36,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.55,
          unitType: 'each'
        },
        {
          store: 'safeway',
          unitPrice: 2.29,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Ben&Jerry Chocolate Chip Cookie Dough Ice Cream',
      avatar: require('./products/dairy/ben_and_jerry_cookie.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.99,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 2.82,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 2.56,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.72,
          unitType: 'each'
        },
        {
          store: 'safeway',
          unitPrice: 2.66,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Ben&Jerry Brownie Batter Core Ice Cream',
      avatar: require('./products/dairy/bj_brownie_batter.png'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.76,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 2.87,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 2.68,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.72,
          unitType: 'each'
        },
        {
          store: 'safeway',
          unitPrice: 2.99,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Ben&Jerry Red Velet Cake Ice Cream',
      avatar: require('./products/dairy/bj_red_velvet_cake.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.59,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 2.86,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 2.99,
          unitType: 'each'
        }
      ]
    },
  ],
  fruits: [
    {
      name: 'Apple',
      avatar: require('./products/fruits/apple.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 1.32,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 1.69,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 1.22,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 1.35,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 2.21,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Banana',
      avatar: require('./products/fruits/banana.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 0.32,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 0.36,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 0.56,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 0.21,
          unitType: 'each'
        },
        {
          store: 'safeway',
          unitPrice: 0.72,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Cherries',
      avatar: require('./products/fruits/cherries.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.25,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 2.36,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 2.10,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.87,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 2.21,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Grapes',
      avatar: require('./products/fruits/grapes.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 1.71,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 1.65,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 1.59,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 1.81,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 1.69,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Kiwi',
      avatar: require('./products/fruits/kiwi.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.11,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 1.99,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 2.32,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 1.89,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 2.21,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Mango',
      avatar: require('./products/fruits/mango.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 1.49,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 1.69,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 1.52,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 1.39,
          unitType: 'each'
        },
        {
          store: 'safeway',
          unitPrice: 1.82,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Peach',
      avatar: require('./products/fruits/peach.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.12,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 2.66,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 2.31,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.42,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 2.06,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Pineapple',
      avatar: require('./products/fruits/pineapple.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.99,
          unitType: 'each'
        },
        {
          store: 'giant',
          unitPrice: 3.02,
          unitType: 'each'
        },
        {
          store: 'wegmans',
          unitPrice: 2.42,
          unitType: 'each'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.76,
          unitType: 'each'
        },
        {
          store: 'safeway',
          unitPrice: 3.12,
          unitType: 'each'
        }
      ]
    },
    {
      name: 'Plum',
      avatar: require('./products/fruits/plum.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 2.12,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 2.42,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.31,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 2.06,
          unitType: 'lb'
        }
      ]

    },
  ],
  vegetables: [
    {
      name: 'Yellow Onions',
      avatar: require('./products/vegetables/yellow_onion.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 0.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 0.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 0.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 0.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 0.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Tomatoes',
      avatar: require('./products/vegetables/tomatoes.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 1.49,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 1.89,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 1.56,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 1.67,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 1.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Potatoes',
      avatar: require('./products/vegetables/potatoes.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 0.62,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 0.69,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 0.75,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 0.86,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 0.55,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Carrot',
      avatar: require('./products/vegetables/carrots.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 0.87,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 0.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 1.22,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 0.69,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 0.89,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Beans',
      avatar: require('./products/vegetables/beans.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 1.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 1.78,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 1.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 1.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 1.92,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Cabbage',
      avatar: require('./products/vegetables/cabbage.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 0.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 0.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 0.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 0.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 0.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Cauliflower',
      avatar: require('./products/vegetables/cauli_flower.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 1.99,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 1.78,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 2.15,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.29,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 1.82,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Red Bell Pepper',
      avatar: require('./products/vegetables/red_bell_pepper.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 1.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 1.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 1.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 1.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 1.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Asparagus',
      avatar: require('./products/vegetables/aspragus.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 2.97,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 2.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 2.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 2.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Baby Spinach',
      avatar: require('./products/vegetables/spinach.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 4.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 4.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 4.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 4.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 4.72,
          unitType: 'lb'
        }
      ]
    },
  ],
  meat: [
    {
      name: 'Chicken Breast',
      avatar: require('./products/meat/chicken_breast.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 3.43,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 3.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 3.53,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 3.89,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 3.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Chicken Drumstick',
      avatar: require('./products/meat/chicken_drumstick.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 1.94,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 2.25,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 2.32,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.82,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 1.89,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Whole Chicken',
      avatar: require('./products/meat/whole_chicken.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 0.98,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 2.35,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 0.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 2.15,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 2.22,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Turkey',
      avatar: require('./products/meat/turkey.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 0.87,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 0.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 0.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 0.99,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 0.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Bacon',
      avatar: require('./products/meat/bacon.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 4.16,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 3.90,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 4.22,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 3.89,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 4.35,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Pork Chops',
      avatar: require('./products/meat/pork_chops.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 4.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 4.38,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 4.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 4.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 4.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Lamb Chops',
      avatar: require('./products/meat/lamb_chops.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 6.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 6.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 6.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 6.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 6.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Beef',
      avatar: require('./products/meat/beef.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 4.98,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 4.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 5.29,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 5.25,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 4.89,
          unitType: 'lb'
        }
      ]
    },
  ],
  seaFood: [
    {
      name: 'Salmon Fillet',
      avatar: require('./products/seaFood/salmon.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 8.96,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 9.22,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 8.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 9.32,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 8.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Tuna Fillet',
      avatar: require('./products/seaFood/tuna_fillet.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 10.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 10.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 10.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 10.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 10.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Tilapia Fillet',
      avatar: require('./products/seaFood/tilapia.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 6.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 6.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 6.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 6.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 6.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'King Prawn',
      avatar: require('./products/seaFood/king_prawn.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 7.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 7.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 7.89,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 7.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 7.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Crab Meat',
      avatar: require('./products/seaFood/crab_meat.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 3.98,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 4.12,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 4.28,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 3.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 3.72,
          unitType: 'lb'
        }
      ]
    },
    {
      name: 'Lobster',
      avatar: require('./products/seaFood/lobster.jpg'),
      price: [
        {
          store: 'harris_teeter',
          unitPrice: 20.66,
          unitType: 'lb'
        },
        {
          store: 'giant',
          unitPrice: 20.76,
          unitType: 'lb'
        },
        {
          store: 'wegmans',
          unitPrice: 20.94,
          unitType: 'lb'
        },
        {
          store: 'whole_foods_market',
          unitPrice: 20.56,
          unitType: 'lb'
        },
        {
          store: 'safeway',
          unitPrice: 20.72,
          unitType: 'lb'
        }
      ]
    },
  ]
}

export default products;