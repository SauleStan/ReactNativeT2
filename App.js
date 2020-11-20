import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

import HomeScreen from './lib/screens/HomeScreen';
import DetailsScreen from './lib/screens/DetailsScreen';
import MainDishesScreen from './lib/screens/MainDishesScreen';
import DessertsScreen from './lib/screens/DessertsScreen';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Categories"
          component={HomeScreen}
          options={
            ({ navigation }) => ({
              headerTitleAlign: 'center',
            })
          }
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={
            ({ navigation }) => ({
              headerTitleAlign: 'center',
            })
          }
        />
        <Stack.Screen
          name="Main Dishes"
          component={MainDishesScreen}
          options={
            ({ navigation }) => ({
              headerTitleAlign: 'center',
            })
          }
        />
        <Stack.Screen
          name="Desserts"
          component={DessertsScreen}
          options={
            ({ navigation }) => ({
              headerTitleAlign: 'center',
            })
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

