import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    mainContianer :{
        height : '60rem',
        width: entireScreenWidth - 40,
        backgroundColor : COLORS.primary,
        marginBotton : '20rem',
        justifyContent: 'center',
        alignItems: 'center',
     },
     buttonTextLable:{
         color :COLORS.white,
         fontSize: '20rem',
         fontWeight: '700',
        textAlign: 'left',
     }
});

export default style;
