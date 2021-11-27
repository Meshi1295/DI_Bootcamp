import React from "react";
import Button from 'react-bootstrap/Button';
// import ErrorBoundary from './ErrorBoundary'

class RightColumn extends React.Component{
    constructor(){
        super();
        this.state ={
            text: 'stringified',
           crasher : JSON.stringify({ function: 'I live to crash' }),
           error:false
        }
        // this.someError = this.someError.bind(this)
    }

    someError = () => {
        this.setState({ error:true })
    }

    render(){
        if(this.state.error){
            throw new Error('Nooo!')
        }
        return (
            <>
            <h2>RightColumn</h2>
            <p>There are two types of errors we can trigger inside this component: A rendering error and a regular javascript error.</p>
            <hr />

        {/* <ErrorBoundary> */}
               <p>
                Clicking this button will replace the <code>{this.state.text}</code> 
                object,<code>{this.state.crasher}</code>, with the original object. This will result in a
                rendering error.
                </p>
         {/* </ErrorBoundary> */}
                <hr />

               
                <Button
                onClick={()=>this.someError()}
                variant="danger">Replace string with object</Button>
                
               
                <hr />

                <p>Clicking this button will invoke an event handler, inside of which an error is thrown.</p>
                <Button variant="danger">Invoke event handler</Button>                
            </>
        )
    }
}

export default RightColumn;