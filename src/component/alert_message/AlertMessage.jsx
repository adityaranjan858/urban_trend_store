import { useEffect } from "react";
import style from "./AlertMessage.module.css"
import { useDispatch } from "react-redux";
import { alertMessage } from "../../store/generalSlice";

const AlertMessage = ({ alert }) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        if(alert.content !== ""){
            let timer = setTimeout(()=>{
                dispatch(alertMessage({content : "", type : ""}))
            },1500); 
                return ()=>{
                    clearTimeout(timer) 
                }
        }
    },[alert])
    
    return (
        <><div className="">
            {alert.content && <div className={`alert alert-${alert.type} ${style.container} alert-dismissible fade show w-sm-100`} role="alert">
                <div className="">
                <strong> <i>&quot;{alert.content}&quot;</i> !</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>}
        </div>
        </>
    )
}

export default AlertMessage;