import React from 'react';
import {
    Image,
    Dimensions
} from 'react-native';

import styles from './index.styles';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const CustomIcon = (props) => {

    const {
        iconName,
        containerStyle
    } = props;

    return (
        <Image
            source={iconName}
            style={[styles.imageView, containerStyle]} 
            resizeMode='contain'/>
    );
};

export default CustomIcon;
