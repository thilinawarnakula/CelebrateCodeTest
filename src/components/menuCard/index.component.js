import moment from 'moment';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  COLORS
} from '../../utilities/colors';
import {
  NO_DESCRIPTION
} from '../../utilities/strings';
import CustomTextView from '../customTextView/index.component';
import styles from './index.styles';

const SUCCESS_LAUNCH = true;

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
    if(launcherStatus == null){
      iconColor = COLORS.primary
    }else if(launcherStatus == SUCCESS_LAUNCH){
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