import React from "react";
import {connect} from 'react-redux';


class Counter extends React.Component {
    constructor(){
        super();
        this.state ={
            counter:0
        }
    }

    addOne = ()=> {
        this.setState({counter:++this.state.counter})
    }
    minusOne = () => {
        this.setState({counter:this.state.counter - 1})
      }

    render(){
        const {counter} =this.state
        return(
            <>
            <div>
                {counter}
            </div>
            <button onClick={this.addOne}>Plus</button>
            <button onClick={this.minusOne}>Minus</button>
            </>
        )
    }
}

const mapStateToProps =(state) => {
    return {
        plus_one:state.counter
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Counter);