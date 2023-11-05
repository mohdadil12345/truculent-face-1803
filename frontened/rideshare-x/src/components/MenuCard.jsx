import React from "react";
import { Link } from "react-router-dom";

function MenuCard({item}) {
  
  return (

    <Link to={`/menu/${item._id}`} className="menu-img">
      <img src={item.img} alt="" />
      <div className="menu-info">
        <h4>{item.name}</h4>
        <p>{item.addition}</p>
        <p className="menu-det">
          <span className="total-time"> {item.time} min </span>
          <span> {item.tags[0]} </span>
        </p>
      </div>
    </Link>
  );
}

export default MenuCard;
