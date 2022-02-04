import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {COLORS} from '../../utilities/colors'; 

const marginBottomItem = 20;
const paddingItem = 10;

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    item: {
        marginBottom: marginBottomItem,
        borderRadius: 0,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.black,
        shadowOffset: {
          width: 0,
          height: 20
        },
        shadowRadius: 30,
        padding: paddingItem,
        elevation: 10,
      },
      launcherDetalisContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      launcherDescriptionContainer: {
        marginVertical: '10rem',
        borderStyle: 'dotted',
        borderWidth: 2
      },
      launcherDiseasesContainer: { 
        flexDirection: 'row', 
        flexWrap: 'wrap' 
      },
      launcherNameText: {
        color: COLORS.primary,
        fontSize: '18rem',
        fontWeight: '700',
        textAlign: 'left',
        flex: 1,
        marginLeft: '3rem'
      },
      launcherDateText: {
        color: COLORS.black,
        fontSize: '14rem',
        textAlign: 'right',
        flex: 1
      },
      launcherDescriptionText: {
        color: COLORS.black,
        fontSize: '16rem',
        textAlign: 'left',
        flex: 1
      },
      launcherNoDescriptionText: {
        color: COLORS.black,
        fontSize: '16rem',
        textAlign: 'center',
        flex: 1
      },
      
});

export default style;
