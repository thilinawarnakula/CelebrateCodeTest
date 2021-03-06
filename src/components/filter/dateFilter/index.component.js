import moment from 'moment';
import React, { useState } from 'react';
import {
    TouchableOpacity
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import { connect, useDispatch } from 'react-redux';
import {
    handleEndDate, handleStartDate
} from '../../../redux/actions/filterAction';
import {
    END_DATE, START_DATE
} from '../../../utilities/constants';
import CustomTextView from '../../customTextView/index.component';
import styles from './index.styles';

const DateFilter = (props) => {
    const {
        textValue,
        dateType
    } = props;

    const dispatch = useDispatch();

    const [date, setDate] = useState("Select Date");
    const [open, setOpen] = useState(false)

    const selectDate = () => {
        setOpen(true);
    };

    const onSelectConfirm = (selectedDate) => {
        setOpen(false);
        setDate(selectedDate);
        if(dateType == START_DATE){
            dispatch(handleStartDate(selectedDate));
        }else if(dateType == END_DATE){
            dispatch(handleEndDate(selectedDate));
        }
    };

    const onCancel = () => {
        setOpen(false);
    };

    return (
        <TouchableOpacity onPress={selectDate} style={styles.mainContiner}>
            <CustomTextView textValue={textValue || ''} textStyle={styles.lableValue} />
            <CustomTextView textValue={moment(date).isValid() ? moment(date).format('MMMM Do, YYYY') : date} textStyle={styles.dateValue} />
            <DatePicker
                mode={'date'}
                modal
                open={open}
                date={moment(date).isValid() ? date : new Date()}
                onConfirm={(date) => {onSelectConfirm(date)}}
                onCancel={() => {onCancel()}}
            />
        </TouchableOpacity>
    )
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps)(DateFilter);
