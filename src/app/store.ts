import { createStore } from '@reduxjs/toolkit';


function reducer(state = [], action: any) {
    switch (action.type) {
        case 'ADD_TODO':
            return action.item;
        default:
            return state
    }
}

export const store = createStore(reducer);

