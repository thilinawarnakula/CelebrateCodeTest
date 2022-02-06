import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    restFilterContiner:{
        marginTop : '10rem',
        borderRadius :'10rem',
        width: entireScreenWidth / 3,
        height : '30rem',
        opacity : 0.78,
        alignSelf: 'flex-end',
        marginRight : '10rem'  
    },
    buttonTextStyle:{
        fontSize : '14rem'
    }
});

export default style;
