/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity, // Dimensions, // AsyncStorage,
} from 'react-native';
import { connect } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { signin } from '../services/api';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phraseToken: '',
      password: '',
    };
  }

  submit() {
    const { phraseToken, password } = this.state;
    // eslint-disable-next-line no-shadow
    const { signin } = this.props;
    if (phraseToken !== '' && password !== '') {
      signin({ phraseToken, password });
      this.props.navigation.navigate('Tab Bar');
    }
  }

  render() {
    const { phraseToken, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>GreenTrace</Text>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Your Token</Text>
          <TextInput style={styles.textInput} onChangeText={(text) => { this.setState({ phraseToken: text }); }} value={phraseToken} placeholder="Your token" />
        </View>
        <View>
          <Text style={styles.fieldTitle}>Password</Text>
          <TextInput style={styles.textInput} onChangeText={(text) => { this.setState({ password: text }); }} value={password} placeholder="Password" />
        </View>
        <TouchableOpacity onPress={() => { this.submit(); }} style={styles.button}>
          <Text>Log In</Text>
        </TouchableOpacity>
        {/* <Button onPress={() => { this.submit(); }} style={styles.button} color="white" title="Log In" /> */}
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Sign Up'); }} style={styles.redirectButton}>
          <Text style={styles.redirectButtonText}>New user? Sign Up</Text>
        </TouchableOpacity>
        {/* <Button onPress={() => { this.props.navigation.navigate('Sign Up'); }} color="white" title="New user? Sign Up" /> */}
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
    paddingTop: hp('15%'),
    paddingBottom: hp('15%'),
    backgroundColor: 'salmon',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: wp('66%'),
    height: hp('4.5%'),
    padding: hp('1%'),
    marginTop: hp('2.25%'),
    backgroundColor: 'white',
  },
  field: {
    padding: hp('1%'),
  },
  fieldTitle: {
    color: 'white',
    fontWeight: '700',
    fontSize: wp('5.33333333%'),
  },
  pageTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: wp('12%'),
  },
  button: {
    backgroundColor: 'white',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    borderRadius: 5,
  },
  redirectButton: {
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
  },
  redirectButtonText: {
    color: 'white',
    fontSize: wp('4%'),
  },
});

export default connect(null, { signin })(SignIn);
