import React, { useState } from 'react'
import "../assets/styles/StoreSlider.css"
import CarouselCard from './CarouselCard'
export default function StoreSlider() {
  const slide = [
  { src: "mac.png", label: "Mac" },
  { src: "iphone.png", label: "iPhone" },
  { src: "ipad.png", label: "iPad" },
  { src: "watch.png", label: "Apple Watch" },
  { src: "airpod.png", label: "AirPods" },
  { src: "airtag.png", label: "AirTags" },
  { src: "tv.png", label: "Apple TV 4K" },
  { src: "homepod.png", label: "HomePod" },
  { src: "accessories.png", label: "Accessories" }
]
;
  return (
    <div className="store-slider">
        <img src="mainBG.png" alt="main BG" />
        <h1 className='s-name'>Store</h1>
        <div className="side-info">
            <h3>Give something special this holiday.</h3>
            <a href="#">Connect with a Specialist <i class="ri-arrow-right-up-line"></i></a><br />
            <a href="#">Find an Apple Store<i class="ri-arrow-right-up-line"></i></a>
        </div>
        <div className="slider">
          <div className="slider-carousel">
            {slide.map(item=>(
               <CarouselCard src={item.src} label={item.label} key={item.label} />
            ))}
          </div>
        </div>
    </div>
  )
}
