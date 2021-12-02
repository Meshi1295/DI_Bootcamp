const initState = {
    arr:[],
    // search: ''
    filter:null
}

export const reducer = (state = initState, action={}) => {
    switch (action.type) {
        case 'SEARCH':
            const text = action.payload
            const filterRobots = state.arr.filter(item => {
                return item.name.toLowerCase().includes(text.toLowerCase())
              })
            
          return {...state, filter:filterRobots}
        
        case 'ROBOTS' :
            return{...state, arr:action.payload}
    
        default:
            return{...state}
    }
  

}