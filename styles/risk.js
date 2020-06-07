import {
  StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp /* heightPercentageToDP as hp */ } from 'react-native-responsive-screen';

const RiskStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statistic: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('70%'),
  },
  statNumber: {
    fontSize: wp('8%'),
    color: 'white',
    textAlign: 'right',
  },
  statLabel: {
    fontSize: wp('5.33333333%'),
    color: 'white',
    textAlign: 'left',
  },
});

export default RiskStyles;
