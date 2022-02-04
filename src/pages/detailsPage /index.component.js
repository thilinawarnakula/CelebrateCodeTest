import React from 'react';
import {
    SafeAreaView,
} from 'react-native';
import styles from './index.styles';

import {
    DETAILS_PAGE
} from '../../utilities/strings';


import PageHeader from '../../components/pageHeader/index.component';

const detailsPage = (props) => {

    const {
        navigation,
    } = props;

    const onPressBack = () => {
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <PageHeader isHome={false} title={DETAILS_PAGE} onPress={onPressBack}/>
        </SafeAreaView>
    )
}

export default detailsPage;