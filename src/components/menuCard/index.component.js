import React, { Component } from 'react';
import { View, Dimensions, Animated, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './index.styles';
import moment from 'moment';
import { 
  NO_DESCRIPTION,
} from '../../utilities/strings';
import { 
  COLORS,
} from '../../utilities/colors';

import AntDesign from 'react-native-vector-icons/AntDesign';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const SUCCESS_LAUNCH = true;

import CustomTextView from '../customTextView/index.component';

const MenuCard = (props) => {
  const {
    launcherName,
    launcherDescription,
    launcherReleasedDate,
    launcherStatus,
    onPress,
    index,
  } = props;
  

  const renderIcon = () => {
    let iconColor = null;
    if(launcherStatus == SUCCESS_LAUNCH){
      iconColor = COLORS.green
    }else{
      iconColor = COLORS.red
    }
    return(
      <AntDesign name={'rocket1'} size={40} color={iconColor}/>
  )};

  return (
    <View
      style={styles.item}>
      <TouchableOpacity
        onPress={onPress}>
        <View style={styles.launcherDetalisContainer}>
          {renderIcon()}
          <CustomTextView textValue={launcherName || ''} textStyle={styles.launcherNameText} />
          <CustomTextView textValue={moment(launcherReleasedDate).format('MMMM Do, YYYY') || ''} textStyle={styles.launcherDateText} />
        </View>
      <View style={styles.launcherDescriptionContainer}>
        <CustomTextView 
          numberOfLines={10} 
          textValue={launcherDescription || NO_DESCRIPTION } 
          textStyle={launcherDescription ? styles.launcherDescriptionText : styles.launcherNoDescriptionText} />
      </View>
            </TouchableOpacity>
        </View >
    )
};

export default MenuCard;