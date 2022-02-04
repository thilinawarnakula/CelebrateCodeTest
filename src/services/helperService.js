
export const filterItemsByMissionName = (dataList,searchText) => {
    const filteredData = dataList.filter((item) => {

        const itemData = item.mission_name
            ? item.mission_name.toLowerCase()
            : ''.toLowerCase();
        const textData = searchText.toLowerCase();
        return itemData.indexOf(textData) > -1;
    });
    return filteredData;
}