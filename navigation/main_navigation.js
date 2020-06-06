import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabBar from './main_tab_bar';
import SymptomStack from './symptom_stack';
import SignIn from '../components/signin';
import SignUp from '../components/signup';
// import Test from '../components/test';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Test"
          component={Test}
        /> */}
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
        />
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
