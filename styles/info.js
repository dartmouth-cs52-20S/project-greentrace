import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  toggle: {
    flexDirection: 'row',
    width: wp('90%'),
    height: hp('8%'),
    // height: hp('10%'),
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: 30,
    // backgroundColor: 'black',
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
    backgroundColor: 'white',
    alignSelf: 'center',
    marginHorizontal: wp('10%'),
    marginBottom: hp('20%'),
    height: hp('10%'),
    paddingBottom: hp('5%'),
    paddingTop: hp('2%'),
    paddingHorizontal: wp('10%'),
    borderRadius: 10,
  },
  substanceContainer: {
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginHorizontal: wp('10%'),
    marginBottom: hp('20%'),
    height: hp('10%'),
    // paddingVertical: hp('10%'),
    paddingHorizontal: wp('10%'),
  },
  sectionHeader: {
    fontSize: wp('6%'),
  },
  paragraph: {
    textAlign: 'center',
  },
  userToken: {
    textAlign: 'center',
    fontSize: wp('4%'),
  },
  actionButton: {
    backgroundColor: '#28AC45',
    borderRadius: 4,
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('2%'),
  },
  actionButtonText: {
    color: 'white',
    fontSize: wp('4%'),
  },
});

export default styles;
