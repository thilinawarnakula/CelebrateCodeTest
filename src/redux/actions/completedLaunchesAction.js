import {
    SET_COMPLETED_LAUNCHES_LIST
} from '../types';


export const updateCompletedLaunches = (dataList) => ({
    type: SET_COMPLETED_LAUNCHES_LIST,
    payload: dataList
});