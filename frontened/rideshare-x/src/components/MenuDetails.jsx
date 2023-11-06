import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MenuDetails() {
  const [item, setItem] = useState([]);
  const [itemLoaded, setitemLoaded] = useState(false);
  let { id } = useParams();

  const api = "https://ride-share-backend-pw1v.onrender.com"


  const fetchFood = async (id) => {
    let headersList = {};

    let response = await fetch(`${api}/menu/food/${id}`, {
      method: "GET",
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
    setItem(data);
    setitemLoaded(true);

    // let xyz = aaa.find((e => e._id == id))
    // setItem(xyz);
    // setitemLoaded(true);
  };

  useEffect(() => {
    fetchFood(id);
  }, []);
  const [color, setColor] = useState(null);

  // useEffect(() => {
  //   const image = new Image();
  //   image.src = item.img;

  //   image.onload = () => {
  //     const canvas = document.createElement("canvas");
  //     canvas.width = image.width;
  //     canvas.height = image.height;
  //     const context = canvas.getContext("2d");
  //     context.drawImage(image, 0, 0, canvas.width, canvas.height);

  //     const x = 10; // X-coordinate of the pixel
  //     const y = 10; // Y-coordinate of the pixel
  //     const pixelData = context.getImageData(x, y, 1, 1).data;

  //     const red = pixelData[0];
  //     const green = pixelData[1];
  //     const blue = pixelData[2];

  //     setColor(`rgb(${red}, ${green}, ${blue})`);
  //   };
  // }, [item]);

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
                <p className="it2"> {item.tags.join(", ")} </p>
              </div>
              <div className="menu-det">
                <p className="total-time">Allergens</p>
                <p className="it2"> {item.allergens.join(", ")} </p>
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
        <div className="utensi">
          <p className="total-time">utensils</p>
          <p className="it2"> {item.utensils.join(", ")} </p>
        </div>
        <div id="Ingredients">
          <div className="ing">
            <div>
              <h1>ingredients</h1>
              <div className="Ingredients-details">
                {item.ingredients.map((el, i) => (
                  <div className="Ingredients-item">
                    <img src={el.img} alt="" />
                    <div className="ints">
                      <p>{el.name}</p>
                      <p>{el.vol}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div id="nutrition">
              <h1>nutrition</h1>
              <div className="nutrition-details">
                {item.nutrition.map((el, i) => (
                  <div className="nutrition-item">
                    <span>{el.name}</span>
                    <p>{el.value}</p>
                  </div>
                ))}
              </div>
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
