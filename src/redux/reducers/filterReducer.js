import {
    HANDLE_FILTER_MODAL
} from '../types';

const INITIAL_STATE = {
    showFilters: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HANDLE_FILTER_MODAL:
            return {
                ...state,
                showFilters: action.payload,
            };
        default:
            return state;
    }
};
