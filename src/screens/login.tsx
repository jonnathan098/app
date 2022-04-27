import React, { useState } from "react" 
import { TextInput, View,StyleSheet, Button, TouchableOpacity,Text, } from "react-native"
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
        
    },
    linkNovoUsuario:{
        padding:5,
        alignItems:'center',
    },
    buttonTextLinkeNovoUsuario:{
        color:'#0000FF',
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
    MansagemDeerror:{
        textTransform:'uppercase',
        alignItems:'center',
       
    },
    MansagemDesucesso:{
        textTransform:'uppercase',
    }
}) 
const LoginScreen: React.FC = () => {
const [MansagemDeerror, setMansagemDeerror] = useState(false)
const [MansagemDesucesso, setMansagemDesucesso] = useState(false)
const [nomeUsuario, setnomeUsuario] = useState('')
const [senha, setsenha] = useState('')


const botaoLoginPressionado = () => {
    if (nomeUsuario==='adm' && senha === '123') {
        setMansagemDesucesso(true)
        setMansagemDeerror(false)
    } else {
        setMansagemDeerror(true)
    }
}

return(  
    <View style={styles.container}>
        {
            MansagemDeerror &&(
            <Text style={styles.MansagemDeerror}>erro! corrija os campos abaixo</Text>
            )
        }
        {
         MansagemDesucesso &&(
         <Text style={styles.MansagemDesucesso}>suceso: Bem Vindo</Text>
         )
        }
       
        <TextInput style={styles.Input}placeholder="nome do usuario" onChangeText={setnomeUsuario}/>

        <TextInput style={styles.Input}placeholder='senha'onChangeText={setsenha}/> 

        <TouchableOpacity style={styles.Button}onPress={botaoLoginPressionado }>
       <Text style={styles.buttonText}>entrar</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.linkNovoUsuario}onPress={() => {}}>
       <Text style={styles.buttonTextLinkeNovoUsuario}>novo usuario</Text>
      </TouchableOpacity>
    </View>
)
}
export default LoginScreen