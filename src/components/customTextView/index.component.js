import React from 'react';
import { Text } from 'react-native';
import styles from './index.styles';

const CustomTextView = (props) => {

    const {
        textValue,
        textStyle,
        numberOfLines
    } = props;

    return (
        <Text 
            style={[textStyle,styles.textView]}
            numberOfLines={numberOfLines}>{textValue}
        </Text>
    );
};

export default CustomTextView;
