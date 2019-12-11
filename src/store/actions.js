import axios from '../axios-items';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_ITEMS = 'SET_ITEMS';
export const UPDATE_ITEM = 'UPDATE_ITEM';

// Action creators
export const add = (data) => {
    return {
        type: ADD_ITEM,
        payload: data
    };
};
export const del = (data) => {
    return {
        type: DELETE_ITEM,
        payload: data
    };
};
export const set = (data) => {
    return {
        type: SET_ITEMS,
        payload: data
    };
};
export const udpate = (data) => {
    return {
        type: UPDATE_ITEM,
        payload: data
    };
};
export const getAll = () => {
    return dispatch => {
        axios.get('items.json')
            .then(res => {
                dispatch(set(res.data));
            })
            .catch(err => console.error);
    }
};