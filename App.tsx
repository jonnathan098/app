import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaginaItem from './src/screens/item';
import LoginScreen from './src/screens/Login';
import PerfilScreen from './src/screens/Perfil';
import TelaPricipal from './src/screens/TelaPricipal';



const app: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="logim" component={LoginScreen} />
        <Stack.Screen name="Perfl" component={PerfilScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default app;