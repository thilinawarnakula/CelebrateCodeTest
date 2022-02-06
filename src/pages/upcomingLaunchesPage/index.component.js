import { useIsFocused } from '@react-navigation/native';
import { debounce } from 'lodash';
import { memoize } from 'lodash/fp';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
    FlatList, SafeAreaView,
    View
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import CustomButton from '../../components/customButton/index.component';
import FilterModal from '../../components/filter/filterModal/index.component';
import HomeHeader from '../../components/homeHeader/index.component';
import Loader from '../../components/loader/index.component';
import MenuCard from '../../components/menuCard/index.component';
import NoResults from '../../components/noResults/index.component';
import useLoaderHook from '../../customHooks/useLoaderHook';
import useSearchInputHook from '../../customHooks/useSearchInputHook';
import { HOME_SCREEN } from '../../navigation/NavigationConstants';
import {
    hadleFilterModal
} from '../../redux/actions/filterAction';
import {
    updateFilterdUpComingLaunches, updateUpComingLaunches
} from '../../redux/actions/upcomingLaunchesActions';
import {
    clearDateFilters, filterItems
} from '../../services/launcherService';
import {
    INITIAL_PAGE_OFFSET, PAGE_LIMIT
} from '../../utilities/constants';
import {
    CLEAR_FILTERS, NO_RESULT_HEADER, NO_RESULT_SUB_HEADER, SERCH_TEXT_INPUT_HEADER
} from '../../utilities/strings';
import globleStyles from '../../utilities/styles';
import {
    getUpComingList
} from './index.controller';
import styles from './index.styles';

let upcomingLaunchesEndReachedCalledDuringMomentum = false;

