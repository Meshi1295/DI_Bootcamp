const getList = () => {
    if (!localStorage.getItem('list')) {
        localStorage.setItem('list', JSON.stringify([]))
    }

    try {
        const list = JSON.parse(localStorage.getItem('list'))

        if (!list || !Array.isArray(list)) return []

        return list
    } catch (err) {
        console.log(err.message)
        return err
    }
}

const initialState = {
    currentIndex: -1,
    list: getList()
}


export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'INSERT':
            const newList = [...state.list, action.payload]
            localStorage.setItem('list', JSON.stringify(newList))
            return { ...state, list: newList }

        case 'UPDATE':
            state.list[state.currentIndex] = action.payload
            localStorage.setItem('list', JSON.stringify(state.list))
            return { currentIndex: -1, list: [...state.list] }

        case 'UPDATE_INDEX':
            
            return { ...state, currentIndex: action.payload }

        case 'DELETE':
            state.list.splice(action.payload, 1)
            localStorage.setItem('list', JSON.stringify(state.list))
            return { ...state, list: [...state.list] }

        default:
            return { ...state }
    }
}

