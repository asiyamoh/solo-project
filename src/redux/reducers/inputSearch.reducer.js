const inputSearch = (state = [], action) => {
    if(action.type === 'INPUT_SEARCH'){
        return {
            ...state,
            [action.payload.property] : action.payload.value
        }
    }
    return state;
}

export default inputSearch;