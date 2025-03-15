import style from "./Cards.module.css";

const ShimmerProductsCard = () => {
  return (
    <div className="container">
      <h5 className="mt-3">Products</h5>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {[...Array(8)].map((_, index) => (
          <div className="col" key={index}>
            <div className={`card h-100 ${style.shimmerCard}`}>
              <div className={`${style.imageContainer} ${style.shimmer}`}></div>
              <div className={`card-body ${style.productCardBody}`}>
                <div className={`${style.shimmer} ${style.shimmerText}`}></div>
                <div className={`${style.shimmer} ${style.shimmerRating}`}></div>
                <div className={`${style.shimmer} ${style.shimmerCount}`}></div>
                <div className={`${style.shimmer} ${style.shimmerPrice}`}></div>
                <div className={`${style.shimmer} ${style.shimmerButton}`}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerProductsCard;
