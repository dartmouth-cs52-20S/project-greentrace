/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
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
    };
  }

  submit() {
    const { email, password, passwordConfirm } = this.state;
    // eslint-disable-next-line no-shadow
    const { signup } = this.props;
    if (email !== '' && password !== '' && password === passwordConfirm) {
      signup({ email, password });
      this.props.navigation.navigate('Tab Bar');
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
            <TextInput style={styles.textInput} onChangeText={(text) => { this.setState({ password: text }); }} value={password} placeholder="password" />
          </View>
          <View>
            <Text style={styles.fieldTitle}>Confirm Password</Text>
            <TextInput style={styles.textInput} onChangeText={(text) => { this.setState({ passwordConfirm: text }); }} value={passwordConfirm} placeholder="password" />
          </View>
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
