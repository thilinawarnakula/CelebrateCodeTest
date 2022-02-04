import {
    SET_UPCOMING_LAUNCHES_LIST,
    SET_FILTERED_UPCOMING_LAUNCHES_LIST
} from '../types';

const INITIAL_STATE = {
    upcomingLaunchesList: [],
    upcomingLaunchesFilterdList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_UPCOMING_LAUNCHES_LIST:
            return {
                ...state,
                upcomingLaunchesList: action.payload,
        };
        case SET_FILTERED_UPCOMING_LAUNCHES_LIST:
            return {
                ...state,
                upcomingLaunchesFilterdList: action.payload,
            };
        default:
            return state;
    }
};
