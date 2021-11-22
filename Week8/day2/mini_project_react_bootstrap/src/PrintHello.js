//Exercise 1: Function & JSX
import React from 'react'

// const PrintHello = () => {
//         return(
//             <>
//             <h1>I Love React</h1> 
//             </>
//         );
    
// }


class PrintHello extends React.Component {
    render(){
        return(
            <>
            <h1>I'm a React Component</h1> 
            </>
        )
    }    
}

export default PrintHello