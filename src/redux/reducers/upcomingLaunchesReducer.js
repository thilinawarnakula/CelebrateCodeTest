import {
    SET_UPCOMING_LAUNCHES_LIST
} from '../types';

const INITIAL_STATE = {
    upcomingLaunchesList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_UPCOMING_LAUNCHES_LIST:
            return {
                ...state,
                upcomingLaunchesList: action.payload,
            };
        default:
            return state;
    }
};
