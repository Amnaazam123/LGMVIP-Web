import React from "react";
export default function Buttons({value, buttonClicked}){


   return(
        <button className="btn" onClick={buttonClicked}>{value}</button>

   )
}