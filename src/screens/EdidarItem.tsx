import { TextInput, View, StyleSheet, Button} from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "./Navegacao";


const style = StyleSheet.create ({
    pagina:{
        flexGrow:1,
        backgroundColor: '#808000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ItemEdidarNome:{
     fontSize : 15,
     height:'50%' ,
      borderWidth:1,
     backgroundColor: '#B0E0E6	',
    },
    ItemEdidarDescriçao:{
        fontSize : 15,
        height:'50%' ,
         borderWidth:1,
        color:'#F0F8FF',
    },
    edidarItem:{
     borderWidth:1,
     backgroundColor: '#F5FFFA',
      width:450,
      height:250,
      justifyContent: 'center',
    },
})
type Props = NativeStackScreenProps<StackParams,'EdidarItem'>;
const EdidarItem: React.FC <Props> = (Props) =>{
    const botaoPressionado = () =>{
        Props.navigation.navigate('TelaPricipal');
      }
   
    return(
        <View style={style.pagina}>
            <View style={style.edidarItem}>
                <TextInput style={style.ItemEdidarNome} placeholder='NOME'onChangeText={() => {}}/>
                <TextInput style={style.ItemEdidarDescriçao} placeholder='DESCRIÇAO'onChangeText={() => {}}/>
            </View>
            <Button title='SALVAR'onPress={() => {}}/>
            <Button title="voltar" onPress={ botaoPressionado}/>
        </View>
    )
};
export default EdidarItem