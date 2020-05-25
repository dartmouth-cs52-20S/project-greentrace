import React from 'react';
// import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/FontAwesome';

import Alerts from '../components/alerts';
import AlertsDetail from '../components/alerts_detail';

const Stack = createStackNavigator();

const AlertTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Alerts"
        component={Alerts}
        options={{
          title: 'Alerts',
          headerStyle: {
            backgroundColor: 'green',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="AlertsDetail"
        component={AlertsDetail}
        options={{
          title: 'Alerts',
        }}
      />
    </Stack.Navigator>
  );
};

export default AlertTab;
