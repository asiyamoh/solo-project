const editBoxer = (state = {}, action) => {
    if(action.type === 'SET_EDIT_BOXER'){
        return action.payload
    }
    if(action.type === 'EDIT'){
        return {
            ...state,
            [action.payload.property] : [action.payload.value]
        }
    }
    return state;
}

export default editBoxer

