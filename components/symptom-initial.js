/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
// import { connect } from 'react-redux';
// import { CheckBox } from 'react-native-elements';
// import { logSymptoms } from '../services/api';

const SymptomInitial = (props) => {
//   console.log('props');
//   console.log(props);
//   console.log('navigation');
//   console.log(props.navigation);
//   const { backToTab } = props.navigation.state.params;
  //   const { backToTab } = props.navigation.state.getParam('backToTab');
//   console.log(backToTab);
//   console.log(props.navigation.getParam('backToTab'));
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
