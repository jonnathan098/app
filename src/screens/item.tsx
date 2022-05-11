import { View , Text, StyleSheet,Image, Button, Alert, TextInput, TouchableOpacity } from "react-native"
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "./Navegacao";

const style = StyleSheet.create ({
    pagina:{
        flexGrow:1,
        backgroundColor: '#4169E1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Input:{
        fontSize : 24,
        borderWidth:1,
        backgroundColor: '#F5FFFA',
        width:300,
        height:100,
        
    },
    item1:{
        fontSize: 24,
        borderWidth:1,
        backgroundColor: '#B0C4DE',
        borderRadius:8,
    },
    descriçaoDoItem1:{
        alignItems: 'center',
        borderWidth:1,
        backgroundColor: '#B0C4DE',
        fontSize : 24,
        borderRadius:8,

    },
    imagemItem:{ 
        width:300,
        height:500,
        borderRadius:200,
        marginTop:30,
    },
    buttonEdidar:{
        backgroundColor:'#000000',
        alignItems:'center',
        color:'#FF0000',
        borderWidth:1,
        width:90,
        height:25,
    },
    TextButton:{
        color:'#4682B4',
        fontSize : 15,

    },
    ItemEdidar:{
            fontSize : 15,
            borderWidth:1,
          backgroundColor: '#F5FFFA',
    },
})
type Props = NativeStackScreenProps<StackParams,'PaginaItem'>;
const PaginaItem: React.FC <Props> = (props) =>{
    const botaoLoginPressionado01 = () => {
        props.navigation.navigate('EdidarItem', {item: item});
    }
    const item = props.route.params.item;
    return(
        <View style={style.pagina}>
            <Text>{item.descriçao}</Text>
            <Button title="editar" onPress={botaoLoginPressionado01}/>
        </View>
    );
};
export default PaginaItem