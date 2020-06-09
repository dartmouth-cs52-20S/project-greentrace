import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Alerts from '../components/alerts';
import AlertsDetail from '../components/alerts-detail';

const Stack = createStackNavigator();

const AlertTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Alerts"
        component={Alerts}
        options={{
          title: 'COVID-Positive Contacts',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
      <Stack.Screen
        name="AlertsDetail"
        component={AlertsDetail}
        options={{
          title: 'COVID-Positive Contact',
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'black',
          },
          headerLeft: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default AlertTab;
