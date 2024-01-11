import style from "./Button.module.css"
const Button = ({children, onClick, className, bgColor, textColor, href}) => {
  return (
    <button onClick={onClick} href={href} className={`${className} ${style.buttonDesign} bg-${bgColor} text-${textColor}`} >{children}</button>
  )
}

export default Button;