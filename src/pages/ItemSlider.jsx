import React from 'react'
import "../assets/styles/ItemSlider.css"
import ItemCard from './ItemCard'
export default function ItemSlider() {
  const items = [
  { heading: "iPhone 17 Pro", src: "iphone17Pro.jpeg", special: "Apple Intelligence Footnote","price":"134900.00" },
  { heading: "MacBook Pro 14", src: "macBookPro14.jpeg", special: "Apple Intelligence Footnote","price":"169900.00" },
  { heading: "iPad Pro", src: "ipadPro.jpeg", special: "Apple Intelligence Footnote" ,"price":"99900.00"},
  { heading: "Apple Watch Series 11", src: "appleWatch11.jpeg", special: "Apple Intelligence Footnote","price":"46900.00" },
  { heading: "iPhone 17", src: "iphone17.jpeg", special: "Apple Intelligence Footnote","price":"82900.00" },
  { heading: "MacBook Air", src: "macBookAir.jpeg", special: "Apple Intelligence Footnote ","price":"99900.00" },
  { heading: "iPhone Air", src: "iphoneAir.jpeg", special: "Apple Intelligence Footnote","price":"119900.00" },
  { heading: "Apple Watch Ultra 3", src: "appleWatchUltra3.jpeg", special: "Apple Intelligence Footnote","price":"89900.00" },
  { heading: "Apple Watch SE 3", src: "appleWatchSE3.jpeg", special: "Apple Intelligence Footnote","price":"25900.00" }
];

  return (
    <div className='item-slider'>
      <p><span>The latest.</span> Truly awe-inspired gifts.</p>
      <div className="item-carousel">
        {items.map(obj=>(
          <ItemCard heading={obj.heading} src={obj.src} price={obj.price} special={obj.special} />
        ))}
      </div>
    </div>
  )
}
