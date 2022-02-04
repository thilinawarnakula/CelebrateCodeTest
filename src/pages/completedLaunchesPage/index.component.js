import React, {useState,useEffect, memo } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    Text
} from 'react-native';
import styles from './index.styles';
import {
    getCompletedList
} from './index.controller';
import { connect, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';

import {
    SERCH_TEXT_INPUT_COMPLETE_LAUNCHES_NAME,
    NO_RESULT_SUB_HEADER,
    NO_RESULT_HEADER
} from '../../utilities/strings';

import {
    PAGE_LIMIT,
    INITIAL_PAGE_OFFSET
} from '../../utilities/constants';

import HomeHeader from '../../components/homeHeader/index.component';
import NoResults from '../../components/noResults/index.component';
import Loader from '../../components/loader/index.component';

import useSearchInputHook from '../../customHooks/useSearchInputHook';
import useLoaderHook from '../../customHooks/useLoaderHook';

const CompletedLaunchesPage = (props) => {

    const {
        navigation
    } = props;

    const [searchText,onSearchtextChangeValue,clearSearchText] = useSearchInputHook('');
    const [isLoading,setLoadingValue] = useLoaderHook(false);
    const [dataList, setData] = useState([]);
    const [filterDataList, setFilterData] = useState([]);

    const isFocused = useIsFocused();
    const dispatch = useDispatch();


    useEffect(() => {
        if (isFocused) {
            loadData();
        }
    }, [isFocused]);

    const resetStateValues = () => {
        clearSearchText();
        setData([])
        setFilterData([]);
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
        let dataList = response?.resultData?.data;
        let freshPull = response?.freshPull;
        setData(dataList);
        setFilterData(dataList);
        setLoadingValue(false);
    };

    const getCompletedListError = (error) => {
        setData([]);
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
            textInputName={SERCH_TEXT_INPUT_COMPLETE_LAUNCHES_NAME}
        />
    );

    const renderFullLoadingIndicator = () => ((isLoading) ? (
        <View style={styles.loadingView}>
            <Loader />
        </View>
    ) : null);

    const renderItem = ({ item, index }) => {
        return (
            <Text>dasdad</Text>
        )
    };

    const renderFlatListContainer = () => (
        <FlatList
            nestedScrollEnabled
            data={filterDataList}
            renderItem={renderItem}
            style={styles.listView}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.flight_number.toString()}
            contentContainerStyle={styles.listViewContainer}
            onRefresh={() => {
                fetchData();
            }}
            refreshing={isLoading}
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
            {!isLoading && filterDataList.length == 0 &&
                renderNoResultList()
            }
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(memo(CompletedLaunchesPage));