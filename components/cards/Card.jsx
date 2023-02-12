import { urlFor } from "@/sanity"
import Link from "next/link"



const Card = ({ element }) => {
  const { title,
    location,
    propertyType,
    mainImage,
    pricePerNight,
    description,
    host,
    _id,
    reviews } = element


  return (
    <div key={ _id } className="card">
    <Link href={`property/${element.slug.current}`}>
      <img src={ urlFor(mainImage) } alt="" />
      <div>
        <div className="card-title">
          <h4>{ title }</h4>
          <p>5.0<i className="fa-solid fa-star"></i></p>
        </div>
        <p><span className="grey">Hosted by Reality Group, LLC</span></p>
        <p><span className="grey">Jun 1 - 7</span></p>
        <p>${ pricePerNight }</p>
      </div>
      </Link>
    </div>
  )
}

export default Card