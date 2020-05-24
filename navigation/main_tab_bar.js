import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Map from '../components/map';
import Risk from '../components/risk';
import Alerts from '../components/alerts';
import Status from '../components/status';

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Map"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === 'Map') {
              iconName = 'map';
            }
            if (route.name === 'Alerts') {
              iconName = 'notifications';
            }
            if (route.name === 'Profile') {
              iconName = 'send';
            }
            return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
          },
        })}
      >
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Risk" component={Risk} />
        <Tab.Screen name="Alerts" component={Alerts} />
        <Tab.Screen name="Status" component={Status} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabBar;
