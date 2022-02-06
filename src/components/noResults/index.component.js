import React from 'react';
import {
    Text, 
    View
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../../utilities/colors';
import styles from './index.styles';

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
