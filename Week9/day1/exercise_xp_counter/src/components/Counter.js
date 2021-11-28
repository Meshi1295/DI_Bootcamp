import React from 'react';
import {connect} from 'react-redux';
import {INCREASE_COUNT, DECREASE_COUNT} from '../actions/index'

class Counter extends React.Component {
    render(){
        const {counter ,INCREASE_COUNT, DECREASE_COUNT} = this.props
        return (
            <>
                <div>
                    <p>{counter}</p>
                </div>
                <button onClick={INCREASE_COUNT}>Plus</button>
                <button onClick={DECREASE_COUNT}>Minus</button>
            </>
        )        
    }
}

const mapStateToProps = (state) => {
    return{
        counter : state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        INCREASE_COUNT : () => dispatch(INCREASE_COUNT()),
        DECREASE_COUNT : () => dispatch(DECREASE_COUNT())
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Counter);