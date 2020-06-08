import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/info';
// import getDateUSFormatString from '../lib/date-lib';

const PrivacyInformation = (props) => {
//   render() {
  const headerText = 'Privacy';
  const paragraph1 = 'In order to contact trace, this app collects information about your data and symptoms for COVID-19.';
  const paragraph2 = 'While we collect location data, we do not store your email or any other personally-identifying information. This data is only used for the purpose of contact tracing and for your wellbeing.';
  return (
    <View style={styles.privacyContainer}>
      <Text style={styles.sectionHeaderMap}>{headerText}</Text>
      <View style={styles.policyContainer}>
        <Text style={styles.privacyParagraph}>{paragraph1}</Text>
        <Text style={styles.privacyParagraph}>{paragraph2}</Text>
      </View>
    </View>
  );
//   }
};

export default PrivacyInformation;
