const getDeclineRequest = (state = [], action) => {
    if(action.type === 'GET_DECLINE'){
        return action.payload;
    }
    return state
}

export default getDeclineRequest;