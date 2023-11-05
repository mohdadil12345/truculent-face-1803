import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";

const api = "https://ride-share-backend-pw1v.onrender.com"


function Menu() {
  const [data, setdata] = useState([]);
  const fetchMenu = async () => {
    let response = await fetch(`${api}/menu/food`, {
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
