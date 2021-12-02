export const onSearch = (value) => {
    return{
        type: 'SEARCH',
        payload: value
    }
}

export const getRobots = (arr) => {
    return{
        type: 'ROBOTS',
        payload: arr
    }
}