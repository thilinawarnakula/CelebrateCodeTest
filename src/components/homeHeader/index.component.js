import React from 'react';
import {
    Dimensions,
    View,
} from 'react-native';
import {
    SERCH_TEXT_PlACE_HOLDER_INPUT_NAME
} from '../../utilities/strings';
import { COLORS } from '../../utilities/colors';

import styles from './index.styles';

import CustomInput from '../customInput/index.component';
import AntDesign from 'react-native-vector-icons/AntDesign';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const HomeHeader = ({
    onChangeText,
    searchText,
    clearText,
    textInputName,
    onPressFilter
}) => {

    return (
        <View style={styles.container}>
            <AntDesign name={'rocket1'} size={40} color={COLORS.white} />
            <View style={styles.filterContainer}>
                <CustomInput
                    searchText={searchText}
                    onChangeText={onChangeText}
                    clearText={clearText}
                    textInputName={textInputName}
                    placeholderName={SERCH_TEXT_PlACE_HOLDER_INPUT_NAME} />
                <AntDesign onPress={onPressFilter} style={styles.filterIcon} name={'filter'} size={30} color={COLORS.white} />
            </View>
        </View>
    );
};

export default HomeHeader;
