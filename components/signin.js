/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, Button, // AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { signin } from '../services/api';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      password: '',
    };
  }

  submit() {
    const { token, password } = this.state;
    // eslint-disable-next-line no-shadow
    const { signin } = this.props;
    if (token !== '' && password !== '') {
      signin({ token, password });
      this.props.navigation.navigate('Tab Bar');
    }
  }

  render() {
    const { token, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>GreenTrace</Text>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Email</Text>
          <TextInput style={styles.textInput} onChangeText={(text) => { this.setState({ token: text }); }} value={token} placeholder="token" />
        </View>
        <View>
          <Text style={styles.fieldTitle}>Password</Text>
          <TextInput style={styles.textInput} onChangeText={(text) => { this.setState({ password: text }); }} value={password} placeholder="password" />
        </View>
        <Button onPress={() => { this.submit(); }} style={styles.button} color="white" title="Log In" />
        <Button onPress={() => { this.props.navigation.navigate('Sign Up'); }} color="white" title="New user? Sign Up" />
        {/* <Button onPress={() => { AsyncStorage.clear(); }} style={styles.button} color="white" title="Sign Out" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: 'salmon',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: 250,
    height: 30,
    padding: 3,
    marginTop: 15,
    backgroundColor: 'white',
  },
  field: {
    padding: 3,
  },
  fieldTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
  },
  pageTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 40,
  },
  button: {
    backgroundColor: 'white',
  },
});

export default connect(null, { signin })(SignIn);
