import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Slider } from './src/Pages/Slider';
import { Login } from './src/Pages/Login';
import { Cadastro } from './src/Pages/Cadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Slider" screenOptions={{ headerShown: false }} >
        <Stack.Screen
          name="Slider"
          component={Slider}
        />
        <Stack.Screen 
          name="Login"
          component={Login}
        />
        <Stack.Screen 
          name="Cadastro"
          component={Cadastro}
        />
      {/* Adicione outras telas com Stack.Screen conforme necessário */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
