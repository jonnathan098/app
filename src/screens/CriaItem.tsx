import { View,Text, TextInput,StyleSheet, Button } from "react-native"
import React from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "./Navegacao";
const style =  StyleSheet.create ({
    pagina:{
        flexGrow:1,
        backgroundColor: '#DEB887',
        justifyContent: 'center',
        alignItems: 'center',
    },
    edidarItem:{
        borderWidth:1,
        backgroundColor: '#800000',
        width:450,
        height:250,
        justifyContent: 'center',
    },
    nome:{
     fontSize : 15,
     height:250,
     borderWidth:1,
     color:'#00FF00',
    },
    

})
type Props = NativeStackScreenProps<StackParams,'CriaItem'>;
const CriaItem :  React.FC  <Props> = (props) => {
    const botaoLoginPressionado01 = () => {
        props.navigation.navigate( 'TelaPricipal');
    }
    
    return(
        <View style={style.pagina}>
            <View style={style.edidarItem}>
                 <TextInput style={style.nome} placeholder='nome' onChangeText={() => {}}/>
                 <TextInput style={style.nome} placeholder='descriçao' onChangeText={() => {}}/>
            </View>
            <View > 
             <Button title="voltar" onPress={botaoLoginPressionado01 }/>
            </View>
        <Button title="salvar" onPress={() => {}}/>

        </View>
    )
};
export default CriaItem