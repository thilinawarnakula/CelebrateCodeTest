import moment from 'moment';
import _ from 'lodash';
import {
    hadleFilterModal
} from '../redux/actions/filterAction'

export const filterItems = (dataList,searchText,startDate,endDate) => {
    let startDateValue = moment(startDate);
    let endDateValue = moment(endDate);

    let filtertedDataList = [];
    
    // search by mission name
    if(!_.isEmpty(searchText)){
        filtertedDataList = dataList.filter((item) => {

            let itemMissionName = item.mission_name
                ? item.mission_name.toLowerCase()
                : ''.toLowerCase();
            let textData = searchText.toLowerCase();
            return itemMissionName.indexOf(textData) > -1;
        });
    };

    // filter by start and end date
    if (startDateValue.isValid() && endDateValue.isValid()) {
        filtertedDataList = filtertedDataList.filter(dateItem => {
            let itemDate = moment(dateItem.launch_date_local);
            return (itemDate >= startDateValue && itemDate <= endDateValue);
        });
    }

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
   dispatch(hadleFilterModal(null))
};