import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    COLORS
} from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    safeAreaView:{ 
        backgroundColor: COLORS.primary 
    },
    header: {
        height: '56rem',
        backgroundColor: COLORS.primary,
        flexDirection: 'row',
        padding: '16rem',
    },
    menuIconContatiner: {
        flex: 0.1,
        marginTop: Platform.OS === 'ios' ? '-4rem' : '0rem',
        justifyContent:'center',
        alignItems:'center'
    },
    leftContainerFull: {
        flex: 0.9,
        alignItems: 'flex-start'
    },
    title: {
        fontSize: '20rem',
        color: COLORS.white,
        fontWeight: '500',
        textAlign: 'left',
        marginLeft : '10rem',
    },
    icon: {
        fontSize: '20rem',
        color: COLORS.white,
        fontWeight: '800',
    },
    iconBack: {
        fontSize: '32rem',
        color: COLORS.white,
        fontWeight: '800',
    },
    appName: {
        color: COLORS.white,
        fontSize: '20rem',
        marginLeft: '5rem'
    },
    backIconContainer:{
        justifyContent:'center'
    },
    backIcon : {
        width: '40rem', 
        height: '40rem', 
        resizeMode: 'contain',
    },
});

export default style;
