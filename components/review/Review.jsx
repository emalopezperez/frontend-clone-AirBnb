import { urlFor } from "../../sanity.js"

const Review = ({ review }) => {
  return (
    <div className="flex gap-5">
      <img
        className="rounded-xl"
        src={ urlFor(review.traveller.image)
          .width(60)
          .height(50)
          .crop("focalpoint")
          .auto("format") }
      />
      <h2>{ review.traveller.name }</h2>
      <h1>{ review.rating }</h1>
    </div>
  )
}

export default Review