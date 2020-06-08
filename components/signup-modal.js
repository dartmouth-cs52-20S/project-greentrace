import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import styles from '../styles/signinupmodal';

const SignupModal = (props) => {
  const { closeModal } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Greentrace</Text>
      <Text style={styles.information}>In order to contact trace, this app collects information about your data and symptoms for COVID-19. While we collect location data, we do not store your email or any other personally-identifying information. This data is only used for the purpose of contact tracing and for your wellbeing. Check your inbox for your anonymous login token.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={closeModal}>
          Continue
        </Text>
      </TouchableOpacity>
      {/* <Button
        buttonStyle={styles.button}
        onPress={closeModal}
        title="Continue"
        accessibilityLabel="Continue"
      /> */}
    </View>
  );
};

export default SignupModal;
