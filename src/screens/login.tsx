import { TextInput, View,StyleSheet } from "react-native"
import React from "react"

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
        padding: 32,
        backgroundColor: '#ff0', 
    }
    input: {
        fontSize:24,
    },
})
 

const LoginScreen: React.FC = () => {
return(
    <View style={styles.container}>
        <TextInput placeholder="nome do usuario"/>
    </View>
)
}

export default LoginScreen