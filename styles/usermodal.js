import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('5%'),
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    width: wp('80%'),
    maxHeight: hp('64%'),
    alignItems: 'center',
  },
  information: {
    fontSize: hp('4%'),
    textAlign: 'center',
  },
  title: {
    fontSize: wp('5%'),
    textAlign: 'center',
    marginVertical: hp('3%'),
  },
  button: {
    marginTop: hp('4%'),
    alignSelf: 'center',
    backgroundColor: 'green',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2%'),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: wp('5%'),
    color: 'white',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: wp('66%'),
    height: hp('4.5%'),
    padding: hp('1%'),
    marginTop: hp('2.25%'),
  },
  field: {
    padding: hp('1%'),
  },
  fieldTitle: {
    fontSize: wp('4%'),
    textAlign: 'left',
  },
});

export default styles;
