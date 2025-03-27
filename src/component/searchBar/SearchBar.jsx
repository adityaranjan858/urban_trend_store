import style from "./SearchBar.module.css"
import Button from './../button/Button';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchData } from "../../store/productSlice";

const SearchBar = () => {
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()
    const searchHandler=(e)=>{
        setSearch(e.target.value)
    }
   
    useEffect(() => {
        dispatch(searchData(search)) 
    }, [dispatch, search]);

    return (
        <>
        <form className="px-3 container">
  <div className="row justify-content-center">
    <div className="col-12 col-sm-6 col-lg-4">
      <div className={`${style.search}`}>
        <input
          className={style.searchTxt}
          value={search}
          autoComplete="off"
          onChange={searchHandler}
          type="text"
          name="search"
          placeholder="Type to search"
        />
        <Button className={style.searchBtn}>
          <i className="fas fa-search"></i>
        </Button>
      </div>
    </div>
  </div>
</form>

        </>
    )
}

export default SearchBar;