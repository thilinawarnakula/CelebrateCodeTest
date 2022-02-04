import {
    HANDLE_FILTER_MODAL,
    HANDLE_FILTER_START_DATE,
    HANDLE_FILTER_END_DATE
} from '../types';

const INITIAL_STATE = {
    showFilters : false,
    filterStartDate : null,
    filterEndDate : null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HANDLE_FILTER_MODAL:
            return {
                ...state,
                showFilters: action.payload,
            };
        case HANDLE_FILTER_START_DATE:
            return {
                ...state,
                filterStartDate: action.payload,
            };
        case HANDLE_FILTER_END_DATE:
            return {
                ...state,
                filterEndDate: action.payload,
            };
        default:
            return state;
    }
};
