import { useLocation } from "react-router-dom";

const Title = () => {
    const location = useLocation();
  const pathName = location.pathname.substring(1);

  const title = (name) => {
    const word = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return word;
  }

  return (
    <div className="container-fluid">
        {/* {pathName ? "" : <SearchBar/>} */}
        {pathName ? <h5 className="mt-3"> {title(pathName)} </h5> : ""}
      </div>
  )
}

export default Title;