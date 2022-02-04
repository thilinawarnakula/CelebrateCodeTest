import {
    HANDLE_FILTER_MODAL
} from '../types';


export const hadleFilterModal = (status) => ({
    type: HANDLE_FILTER_MODAL,
    payload: status
});
