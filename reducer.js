
import {ADD_OBJECT, REMOVE_OBJECT , SET_LIST_FOR_OBJECT , SET_OBJECT_ARRAY , SET_TEXT } from "./actions";

const initialState = {};

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_OBJECT: {
            return {
                ...state, [action.payload.stateName]: state[action.payload.stateName] ?
                    state[action.payload.stateName].concat(action.payload) : [].concat(action.payload)
            };
        }
        case REMOVE_OBJECT: {
            let indexToDelete = '';
            if(state[action.payload.stateName]){
                state[action.payload.stateName].map((value,index) => {
                    if(value.id === action.payload.guid){
                        indexToDelete = index;
                    }
                })
            }
            return {
                ...state,
                [action.payload.stateName]: [...state[action.payload.stateName].slice(0,indexToDelete),...state[action.payload.stateName].splice(indexToDelete+1)]

            };
        }
        case SET_LIST_FOR_OBJECT:{

            return {
                ...state,
                [action.payload.stateName]:

                    state[action.payload.stateName].map((value, index) => {
                        if(value && value.id === action.payload.guid){
                            value.list = action.payload.list;
                        }
                        return value;
                    })

        }

            }
        case SET_OBJECT_ARRAY :{
            return {
                ...state,
                [action.payload.stateName]: state[action.payload.stateName].map((value, index) => {
                    if(value && value.id === action.payload.guid){
                        value.paginationArray = action.payload.paginationArray;
                    }
                    return value;
                })
            }
        }
        case SET_TEXT:
            return {
                ...state,
                [action.payload.stateName]: state[action.payload.stateName].map((value, index) => {
                    if(value && value.id === action.payload.guid){
                        value.totalItems = action.payload.totalItems;
                    }
                    return value;
                })
            }
        default:
            return state;
    }
}

export default reducer;

