/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Modal from 'react-native-modal';
import {
  Text, View, TouchableOpacity, AsyncStorage, Clipboard, Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import PasswordChange from './password-modal';
import styles from '../styles/info';


class AccountInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordModal: false,
      id: '',
      phraseToken: '',
    };
    this.fetchUser();
  }

  fetchUser = () => {
    AsyncStorage.getItem('currUser')
      .then((result) => {
        if (result !== null) {
          const user = JSON.parse(result);
          const { id, phraseToken } = user;
          this.setState({ id, phraseToken });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  closePasswordModal = () => {
    this.setState({ passwordModal: false });
  }

  copyToken = async () => {
    const { phraseToken } = this.state;
    if (phraseToken) {
      await Clipboard.setString(phraseToken);
      Alert.alert(`Copied "${phraseToken}" to Clipboard`);
    }
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
          <PasswordChange closeModal={this.closePasswordModal} id={this.state.id} phraseToken={this.state.phraseToken} logout={this.props.logout} />
        </Modal>
      );
    } else {
      return null;
    }
  }

  render() {
    const warningMessage = 'Please note, you will need to use this phrase token to log in, so we suggest that you store it somewhere secure.';
    return (
      <View style={styles.accountInfoContainer}>
        <Text style={styles.sectionHeaderCard}>Account Information</Text>
        <Text style={styles.userToken}>
          User Token:
          {' '}
          {this.state.phraseToken}
        </Text>
        <TouchableOpacity onPress={() => { this.copyToken(); }}>
          <Ionicons name="copy" size="26" />
        </TouchableOpacity>
        <Text style={styles.paragraph}>{warningMessage}</Text>
        <TouchableOpacity style={styles.actionButton} onPress={() => { this.setState({ passwordModal: true }); }}><Text style={styles.actionButtonText}>Change Password</Text></TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => { this.props.logout(); }}><Text style={styles.actionButtonText}>Log Out</Text></TouchableOpacity>
        {this.renderPasswordModal()}
      </View>
    );
  }
}

export default AccountInformation;
