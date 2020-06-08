import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    marginHorizontal: wp('10%'),
    alignItems: 'center',
    // backgroundColor: 'white',
    alignSelf: 'center',
    maxWidth: wp('90%'),
    maxHeight: hp('70%'),
  },
  dropdown: {
    width: 250,
    backgroundColor: 'white',
  },
  dropdownContainer: {
    backgroundColor: 'white',
  },
  fieldTitle: {
    textAlign: 'center',
    color: 'white',
    fontSize: wp('6%'),
    fontWeight: '500',
  },
  field: {
    flex: 1,
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'stretch',
    width: wp('70%'),
    maxHeight: hp('40%'),
    // flexDirection: 'column',
    // alignItems: 'center',
    // backgroundColor: 'white',
  },
  actionButton: {
    backgroundColor: 'white',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2%'),
    borderRadius: 10,
  },
});

export default styles;
