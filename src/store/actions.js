import axios from './axios';

export const ADD = 'ADD';
export const CLEAR = 'CLEAR';
export const DELETE = 'DELETE';
export const FAIL = 'FAIL';
export const GET_ALL = 'GET_ALL';
export const SELECT = 'SELECT';
export const UPDATE = 'UPDATE';


//  Actions  //
const add = (data) => {
    return {
        type: ADD,
        payload: data
    };
};
export const clear = () => {
    return {
        type: CLEAR,
        payload: null
    };
};
const del = (data) => {
    return {
        type: DELETE,
        payload: data
    };
};
const fail = (err) => {
    return {
        type: FAIL,
        payload: err
    };
};
const getAll = (data) => {
    return {
        type: GET_ALL,
        payload: data
    };
};
export const select = (data) => {
    return {
        type: SELECT,
        payload: data
    };
};
const update = (data) => {
    return {
        type: UPDATE,
        payload: data
    };
};


//  Async Actions  //
export const add_async = (data) => {
    return dispatch => {
        axios.patch('/items/' + data.id + '.json', data)
        .then(response => {
            dispatch(add(data));
        })
        .catch(error => {
            dispatch(fail(error));
        });
    }
}
export const delete_async = (data) => {
    return dispatch => {
        axios.delete('/items/' + data.id + '.json')
            .then(response => {
                dispatch(del(data));
            })
            .catch(error => {
                dispatch(fail(error));
            });
    }
}
export const getAll_async = () => {
    return dispatch => {
        axios.get('items.json')
            .then(response => {
                dispatch(getAll(response.data));
            })
            .catch(error => {
                dispatch(fail(error));
            });
    }
};
export const update_async = (data) => {
    return dispatch => {
        axios.put('/items/' + data.id + '.json', data)
        .then(response => {
            dispatch(update(data));
        })
        .catch(error => {
            dispatch(fail(error));
        });
    }
}