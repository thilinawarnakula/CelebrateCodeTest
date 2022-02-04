import {
    SET_COMPLETED_LAUNCHES_LIST,
    SET_FILTERED_COMPLETED_LAUNCHES_LIST
} from '../types';

const INITIAL_STATE = {
    completeLaunchesList: [],
    completeLaunchesFilterdList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_COMPLETED_LAUNCHES_LIST:
            return {
                ...state,
                completeLaunchesList: action.payload,
            };
        case SET_FILTERED_COMPLETED_LAUNCHES_LIST:
            return {
                ...state,
                completeLaunchesFilterdList: action.payload,
            };
        default:
            return state;
    }
};
