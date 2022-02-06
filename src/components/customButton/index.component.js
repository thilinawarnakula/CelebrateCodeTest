import React from 'react';
import {
    TouchableOpacity
} from 'react-native';
import CustomTextView from '../customTextView/index.component';
import styles from './index.styles';

const CustomButton = (props) => {

    const {
        textValue,
        onPress,
        containerStyle = {},
        textStyle = {}
    } = props;

    return (
        <TouchableOpacity
            style={[styles.mainContianer, containerStyle]}
            onPress={onPress}>
            <CustomTextView textValue={textValue} textStyle={[styles.buttonTextLable, textStyle]} />
        </TouchableOpacity>
    );
};

export default CustomButton;
