import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from '../../utilities/colors';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const styles = EStyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  containerRound: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius :20
  },
  scrollViewContainer:{
    flex: 1,
  },
  card: {
    marginTop : 20,
    marginHorizontal:15,
    borderRadius: 30,
    backgroundColor: COLORS.white,  
    padding : 8,
    marginBottom : 10,
    justifyContent:'center',
    alignItems:'center'
  },
  launcherNameText: {
    color: COLORS.black,
    fontSize: '30rem',
    fontWeight: '700',
    flex: 1,
    textAlign:'center'
  },
  iconView:{
    width : '250rem',
    height : '250rem',
    marginTop: '20rem'
  },
  loadingContainer:{
    justifyContent: 'center',
    alignItems: 'center', 
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
    textAlign: 'center',
    flex: 1,
    marginTop: '15rem'
  },
  infoTagsContainer: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginTop: '15rem'
  },
});

export default styles;