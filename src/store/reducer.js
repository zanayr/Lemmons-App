import * as actions from './actions';

const initialState = {
    error: null,
    items: [],
    single: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD:
            return {
                ...state,
                items: state.items.concat(action.payload)
            };
        case actions.CLEAR:
            //  Clear the error status
            return {
                ...state,
                error: null
            };
        case actions.DELETE:
            return {
                ...state,
                items: state.items.filter(i => {
                    return i.id !== action.payload.id;
                })
            };
        case actions.FAIL:
            //  Set the error data
            return {
                ...state,
                error: action.payload
            };
        case actions.SELECT:
            let single = null;
            if (action.payload && action.payload.id)
                single = state.items.find(i => i.id === action.payload.id);
            return {
                ...state,
                single: single
            };
        case actions.GET_ALL:
            return {
                ...state,
                items: Object.keys(action.payload).map(k => {
                    return {
                        id: k,
                        title: action.payload[k].title,
                        detail: action.payload[k].detail
                    }
                })
            };
        case actions.UPDATE:
            return {
                ...state,
                items: state.items.filter(i => {
                    return i.id !== action.payload.id;
                }).concat(action.payload)
            };
        default:
            return state;
    }
};

export default reducer;