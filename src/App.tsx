
import { useState } from "react"
import Alert from "./components/Alert"
import Button from "./components/Button"


function App() {
     const [alertvisible, setalertvisibility ] =  useState(false); 
  return (
    <div>
     { alertvisible &&  <Alert onclose={()=>setalertvisibility(false)}>hello world</Alert>}
      <Button  color='success'onClick={()=>setalertvisibility(true)} text="completed"/>
    </div>
  )
}

export default App