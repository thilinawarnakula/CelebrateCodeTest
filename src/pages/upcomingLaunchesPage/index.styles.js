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
    mainContainer: {
        flex : 1,
    },
    listView : {
        marginTop : '10rem',
        backgroundColor : COLORS.transparent,
    },
    loadingContainer:{
        justifyContent: 'center',
        alignItems: 'center', 
    },
    loadingView :{
        width : '60rem',
        height : '22rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listViewContainer:{
        padding: '20rem',
        shadowOpacity: .3,
    },
});

export default style;
