import {
  StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RiskStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: hp('20%'),
    marginTop: hp('5%'),
    borderRadius: 10,
    marginHorizontal: hp('5%'),
    backgroundColor: 'white',
    paddingHorizontal: wp('20%'),
    paddingVertical: hp('5%'),
  },
  statistic: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: wp('70%'),
    alignSelf: 'center',
    paddingLeft: wp('9%'),
    // justifyContent: 'center',
    alignItems: 'center',
  },
  statNumber: {
    fontSize: wp('10%'),
    color: 'black',
    textAlign: 'right',
    paddingRight: wp('8%'),
  },
  statLabel: {
    fontSize: wp('5.33333333%'),
    color: 'black',
    textAlign: 'left',
    maxWidth: wp('50%'),
  },
  statContainer: {
    height: hp('50%'),
    alignSelf: 'center',
    paddingVertical: hp('2%'),
  },
  riskDialContainer: {
    paddingHorizontal: wp('10%'),
    paddingVertical: hp('5%'),
    paddingBottom: hp('10%'),
  },
  dialLabel: {
    textAlign: 'center',
  },
});

export default RiskStyles;
