import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Risk from '../components/risk';
import RiskInfo from '../components/risk-info';

const Stack = createStackNavigator();

const RiskTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Risk"
        component={Risk}
        options={({ navigation, route }) => ({
          title: 'Your Risk',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
          // headerRight: () => {
          //   return Risk.HeaderRight(navigation);
          // },
        })}
      />
      <Stack.Screen
        name="RiskInfo"
        component={RiskInfo}
        options={{
          title: 'Risk Info',
        }}
      />
    </Stack.Navigator>
  );
};

export default RiskTab;
