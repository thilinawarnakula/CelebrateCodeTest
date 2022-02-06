import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {COLORS} from '../../utilities/colors'; 

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    mainView :{
        flexDirection: 'row',
        height : '50rem',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:COLORS.primary,
        margin : '5rem',
        borderRadius :'10rem',
        opacity: 0.7,
        padding:'10rem'
    },
    infoTagName:{
        padding:'5rem',
        fontSize : '15rem',
        color: COLORS.white,
        fontWeight : '700',
        textAlign: 'center',
    },
    iconView:{
        width : '20rem',
        height : '20rem',
    }
});

export default style;
