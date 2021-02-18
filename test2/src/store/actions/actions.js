const dataLoaded = (newData) => {
    return {
        type: 'DATA_LOADED',
        payload: newData,
    }
}

const dataError = () => {
    return {
        type: 'DATA_ERROR',
    }
}

const increment = (newData) => {
    return {
        type: 'BTN_INCREMENT',
        payload: newData,
    }
}

const lightBtn = (newData) => {
    return {
        type: 'BTN_LIGHT',
        payload: newData,
    }
}

const lightRow = (newData) => {
    return {
        type: 'ROW_LIGHT',
        payload: newData,
    }
}

export {
    dataLoaded,
    dataError,
    increment,
    lightBtn,
    lightRow,
};