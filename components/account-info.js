import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
// import { connect } from 'react-redux';
import Toggle from './drawer-toggle';

const AccountInformation = (props) => {
//   const { userId } = props.userId;
  const { navigation } = props;
  const userId = 'USERID';
  const warningMessage = 'We don’t store any personally-identifying information, so if you lose this token, you’ll have to sign up again.';
  return (
    <View style={styles.container}>
      <Toggle navigation={navigation} />
      <Text>Account Information</Text>
      <Text>
        User ID:
        {' '}
        {userId}
      </Text>
      <Text>{warningMessage}</Text>
      <TouchableOpacity><Text>Change Password</Text></TouchableOpacity>
      <TouchableOpacity><Text>LOG OUT</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

// const mapStateToProps = (reduxState) => {
//   return {
//     userId: reduxState.auth.id,
//   };
// };

// export default connect(mapStateToProps, null)(AlertsDetail);
export default AccountInformation;
