import {combineReducers} from 'redux';
import {PROP_ONE,PROP_TWO} from './actions'
const initStateOne = {
  property_one: 'one 1111',
  property_two: 'two 222'
}

export const reducer_one = (state=initStateOne, action={}) => {
  switch (action.type) {
    case PROP_ONE:
      return {...state, property_one:action.payload}
    default:
      return {...state}
  }

}

const initStateTwo = {
  property_two: 'two 222'
}

export const reducer_two = (state=initStateTwo, action={}) => {
  console.log(state);
  switch (action.type) {
    case PROP_TWO:
      return {...state, property_two:action.payload}
    default:
      return {...state}
  }
}

export const reducer = combineReducers({
  reducer_one,
  reducer_two
})
