/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  View, Text, TextInput, StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from 'react-native-elements';
import { changePassword } from '../services/api';

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
        <Button
          buttonStyle={styles.button}
          onPress={this.submit}
          title="Submit"
          accessibilityLabel="Submit Password Change"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    fontSize: 10,
    color: 'red',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    width: wp('66%'),
    height: hp('4.5%'),
    padding: hp('1%'),
    marginTop: hp('2.25%'),
  },
  container: {
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingTop: hp('2%'),
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: wp('80%'),
    maxHeight: hp('55%'),
  },
  field: {
    padding: hp('1%'),
  },
  fieldTitle: {
    fontSize: 15,
    textAlign: 'left',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: hp('2%'),
  },
  button: {
    marginTop: hp('2%'),
  },
});

// const mapStateToProps = (reduxState) => ({
//   symptoms: reduxState.symptoms.symptoms,
// });

// export default connect(mapStateToProps, null)(SymptomCheck);

export default PasswordChange;
