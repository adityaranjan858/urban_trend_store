import style from "./Loader.module.css"
const Loader = ({ gif }) => {
    return (
        <>
        <div className={style.main}>
            <img src={gif} alt="Loading..." />
        </div>
        </>
    )
}

export default Loader;