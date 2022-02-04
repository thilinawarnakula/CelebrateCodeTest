import {
    SET_UPCOMING_LAUNCHES_LIST,
    SET_FILTERED_UPCOMING_LAUNCHES_LIST
} from '../types';


export const updateUpComingLaunches = (dataList) => ({
    type: SET_UPCOMING_LAUNCHES_LIST,
    payload: dataList
});

export const updateFilterdUpComingLaunches = (dataList) => ({
    type: SET_FILTERED_UPCOMING_LAUNCHES_LIST,
    payload: dataList
});
