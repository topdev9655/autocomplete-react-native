const initialState = {
    histories: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HISTORY':
            return {
              ...state,
                histories: [...state.histories, action.history],
            }
        default:
            return state;
    }
}