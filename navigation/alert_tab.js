import React from 'react';
// import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import Ionicons from 'react-native-vector-icons/FontAwesome';

import Alerts from '../components/alerts';
import AlertsDetail from '../components/alerts-detail';

const Stack = createStackNavigator();

const AlertTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Alerts"
        component={Alerts}
        options={Alerts.navigationOptions}
      />
      <Stack.Screen
        name="AlertsDetail"
        component={AlertsDetail}
        options={{
          title: 'Alerts',
          headerBackground: 'black',
        }}
      />
    </Stack.Navigator>
  );
};

export default AlertTab;
