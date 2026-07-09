import React from 'react'
import "../assets/styles/SlideCard.css"
export default function SlideCardL({clsName,src,head,price}) {
  return (
    <div className={clsName}> 
    <img src={src} alt={head} />
    <div className="slide-info-box-l">
      <p>{price}</p>
      <h1>{head}</h1>
    </div>
    </div>
  )
}
