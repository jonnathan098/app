import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaginaItem from './src/screens/item';
import LoginScreen from './src/screens/Login';
import PerfilScreen from './src/screens/Perfil';
import TelaPricipal from './src/screens/TelaPricipal';


const Stack = createNativeStackNavigator();

const app: React.FC = () => {
  return(
    <NavigationContainer>{}</NavigationContainer>
  );
};



export default app;


