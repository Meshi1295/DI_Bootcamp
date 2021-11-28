// import {PLUS,MINUS} from '../actions/index'

const initialState = {
    counter:0
}

export const reducer = (state=initialState , action={}) => {
    
        switch (action.type) {
            case 'PLUS':
                return {...state, counter:state.counter + 1}
            
            case 'MINUS':
                return {...state, counter: state.counter - 1}    
            
            default:
                return {...state}
               
       

    }
}