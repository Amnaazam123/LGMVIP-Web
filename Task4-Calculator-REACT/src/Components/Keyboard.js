import React from "react"
import Buttons from "./Buttons"
export default function Keyboard({buttonClicked}){
    const myButton = ['C','←','(',')',,'.','7','8','9','/','*','4','5','6','+','-','1','2','3','0','=']

    return (
        <div className="buttons">
            {myButton.map((button) => (
                <Buttons value = {button} buttonClicked={()=>buttonClicked(button)} />
            ))}
        </div>
    )
}