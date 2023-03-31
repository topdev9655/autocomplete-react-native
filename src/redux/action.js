export const updateHistory = (payload) => {
    return {
        type: 'ADD_HISTORY',
        history: payload
    }
}