const UpcomingLaunchesPage = (props) => {

    const {
        navigation,
        upcomingLaunchesList,
        upcomingLaunchesFilterdList,
        filterStartDate,
        filterEndDate
    } = props;

    const [searchText,onSearchtextChangeValue,clearSearchText] = useSearchInputHook('');
    const [isLoading,setLoadingValue] = useLoaderHook(false);
    const [hasMore, setHasMore] = useState(true);
    const [offSetListView, setOffSetListView] = useState(0);

    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFocused) {
            loadData();
            clearDateFilters(dispatch);
        }
    }, [isFocused]);

    const resetFiltersAndSeachText = () => {
        setOffSetListView(0);
        setHasMore(true);
        clearSearchText();
        clearFilters();
    };

    const loadData = () => {
        resetFiltersAndSeachText();
        setLoadingValue(true);
        fetchData(true,INITIAL_PAGE_OFFSET);
    };

    const fetchData = (freshPull,offSet) => {
        getUpComingList(
            freshPull,
            offSet,
            PAGE_LIMIT,
            getUpComingListSuccess,
            getUpComingListError,
        );
    };
    
    const getUpComingListSuccess = (response) => {

        let responseData = response?.resultData?.data;
        let freshPull = response?.freshPull;
        let allDataList = freshPull ? [] : [...upcomingLaunchesList];

        responseData.length > 0 &&
            responseData.forEach((each) => {
                allDataList.push(each);
            });
        dispatch(updateUpComingLaunches(allDataList));
        dispatch(updateFilterdUpComingLaunches(allDataList));

        const hasMore = responseData && responseData.length < PAGE_LIMIT;
        setHasMore(hasMore);

        setLoadingValue(false);
    };

    const getUpComingListError = (error) => {
        dispatch(updateUpComingLaunches([]));
        dispatch(updateFilterdUpComingLaunches([]));
        setLoadingValue(false);
    };

    const onTextChange = (text) => {
        setLoadingValue(true);
        onSearchtextChangeValue(text);
        if (text !== '') {
            const func = memoize(
                debounce(() => {
                    searchItem(text);
                }, 300),
            );
            func();
        } else {
            loadData();
            setLoadingValue(false);
        }
    };

    const searchItem = (text) => {
        const filteredData = filterItems(upcomingLaunchesList,text,filterStartDate,filterEndDate);
        dispatch(updateFilterdUpComingLaunches(filteredData));
        setLoadingValue(false);
    };

    const clearText = () => {
        loadData();
        clearSearchText();
    };

    const renderHeader = () => (
        <HomeHeader
            searchText={searchText}
            onChangeText={value => onTextChange(value)}
            clearText={clearText}
            textInputName={SERCH_TEXT_INPUT_HEADER}
            onPressFilter={openFilterOptions}
        />
    );

    const renderFullLoadingIndicator = () => ((isLoading) ? (
        <View style={styles.loadingView}>
            <Loader />
        </View>
    ) : null);

    const renderItem = ({ item, index }) => {
        return (
            <MenuCard
                key={item?._id}
                launcherName={item?.mission_name}
                launcherDescription={item?.details}
                launcherReleasedDate={item?.launch_date_local}
                launcherStatus={item?.launch_success}
                onPress={() => onPressItem(item)}
                index={index}

            />
        )
    };

    const onPressItem = (item) => {
        navigation.navigate(HOME_SCREEN.DETAILS_PAGE, {
            item,

        });
    };

    const openFilterOptions = (item) => {
       dispatch(hadleFilterModal(true))
    };

    const handleApplyFilters = () => {
        setLoadingValue(true);
        const filteredData = filterItems(upcomingLaunchesList,searchText,filterStartDate,filterEndDate);
        dispatch(updateFilterdUpComingLaunches(filteredData));
        setLoadingValue(false);
    };

    const clearFilters = () => {
        clearDateFilters(dispatch);
    };

    const fetchMore = () => {
        let startDateValue = moment(filterStartDate);
        let endDateValue = moment(filterEndDate);

        if (!hasMore && !upcomingLaunchesEndReachedCalledDuringMomentum && searchText == ''
             && !startDateValue.isValid() && !endDateValue.isValid()) {
            let newOffSetListView = offSetListView + 1
            setOffSetListView(newOffSetListView);
            fetchData(false,newOffSetListView)
            upcomingLaunchesEndReachedCalledDuringMomentum = true;
        }
    };

    const renderFilterButton = () => (
        <CustomButton
            containerStyle={globleStyles.restFilterContiner}
            textValue={CLEAR_FILTERS}
            onPress={loadData}
            textStyle={globleStyles.buttonTextStyle} />
    );

    const renderFlatListContainer = () => (
        <FlatList
            data={upcomingLaunchesFilterdList}
            renderItem={renderItem}
            style={styles.listView}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listViewContainer}
            onRefresh={() => {
                loadData();
            }}
            refreshing={isLoading}
            onEndReachedThreshold={0.4}
            onMomentumScrollBegin={() => {
                upcomingLaunchesEndReachedCalledDuringMomentum = false;
            }}
            onEndReached={fetchMore}
        />
    );

    const renderNoResultList = () => (
        <NoResults
            headerText={NO_RESULT_HEADER}
            subHeaderText={NO_RESULT_SUB_HEADER} />
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                {renderHeader()}
                {!isLoading && upcomingLaunchesFilterdList.length == 0 && renderFilterButton()}
                {renderFlatListContainer()}
            </View>
            <View style={styles.loadingContainer}>
                {isLoading &&
                    renderFullLoadingIndicator()
                }
            </View>
            {!isLoading && upcomingLaunchesFilterdList.length == 0 &&
                renderNoResultList()
            }
            <FilterModal applyFilters={handleApplyFilters}/>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    upcomingLaunchesList: state?.upcomingLaunches?.upcomingLaunchesList,
    upcomingLaunchesFilterdList: state?.upcomingLaunches?.upcomingLaunchesFilterdList,
    filterStartDate: state.filters.filterStartDate,
    filterEndDate: state.filters.filterEndDate,
});

export default connect(mapStateToProps)(UpcomingLaunchesPage);