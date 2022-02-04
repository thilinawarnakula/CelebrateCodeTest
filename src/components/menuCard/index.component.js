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

import CustomTextView from '../customTextView/index.component';

const MenuCard = (props) => {
  const {
    launcherName,
    launcherDescription,
    launcherReleasedDate,
    onPress,
    index,
  } = props;

  return (
    <View
      style={styles.item}>
      <TouchableOpacity
        onPress={onPress}>
        <View style={styles.launcherDetalisContainer}>
        <AntDesign name={'rocket1'} size={40} color={COLORS.primary}/>
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