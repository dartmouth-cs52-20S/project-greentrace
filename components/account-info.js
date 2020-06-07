/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Modal from 'react-native-modal';
import {
  StyleSheet, Text, View, TouchableOpacity, AsyncStorage,
} from 'react-native';
// import { connect } from 'react-redux';
import PasswordChange from './password-modal';


class AccountInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordModal: false,
      token: '',
      id: '',
      email: '',
    };
    this.fetchToken();
    this.fetchUser();
  }

  fetchUser = () => {
    AsyncStorage.getItem('currUser')
      .then((result) => {
        if (result !== null) {
          const user = JSON.parse(result);
          const { id, email } = user;
          this.setState({ id, email });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  fetchToken = () => {
    AsyncStorage.getItem('token')
      .then((result) => {
        if (result !== null) {
          const token = JSON.parse(result);
          this.setState({ token });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  closePasswordModal = () => {
    this.setState({ passwordModal: false });
  }

  renderPasswordModal() {
    const { passwordModal } = this.state;
    if (passwordModal) {
      return (
        <Modal
          isVisible={passwordModal}
          onBackdropPress={this.closePasswordModal} // Android back press
          onSwipeComplete={this.closePasswordModal} // Swipe to discard
          animationIn="slideInRight" // Has others, we want slide in from the right
          animationOut="slideOutRight" // When discarding the drawer
          swipeDirection="right" // Discard the drawer with swipe to right
          useNativeDriver // Faster animation
          hideModalContentWhileAnimating // Better performance, try with/without
          propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
        >
          <PasswordChange closeModal={this.closePasswordModal} id={this.state.id} email={this.state.email} logout={this.props.logout} />
        </Modal>
      );
    } else {
      return null;
    }
  }

  render() {
    const warningMessage = 'We don’t store any personally-identifying information, so if you lose this token, you’ll have to sign up again.';
    return (
      <View style={styles.container}>
        <Text>Account Information</Text>
        <Text>
          User Token:
          {' '}
          {this.state.token}
        </Text>
        <Text>{warningMessage}</Text>
        <TouchableOpacity onPress={() => { this.setState({ passwordModal: true }); }}><Text>Change Password</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => { this.props.logout(); }}><Text>LOG OUT</Text></TouchableOpacity>
        {this.renderPasswordModal()}
      </View>
    );
  }
}

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
