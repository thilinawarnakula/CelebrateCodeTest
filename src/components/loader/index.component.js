import React from 'react';
import {
    ActivityIndicator, View
} from 'react-native';
import { COLORS } from '../../utilities/colors';
import styles from './index.styles';


const Loader = ({}) => {

    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
    );
};

export default Loader;
