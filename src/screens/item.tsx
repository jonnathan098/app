import { View , Text, StyleSheet,Image, Button, Alert} from "react-native"
import  image from '../../assets/download.jfif.png';
import React from "react";

const style = StyleSheet.create ({
    pagina:{
        flexGrow:1,
        backgroundColor: '#4169E1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    item1:{
        fontSize : 24,
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
    }
})
const botaoPressionado = () =>{
    Alert.alert ('Botao Pressionado')
  }
const PaginaItem: React.FC = () =>{
    return(
        <View style={style.pagina}>
           <Image style={style.imagemItem} source={image}/>
            <Text style={style.item1}>imagem supera</Text>
            <Text style={style.descriçaoDoItem1}>uma imagem antiga que foi perdida com o tempo , foi visdo por ultimo turamde a descoperda do novo mundo por portugesse da renasesa</Text>
            <Button title='saiba mais sobre o passado da lenda do supera' onPress={botaoPressionado}/>
        </View>
    );
};
export default PaginaItem