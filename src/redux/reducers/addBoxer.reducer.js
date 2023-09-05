const addBoxer  =  (state = {}, action)  => {
    switch(action.type){
        case 'ADD_BOXER':
            return action.payload;
        default:
            return state;
    }
}

export default addBoxer;