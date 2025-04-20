import { useDispatch, useSelector } from "react-redux";
import { setVisible } from "../../store/generalSlice";

const Filter = ({checkBoxValue, setCheckBoxValue}) => {
     const visible = useSelector((state) => state.general.visible);
     const dispatch = useDispatch()
     const categories = ["Women's Clothing", "Men's Clothing", "Jewelery", "Electronics"];
    
       const handleCheckBox = (e) => {
        const { value, checked } = e.target;
        const category = value.toLowerCase();
        if (checked && !checkBoxValue.includes(category)) {
          setCheckBoxValue((prev) => [...prev, category]);  
        } else {
          setCheckBoxValue((prev) => prev.filter((item) => item !== category ));
        }
      };
  return (
    <>
     <h3 className="d-flex align-items-end my-3" onClick={() => dispatch(setVisible(!visible)) }><i className="fa-solid fa-filter me-2 d-block d-sm-none"></i>Filters</h3>
                <hr  className="d-none d-sm-block"/>
                <div className={`d-sm-block ${visible ? "d-block" : "d-none"}`}>
                    <h5>Category</h5>
                <div className="list-group">
                  {categories.map((item, index) => (
                    <label key={index} className="list-group-item">
                      <input  
                        className="form-check-input me-1"
                        type="checkbox"
                        value={item}
                        checked={checkBoxValue.includes(item.toLowerCase())}
                        onChange={handleCheckBox}
                      />
                      {item}
                    </label>
                  ))}
                </div>
                </div>
               
              
    </>
  )
}

export default Filter;