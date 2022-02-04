import React, {useState,useEffect, memo } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
} from 'react-native';
import styles from './index.styles';
import {
    getCompletedList
} from './index.controller';
import { connect, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import _, {debounce} from 'lodash';
import {memoize} from 'lodash/fp';

import {
    SERCH_TEXT_INPUT_HEADER,
    NO_RESULT_SUB_HEADER,
    NO_RESULT_HEADER
} from '../../utilities/strings';

import {
    PAGE_LIMIT,
    INITIAL_PAGE_OFFSET
} from '../../utilities/constants';
import { HOME_SCREEN } from '../../navigation/NavigationConstants';

import HomeHeader from '../../components/homeHeader/index.component';
import NoResults from '../../components/noResults/index.component';
import Loader from '../../components/loader/index.component';
import MenuCard from '../../components/menuCard/index.component';
import FilterModal from '../../components/filter/filterModal/index.component';

import useSearchInputHook from '../../customHooks/useSearchInputHook';
import useLoaderHook from '../../customHooks/useLoaderHook';

import {
    filterItems
  } from '../../services/helperService';

import {
    updateCompletedLaunches,
    updateFiltedCompletedLaunches
} from '../../redux/actions/completedLaunchesAction';
import {
    hadleFilterModal
} from '../../redux/actions/filterAction'

let completeLaunchesEndReachedCalledDuringMomentum = false;

const CompletedLaunchesPage = (props) => {

    const {
        navigation,
        completeLaunchesList,
        completeLaunchesFilterdList,
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
        }
    }, [isFocused]);

    const resetStateValues = () => {
        clearSearchText();
        dispatch(updateCompletedLaunches([]));
        dispatch(updateFiltedCompletedLaunches([]));
    };

    const loadData = () => {
        resetStateValues();
        setLoadingValue(true);
        fetchData(true,INITIAL_PAGE_OFFSET);
    };

    const fetchData = (freshPull,offSet) => {
        getCompletedList(
            freshPull,
            offSet,
            PAGE_LIMIT,
            getCompletedListSuccess,
            getCompletedListError,
        );
    };
    
    const getCompletedListSuccess = (response) => {
        let responseData = response?.resultData?.data;
        let freshPull = response?.freshPull;
        let allDataList = freshPull ? [] : [...completeLaunchesList];

        responseData.length > 0 &&
            responseData.forEach((each) => {
                allDataList.push(each);
            });
        dispatch(updateCompletedLaunches(allDataList));
        dispatch(updateFiltedCompletedLaunches(allDataList));

        const hasMore = responseData && responseData.length < PAGE_LIMIT;
        setHasMore(hasMore);

        setLoadingValue(false);
    };

    const getCompletedListError = (error) => {
        dispatch(updateCompletedLaunches([]));
        dispatch(updateFiltedCompletedLaunches([]));
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
        const filteredData = filterItems(completeLaunchesList,text,filterStartDate,filterEndDate);
        dispatch(updateFiltedCompletedLaunches(filteredData));
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

    const openFilterOptions = (item) => {
        dispatch(hadleFilterModal(true))
     };

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

    const fetchMore = () => {
        if (!hasMore && !completeLaunchesEndReachedCalledDuringMomentum && searchText == '') {
            let newOffSetListView = offSetListView + 1
            setOffSetListView(newOffSetListView);
            fetchData(false,newOffSetListView)
            completeLaunchesEndReachedCalledDuringMomentum = true;
        }
    };

    const onPressItem = (item) => {
        navigation.navigate(HOME_SCREEN.DETAILS_PAGE, {
            item
        });
    };

    const renderFlatListContainer = () => (
        <FlatList
            data={completeLaunchesFilterdList}
            renderItem={renderItem}
            style={styles.listView}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item?._id}
            contentContainerStyle={styles.listViewContainer}
            onRefresh={() => {
                loadData();
            }}
            refreshing={isLoading}
            onEndReachedThreshold={0.4}
            onMomentumScrollBegin={() => {
                completeLaunchesEndReachedCalledDuringMomentum = false;
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
                {renderFlatListContainer()}
            </View>
            <View style={styles.loadingContainer}>
                {isLoading &&
                    renderFullLoadingIndicator()
                }
            </View>
            {!isLoading && completeLaunchesFilterdList.length == 0 &&
                renderNoResultList()
            }
             <FilterModal/>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    completeLaunchesList: state?.completedLaunches?.completeLaunchesList,
    completeLaunchesFilterdList: state?.completedLaunches?.completeLaunchesFilterdList,
    filterStartDate: state.filters.filterStartDate,
    filterEndDate: state.filters.filterEndDate,
});

export default connect(mapStateToProps)(memo(CompletedLaunchesPage));