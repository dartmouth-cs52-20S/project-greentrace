import React from 'react';
// import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/FontAwesome';

import Status from '../components/status';

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const AlertTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Status"
        component={Status}
        options={{
          title: 'Status',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
        }}
      />
      {/* <Stack.Screen
        name="AlertsDetail"
        component={AlertsDetail}
        options={{
          title: 'Alerts',
        }}
      /> */}
    </Stack.Navigator>
  );
};

export default AlertTab;
