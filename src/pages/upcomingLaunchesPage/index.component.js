import React,{useState,useEffect,memo} from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    Text
} from 'react-native';
import styles from './index.styles';
import {
    getUpComingList
} from './index.controller';

import {
    SERCH_TEXT_INPUT_UPCOMING_LAUNCHES_NAME,
    NO_RESULT_SUB_HEADER,
    NO_RESULT_HEADER
} from '../../utilities/strings';
import {
    PAGE_LIMIT,
    INITIAL_PAGE_OFFSET
} from '../../utilities/constants';

import { connect, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import HomeHeader from '../../components/homeHeader/index.component';
import NoResults from '../../components/noResults/index.component';
import Loader from '../../components/loader/index.component';
import MenuCard from '../../components/menuCard/index.component';

import useSearchInputHook from '../../customHooks/useSearchInputHook';
import useLoaderHook from '../../customHooks/useLoaderHook';

let upcomingLaunchesEndReachedCalledDuringMomentum = false;

const UpcomingLaunchesPage = (props) => {

    const {
        navigation
    } = props;

    const [searchText,onSearchtextChangeValue,clearSearchText] = useSearchInputHook('');
    const [isLoading,setLoadingValue] = useLoaderHook(false);
    const [allDataListData, setAllData] = useState([]);
    const [filterDataListData, setFilterData] = useState([]);
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
        setAllData([])
        setFilterData([]);
    };

    const loadData = () => {
        resetStateValues();
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
        let allDataList = freshPull ? [] : [...allDataListData];
        let filterDataList = freshPull ? [] : [...filterDataListData];

        responseData.length > 0 &&
            responseData.forEach((each) => {
                allDataList.push(each);
            });
        setAllData(allDataList);

        responseData.length > 0 &&
            responseData.forEach((each) => {
                filterDataList.push(each);
            });
        setFilterData(filterDataList);

        const hasMore = responseData && responseData.length < PAGE_LIMIT;
        setHasMore(hasMore);

        setLoadingValue(false);
    };

    const getUpComingListError = (error) => {
        setAllData([]);
        setFilterData([]);
        setLoadingValue(false);
    };

    const onTextChange = (text) => {
        onSearchtextChangeValue(text);
    };

    const clearText = () => {
        clearSearchText();
    };

    const renderHeader = () => (
        <HomeHeader
            searchText={searchText}
            onChangeText={value => onTextChange(value)}
            clearText={clearText}
            textInputName={SERCH_TEXT_INPUT_UPCOMING_LAUNCHES_NAME}
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
                key={item?.flight_number.toString()}
                launcherName={item?.mission_name}
                launcherDescription={item?.details}
                launcherReleasedDate={item?.launch_date_local}
                onPress={() => onPressItem(item)}
                index={index}

            />
        )
    };

    const fetchMore = () => {
        if (!hasMore && !upcomingLaunchesEndReachedCalledDuringMomentum) {
            let newOffSetListView = offSetListView + 1
            setOffSetListView(newOffSetListView);
            fetchData(false,newOffSetListView)
            listViewOnEndReachedCalledDuringMomentum = true;
        }
    };

    const renderFlatListContainer = () => (
        <FlatList
            data={filterDataListData}
            renderItem={renderItem}
            style={styles.listView}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item?.flight_number.toString()}
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
             {renderHeader()}
             {renderFlatListContainer()}
             <View style={styles.loadingContainer}>
                {isLoading &&
                    renderFullLoadingIndicator()
                }
            </View>
            {!isLoading && filterDataListData.length == 0 &&
                renderNoResultList()
            }
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(memo(UpcomingLaunchesPage));