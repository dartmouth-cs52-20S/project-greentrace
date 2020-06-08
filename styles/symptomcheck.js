import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: hp('80%'),
    width: wp('80%'),
    alignSelf: 'center',
  },
  button: {
    marginTop: 15,
    alignSelf: 'center',
    backgroundColor: '#28AC45',
    paddingHorizontal: wp('3%'),
    paddingVertical: hp('2%'),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: wp('5%'),
    color: 'white',
  },
});

export default styles;
