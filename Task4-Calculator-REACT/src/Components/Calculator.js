import React,{useState,useEffect} from "react"
import Display from "./Display"
import Keyboard from "./Keyboard"
export default function Calculator(){
const [display,setDisplay] = useState("")

const buttonClicked = (buttonValue) => {
    if(display==="ERROR!!")
    {
        setDisplay("")
    }
    else{
        if(buttonValue === "="){
            try{
                setDisplay(eval(display))
            }
            catch{
                setDisplay("ERROR!!")
            } 
        }
        else if(buttonValue === "←"){
    
            setDisplay(display.slice(0, -1))
            console.log(display)
        }
        else if(buttonValue === "C"){
            setDisplay("")
        }
        else{
    
            setDisplay(display+buttonValue)       
        }
    }
}
    return(
        <div className="calculator">
            <Display answer={display}/>
            <Keyboard buttonClicked={buttonClicked}/>
        </div>
    )
}