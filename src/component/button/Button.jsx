import style from "./Button.module.css"
const Button = ({children, onClick, className, bgColor, textColor, href, disabled}) => {
  return (
    <button onClick={onClick} href={href} disabled={disabled} className={`${className} ${style.buttonDesign} cursor-pointer bg-${bgColor} text-${textColor}`} >{children}</button>
  )
}

export default Button;