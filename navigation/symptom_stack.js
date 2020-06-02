import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SymptomCheck from '../components/symptom-check';
import SymptomInitial from '../components/symptom-initial';

const Stack = createStackNavigator();

const SymptomStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Check In"
        component={SymptomInitial}
      />
      <Stack.Screen
        name="Symptom Check"
        component={SymptomCheck}
      />
    </Stack.Navigator>
  );
};

export default SymptomStack;
