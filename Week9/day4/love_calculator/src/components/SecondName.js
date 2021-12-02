import React from 'react'

const SecondName =(props) =>{
   
        return(
            <div>
           Second Name: <input type="text" name='secondName' onChange={props.handelChange}/>
           {props.sname}
            </div>
        )

    
}

export default SecondName;