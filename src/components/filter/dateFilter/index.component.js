import React from 'react';
import {
    View,
    Dimensions,
} from 'react-native';
import {connect} from 'react-redux';

import CustomTextView from '../../customTextView/index.component';

import styles from './index.styles';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const DateFilter = (props) => {
    const {
        textValue
    } = props;
    return (
        <View style={styles.mainContiner}>
            <CustomTextView textValue={textValue || ''} textStyle={styles.lableValue} />
        </View>
    )
};

const mapStateToProps = (state) => ({
    showFilters: state.filters.showFilters,
});

export default connect(mapStateToProps)(DateFilter);
