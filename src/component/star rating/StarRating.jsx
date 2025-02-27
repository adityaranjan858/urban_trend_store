import style from "./StarRating.module.css"
const StarRating = ({rating}) => {
  return (
    <>
    {Array.from({ length: 5 }).map((_, index) => <span key={index} className={index < Math.round(rating) ? style.productFilledStar : ""}>&#9733;</span>)}
    </>
  )
}

export default StarRating;