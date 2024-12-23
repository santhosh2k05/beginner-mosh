
interface Props {
    text : string;
    color : string;     
    onClick : () => void
}
const Button = ({text, onClick,color} : Props) => {
  return (
    <button type="button" className={"btn btn-"+color} onClick={onClick}>{text}</button>

  )
}

export default Button