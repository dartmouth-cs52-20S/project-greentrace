import React from 'react';
import {
  View, Text, StyleSheet, Button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'center',
    padding: 30,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    width: 300,
    maxHeight: 400,
  },
  fieldTitle: {
    fontSize: 15,
    textAlign: 'left',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    marginTop: 15,
  },
});

const SignupModal = (props) => {
  const { closeModal } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Greentrace</Text>
      <Text style={styles.fieldTitle}>In order to contact trace, this app collects information about your data and symptoms for COVID-19. While we collect location data, we do not store your email or any other personally-identifying information. This data is only used for the purpose of contact tracing and for your wellbeing.</Text>
      <Button
        buttonStyle={styles.button}
        onPress={closeModal}
        title="Continue"
        accessibilityLabel="Continue"
      />
    </View>
  );
};

export default SignupModal;
