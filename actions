export const ADD_OBJECT = "ADD_OBJECT";
export const REMOVE_OBJECT = "REMOVE_OBJECT";
export const SET_LIST_FOR_OBJECT = "SET_LIST";
export const SET_OBJECT_ARRAY = "SET_OBJECT_ARRAY";
export const SET_TEXT = "SET_TEXT";


export const addObjectAction = (payload) => (
    {
        type: ADD_OBJECT,
        payload
    }
);

export const removeObjectAction = (payload) => (
    {
        type: REMOVE_OBJECT,
        payload
    }
);

export const setListAction = (payload) => (
    {
        type: SET_LIST_FOR_OBJECT,
        payload
    }
);

export const setPaginationArrayAction = (payload) => (
    {
        type: SET_OBJECT_ARRAY,
        payload

    }
);
export const setTotalItemsAction = (payload) => (
    {
        type: SET_TEXT,
        payload
    }
);

/**
* generic action Creator
**/
export const actionCreator = (action,payload) =>
    async dispatch => {

        dispatch(action(payload));
    };


