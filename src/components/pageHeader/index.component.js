import React from 'react';
import { 
    Dimensions,
    SafeAreaView,
    View,
    StatusBar,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { 
    COLORS,
} from '../../utilities/colors';
import { 
    APP_NAME,
} from '../../utilities/strings';
import styles from './index.styles';
import Feather from 'react-native-vector-icons/Feather';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const PageHeader = (props) => {
    const {
        isHome,
        title,
        onPress,
        style = {}
    } = props;
    return (
        <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor={COLORS.primary}/>
        {
            isHome ?
                <View style={styles.header}>
                    <View style={styles.leftContainerFull}>
                        <Text style={styles.appName}>{APP_NAME}</Text>
                    </View>
                </View>
                :
                <View style={[style, styles.header]}>
                    <TouchableOpacity style={styles.backIconContainer} activeOpacity={0.6} onPress={onPress}>
                        <Feather name={'arrow-left'} size={30} color={COLORS.white} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{title}</Text>
                </View>
        }
    </SafeAreaView>

    );
};


export default PageHeader;