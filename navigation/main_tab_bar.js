import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Map from '../components/map';
import RiskTab from './risk_tab';
import AlertTab from './alert_tab';
import Status from '../components/status';
import SignIn from '../components/signin';
import SignUp from '../components/signup';


const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Map"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName; // iosName, androidName;
            if (route.name === 'Map') {
              iconName = 'map';
              // iosName = 'ios-map';
              // androidName = 'md-map';
            }
            if (route.name === 'Risk') {
              iconName = 'speedometer';
              // iosName = 'ios-speedometer';
              // androidName = 'md-speedometer';
            }
            if (route.name === 'Alerts') {
              iconName = 'ios-notifications';
              // iosName = 'ios-notifications';
              // androidName = 'md-notifications';
            }
            if (route.name === 'Status') {
              iconName = 'pulse';
            }
            return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
          },
        })}
      >
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Risk" component={RiskTab} />
        <Tab.Screen name="Alerts" component={AlertTab} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Sign In" component={SignIn} />
        <Tab.Screen name="Sign Up" component={SignUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabBar;
