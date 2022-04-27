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
         <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="Perfl" component={PerfilScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};
 
type StackParams ={

};


export default Navegacao