import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import getDateUSFormatString from '../lib/date-lib';


const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
    minWidth: 300,
  },
});

const PrivacyInformation = (props) => {
//   render() {
  const headerText = 'Privacy';
  const paragraph1 = 'In order to contact trace, this app collects information about your data and symptoms for COVID-19.';
  const paragraph2 = 'While we collect location data, we do not store your email or any other personally-identifying information. This data is only used for the purpose of contact tracing and for your wellbeing.';
  return (
    <View style={styles.modalView}>
      <Text>{headerText}</Text>
      <Text>{paragraph1}</Text>
      <Text>{paragraph2}</Text>
    </View>
  );
//   }
};

export default PrivacyInformation;
