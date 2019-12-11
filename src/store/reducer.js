import * as actions from './actions';

const initialState = {
    items: []
};

const reducer = (state = initialState, action) => {
    const items = {...state.items};
    switch (action.type) {
        case actions.ADD_ITEM:
            items = items.concat(action.payload);
            return {
                ...state,
                items: items
            };
        case actions.DELETE_ITEM:
            items = items.filter(item => {
                return item.id !== action.payload.id;
            });
            return {
                ...state,
                items: items
            };
        case actions.SET_ITEMS:
            return {
                ...state,
                items: Object.keys(action.payload).map(key => {
                    return {
                        id: key,
                        title: action.payload[key].title,
                        detail: action.payload[key].detail
                    }
                })
            };
        case actions.UPDATE_ITEM:
            items = items.filter(item => {
                return item.id !== action.payload.id;
            }).concat(action.payload);
            return {
                ...state,
                items: items
            };
        default:
            return state;
    }
};

export default reducer;