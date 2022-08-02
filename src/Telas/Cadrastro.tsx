import React from "react"
import  image from '../../assets/download.jfif.png';
import { View,StyleSheet, TextInput,Text, TouchableOpacity,Image } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParams } from "./Navegacao";
import { StackActions } from "@react-navigation/native";
const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
        padding: 32,
        backgroundColor: '#B0E0E6',
        
    },
    Input:{
      fontSize : 24,
     borderWidth:1,
     backgroundColor: '#F5FFFA',
     margin:10,
     borderRadius: 10
    
    },
    Button:{
        backgroundColor: '#C0C0C0',
        alignItems:'center',
        borderWidth:1,
        padding:10,
        borderRadius:8
    },
    buttonText:{
        color:'#fff',
        fontSize : 24,
    },
    image: {
        width:200,
        height:200,
        borderRadius:100,
        marginTop:20,
        alignItems: 'center',
        
      },
})


type Props = NativeStackScreenProps<StackParams,'Cadrastro'>; 
const Cadrastro: React.FC <Props> = (Props) => {
    const botaoPressionado = () =>{
        Props.navigation.dispatch(StackActions.replace('Perfil'))
      }
    return(
        <View style={styles.container}>
        <Image style={styles.image} source={image}/>
         <TextInput style={styles.Input}placeholder="nome" onChangeText={() => {}}/>
         <TextInput style={styles.Input}placeholder="sobrenome" onChangeText={() => {}}/>
         <TextInput style={styles.Input}placeholder="e-mail" onChangeText={() => {}}/>
         <TextInput style={styles.Input}placeholder="senha" onChangeText={() => {}}/>
         <TextInput style={styles.Input}placeholder="confimar senha" onChangeText={() => {}}/>
         <TextInput style={styles.Input}placeholder="emdereco" onChangeText={() => {}}/>
         <TouchableOpacity style={styles.Button}onPress={botaoPressionado}>
             <Text style={styles.buttonText}>entrar</Text>
         </TouchableOpacity>
        </View>
    )
}
export default Cadrastro