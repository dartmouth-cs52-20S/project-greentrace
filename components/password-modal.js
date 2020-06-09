/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import { changePassword } from '../services/api';
import styles from '../styles/usermodal';

class PasswordChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currPass: '',
      newPass: '',
      confirmPass: '',
      error: false,
    };
  }

  submit = () => {
    const { currPass, newPass, confirmPass } = this.state;
    if (newPass !== confirmPass || newPass === '') {
      this.setState({ error: true });
    } else {
      changePassword({ id: this.props.id, phraseToken: this.props.phraseToken, password: currPass, newPass })
        .then((result) => {
          if (result === 'success') {
            this.props.closeModal();
            this.props.logout();
          } else {
            this.setState({ error: true });
          }
        });
    }
  }

  rendererror = () => {
    if (this.state.error) {
      return (
        <View>
          <Text style={styles.error}>Current Passowrd is incorrect or new passwords do not match!</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    const { currPass, newPass, confirmPass } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Change Password</Text>
        {this.rendererror()}
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Current Password</Text>
          <TextInput secureTextEntry style={styles.textInput} onChangeText={(text) => { this.setState({ currPass: text }); }} value={currPass} placeholder="Current Password" />
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>New Password</Text>
          <TextInput secureTextEntry style={styles.textInput} onChangeText={(text) => { this.setState({ newPass: text }); }} value={newPass} placeholder="New Password" />
        </View>
        <View style={styles.field}>
          <Text style={styles.fieldTitle}>Confirm Password</Text>
          <TextInput secureTextEntry style={styles.textInput} onChangeText={(text) => { this.setState({ confirmPass: text }); }} value={confirmPass} placeholder="Confirm Password" />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => { this.submit(); }}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PasswordChange;
