import {
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    modalWrapper: {
        flex: 1,
        margin: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: COLORS.transparent,
    },
    popUpWrapper: {
        position: 'relative',
        maxHeight: entireScreenHeight - 100,
        width: entireScreenWidth,
        backgroundColor: COLORS.white,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        alignItems:'center'
    },
    iconWrapper: {
        elevation: 3,
        backgroundColor: COLORS.white,
        width: 34,
        height: 34,
        borderRadius: 17,
        alignSelf: 'flex-end',
        marginRight: 30,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 5,
    },
    filterHeaderText: {
        color: COLORS.black,
        fontSize: '18rem',
        fontWeight: '700',
    }
});

export default style;
