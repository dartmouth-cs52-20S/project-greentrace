import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  toggle: {
    flexDirection: 'row',
    width: wp('90%'),
    height: hp('10%'),
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    marginVertical: 30,
  },
  toggleItemText: {
    color: 'white',
    fontSize: wp('5%'),
  },
  selectedToggleText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontSize: wp('5%'),
  },
  accountInfoContainer: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 400,
  },
  sectionHeader: {

  },
});

export default styles;
