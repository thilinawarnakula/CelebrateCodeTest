import {
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    mainContiner: {
        alignSelf: 'flex-start',
        padding:'20rem',
        marginLeft : '10rem'
    },
    lableValue: {
        color: COLORS.black,
        fontSize: '16rem',
        textAlign: 'left',
        
    },
    dateValue:{ 
        color: COLORS.black,
        fontSize: '15rem',
        textAlign: 'left',
        marginLeft : '10rem'
    },
});

export default style;
