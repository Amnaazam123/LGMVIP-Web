import React from "react"
export default function Record({cards}){
    const msg = {
        color:"#007070",
    }
    return(     
        <>
             <div> 
                {
                    cards.map((card)=>(
                        <div className="myCard">
                            <div className="description">
                                <ul>
                                
                                    <li style={msg}><b>👨‍🎓 Student Enrolled successfully</b></li>
                                    <li><b>Name : </b>{card["name"]}</li>
                                    <li><b>Email : </b>{card["email"]}</li>
                                    <li><b>Gender : </b>{card["gender"]}</li>
                                    <li><b>Website : </b><a href={card["website"]}>{card["website"]}</a></li>
                                    <li>
                                        <b>Skills: </b>
                                        {card["skills"].map((skill,index)=>(<span>{skill} , </span>))}
                                    </li>
                                </ul>
                            </div>
                            <div className="image">
                                <img src={card["imageLink"]} />
                            </div>
                        </div>
                        
                    ))

                }
             </div>
        </>
        
    )


}