/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, // Dimensions, // AsyncStorage,
} from 'react-native';
import { signin } from '../services/api';
import MapBackground from './map-background';
import styles from '../styles/signinup';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: false,
    };
  }

  submit() {
    const { email, password } = this.state;
    // eslint-disable-next-line no-shadow
    if (email !== '' && password !== '') {
      signin({ email, password }).then((response) => {
        if (response === 'success') {
          this.props.navigation.navigate('Tab Bar');
          this.setState({ error: false });
        } else this.setState({ error: true });
      });
    }
  }

  renderError() {
    const { error } = this.state;
    if (!error) {
      return null;
    } else {
      return (
        <View style={styles.errorSection}>
          <Text style={styles.errorText}>Incorrect username or password. Please try again or sign up.</Text>
        </View>
      );
    }
  }

  render() {
    const { email, password } = this.state;
    return (
      <MapBackground>
        <View style={styles.container}>
          <Text style={styles.pageTitle}>GreenTrace</Text>
          <View style={styles.field}>
            <Text style={styles.fieldTitle}>Token</Text>
            <TextInput style={styles.textInput} onChangeText={(text) => { this.setState({ email: text }); }} value={email} placeholder="token" />
          </View>
          <View>
            <Text style={styles.fieldTitle}>Password</Text>
            <TextInput style={styles.textInput} onChangeText={(text) => { this.setState({ password: text }); }} value={password} placeholder="password" />
          </View>
          {this.renderError()}
          <TouchableOpacity onPress={() => { this.submit(); }} style={styles.button}>
            <Text>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Sign Up'); }} style={styles.redirectButton}>
            <Text style={styles.redirectButtonText}>New user? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </MapBackground>
    );
  }
}

export default SignIn;
