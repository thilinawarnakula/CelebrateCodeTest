import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {COLORS} from '../../utilities/colors'; 

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    container: {
        backgroundColor : COLORS.primary,
        height : '130rem',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: '20rem',
        borderBottomRightRadius: '20rem',
    },
    headerTextView:{
        color : COLORS.white,
        fontSize:'30rem',
    },
    iconView:{
        width : '30rem',
        height : '30rem',
    },
    filterContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    filterIcon:{
       marginTop:'10rem'
    }
});

export default style;
