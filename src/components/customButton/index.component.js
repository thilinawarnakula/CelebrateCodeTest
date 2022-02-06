import React from 'react';
import {
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import styles from './index.styles';

import CustomTextView from '../customTextView/index.component';


const CustomButton = (props) => {

    const {
        textValue,
        onPress,
        containerStyle={},
        textStyle = {}
    } = props;

    return (
        <TouchableOpacity
            style={[styles.mainContianer,containerStyle]}
            onPress={onPress}>
                <CustomTextView textValue={textValue} textStyle={[styles.buttonTextLable,textStyle]} />
        </TouchableOpacity>
    );
};

export default CustomButton;
