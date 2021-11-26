import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(){
        super();
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error , errorInfo){
        this.setState({error:'meshiii its error', errorInfo:"mor error meshi"})
    }
   

    render(){
        if (this.state.errorInfo){
            return(
                <div>
                 <h2>Something went wrong.</h2>
                 <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo}
                 </details>
                </div>
            )
        } else {
            return this.props.children; 
        } 
    }
    
}

export default ErrorBoundary;