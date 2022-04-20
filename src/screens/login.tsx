import { TextInput, View,StyleSheet, Button, TouchableOpacity,Text } from "react-native"
import React, { useState } from "react" 
const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
        padding: 32,
        
    },
    Input:{
        fontSize : 24,
        borderWidth:2,
    },
    linkNovoUsuario:{
        padding:5,
        alignItems:'center',
        borderWidth:1,
        backgroundColor: '#',
    },
    Button:{
        backgroundColor: '#cc0',
        alignItems:'center',
        borderWidth:2,
        padding:10,
    },

    MansagemDeerror:{
        borderWidth:3,
        textTransform:'uppercase',
    },
    MansagemDesucesso:{
        borderWidth:3,
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
        
        <TouchableOpacity
      style={styles.Button}
       onPress={botaoLoginPressionado }>
       <Text>entrar</Text>
      </TouchableOpacity>

       <TouchableOpacity
      style={styles.linkNovoUsuario}
       onPress={() => {}}>
       <Text>novo usuario</Text>
      </TouchableOpacity>
    </View>
)
}
export default LoginScreen