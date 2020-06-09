import {
  StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SignInUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: hp('15%'),
    paddingBottom: hp('15%'),
  },
  halfToken: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: wp('32%'),
    height: hp('4.5%'),
    padding: hp('1%'),
    marginTop: hp('2.25%'),
    backgroundColor: 'white',
  },
  halfTokenConnect: {
    fontSize: wp('10%'),
    fontWeight: '900',
    alignSelf: 'center',
    color: 'white',
    paddingVertical: hp('1%'),
    marginRight: hp('0.2%'),
    marginLeft: hp('0.2%'),
  },
  tokenHalves: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: hp('4%'),
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: wp('69%'),
    height: hp('4.5%'),
    padding: hp('1%'),
    marginTop: hp('2.25%'),
    backgroundColor: 'white',
  },
  field: {
    padding: hp('1%'),
  },
  fieldTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: wp('5.33333333%'),
  },
  pageTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: wp('12%'),
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    borderRadius: 5,
  },
  redirectButton: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  redirectButtonText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: '900',
  },
  errorText: {
    color: 'white',
    width: wp('66%'),
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default SignInUpStyles;
