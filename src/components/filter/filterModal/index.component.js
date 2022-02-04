import React from 'react';
import {
    View,
    Dimensions,
    TouchableOpacity,
    Alert
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import {
    COLORS,
} from '../../../utilities/colors';
import {
    START_DATE,
    END_DATE,
} from '../../../utilities/constants';
import {
    FILTER_HEADER_TEXT,
    START_DATE_FILTER,
    END_DATE_FILTER,
    FILTER_BUTTON,
    FILTER_ERROR,
    FILTER_ERROR_MESSAGE,
    FILTER_ERROR_OK
} from '../../../utilities/strings';
import Modal from 'react-native-modal';
import _ from 'lodash';

import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomTextView from '../../customTextView/index.component';
import DateFilter from '../dateFilter/index.component';
import CustomButton from '../../customButton/index.component';

import styles from './index.styles';
import {
    hadleFilterModal, 
    handleStartDate,
    handleEndDate
} from '../../../redux/actions/filterAction';

import {
    checkFilterDate,
    
} from '../../../services/helperService';


const FilterModal = (props) => {

    const { 
        showFilters,
        filterStartDate,
        filterEndDate,
        applyFilters
     } = props;

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(hadleFilterModal(false));
        dispatch(handleStartDate(false));
        dispatch(handleEndDate(false));
    };

    const onPressApply = () => {
       isValidDates = checkFilterDate(filterStartDate,filterEndDate);
       if(!isValidDates){
            showError();
           return;
       }
       applyFilters();
       dispatch(hadleFilterModal(false));
    };

    const showError = () => {
        Alert.alert(
            FILTER_ERROR,
            FILTER_ERROR_MESSAGE,
            [
              {
                text: FILTER_ERROR_OK,
                onPress: () => {}
              },
            ]
          );
    };


    return (
        <Modal
            style={styles.modalWrapper}
            isVisible={showFilters}
            onBackdropPress={() => closeModal()}
            onBackButtonPress={() => closeModal()}>
            <View style={styles.popUpWrapper}>
                <TouchableOpacity
                    style={styles.iconWrapper}
                    onPress={() => closeModal()}>
                    <AntDesign name={'close'} size={25} color={COLORS.primary} />
                </TouchableOpacity>
                <CustomTextView textValue={FILTER_HEADER_TEXT} textStyle={styles.filterHeaderText} />
                <DateFilter textValue={START_DATE_FILTER} dateType={START_DATE}/>
                <DateFilter textValue={END_DATE_FILTER} dateType={END_DATE}/>
                <View style={styles.buttonContainer}>
                    <CustomButton textValue={FILTER_BUTTON} onPress={onPressApply}/>
                </View>
            </View>
        </Modal>
    )
};

const mapStateToProps = (state) => ({
    showFilters: state.filters.showFilters,
    filterStartDate: state.filters.filterStartDate,
    filterEndDate: state.filters.filterEndDate,
});

export default connect(mapStateToProps)(FilterModal);
