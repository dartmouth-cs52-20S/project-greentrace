import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HeatMap from '../components/HeatMap';

const Stack = createStackNavigator();

const MapTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Map"
        component={HeatMap}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MapTab;
