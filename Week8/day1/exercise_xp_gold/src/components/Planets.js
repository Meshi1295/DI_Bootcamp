import React from "react";

function Planets() {
    const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];

    return(
        <>
        {
            planets.map((item,i) => {
               return <div key={i} className="w-25">
                   <ul className="list-group">
                    <li  className="list-group-item" >{item}</li>
                </ul>
               </div>
               
            })
        }
        </>
    )
}

export default Planets;