import moment from 'moment';

export const filterItems = (dataList,searchText,startDate,endDate) => {
    let startDateValue = moment(startDate);
    let endDateValue = moment(endDate);
    
    let filteredData = dataList.filter((item) => {

        const itemData = item.mission_name
            ? item.mission_name.toLowerCase()
            : ''.toLowerCase();
        const textData = searchText.toLowerCase();
        return itemData.indexOf(textData) > -1;
    });

    if (startDateValue.isValid() && endDateValue.isValid()) {
        filteredData = filteredData.filter(dateItem => {
            let itemDate = moment(dateItem.launch_date_local);
            return (itemDate >= startDateValue && itemDate <= endDateValue);
        });
        return filteredData;
    } else {
        return filteredData;
    } 
}

export const checkFilterDate = (startDate,endDate) => {
    let startDateValue = moment(startDate);
    let endDateValue = moment(endDate);
    
    if(!startDateValue.isValid() || !endDateValue.isValid()){
        return false;
    }
     return startDateValue.isBefore(endDateValue);;
}