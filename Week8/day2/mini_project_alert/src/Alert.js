import React from 'react';

class Alert extends React.Component {
    constructor(){
        super();
        this.state ={

        }
    }

    render(){
        return(
            <div class="alert alert-danger" role="alert">
                  OMG! Something really bad has happended!
            </div>
        )
    }

    
}

export default Alert