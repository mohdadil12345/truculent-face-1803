import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

// const aaa = [
//   {
//     "_id":"1",
//       "img": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/633c638d5b11944a13030fd5-0d5799af.jpg",
//       "name": "Pork & Pepper Enchiladas",
//       "addition": "with Pico de Gallo & Lime Crema",
//       "desc": "Saucy, smothered, hearty, and delicious: This enchilada bake has everything! You’ll start by wrapping tortillas around a filling of spiced ground pork and sautéed bell pepper, then coating the bundles with a healthy glug of zesty, tomatoey sauce and a sprinkle of Mexican cheese. Bake until piping hot and bubbly, then top with lime crema and pico de gallo and dig into all that deliciousness.",
//       "tags": [
//           ""
//       ],
//       "allergens": [
//           "Milk",
//           "Soy",
//           "Wheat"
//       ],
//       "time": "35",
//       "prep_time": "5",
//       "difficulty": "easy",
//       "ingredients": [
//           {
//               "name": "Tomato",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/556728a04dab71a90d8b456a-a580bdf4.png",
//               "vol": "1 unit"
//           },
//           {
//               "name": "Scallions",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/554a301f4dab71626c8b4569-015d8d9b.png",
//               "vol": "2 unit"
//           },
//           {
//               "name": "Lime",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/554a3c9efd2cb9ba4f8b456c-f32287bd.png",
//               "vol": "1 unit"
//           },
//           {
//               "name": "Green Bell Pepper",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/image/554a35834dab71636c8b456a.png",
//               "vol": "1 unit"
//           },
//           {
//               "name": "Sour Cream",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/5550e1064dab71893e8b4569-dc52e70d.png",
//               "vol": "3 tablespoon"
//           },
//           {
//               "name": "Ground Pork",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/image/55661f8afd2cb9046d8b456a.png",
//               "vol": "10 ounce"
//           },
//           {
//               "name": "Tex-Mex Paste",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/5de9275939942c47890bf42d-5985bc26.png",
//               "vol": "1 unit"
//           },
//           {
//               "name": "Southwest Spice Blend",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/55a55c56fd2cb9f27c8b4567-1fe316e4.png",
//               "vol": "1 tablespoon"
//           },
//           {
//               "name": "Flour Tortillas",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/596f6137d56afa3be43b24e2-c41c6499.png",
//               "vol": "6 unit"
//           },
//           {
//               "name": "Mexican Cheese Blend",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/5afc835e30006c4576393862-ffdf37af.jpg",
//               "vol": "½ cup"
//           },
//           {
//               "name": "Tomato Paste",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/image/55670815f8b25e8f2a8b4567.png",
//               "vol": "1 unit"
//           }
//       ],
//       "nutrition": [
//           {
//               "name": "Calories",
//               "value": "900 kcal"
//           },
//           {
//               "name": "Fat",
//               "value": "55 g"
//           },
//           {
//               "name": "Saturated Fat",
//               "value": "22 g"
//           },
//           {
//               "name": "Carbohydrate",
//               "value": "64 g"
//           },
//           {
//               "name": "Sugar",
//               "value": "12 g"
//           },
//           {
//               "name": "Dietary Fiber",
//               "value": "3 g"
//           },
//           {
//               "name": "Protein",
//               "value": "39 g"
//           },
//           {
//               "name": "Cholesterol",
//               "value": "140 mg"
//           },
//           {
//               "name": "Sodium",
//               "value": "1930 mg"
//           }
//       ],
//       "instructions": [
//           {
//               "info": "1• Adjust rack to top position and preheat\noven to 475 degrees. Wash and dry\nproduce.\n• Dice tomato. Trim and thinly slice scallions.\nQuarter lime. Core, deseed, and dice bell\npepper into ½-inch pieces.",
//               "img": "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/633c638d5b11944a13030fd5/step-96660d00.jpg"
//           },
//           {
//               "info": "2• In a small bowl, combine tomato, scallions,\na drizzle of oil, and juice from one lime\nwedge (two wedges for 4 servings). Season\nwith salt and pepper.\n• In a separate small bowl, combine sour\ncream with lime juice to taste. Add water\n1 tsp at a time until mixture reaches a\ndrizzling consistency. Season with salt\nand pepper.",
//               "img": "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/633c638d5b11944a13030fd5/step-3c873990.jpg"
//           },
//           {
//               "info": "3• Heat a drizzle of oil in a large pan over\nmedium-high heat. Add bell pepper,\nsalt, and pepper; cook until just softened,\n4-5 minutes.\n• Add another drizzle of oil to pan. Add\npork*, half the Tex-Mex paste, half the\nSouthwest Spice Blend (you’ll use the\nrest of each later), salt, and pepper. Cook,\nbreaking up meat into pieces, until pork is\nbrowned and cooked through, 4-6 minutes.\nTurn off heat. TIP: If there’s excess grease in\nyour pan, carefully pour it out.",
//               "img": "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/633c638d5b11944a13030fd5/step-aa940af3.jpg"
//           },
//           {
//               "info": "4• Place a small amount of filling on one half\nof each tortilla. Roll up tortillas, starting\nwith filled sides, to create enchiladas.\nPlace, seam sides down, in an 8-by-8-inch\nbaking dish (9-by-13-inch baking dish for\n4 servings) or an ovenproof pan.",
//               "img": "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/633c638d5b11944a13030fd5/step-091838f5.jpg"
//           },
//           {
//               "info": "5• In a liquid measuring cup or bowl, combine\n½ cup water (¾ cup for 4 servings), tomato\npaste, remaining Tex-Mex paste, and\nremaining Southwest Spice Blend.\n• Pour sauce over enchiladas to thoroughly\ncoat. Sprinkle with Mexican cheese blend.\n• Bake on top rack until sauce is bubbly and\ncheese has melted, 3-5 minutes.",
//               "img": "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/633c638d5b11944a13030fd5/step-bf04fb79.jpg"
//           },
//           {
//               "info": "6• Top enchiladas with lime crema and pico\nde gallo. Divide between plates and serve\nwith any remaining lime wedges on the\nside.\nGround Pork is fully cooked when internal temperature reaches 160°.",
//               "img": "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/633c638d5b11944a13030fd5/step-3cf8de4e.jpg"
//           }
//       ],
//       "utensils": [
//           "",
//           "Small Bowl",
//           "Large Pan",
//           "Baking Dish"
//       ]
//   },
//   {
//     "_id":"2",
//       "img": "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/6434eddb9b9a91e0f10da49f-2d371a5a.jpg",
//       "name": "Creamy Tomato Soup with Pork Sausage",
//       "addition": "plus Peas & Cheesy Bread",
//       "desc": "Have you ever had penne alla vodka and loved the sauce so much you wanted to drink it up with a straw? No? Just us? Well, that’s kind of what this creamy tomato soup is like. It’s got the added bonus of Italian sausage, bright pops of peas, and Italian seasoning to make it extra zesty. There’s also cheesy, crusty baguette to round out the meal. All this in 20 minutes? It’s not just supper, it’s souper!",
//       "tags": [
//           "Easy Prep",
//           "Quick"
//       ],
//       "allergens": [
//           "Milk",
//           "Soy",
//           "Wheat"
//       ],
//       "time": "35",
//       "prep_time": "5",
//       "difficulty": "easy",
//       "ingredients": [
//           {
//               "name": "Italian Pork Sausage Mix",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/63ac48db76d86a25c908e861-4a3e0673.jpg",
//               "vol": "9 ounce"
//           },
//           {
//               "name": "Italian Seasoning",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/image/561554d5fd2cb97e5e8b4567.png",
//               "vol": "1 tablespoon"
//           },
//           {
//               "name": "Cornstarch",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/56290c9cf8b25e8e0c8b4567-1ad35616.png",
//               "vol": "2 tablespoon"
//           },
//           {
//               "name": "Marinara Cup",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/5a0dd1452c3e086d836429e2-52072a6b.png",
//               "vol": "2.5 ounce"
//           },
//           {
//               "name": "Cream Sauce Base",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/5d83b5be549f805d015f41d0-8d42fa72.png",
//               "vol": "4 ounce"
//           },
//           {
//               "name": "Chicken Stock Concentrate",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/5632315bf8b25e5a138b4568-07f14295.png",
//               "vol": "1 unit"
//           },
//           {
//               "name": "Mushroom Stock Concentrate",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/5cdb0a9ba234650008027048-b038054b.png",
//               "vol": "1 unit"
//           },
//           {
//               "name": "Peas",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/554a3e0b4dab71626c8b456c-d14eabd8.png",
//               "vol": "4 ounce"
//           },
//           {
//               "name": "Demi Baguette",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/55bf91d1f8b25e20688b4569-ad14b124.jpg",
//               "vol": "1 unit"
//           },
//           {
//               "name": "Italian Cheese Blend",
//               "img": "https://img.hellofresh.com/w_256,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/ingredient/55cca25af8b25e7b468b4567-ae6feec9.png",
//               "vol": "½ cup"
//           }
//       ],
//       "nutrition": [
//           {
//               "name": "Calories",
//               "value": "830 kcal"
//           },
//           {
//               "name": "Fat",
//               "value": "52 g"
//           },
//           {
//               "name": "Saturated Fat",
//               "value": "26 g"
//           },
//           {
//               "name": "Carbohydrate",
//               "value": "59 g"
//           },
//           {
//               "name": "Sugar",
//               "value": "11 g"
//           },
//           {
//               "name": "Dietary Fiber",
//               "value": "5 g"
//           },
//           {
//               "name": "Protein",
//               "value": "34 g"
//           },
//           {
//               "name": "Cholesterol",
//               "value": "155 mg"
//           },
//           {
//               "name": "Sodium",
//               "value": "2970 mg"
//           }
//       ],
//       "instructions": [
//           {
//               "info": "1• Adjust rack to top position and preheat oven to 450 degrees.\n• Remove sausage* from casing if necessary; discard casing. Melt\n1 TBSP butter (2 TBSP for 4 servings) in a medium pot over\nmedium-high heat. Add sausage and half the Italian Seasoning\n(all for 4) to pan; cook, breaking up meat into pieces, until\nbrowned and cooked through, 4-6 minutes.",
//               "img": "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/6434eddb9b9a91e0f10da49f/step-88d82425.jpg"
//           },
//           {
//               "info": "2• While sausage cooks, in a medium bowl, whisk together\ncornstarch and ½ cup cold water until combined. Set aside.\n• Add marinara to pot with sausage. Cook, stirring occasionally,\nuntil combined, 30 seconds.\n• Increase heat to high. Stir in cream sauce base, chicken stock\nconcentrate, mushroom stock concentrate, cornstarch\nmixture, and 1½ cups hot water (3½ cups for 4 servings); bring\nto a boil. Cook, stirring occasionally, until thickened, 5 minutes.\nTIP: If soup seems too thick, stir in another ¼ cup water.\n• Remove pot from heat; stir in peas. Taste and season generously\nwith salt (we used ¾ tsp; 1½ tsp for 4) and pepper.",
//               "img": "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/6434eddb9b9a91e0f10da49f/step-7cd7d3f5.jpg"
//           },
//           {
//               "info": "3• While soup cooks, halve baguette lengthwise. Place, cut sides up,\non a baking sheet. Sprinkle with half the Italian cheese blend.\n• Bake on top rack until cheese melts, 4-6 minutes.",
//               "img": "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/6434eddb9b9a91e0f10da49f/step-0f46b910.jpg"
//           },
//           {
//               "info": "4• Divide soup between bowls; top with remaining Italian cheese\nblend. Serve with cheesy bread on the side.\nPork Sausage is fully cooked when internal temperature reaches 160°.",
//               "img": "https://img.hellofresh.com/w_750,q_auto,f_auto,c_limit,fl_lossy/hellofresh_s3/6434eddb9b9a91e0f10da49f/step-fc51a6fc.jpg"
//           }
//       ],
//       "utensils": [
//           "",
//           "Medium Pot",
//           "Medium Bowl",
//           "Whisk",
//           "Baking Sheet"
//       ]
//   }
// ]
function Menu() {
  const [data, setdata] = useState([]);
  const fetchMenu = async () => {
    let response = await fetch("http://localhost:8080/menu/food", {
      method: "GET",
    });

    let data = await response.json();
    console.log(data);
    setdata(data);

    // setdata(aaa);
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  const shuffleArray = (array) => {
    let newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
  };

  const handleShuffleClick = () => {
    const newShuffledArray = shuffleArray(data);
    setdata(newShuffledArray);
  };
  return (
    <div id="menu-page">
      <h1>Menu for Nov 04 - 10</h1>
      <div className="dat">
        <div onClick={handleShuffleClick}>
          <p>Nov</p>
          <p>04-10</p>
        </div>
        <div onClick={handleShuffleClick}>
          <p>Nov</p>
          <p>11-17</p>
        </div>
        <div onClick={handleShuffleClick}>
          <p>Nov</p>
          <p>18-24</p>
        </div>
        <div onClick={handleShuffleClick}>
          <p>Nov</p>
          <p>25-01</p>
        </div>
        <div onClick={handleShuffleClick}>
          <p>Dec</p>
          <p>04-10</p>
        </div>
        <div onClick={handleShuffleClick}>
          <p>Dec</p>
          <p>11-21</p>
        </div>
      </div>
      <div className="menu-items">
        {data.map((item) => (
          <MenuCard item={item} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
