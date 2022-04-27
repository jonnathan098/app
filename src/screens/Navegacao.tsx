import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react"
import LoginScreen from "./Login";
import PerfilScreen from './Perfil';

const Navegacao: React.FC =() => {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Perfil" component={PerfilScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};
 
type StackParams = {
    Perfil: undefined,
    Login: undefined,
};



export default Navegacao
export type{ StackParams};
