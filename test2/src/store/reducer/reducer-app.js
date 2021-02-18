const innitialState = [];


const reducer = (state = innitialState, action) => {
    switch (action.type) {
        case 'DATA_LOADED': 
            return action.payload;
        case 'DATA_ERROR': 
            return state;
        case 'BTN_INCREMENT': 
            return action.payload;   
        case 'BTN_LIGHT': 
            return action.payload;   
        case 'ROW_LIGHT': 
            return action.payload; 
        default: 
            return state;
    }
}

export default reducer;
