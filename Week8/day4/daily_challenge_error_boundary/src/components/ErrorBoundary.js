import React from 'react';
import Card from 'react-bootstrap/Card'


class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = {
            error: null,
            errorInfo : null,
            ifError: false,
        }
    }

    componentDidCatch(error,errorInfo){
        this.setState({error:'error',errorInfo:"err info",ifError : true})
        
    }


    render(){
        const {error,errorInfo,ifError} =this.state
        if(ifError){
            return(
                <>
                 <Card.Header>An error has occurred in this component. Reload this page</Card.Header>
                 <details>
                    {error}
                    <br />
                    {errorInfo}
                </details>
                </>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;