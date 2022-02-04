import React from 'react';
import {
    Dimensions,
    View,
    Text,
    Image
} from 'react-native';
import { 
    NO_RESULTS_ICON,
} from '../../utilities/icons';

import Feather from 'react-native-vector-icons/Feather';

import styles from './index.styles';

import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../utilities/colors';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const NoResults = ({
    headerText,
    subHeaderText
}) => {

    return (
        <View style={styles.container}>
            <Feather name={'alert-octagon'} size={30} color={COLORS.black} />
            <Text style={[styles.textTitleMain]}>{headerText}</Text>
            <Text style={styles.textTitleSub}>{subHeaderText}</Text>
        </View>
    );
};

export default NoResults;
