const setM = (newData) => {
    return {
        type: 'SET_M',
        payload: newData,
    }
}

const setN = (newData) => {
    return {
        type: 'SET_N',
        payload: newData,
    }
}

const setX = (newData) => {
    return {
        type: 'SET_X',
        payload: newData,
    }
}

export {
    setM,
    setN,
    setX,
};