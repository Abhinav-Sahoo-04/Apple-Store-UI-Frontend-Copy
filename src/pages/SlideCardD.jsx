import React from 'react'
import "../assets/styles/SlideCard.css"
export default function SlideCardD({clsName,src,head,price}) {
  return (
    <div className={clsName}> 
        <div className="card-d-up">
            <img src={src[0]} alt={head[0]} />
            <p>
                {head[0]} <sup>{price[0]}</sup>  
            </p>
        </div>
        <div className="card-d-down">
            <img src={src[1]} alt={head[1]} />
            <p>
               {head[1]} <sup>{price[1]}</sup> 
            </p>
        </div>
    </div>
  )
}
