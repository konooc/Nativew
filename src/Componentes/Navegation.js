// AppNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import InicioScreen from '../../App'; 
import Pantalla from "../../screens/panatalla 1"; // Importa tu componente Pantalla

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={InicioScreen} />
        <Stack.Screen name="Pantalla" component={Pantalla} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
