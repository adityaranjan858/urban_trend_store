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
    }, [search]);

    return (
        <>
        <form>
            <div className={style.search}>
                <input className={style.searchTxt} value={search} onChange={searchHandler} type="text" name="search" placeholder="Type to search"/>
                    <Button className={style.searchBtn} >
                        <i className="fas fa-search"></i>
                    </Button>
            </div>
        </form>
        </>
    )
}

export default SearchBar;