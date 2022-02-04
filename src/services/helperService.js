import moment from 'moment';

export const filterItems = (dataList,searchText,startDate,endDate) => {
    let startDateValue = moment(startDate);
    let endDateValue = moment(endDate);
    
    const filteredData = dataList.filter((item) => {

        const itemData = item.mission_name
            ? item.mission_name.toLowerCase()
            : ''.toLowerCase();
        const textData = searchText.toLowerCase();
        return itemData.indexOf(textData) > -1;
    });
    return filteredData;
}

export const checkFilterDate = (startDate,endDate) => {
    let startDateValue = moment(startDate);
    let endDateValue = moment(endDate);
    
    if(!startDateValue.isValid() || !endDateValue.isValid()){
        return false;
    }
     return startDateValue.isBefore(endDateValue);;
}