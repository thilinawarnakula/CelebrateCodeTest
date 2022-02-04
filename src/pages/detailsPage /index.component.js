import React, {useState,useEffect} from 'react';
import {
    SafeAreaView, View,ScrollView,Linking
} from 'react-native';
import styles from './index.styles';
import {
    getFlighData
} from './index.controller';
import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';

import {
    DETAILS_PAGE,
    NO_DESCRIPTION,
    YOUTUBE,
    WIKI
} from '../../utilities/strings';
import {
    YOUTUBE_CLICK,
    WIKI_CLICK
} from '../../utilities/constants';
import { 
    ROCKET_ICON,
} from '../../utilities/icons';

import useLoaderHook from '../../customHooks/useLoaderHook';

import PageHeader from '../../components/pageHeader/index.component';
import CustomTextView from '../../components/customTextView/index.component';
import CustomIcon from '../../components/customIcon/index.component';
import Loader from '../../components/loader/index.component';
import InfoTags from '../../components/infoTags/index.component'

const DetailsPage = (props) => {

    const {
        navigation,
        route
    } = props;

    const [isLoading,setLoadingValue] = useLoaderHook(false);
    const [flight, setFlight] = useState(null);
    
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            fetchData();
        }else{
            setFlight(null);
        }
    }, [isFocused]);

    const fetchData = () => {
        let flightId= route?.params?.item?._id;
        setLoadingValue(true);
        getFlighData(
            flightId,
            getFlighDataSuccess,
            getFlighDataError,
        );
    };

    const getFlighDataSuccess = (response) => {
        setFlight(response?.data[0]);
        setLoadingValue(false);
    };

    const getFlighDataError = (error) => {
        setLoadingValue(false);
    };

    const onPressBack = () => {
        navigation.goBack();
    };

    const onPressTag = (clickType) => {
        switch(clickType) {
            case YOUTUBE_CLICK:
              openLink(flight?.links?.video_link)  
              break;
            case WIKI_CLICK:
             openLink(flight?.links?.wikipedia)    
              break;
          }
    };

    openLink = (link) => {
        Linking.canOpenURL(link).then(supported => {
          if (supported) {
            Linking.openURL(link);
          } 
        });
      };

    const renderFullLoadingIndicator = () => ((isLoading) ? (
        <View style={styles.loadingView}>
            <Loader />
        </View>
    ) : null);

    const infoTagsList = () => (
        <View style={styles.infoTagsContainer}>
            {flight?.links?.video_link && <InfoTags textName ={YOUTUBE} onPress={() => onPressTag(YOUTUBE_CLICK)}/>}
            {flight?.links?.wikipedia && <InfoTags textName ={WIKI} onPress={() => onPressTag(WIKI_CLICK)}/>}
        </View>
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView style={styles.scrollViewContainer}>
            <PageHeader isHome={false} title={DETAILS_PAGE} onPress={onPressBack} />
            <View style={styles.card}>
                <CustomTextView textValue={flight?.mission_name || ''} textStyle={styles.launcherNameText} />
                <CustomTextView textValue={moment(flight?.launch_date_local).format('MMMM Do, YYYY') || ''} textStyle={styles.launcherDateText} />
                <CustomIcon 
                    iconName={flight?.links?.mission_patch_small && !isLoading ?{uri:flight?.links?.mission_patch_small} : ROCKET_ICON} 
                    containerStyle={styles.iconView}/>
                {infoTagsList()}
                <CustomTextView 
                    numberOfLines={10} 
                    textValue={flight?.details || NO_DESCRIPTION } 
                    textStyle={styles.launcherDescriptionText} />
            </View>
            <View style={styles.loadingContainer}>
                {isLoading &&
                    renderFullLoadingIndicator()
                }
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailsPage;