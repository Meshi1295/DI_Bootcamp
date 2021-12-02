
export const insert = (newTransaction) => {
    return { type: 'INSERT', payload: newTransaction }
}

export const update = (newInfo) => {
    return { type: 'UPDATE', payload: newInfo }
}

export const updateIndex = (index) => {
    return { type: 'UPDATE_INDEX', payload: index }
}

// export const insert = (id) => {
export const deleteIndex = (index) => {
    return { type: 'DELETE', payload: index }
}
