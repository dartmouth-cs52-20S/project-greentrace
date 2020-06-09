/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';

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

export default SymptomInitial;
