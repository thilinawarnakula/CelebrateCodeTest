import React from 'react';
import {
    Text,
    Dimensions
} from 'react-native';

import styles from './index.styles';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const CustomTextView = (props) => {

    const {
        textValue,
        textStyle
    } = props;

    return (
        <Text style={[textStyle,styles.textView]}>{textValue}</Text>
    );
};

export default CustomTextView;
