import moment from 'moment';
import _ from 'lodash';
import {
    handleStartDate,
    handleEndDate
} from '../redux/actions/filterAction'

export const filterItems = (dataList,searchText,startDate,endDate) => {
    let startDateValue = moment(startDate);
    let endDateValue = moment(endDate);

    const filtertedDataList = dataList.filter((item) => {
        const itemDate = moment(item.launch_date_local);
        const itemMissionName = item.mission_name
            ? item.mission_name.toLowerCase()
            : ''.toLowerCase();
        const textData = searchText.toLowerCase();
        return startDateValue.isValid() && endDateValue.isValid() ?  
            itemMissionName.indexOf(textData) > -1 && (itemDate >= startDateValue && itemDate <= endDateValue): 
            itemMissionName.indexOf(textData) > -1;
    });

    return filtertedDataList;
};

export const checkFilterDate = (startDate,endDate) => {
    let startDateValue = moment(startDate);
    let endDateValue = moment(endDate);
    
    if(!startDateValue.isValid() || !endDateValue.isValid()){
        return false;
    }
     return startDateValue.isBefore(endDateValue);;
};

export const clearDateFilters = (dispatch) => {
   dispatch(handleStartDate(null));
   dispatch(handleEndDate(null))
};