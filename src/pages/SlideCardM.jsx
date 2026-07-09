import React from "react";
import "../assets/styles/SlideCard.css";
export default function SlideCardM({ clsName, src, head, price }) {
  return (
    <div className={clsName}>
      <img src={src} alt={head} />
      <div className="slide-info-box-m">
        <h1>{head}</h1>
        <p>{price}</p>
      </div>
    </div>
  );
}
