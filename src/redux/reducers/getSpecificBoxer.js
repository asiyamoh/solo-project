const getSpecific = (state = {}, action) => {
    switch (action.type) {
        case 'GET_SPECIFIC':
            return action.payload;
        default:
            return state;
    }
}

export default getSpecific