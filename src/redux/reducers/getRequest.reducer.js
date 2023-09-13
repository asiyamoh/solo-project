const getRequest = (state = {}, action) => {
    if(action.type === 'GET_REQUEST_MATCH'){
        return action.payload
    }
    return state
}

export default getRequest