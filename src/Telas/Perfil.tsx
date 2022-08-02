import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Alert, ListRenderItem, FlatList, TextInput, TouchableOpacity} from 'react-native';
import  image from '../../assets/iconpessoas.png';
import imagen from '../../assets/04c8125b2519673573d53e5f9c5a4b47.jpg';
import { Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParams } from './Navegacao';
import Item from './models/Item';
import React from 'react';


const style = StyleSheet.create({ 
    container: {  
      flexGrow:1,
      backgroundColor: '#bb0',
     alignItems:'center',
     
    },
    
    mensagem: {
      fontSize:24,
      borderWidth:1,
      backgroundColor:'#FFFAFA',
      width:250,
      height:35,
      alignItems:'center',
      margin:10,
      borderRadius: 10
    },
  
    image: {
      width:200,
      height:200,
      borderRadius:100,
      marginTop:20,
      alignItems: 'flex-start',
      
    },
    aliamendo:{
      alignItems: 'flex-end',	
    },
    container01:{
      fontSize: 24,
      borderWidth:1,
      width:200,
      height:200,
      backgroundColor:'#3CB371'
  },
   
  })
  const item: Item [] = [
    {
      id: 1,
      nome: 'x-tudo chedar',
      descricao: 'oi'
   },
  {
    id: 2,
    nome: 'pizza de queijo',
    descricao: 'oi'
  },
  {
    id: 3,
    nome: 'coxinha',
    descricao: 'oi'
  },
  ];

  type Props = NativeStackScreenProps<StackParams,'Perfil'>; 
const perfilScreen: React.FC <Props> = (Props) => { 
   const botaoPressionado = () =>{
    Props.navigation.navigate('TelaPricipal');}
    const botaocontadoPressionado = () => {}

  const renderFlatListItem: ListRenderItem<Item> = ({item}) => {
    
    return (
    < View >
      <Text style={style.mensagem}>{item.nome}</Text>
    </View>
  )
  }

    return(
      <View style={style.container}>
        <TouchableOpacity onPress={botaocontadoPressionado}> 
          <Text>contado</Text>
        </TouchableOpacity>
        <Image style={style.image} source={image}/>
        <Text style={style.mensagem}>nome</Text>
        <Text style={style.mensagem}>cpf</Text>
        <Text style={style.mensagem}>telefone</Text>
        <Text style={style.mensagem}>emdereco</Text>
        <View>
          <Image style={style.image} source={imagen}/>
        </View>
        <View style={style.container01}>
        <FlatList renderItem={renderFlatListItem} data={item}/>
        </View>
        <Button title='res' onPress={botaoPressionado} />
      </View>
    )
}
export default perfilScreen