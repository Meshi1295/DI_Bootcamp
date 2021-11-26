import React from 'react'

class BuggyCounter extends React.Component {
    constructor(){
        super();
        this.state = {
            counter:0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = () => {
        this.setState({counter:this.state.counter + 1})
    }

    render(){
        const {counter} = this.state 
        if(counter === 3){
            throw new Error('Something Happened');
        } else {
            return(
                <>
                <h1 onClick={this.handleClick} >{this.state.counter}</h1>
                </>
            )
        }
    }
}

export default BuggyCounter;