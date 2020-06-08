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
    width: 300,
    maxHeight: 400,
  },
  information: {
    fontSize: 15,
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    marginTop: 15,
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
});

export default styles;
