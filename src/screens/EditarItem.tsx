import { View , StyleSheet, Button, TextInput,Text} from "react-native"
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
const EdidarItem: React.FC <Props> = (props) =>{
    const botaoLoginPressionado01 = () => {
        props.navigation.navigate('PaginaItem',{item: item} );
    }
    const item = props.route.params.item;
    return(
        <View style={style.pagina}>
           <View style={style.edidarItem}>
                <TextInput style={style.ItemEdidarNome} placeholder={item.nome} onChangeText={() => {}}/>
                <TextInput style={style.ItemEdidarDescriçao} placeholder={item.descriçao}onChangeText={() => {}}/>
                <Button title='SALVAR'onPress={() => {}}/>
                <Button title="voltar" onPress={botaoLoginPressionado01}/>  
          </View>
        </View>
    )
};
export default EdidarItem