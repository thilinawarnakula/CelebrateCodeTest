import {
    SET_COMPLETED_LAUNCHES_LIST,
    SET_FILTERED_COMPLETED_LAUNCHES_LIST
} from '../types';


export const updateCompletedLaunches = (dataList) => ({
    type: SET_COMPLETED_LAUNCHES_LIST,
    payload: dataList
});

export const updateFiltedCompletedLaunches = (dataList) => ({
    type: SET_FILTERED_COMPLETED_LAUNCHES_LIST,
    payload: dataList
});