/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, // Dimensions, // AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { signin } from '../services/api';
import MapBackground from './map-background';
import styles from '../styles/signinup';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  submit() {
    const { email, password } = this.state;
    // eslint-disable-next-line no-shadow
    const { signin } = this.props;
    if (email !== '' && password !== '') {
      signin({ email, password });
      this.props.navigation.navigate('Tab Bar');
    }
  }

  render() {
    const { email, password } = this.state;
    // console.log('dimensions', Dimensions.get('window').width, Dimensions.get('window').height);
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
          <TouchableOpacity onPress={() => { this.submit(); }} style={styles.button}>
            <Text>Log In</Text>
          </TouchableOpacity>
          {/* <Button onPress={() => { this.submit(); }} style={styles.button} color="white" title="Log In" /> */}
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Sign Up'); }} style={styles.redirectButton}>
            <Text style={styles.redirectButtonText}>New user? Sign Up</Text>
          </TouchableOpacity>
        </View>
      </MapBackground>

    );
  }
}

export default connect(null, { signin })(SignIn);
