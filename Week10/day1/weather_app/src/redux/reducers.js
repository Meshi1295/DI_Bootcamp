import { DATA } from './actions'

const initState = {

    weatherData: null,
}

export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
        case DATA:
            console.log(action.payload);
            return { ...state, weatherData: action.payload }

        default:
            return { ...state }
    }
}