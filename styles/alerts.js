import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp('20%'),
    marginTop: hp('5%'),
    borderRadius: 10,
    marginHorizontal: hp('5%'),
    backgroundColor: 'white',
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('10%'),
  },
  information: {
    textAlign: 'center',
  },
  backButton: {
    fontSize: hp('4%'),
    alignSelf: 'flex-start',
  },
});

export default styles;
