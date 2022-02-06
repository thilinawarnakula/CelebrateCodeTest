import React from 'react';
import { Image } from 'react-native';
import styles from './index.styles';

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
