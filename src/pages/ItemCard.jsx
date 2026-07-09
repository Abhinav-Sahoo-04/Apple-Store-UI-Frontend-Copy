import React from "react";
import "../assets/styles/ItemCard.css";
export default function ItemCard({heading,src,price,special}) {
  return (
    <div className="item-card">
        <img src={src} alt={heading} />
      <div className="item-head">
        <h1>{heading}</h1>
        <h3 className="item-special">
          {special}
        </h3>
        <span>
          from ₹{price} <sup>±</sup>{" "}
        </span>
      </div>
    </div>
  );
}
