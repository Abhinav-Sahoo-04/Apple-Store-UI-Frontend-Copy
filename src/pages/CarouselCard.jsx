import "../assets/styles/CarouselCard.css"
export default function CarouselCard({src,label}) {
  return (
    <div className='carousel-card'>
        <img src={src}  alt={label} />
       <p>{label}</p>
    </div>
    
  )
}
