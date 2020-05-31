import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Risk from '../components/risk';
import RiskInfo from '../components/risk-info';

// const TempSearch = (props) => (<Button onPress={() => { props.navigation.navigate('Detail'); }} title="next" />);
// const TempDetail = (props) => (<Button onPress={() => { props.navigation.pop(); }} title="close" />);

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const RiskTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Risk"
        component={Risk}
        options={{
          title: 'Risk',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: '#fff',
        }}
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
