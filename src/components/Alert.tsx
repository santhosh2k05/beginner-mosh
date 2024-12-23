import { ReactNode } from "react";



interface Props{
    children : ReactNode;
    onclose : () => void
}

const Alert = ({children , onclose} : Props) => {
  return (
    <div className="alert alert-primary alert-dismissble" role="alert">
        {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onclose}></button>
    </div>
  )
}

export default Alert