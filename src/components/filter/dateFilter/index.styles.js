import {
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    mainContiner: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        padding:'20rem',
        marginLeft : '10rem'
    },
    lableValue: {
        color: COLORS.black,
        fontSize: '16rem',
        textAlign: 'left',
        
    }
});

export default style;
