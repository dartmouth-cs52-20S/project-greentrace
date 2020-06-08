import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Information from '../components/information';

const Stack = createStackNavigator();

const InfoTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Information"
        component={Information}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default InfoTab;
