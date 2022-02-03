import React, { useEffect, memo } from 'react';
import {
    SafeAreaView,
    Text
} from 'react-native';
import styles from './index.styles';

import { useIsFocused } from '@react-navigation/native';
import { connect, useDispatch } from 'react-redux';

import {
    updateUpComingLaunches
} from '../../redux/actions/upcomingLaunchesActions';

import {
    updateCompletedLaunches
} from '../../redux/actions/completedLaunchesAction';


const CompletedLaunchesPage = (props) => {

    const {
        upcomingLaunchesList,
        completeLaunchesList,
        navigation
    } = props;

    const isFocused = useIsFocused();
    const dispatch = useDispatch();

    const fetchData = () => {
        dispatch(updateUpComingLaunches([1, 2, 3, 4]));
        dispatch(updateCompletedLaunches([1, 2, 3, 4]));
    }

    useEffect(() => {
        if (isFocused) {
            fetchData();
        }
    }, [isFocused]);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <Text>{upcomingLaunchesList.length}</Text>
            <Text>{completeLaunchesList.length}</Text>
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    upcomingLaunchesList: state.upcomingLaunches.upcomingLaunchesList,
    completeLaunchesList: state.completedLaunches.completeLaunchesList,
});

export default connect(mapStateToProps)(memo(CompletedLaunchesPage));