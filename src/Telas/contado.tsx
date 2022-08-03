import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParams } from './Navegacao';
import React from 'react';
import imagen from '../../assets/925125.png';
import { View,Text, TouchableOpacity, TextInput,StyleSheet,Image  } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
        padding: 35,
        backgroundColor: '#B0E0E6',
    },
    Input01:{
        fontSize : 24,
        borderWidth:1,
        backgroundColor: '#F5FFFA',
        margin:3,
        borderRadius: 10,
        width:350,
        height:300,
    },
    Input:{
        fontSize : 24,
        borderWidth:1,
        backgroundColor: '#F5FFFA',
        margin:3,
        borderRadius: 10,
        width:250,
        height:35,
    },
    texto:{
        fontSize : 24,
        alignItems: 'center',
        color:'#0000FF',
    },
    botaomExculir:{
        fontSize: 24,
        width:'100%',
       
        borderWidth:1,
        backgroundColor: '#FF0000',
       
    },
    buttonEdidar:{
        backgroundColor:'#006400',
        alignItems:'flex-start',
        color:'#FF0000',
        borderWidth:1,
        width:'100%',
    },
    TextButton:{
        color:'#F0F8FF',
        fontSize : 15,
        
    },
    container01:{
        borderWidth:1,
        alignItems:'center',
        backgroundColor: '#F5FFFA',
        width:90,
        borderRadius:8,
        margin:3,
    },
    container02:{
        borderWidth:1,
        alignItems:'baseline',
        backgroundColor: '#F5FFFA',
        width:90,
        borderRadius:8,
        margin:3,
    },
    image: {
        width:200,
        height:200,
        borderRadius:100,
        marginTop:20,
        alignItems: 'flex-start',
        
      },
    
}) 
type Props = NativeStackScreenProps<StackParams,'Contado'>; 
const Contado:React.FC <Props> = (Props) => {
    const botaocontadoPressionado = () => {}

    return (
       <View style={styles.container}> 
        <Image style={styles.image} source={imagen}/>
        <TextInput style={styles.Input}placeholder="nome do problema" onChangeText={() => {}}/>
        <TextInput style={styles.Input01}placeholder='descriçao do problema'onChangeText={() => {}}/> 
        <View style={styles.container01}>
             <TouchableOpacity style={styles.buttonEdidar}onPress={botaocontadoPressionado}>
                 <Text style={styles.TextButton}>enviar</Text>
             </TouchableOpacity>
             </View>
             <View style={styles.container02}>
                 <TouchableOpacity style={styles.botaomExculir}onPress={botaocontadoPressionado}>
                 <Text style={styles.TextButton}>cancelar</Text>
             </TouchableOpacity>
             </View>
             
       </View>
    )
}

export default Contado