import { range } from './util'

function StarRating({ rating }) {

  return (
    <div className="star-wrapper">
      {range(rating).map((num) => (
        <img
          key={num}  
          alt=""
          className="gold-star"
          src="/star.svg"
        />
      ))} 
    </div>
  )
}

export default StarRating;