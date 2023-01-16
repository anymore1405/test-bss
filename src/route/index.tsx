import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/Home';
import Part1 from '../screens/Part1';
import {rootRoute} from './configRoute';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootRoute() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={rootRoute.Home} component={Home} />
      <Stack.Screen name={rootRoute.Part1} component={Part1} />
    </Stack.Navigator>
  );
}

export default RootRoute;
