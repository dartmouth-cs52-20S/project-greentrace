import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'space-between',
    marginVertical: hp('10%'),
    marginHorizontal: wp('10%'),
    alignItems: 'center',
    // backgroundColor: 'white',
    alignSelf: 'center',
    maxWidth: wp('90%'),
    maxHeight: hp('60%'),
  },
  dropdown: {
    width: wp('66.666666666666%'),
    backgroundColor: 'white',
    padding: 3,
  },
  dropdownContainer: {
    backgroundColor: 'white',
    height: 33,
    borderWidth: hp('0.1%'),
  },
  fieldTitle: {
    textAlign: 'center',
    color: 'black',
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
    backgroundColor: 'white',
    marginBottom: hp('5%'),
    padding: hp('2%'),
    borderRadius: 8,
    // flexDirection: 'column',
    // alignItems: 'center',
    // backgroundColor: 'white',
  },
  actionButton: {
    backgroundColor: 'white',
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('2%'),
    borderRadius: 10,
    marginTop: hp('3%'),
    marginHorizontal: wp('2%'),
    width: wp('70%'),
    // borderWidth: wp('0.3%'),
  },
  actionButtonCheckSymptom: {
    backgroundColor: 'white',
    paddingHorizontal: wp('2%'),
    paddingVertical: hp('2%'),
    borderRadius: 10,
    marginTop: hp('3%'),
    marginBottom: hp('1%'),
    marginHorizontal: wp('2%'),
    width: wp('70%'),
    // borderWidth: wp('0.3%'),
    borderColor: 'black',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  buttonTextCheckSymptoms: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
