import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/info';

const PrivacyInformation = (props) => {
  const headerText = 'Privacy';
  const paragraph1 = 'In order to run our contact tracing algorithms, this app collects both your location data and the information that you provide on the Status page (COVID-19 status, testing status, and symptoms). With this said, here at GreenTrace we believe that privacy is paramount. For this reason, we have taken the following measures to ensure the security of your data:';
  const paragraph2 = 'i. We do not store any of your personal information in our database.';
  const paragraph3 = 'ii. We do not alert other users which individual has tested positive for COVID-19';
  const paragraph4 = 'iii. We have made sure not to associate any of your data with identifying information';
  return (
    <View style={styles.privacyContainer}>
      <Text style={styles.sectionHeaderCard}>{headerText}</Text>
      <View style={styles.policyContainer}>
        <Text style={styles.privacyParagraph}>{paragraph1}</Text>
        <Text style={styles.privacyParagraph}>{paragraph2}</Text>
        <Text style={styles.privacyParagraph}>{paragraph3}</Text>
        <Text style={styles.privacyParagraph}>{paragraph4}</Text>
      </View>
    </View>
  );
};

export default PrivacyInformation;
