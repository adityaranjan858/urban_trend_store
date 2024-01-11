import Button from '../button/Button';
import style from "./Cards.module.css"

function Cards({ productsList, buttonName, handleCard, show }) {

  return (
    show ?
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {productsList.length > 0 && productsList.map(item => (
          <div className="col" key={item.id}>
            <div className="card h-100">
              <img src={item.image} className={`${style.image}`} alt="image broken" />
              <div className="card-body">
                <h5 className="card-text fw-normal">{item.title}</h5>
                <p className="card-title fs-3 fw-medium mb-0">&#36;{item.price}</p>
              </div>
              <div className='mb-3 mx-3'>
                <Button className="w-100" onClick={() => handleCard(item)} >{buttonName}</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      :
      <div className="row row-cols-1  g-0">
        {productsList.length > 0 && productsList.map(item => (
          <div className="col my-2" key={item.id}>
            <div className="card h-100">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={item.image} className={`${style.image}`} alt="image broken" />
                </div>
                <div className="col-md-8 align-self-center">
                  <div className={`card-body ${style.cardBody}`}>
                    <div>
                      <h5 className="card-text fw-normal">{item.title}</h5>
                      <p className="card-title fs-3 fw-medium mb-0">&#36;{item.price}</p>
                    </div>
                    <div className="">
                      <Button className="w-100" onClick={() => handleCard(item)} >{buttonName}</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Cards;