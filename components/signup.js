/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import SignUpModal from './signup-modal';
import { signup } from '../services/api';
import MapBackground from './map-background';
import styles from '../styles/signinup';


class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      error: false,
      infoModal: false,
    };
  }

  closeModal = () => {
    const { email, password } = this.state;
    this.props.signup({ email, password });
    this.props.navigation.navigate('Tab Bar');
    this.setState({
      infoModal: false,
    });
  }

  // eslint-disable-next-line react/sort-comp
  renderError() {
    if (this.state.error) {
      return (
        <Text style={styles.errorText}>Invalid password or passwords do not match!</Text>
      );
    } else {
      return null;
    }
  }

  renderModal = () => {
    const { infoModal } = this.state;
    if (infoModal) {
      return (
        <Modal
          isVisible={infoModal}
          onBackdropPres={this.closeModal} // Android back press
          onSwipeComplete={this.closeModal} // Swipe to discard
          animationIn="slideInRight" // Has others, we want slide in from the right
          animationOut="slideOutRight" // When discarding the drawer
          swipeDirection="right" // Discard the drawer with swipe to right
          useNativeDriver // Faster animation
          hideModalContentWhileAnimating // Better performance, try with/without
          propagateSwipe // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
        >
          <SignUpModal closeModal={this.closeModal} id={this.state.id} phraseToken={this.state.phraseToken} logout={this.props.logout} />
        </Modal>
      );
    } else {
      return null;
    }
  }

  submit() {
    const { email, password, passwordConfirm } = this.state;
    // eslint-disable-next-line no-shadow
    if (email !== '' && password !== '' && password === passwordConfirm) {
      this.setState({ infoModal: true });
    } else {
      this.setState({ error: true });
    }
  }


  render() {
    const { email, password, passwordConfirm } = this.state;
    return (
      <MapBackground>
        <View style={styles.container}>
          <Text style={styles.pageTitle}>GreenTrace</Text>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Email</Text>
            <TextInput style={styles.textInput} onChangeText={(text) => { this.setState({ email: text }); }} value={email} placeholder="email" />
          </View>
          <View>
            <Text style={styles.fieldTitle}>Password</Text>
            <TextInput style={styles.textInput} onChangeText={(text) => { this.setState({ password: text }); }} secureTextEntry value={password} placeholder="password" />
          </View>
          <View>
            <Text style={styles.fieldTitle}>Confirm Password</Text>
            <TextInput style={styles.textInput} onChangeText={(text) => { this.setState({ passwordConfirm: text }); }} secureTextEntry value={passwordConfirm} placeholder="password" />
          </View>
          {this.renderError()}
          {this.renderModal()}
          <TouchableOpacity onPress={() => { this.submit(); }} style={styles.button}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Sign In'); }} style={styles.redirectButton}>
            <Text style={styles.redirectButtonText}>Already have an account? Log In</Text>
          </TouchableOpacity>
        </View>
      </MapBackground>
    );
  }
}

export default connect(null, { signup })(SignUp);
