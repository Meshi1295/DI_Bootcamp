import React from 'react';

//Exercise 1: Alert
//Exercise 2: Conditional Rendering
// const Alert = (props) =>{
//     const {text,show} = props

//     if(show){
//         return(
       
//             <div className="alert alert-danger" role="alert">
//                  {text}
//             </div>
//         )
//     } else {
//         return(
//             <div>
//             </div>
//         )
//     }    
// }


//Exercise 3: Smart Alert
// const Alert = (props) =>{
//     const {red,orange} = props
     
//         return(
//             <>
//             <div className={red} role="alert">
//                 This is a primary alert—check it out!
//             </div>
//              <div className={orange} role="alert">
//              This is a primary alert—check it out!
//          </div>
//          </>
//         )
//     }    

    //Exercise 4: More Alert Colors
    const Alert = (props) =>{
        const {color} = props
            return(
                <>
                <div className={color.red} role="alert">
                    This is a primary alert—check it out!
                </div>
                 <div className={color.orange} role="alert">
                 This is a primary alert—check it out!
             </div>
             <div className={color.green} role="alert">
                 This is a primary alert—check it out!
             </div>
             <div className={color.noColor} role="alert">
                   This color is undefined
             </div>
           </>
            )              
        }   
export default Alert