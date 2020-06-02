/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
// import { connect } from 'react-redux';
// import { CheckBox } from 'react-native-elements';
// import { logSymptoms } from '../services/api';

const SymptomInitial = (props) => {
  return (
    <View>
      <Text>How are you feeling today?</Text>
      <TouchableOpacity onPress={() => { props.navigation.navigate('Symptom Check'); }}>
        <Text>Healthy!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { props.navigation.navigate('Symptom Check'); }}>
        <Text>Not so hot</Text>
      </TouchableOpacity>
    </View>
  );
};

// const mapStateToProps = (reduxState) => ({
//   symptoms: reduxState.symptoms.symptoms,
// });

// export default connect(mapStateToProps, null)(SymptomCheck);

export default SymptomInitial;
