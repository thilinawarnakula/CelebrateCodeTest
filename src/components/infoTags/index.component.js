import React from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';
import styles from './index.styles';

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
