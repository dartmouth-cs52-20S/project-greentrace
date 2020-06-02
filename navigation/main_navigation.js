import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabBar from './main_tab_bar';
import SymptomStack from './symptom_stack';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab Bar"
          component={MainTabBar}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Symptom Check"
          component={SymptomStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default MainNavigation;
