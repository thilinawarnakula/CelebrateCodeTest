import {
    SET_UPCOMING_LAUNCHES_LIST
} from '../types';


export const updateUpComingLaunches = (dataList) => ({
    type: SET_UPCOMING_LAUNCHES_LIST,
    payload: dataList
});
