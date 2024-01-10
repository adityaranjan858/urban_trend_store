import style from "./Button.module.css"
const Button = ({children, onClick, className, bgColor, textColor}) => {
  return (
    <button onClick={onClick} className={`${className} ${style.buttonDesign} bg-${bgColor} text-${textColor}`} >{children}</button>
  )
}

export default Button;