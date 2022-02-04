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
    mainView :{
        flexDirection: 'column',
    },
    textInputView :{
        height: '30rem',
        width: entireScreenWidth - 80,
        backgroundColor: COLORS.white,
        borderRadius: '50rem',
        paddingLeft: '20rem',
        elevation: 5,
        marginTop: '5rem',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    input: {
        flex:9,
        color: COLORS.black,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12rem',
    },
    textClearContainer:{
        flex:1,
        marginHorizontal : '10rem'
    },
    imagePic : {
        width: '20rem', 
        height: '20rem', 
        resizeMode: 'contain',
    },
    textInputHeaderView:{
        color : COLORS.white,
        fontSize : '12rem'
    }
});

export default style;
