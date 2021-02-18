const initialState = {
    m: 0,
    n: 0,
    x: 0,
}
const reducerForm = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_M': 
            return action.payload;
        case 'SET_N': 
            return action.payload;
        case 'SET_X': 
            return action.payload;
        default: 
            return state;
    }
}

export default reducerForm;
