import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
// import { connect } from 'react-redux';

const AccountInformation = (props) => {
//   const { userId } = props.userId;
  const userId = 'USERID';
  const warningMessage = 'We don’t store any personally-identifying information, so if you lose this token, you’ll have to sign up again.';
  return (
    <View style={styles.container}>
      <Text>Account Information</Text>
      <Text>
        User ID:
        {' '}
        {userId}
      </Text>
      <Text>{warningMessage}</Text>
      <TouchableOpacity><Text>Change Password</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => { props.logout(); }}><Text>LOG OUT</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: 400,
  },
});

// const mapStateToProps = (reduxState) => {
//   return {
//     userId: reduxState.auth.id,
//   };
// };

// export default connect(mapStateToProps, null)(AlertsDetail);
export default AccountInformation;
