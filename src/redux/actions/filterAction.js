import {
    HANDLE_FILTER_MODAL,
    HANDLE_FILTER_START_DATE,
    HANDLE_FILTER_END_DATE
} from '../types';


export const hadleFilterModal = (status) => ({
    type: HANDLE_FILTER_MODAL,
    payload: status
});

export const handleStartDate = (startDate) => ({
    type: HANDLE_FILTER_START_DATE,
    payload: startDate
});

export const handleEndDate = (endDate) => ({
    type: HANDLE_FILTER_END_DATE,
    payload: endDate
});
