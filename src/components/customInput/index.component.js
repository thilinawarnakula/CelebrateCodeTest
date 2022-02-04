import React from 'react';
import {
    Dimensions,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import { 
    CLEAR_ICON,
} from '../../utilities/icons';

import styles from './index.styles';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const CustomInput = (props) => {

    const {
        onChangeText,
        searchText,
        clearText,
        textInputName,
        placeholderName
    } = props;

    return (
        <View style={styles.mainView}>
            <Text style={styles.textInputHeaderView}>{textInputName}</Text>
            <View style={styles.textInputView}>
                <TextInput
                    style={styles.input}
                    value={searchText}
                    onChangeText={onChangeText}
                    placeholder={placeholderName}>
                </TextInput>
                {
                    searchText !== '' &&
                    <TouchableOpacity
                        onPress={clearText}
                        style={styles.textClearContainer}>
                        <Image
                            source={CLEAR_ICON}
                            style={styles.imagePic} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

export default CustomInput;
