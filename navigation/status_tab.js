import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Status from '../components/status';

const Stack = createStackNavigator();

const StatusTab = () => {
  return (
    <Stack.Navigator
      drawerPosition="right"
    >
      <Stack.Screen
        name="Status"
        component={Status}
        options={({ navigation, route }) => ({
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
        })}
      />
    </Stack.Navigator>
  );
};

export default StatusTab;
