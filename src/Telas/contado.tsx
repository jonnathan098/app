import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParams } from './Navegacao';
import React from 'react';
import { View,Text, TouchableOpacity, TextInput,StyleSheet  } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
        padding: 35,
        backgroundColor: '#B0E0E6',
    },
    Input:{
        fontSize : 24,
        borderWidth:1,
        backgroundColor: '#F5FFFA',
    },
    texto:{
        fontSize : 24,
        alignItems: 'center',
        color:'#0000FF',
    },
    botaomExculir:{
        fontSize: 24,
        width:'100%',
        height:'100%',
        borderWidth:1,
        backgroundColor: '#FF0000',
       
    },
    buttonEdidar:{
        backgroundColor:'#000000',
        alignItems:'flex-start',
        color:'#FF0000',
        borderWidth:1,
        width:'100%',
        height:'100%',
        
    },
    TextButton:{
        color:'#F0F8FF',
        fontSize : 15,
    },
    container01:{
        borderWidth:1,
        alignItems:'flex-end',
        backgroundColor: '#F5FFFA',
        width:90,
        height:100,
        borderRadius:8,
    },
    
}) 
type Props = NativeStackScreenProps<StackParams,'Contado'>; 
const Contado:React.FC <Props> = (Props) => {
    const botaocontadoPressionado = () => {}

    return (
       <View style={styles.container}> 
            <TextInput style={styles.Input}placeholder="nome do problema" onChangeText={() => {}}/>
        <TextInput style={styles.Input}placeholder='descriçao do problema'onChangeText={() => {}}/> 
        <View style={styles.container01}>
             <TouchableOpacity style={styles.buttonEdidar}onPress={botaocontadoPressionado}>
                 <Text style={styles.TextButton}>enviar</Text>
             </TouchableOpacity>
             <TouchableOpacity style={styles.botaomExculir}onPress={botaocontadoPressionado}>
                 <Text style={styles.TextButton}>cancelar</Text>
             </TouchableOpacity>
             </View>
       </View>
    )
}

export default Contado