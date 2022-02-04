import React from 'react';
import {
    Dimensions,
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './index.styles';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const InfoTags = (props) => {

    const {
        textName,
        onPress
    } = props;

    return (
        <TouchableOpacity style={styles.mainView} onPress={onPress}>
           <Text style={styles.infoTagName}>{textName}</Text>
        </TouchableOpacity>
    );
};

export default InfoTags;
