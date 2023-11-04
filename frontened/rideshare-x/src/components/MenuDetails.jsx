import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const aaa = [
  {
    "_id": "6544189ee5dc1adb3a2728a5",
    "img": "/assets/crispy-chicken.avif",
    "name": "Crispy Kickin’ Cayenne Chicken Cutlets",
    "addition": "with Mashed Potatoes, Green Beans & a Honey Drizzle",
    "desc": "Are you the type of person who only goes to game nights on the off chance that Buffalo wings will be served? We’re with you, and that’s why our chefs took the beloved dish from messy app to epic weeknight dinner. First, chicken is coated in a cheesy, Buffalo-spiced panko breadcrumbs. It’s roasted to juicy crunchiness, then drizzled with creamy, tangy sauce. Oh, and did we mention there are buttery roasted green beans and creamy scallion mashed potatoes on the side?! Yeah, it’s safe to say this dish is a slam dunk.",
    "tags": [
      "Spicy"
    ],
    "allergens": [
      "Milk",
      "Wheat"
    ],
    "time": "30",
    "prep_time": "5",
    "difficulty": "Easy",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc746a",
        "name": "Green Beans",
        "vol": "6 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc746b",
        "name": "Scallions",
        "vol": "2 unit"
      },
      {
        "_id": "654433d83650ae0c00bc746c",
        "name": "Parsley",
        "vol": "1 clove"
      },
      {
        "_id": "654433d83650ae0c00bc746d",
        "name": "Grape Tomatoes",
        "vol": "4 ounce"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc746e",
        "name": "Calories",
        "value": "740 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc746f",
        "name": "Protein",
        "vol": "20g"
      },
      {
        "_id": "654433d83650ae0c00bc7470",
        "name": "Fat",
        "vol": "7g"
      },
      {
        "_id": "654433d83650ae0c00bc7471",
        "name": "Cholesterol",
        "vol": "90g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc7472",
        "info": "• Adjust rack to top position (top and middle positions for 4 servings) and preheat oven to 425 degrees. Wash and dry produce. • Trim and thinly slice scallions, separating whites from greens. Trim green beans if necessary. • In a small bowl, combine half the sour cream (you’ll use the rest later), ½ tsp Frank’s RedHot® Original Seasoning Blend (1 tsp for 4), and a big pinch of salt. (Be sure to measure the Frank’s Seasoning—you’ll use the rest in the next step.) Stir in water 1 tsp at a time until mixture reaches a drizzling consistency.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7473",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7474",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan3.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7475",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan4.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7476",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan5.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7477",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan6.avif"
      }
    ],
    "utensils": [
      "Small Bowl",
      "Medium Bowl"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728a6",
    "img": "/assets/Chickpeas.avif",
    "name": "Vegan Spice Market Chickpea & Rice Bowls",
    "addition": "with Blistered Tomatoes, Schug Sauce, Lemon Aioli & Pistachios",
    "desc": "This vegan bowl is not for the faint of heart: It’s full of textures and sauces and big flavors. From the curated spice blend to the herby-spicy-tangy schug sauce, this recipe proves that plant-based ingredients definitely pack a punch. We start with a big scoop of fluffy spiced rice, top it with hearty, crispy spice-roasted chickpeas and tender carrots, and add juicy blistered tomatoes. Top with a generous drizzle each of schug sauce and creamy lemon aioli, then sprinkle with crunchy pistachios and bright lemon juice to finish. Go big or go home!",
    "tags": [
      "Calorie Smart",
      "• Quick",
      "• Veggie"
    ],
    "allergens": [
      "Milk",
      "• Eggs",
      " • Wheat"
    ],
    "time": "30",
    "prep_time": "10",
    "difficulty": "medium",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc7478",
        "name": "Sun-Dried Tomatoes",
        "vol": "1.5 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc7479",
        "name": "Parmesan Cheese",
        "vol": "3 tablespoon"
      },
      {
        "_id": "654433d83650ae0c00bc747a",
        "name": "Sliced Almonds",
        "vol": "½ ounce"
      },
      {
        "_id": "654433d83650ae0c00bc747b",
        "name": "Veggie Stock Concentrate",
        "vol": "1 unit"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc747c",
        "name": "Calories",
        "value": "720 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc747d",
        "name": "Protein",
        "vol": "19g"
      },
      {
        "_id": "654433d83650ae0c00bc747e",
        "name": "Fat",
        "vol": "9g"
      },
      {
        "_id": "654433d83650ae0c00bc747f",
        "name": "Cholesterol",
        "vol": "95g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc7480",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7481",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7482",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7483",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7484",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7485",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "•Small pot",
      "•Zester",
      "•Small Bowl"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728a7",
    "img": "/assets/shrimp.avif",
    "name": "Shrimp & Sun-Dried Tomato Spaghetti",
    "addition": "with Fresh Parsley, Almonds & Parmesan",
    "desc": "Does your love for pasta know no bounds? We’ve got the perfect recipe for any self-professed carb connoisseur. Al dente spaghetti, sun-dried tomatoes, juicy grape tomatoes, and fresh parsley come together in a combination that’s hearty, satisfying, and classically comforting–all in 20 minutes! Just add a sprinkle of Parmesan and crunchy toasted almonds over the top to take things... well, over the top!",
    "tags": [
      "Quick"
    ],
    "allergens": [
      "Wheat",
      "• Tree Nuts",
      " • Wheat",
      "Shellfish"
    ],
    "time": "20",
    "prep_time": "10",
    "difficulty": "easy",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc7486",
        "name": "Sun-Dried Tomatoes",
        "vol": "1.5 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc7487",
        "name": "1 clove",
        "vol": "Garlic"
      },
      {
        "_id": "654433d83650ae0c00bc7488",
        "name": "Sliced Almonds",
        "vol": "½ ounce"
      },
      {
        "_id": "654433d83650ae0c00bc7489",
        "name": "Veggie Stock Concentrate",
        "vol": "1 unit"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc748a",
        "name": "Calories",
        "value": "720 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc748b",
        "name": "Protein",
        "vol": "19g"
      },
      {
        "_id": "654433d83650ae0c00bc748c",
        "name": "Fat",
        "vol": "9g"
      },
      {
        "_id": "654433d83650ae0c00bc748d",
        "name": "Cholesterol",
        "vol": "70g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc748e",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc748f",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7490",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7491",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7492",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7493",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "• Large Pot",
      "• Small Bowl",
      "• Small Bowl",
      "• Strainer",
      "• Paper Towel"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728a8",
    "img": "/assets/kale-soup.avif",
    "name": "One-Pot Pork Cannellini Kale Soup",
    "addition": "with Carrot & Lemon",
    "desc": "No matter the weather, it’s tough not to crave a big bowl of soup (i.e. the culinary equivalent of a bear hug). Tonight’s soup is chock-full of goodness—that is to say, spiced ground pork, chunks of carrots, smooth cannellini beans, and tender curly kale. Bust out your literal or metaphoric blanket, and get ready to wrap yourself in this meal that’s as satisfying as it is delicious.",
    "tags": [
      "Easy Cleanup",
      "Seasonal",
      "Easy Prep"
    ],
    "allergens": [
      "milk",
      "• eggs",
      " • peanuts",
      "• Shellfish"
    ],
    "time": "35",
    "prep_time": "5",
    "difficulty": "easy",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc7494",
        "name": "2 clove",
        "vol": "Garlic"
      },
      {
        "_id": "654433d83650ae0c00bc7495",
        "name": "Shallot",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc7496",
        "name": "Sun-Dried Tomatoes",
        "vol": "1.5 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc7497",
        "name": "Cannellini Beans",
        "vol": "1 unit"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc7498",
        "name": "Calories",
        "value": "670 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc7499",
        "name": "Protein",
        "vol": "36g"
      },
      {
        "_id": "654433d83650ae0c00bc749a",
        "name": "Fat",
        "vol": "32g"
      },
      {
        "_id": "654433d83650ae0c00bc749b",
        "name": "Cholesterol",
        "vol": "95g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc749c",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc749d",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc749e",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc749f",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74a0",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74a1",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "• Peeler",
      "• Large Pot",
      "• Strainer"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728a9",
    "img": "/assets/Tilapia.avif",
    "name": "Louisiana-Style Tilapia",
    "addition": "with Potato Wedges, Red Cabbage",
    "desc": "Cue the brass band, because your taste buds are about to take a trip to the Big Easy! We’re talking ultra-crunchy, spiced tilapia fillets with sides of cabbage-carrot slaw and crispy potato wedges. It’s all finished with a drizzle of one of our all-time favorite condiments: zingy, creamy remoulade. Now if only this came with beignets for dessert...",
    "tags": [
      "Easy Cleanup",
      "Seasonal",
      "Easy Prep"
    ],
    "allergens": [
      "milk",
      "• eggs",
      " • fish",
      "• wheat"
    ],
    "time": "40",
    "prep_time": "10",
    "difficulty": "medium",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc74a2",
        "name": "Tilapia",
        "vol": "11 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc74a3",
        "name": "Shredded Red Cabbage",
        "vol": "4 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc74a4",
        "name": "Sun-Dried Tomatoes",
        "vol": "1.5 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc74a5",
        "name": "Cannellini Beans",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc74a6",
        "name": "Dijon Mustard",
        "vol": "2  teaspoon"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc74a7",
        "name": "Calories",
        "value": "800 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc74a8",
        "name": "Protein",
        "vol": "36g"
      },
      {
        "_id": "654433d83650ae0c00bc74a9",
        "name": "Fat",
        "vol": "32g"
      },
      {
        "_id": "654433d83650ae0c00bc74aa",
        "name": "Cholesterol",
        "vol": "135g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc74ab",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74ac",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74ad",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74ae",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74af",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74b0",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "• Baking Sheet",
      "• Small Bowl",
      "• Medium Bowl",
      "• Large Pan"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728aa",
    "img": "/assets/cheesy-plant.avif",
    "name": "Cheesy Plant-Based Protein Tostadas",
    "addition": "Protein that tastes like meat (without the meat)",
    "desc": "Can’t decide between the mouthwatering flavors of your favorite taco and the satisfying crunch-factor of a plate of nachos? Enter: the tostada, aka the perfect marriage of the two. Here, you’ll oven-toast your tortillas for a flat, golden base. Then, you’ll layer on all your toppings—think Mexican cheese blend, zesty spiced ground plant-based protein, sautéed green pepper and onion, pico de gallo, smoky crema, and hot sauce. Crispy goodness awaits!",
    "tags": [
      "spicy",
      "Plant-Based Protein"
    ],
    "allergens": [
      "soy",
      "• wheat",
      " • milk"
    ],
    "time": "40",
    "prep_time": "10",
    "difficulty": "medium",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc74b1",
        "name": "Red Onion",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc74b2",
        "name": "Long Green Pepper",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc74b3",
        "name": "Mexican Cheese Blend",
        "vol": "½ cup"
      },
      {
        "_id": "654433d83650ae0c00bc74b4",
        "name": "Cannellini Beans",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc74b5",
        "name": "Hot Sauce",
        "vol": "2  teaspoon"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc74b6",
        "name": "Calories",
        "value": "850 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc74b7",
        "name": "Protein",
        "vol": "36g"
      },
      {
        "_id": "654433d83650ae0c00bc74b8",
        "name": "Fat",
        "vol": "32g"
      },
      {
        "_id": "654433d83650ae0c00bc74b9",
        "name": "Cholesterol",
        "vol": "35g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc74ba",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74bb",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74bc",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74bd",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74be",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74bf",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "• Baking Sheet",
      "• Small Bowl",
      "• Medium Bowl",
      "• Large Pan"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728ab",
    "img": "/assets/Prosciutto-Wrapped.avif",
    "name": "Prosciutto-Wrapped Chicken with Sage",
    "addition": "over Truffle Mushroom Risotto & Parmesan",
    "desc": "Our chefs, inspired by the classic Roman dish, saltimbocca, give you this tender chicken, wrapped in luscious prosciutto and fresh sage, pan seared then finished in the oven. Meanwhile another Italian classic—mushroom risotto—bubbles on the stove; it’s stirred with shallots, cream, and Italian cheeses, sprinkled with lemon, truffle zest, and Parmesan. Top this earthy, creamy risotto with the crisp, herb-scented chicken for a warming, elegant dinner idea.",
    "tags": [
      "Calorie Smart",
      "• Quick",
      "• Veggie"
    ],
    "allergens": [
      "Milk",
      " • Wheat"
    ],
    "time": "30",
    "prep_time": "5",
    "difficulty": "easy",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc74c0",
        "name": "Shallot",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc74c1",
        "name": "Button Mushrooms",
        "vol": "4 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc74c2",
        "name": "Sliced Almonds",
        "vol": "½ ounce"
      },
      {
        "_id": "654433d83650ae0c00bc74c3",
        "name": "Veggie Stock Concentrate",
        "vol": "1 unit"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc74c4",
        "name": "Calories",
        "value": "720 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc74c5",
        "name": "Protein",
        "vol": "19g"
      },
      {
        "_id": "654433d83650ae0c00bc74c6",
        "name": "Fat",
        "vol": "9g"
      },
      {
        "_id": "654433d83650ae0c00bc74c7",
        "name": "Cholesterol",
        "vol": "95g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc74c8",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74c9",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74ca",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74cb",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74cc",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74cd",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "•Small pot",
      "•Zester",
      "•Small Bowl"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728ac",
    "img": "/assets/balsamic.avif",
    "name": "Balsamic & Fig Beef Tenderloin",
    "addition": "with Garlic Mashed Potatoes & Rosemary ",
    "desc": "Gettin’ figgy with it! Fig jam, that is. Here, the sweet stuff is paired with balsamic vinegar to create a rich and tangy pan sauce for drizzling over beef tenderloin. Garlicky mashed potatoes are the perfect accompaniment for catching any extra sauce (and trust us, you won’t want to waste a drop.) Tender, caramelized Brussels sprouts join the mix, topped with crunchy, golden breadcrumbs. This dish is bursting with flavors and textures that’ll make your mouth dance.",
    "tags": [
      "Seasonal",
      "Easy Prep"
    ],
    "allergens": [
      "milk",
      "• eggs",
      " • fish",
      "• wheat"
    ],
    "time": "40",
    "prep_time": "10",
    "difficulty": "medium",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc74ce",
        "name": "Tilapia",
        "vol": "11 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc74cf",
        "name": "Shredded Red Cabbage",
        "vol": "4 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc74d0",
        "name": "Sun-Dried Tomatoes",
        "vol": "1.5 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc74d1",
        "name": "Cannellini Beans",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc74d2",
        "name": "Dijon Mustard",
        "vol": "2  teaspoon"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc74d3",
        "name": "Calories",
        "value": "800 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc74d4",
        "name": "Protein",
        "vol": "36g"
      },
      {
        "_id": "654433d83650ae0c00bc74d5",
        "name": "Fat",
        "vol": "32g"
      },
      {
        "_id": "654433d83650ae0c00bc74d6",
        "name": "Cholesterol",
        "vol": "135g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc74d7",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74d8",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74d9",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74da",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74db",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74dc",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "• Potato Masher",
      "• Medium Pan",
      "• Baking Sheet",
      "• Paper Towel"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728ad",
    "img": "/assets/Beans.avif",
    "name": "Chicken, Beans ’n’ Greens Stuffed Peppers",
    "addition": "with Creamy Hummus",
    "desc": "Mild, earthy, sweet, and perfect for stuffing, bell peppers are one of our favorite ingredients for a quick (and delicious!) weeknight dinner idea. For this vegan spin on a classic, we toss springy, scallion-flecked pearl couscous with Italian-seasoned cannellini beans, kale, and tomatoes to make a hearty, flavorful stuffing. Once filled and baked, the peppers are topped with a drizzle of garlicky hummus sauce before serving. After dinner, you’ll be pleasantly stuffed, too!",
    "tags": [
      "• Quick",
      "• Veggie"
    ],
    "allergens": [
      "wheat",
      "• Eggs",
      " • seasem"
    ],
    "time": "30",
    "prep_time": "5",
    "difficulty": "easy",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc74dd",
        "name": "Italian Seasoning",
        "vol": "1 tablespoon"
      },
      {
        "_id": "654433d83650ae0c00bc74de",
        "name": "Parmesan Cheese",
        "vol": "3 tablespoon"
      },
      {
        "_id": "654433d83650ae0c00bc74df",
        "name": "Veggie Stock Concentrate",
        "vol": "2 unit"
      },
      {
        "_id": "654433d83650ae0c00bc74e0",
        "name": "Chopped Chicken Breast",
        "vol": "10 ounce"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc74e1",
        "name": "Calories",
        "value": "820 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc74e2",
        "name": "Protein",
        "vol": "54g"
      },
      {
        "_id": "654433d83650ae0c00bc74e3",
        "name": "Fat",
        "vol": "31g"
      },
      {
        "_id": "654433d83650ae0c00bc74e4",
        "name": "Cholesterol",
        "vol": "105g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc74e5",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74e6",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74e7",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74e8",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74e9",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74ea",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "•Small pot",
      "•Zester",
      "•Small Bowl"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728ae",
    "img": "/assets/tacos.avif",
    "name": "Cheesy Plant-Based Protein Tostadas",
    "addition": "Protein that tastes like meat (without the meat)",
    "desc": "Can’t decide between the mouthwatering flavors of your favorite taco and the satisfying crunch-factor of a plate of nachos? Enter: the tostada, aka the perfect marriage of the two. Here, you’ll oven-toast your tortillas for a flat, golden base. Then, you’ll layer on all your toppings—think Mexican cheese blend, zesty spiced ground plant-based protein, sautéed green pepper and onion, pico de gallo, smoky crema, and hot sauce. Crispy goodness awaits!",
    "tags": [
      "Easy Cleanup",
      "Easy Prep",
      "Quick"
    ],
    "allergens": [
      "soy",
      "• eggs",
      " • milk",
      "• wheat"
    ],
    "time": "20",
    "prep_time": "5",
    "difficulty": "easy",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc74eb",
        "name": "Yellow Onion",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc74ec",
        "name": "Lemon",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc74ed",
        "name": "Mexican Cheese Blend",
        "vol": "½ cup"
      },
      {
        "_id": "654433d83650ae0c00bc74ee",
        "name": "Cannellini Beans",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc74ef",
        "name": "Monterey Jack Cheese",
        "vol": "2  cup"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc74f0",
        "name": "Calories",
        "value": "850 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc74f1",
        "name": "Protein",
        "vol": "36g"
      },
      {
        "_id": "654433d83650ae0c00bc74f2",
        "name": "Fat",
        "vol": "32g"
      },
      {
        "_id": "654433d83650ae0c00bc74f3",
        "name": "Cholesterol",
        "vol": "30g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc74f4",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74f5",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74f6",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74f7",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74f8",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc74f9",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "• Paper Towel",
      "• Medium Bowl",
      "• Large Pan"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728af",
    "img": "/assets/tex-mex.avif",
    "name": "Citrusy Tex-Mex Chicken",
    "addition": "with Spiced Veggie Jumble & Lime Crema",
    "desc": "Juicy pork tenderloin loves a little something sweet, and sweetness pairs beautifully with a little spicy heat! Lucky you—tonight’s dinner has it all. Succulent pork is seasoned with our Southwest Spice Blend, seared, then roasted to perfection beside a colorful array of sweet potatoes, green bell pepper, and red onion. Top the pork with a citrusy Tex-Mex sauce made with fresh orange and lime juice, and drizzle your plate with cool, tangy lime crema just before serving. Cheers to perfect pairings!",
    "tags": [
      "spicy",
      "Calorie Smart",
      "• Quick"
    ],
    "allergens": [
      "Milk"
    ],
    "time": "35",
    "prep_time": "10",
    "difficulty": "easy",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc74fa",
        "name": "Shallot",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc74fb",
        "name": "Button Mushrooms",
        "vol": "4 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc74fc",
        "name": "Sliced Almonds",
        "vol": "3 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc74fd",
        "name": "Sour Cream",
        "vol": "3 tablespoon"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc74fe",
        "name": "Calories",
        "value": "720 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc74ff",
        "name": "Protein",
        "vol": "19g"
      },
      {
        "_id": "654433d83650ae0c00bc7500",
        "name": "Fat",
        "vol": "9g"
      },
      {
        "_id": "654433d83650ae0c00bc7501",
        "name": "Cholesterol",
        "vol": "95g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc7502",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7503",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7504",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7505",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7506",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7507",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "•Small pot",
      "•Zester",
      "•Small Bowl"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728b0",
    "img": "/assets/Roll-Ups.avif",
    "name": "Kids’ Honey Mustard Turkey Roll-Ups",
    "addition": "with Carrot Sticks, Hummus & Apple Slices",
    "desc": "A balanced kids’ lunch in 15 minutes, with no cooking required, no pans to clean? That may sound like a dream, but we’re bringing it to life! You’ll roll up sliced turkey and sweet-tangy honey mustard dressing in flour tortillas, and serve with crisp carrot and cucumber sticks, hummus for dipping, and sweet apple slices. The kicker? You’ll spend less time shopping, planning, and cooking for your family, and more time hanging out with them!",
    "tags": [
      "Calorie Smart",
      "• Quick"
    ],
    "allergens": [
      "Milk",
      "eggs",
      "meat"
    ],
    "time": "35",
    "prep_time": "10",
    "difficulty": "easy",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc7508",
        "name": "Shallot",
        "vol": "1 unit"
      },
      {
        "_id": "654433d83650ae0c00bc7509",
        "name": "Button Mushrooms",
        "vol": "4 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc750a",
        "name": "Sliced Almonds",
        "vol": "3 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc750b",
        "name": "Sour Cream",
        "vol": "3 tablespoon"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc750c",
        "name": "Calories",
        "value": "720 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc750d",
        "name": "Protein",
        "vol": "19g"
      },
      {
        "_id": "654433d83650ae0c00bc750e",
        "name": "Fat",
        "vol": "9g"
      },
      {
        "_id": "654433d83650ae0c00bc750f",
        "name": "Cholesterol",
        "vol": "35g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc7510",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7511",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7512",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7513",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7514",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7515",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "•Small pot",
      "•Zester",
      "•Small Bowl"
    ]
  },
  {
    "_id": "6544189ee5dc1adb3a2728b1",
    "img": "/assets/stir-fry.avif",
    "name": "One-Pot Spicy Chicken Curry Stir-Fry",
    "addition": "with Noodles, Cilantro & Peanuts",
    "desc": "Coconut curry is one of those comforting flavors we can’t live without. Our chefs indulged that craving, and this one dresses up ramen noodles and a slurry of veggies, including bell pepper and mushrooms. We wouldn’t leave you without a little crunch on your stir fry, either: sweet and savory peanuts. We’re pretty sure this is one veggie noodle dish you’ll go nuts over.",
    "tags": [
      "Quick"
    ],
    "allergens": [
      "Wheat",
      "• Tree Nuts",
      " • Wheat",
      "Shellfish"
    ],
    "time": "20",
    "prep_time": "10",
    "difficulty": "easy",
    "ingredients": [
      {
        "_id": "654433d83650ae0c00bc7516",
        "name": "Sun-Dried Tomatoes",
        "vol": "1.5 ounce"
      },
      {
        "_id": "654433d83650ae0c00bc7517",
        "name": "1 clove",
        "vol": "Garlic"
      },
      {
        "_id": "654433d83650ae0c00bc7518",
        "name": "Sliced Almonds",
        "vol": "½ ounce"
      },
      {
        "_id": "654433d83650ae0c00bc7519",
        "name": "Veggie Stock Concentrate",
        "vol": "1 unit"
      }
    ],
    "nutrition": [
      {
        "_id": "654433d83650ae0c00bc751a",
        "name": "Calories",
        "value": "720 kcal"
      },
      {
        "_id": "654433d83650ae0c00bc751b",
        "name": "Protein",
        "vol": "19g"
      },
      {
        "_id": "654433d83650ae0c00bc751c",
        "name": "Fat",
        "vol": "9g"
      },
      {
        "_id": "654433d83650ae0c00bc751d",
        "name": "Cholesterol",
        "vol": "70g"
      }
    ],
    "instructions": [
      {
        "_id": "654433d83650ae0c00bc751e",
        "info": "• Bring a large pot of salted water to a boil. Wash and dry produce. • Finely chop sun-dried tomatoes. Peel and mince or grate garlic. Halve grape tomatoes lengthwise; place in a small bowl and toss with a drizzle of olive oil, salt, and pepper. Pick parsley leaves from stems; finely chop leaves.",
        "img": "/assets/Pecan1.avif"
      },
      {
        "_id": "654433d83650ae0c00bc751f",
        "info": "• Place 1 TBSP butter (2 TBSP for 4 servings) in a medium microwave-safe bowl; microwave until melted, 30-45 seconds. • Stir in panko, Monterey Jack, remaining Frank’s RedHot® Original Seasoning Blend, and a big pinch of salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7520",
        "info": "• In a small bowl, combine honey, GREY POUPON® Dijon Mustard, and mayonnaise.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7521",
        "info": "• Pat chicken* dry with paper towels; season with remaining Fry Seasoning, salt, and pepper. Place on a lightly oiled baking sheet. • Evenly spread tops of chicken with a thin layer of honey mustard sauce (save the rest for serving). Mound with pecan mixture, pressing firmly to adhere (no need to coat the undersides). • Roast on middle rack until crust is golden brown and chicken is cooked through, 15-20 minutes.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7522",
        "info": "• Meanwhile, halve, core, and thinly slice apple. • In a large bowl, toss mixed greens and apple with Caesar dressing. Season with salt and pepper.",
        "img": "/assets/Pecan2.avif"
      },
      {
        "_id": "654433d83650ae0c00bc7523",
        "info": "• Divide chicken and salad between plates. Drizzle chicken with remaining honey mustard sauce.",
        "img": "/assets/Pecan2.avif"
      }
    ],
    "utensils": [
      "• Medium Pot",
      "• Small Bowl",
      "• Strainer",
      "• Paper Towel"
    ]
  }
]
function MenuDetails() {
  const [item, setItem] = useState([]);
  const [itemLoaded, setitemLoaded] = useState(false);
  let { id } = useParams();

  const fetchFood = async (id) => {
    // let headersList = {};

    // let response = await fetch(`http://localhost:8080/menu/food/${id}`, {
    //   method: "GET",
    //   headers: headersList,
    // });

    // let data = await response.json();
    // console.log(data);
    // setItem(data);
    // setitemLoaded(true);

    let xyz = aaa.find((e => e._id == id))
    setItem(xyz);
    setitemLoaded(true);
  };

  useEffect(() => {
    fetchFood(id);
  }, []);
  const [color, setColor] = useState(null);

  useEffect(() => {
    const image = new Image();
    image.src = item.img;

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      const x = 10; // X-coordinate of the pixel
      const y = 10; // Y-coordinate of the pixel
      const pixelData = context.getImageData(x, y, 1, 1).data;

      const red = pixelData[0];
      const green = pixelData[1];
      const blue = pixelData[2];

      setColor(`rgb(${red}, ${green}, ${blue})`);
    };
  }, [item]);

  return (
    itemLoaded && (
      <div id="menu-details">
        <div className="bgg" style={{ backgroundColor: color }}></div>
        <div className="menu-img">
          <img src={item.img} alt="" />
        </div>
        <div className="menu-info">
          <div className="menu-title">
            <div>
              <h1>{item.name}</h1>
              <button>View Our Plans</button>
            </div>
            <h2>{item.addition}</h2>
          </div>
          <p>{item.desc}</p>

          <div className="menu-cont">
            <div className="menu-tags">
              <div className="menu-det">
                <p className="total-time">Tags</p>
                <p className="it2"> {item.tags.join(" ")} </p>
              </div>
              <div className="menu-det">
                <p className="total-time">Allergens</p>
                <p className="it2"> {item.allergens.join(" ")} </p>
              </div>
            </div>
            <div className="menu-time">
              <p className="total-time">Total Time</p>
              <p className="total-time">Prep Time</p>
              <p className="total-time">Difficulty</p>
              <p className="it2"> {item.time} min</p>
              <p className="it2"> {item.prep_time} min</p>
              <p className="it2"> {item.difficulty} </p>
            </div>
          </div>
        </div>
        <div id="intructions">
          <h1>Intructions</h1>
          {item.instructions.map((el, i) => (
            <div className="intructions-item">
              <img src={el.img} alt="" />
              <div className="ints">
                <span>{i + 1}</span>
                <p>{el.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
}

export default MenuDetails;
