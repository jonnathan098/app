import React from "react"
import { View,StyleSheet, TextInput } from "react-native"
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
})



const Cadrastro: React.FC = () => {
    return(
        <View style={styles.container}>
         <TextInput style={styles.Input}placeholder="nome" onChangeText={() => {}}/>
         <TextInput style={styles.Input}placeholder="sobrenome" onChangeText={() => {}}/>
         <TextInput style={styles.Input}placeholder="e-mail" onChangeText={() => {}}/>
         <TextInput style={styles.Input}placeholder="senha" onChangeText={() => {}}/>
         <TextInput style={styles.Input}placeholder="confimar senha" onChangeText={() => {}}/>
         <TextInput style={styles.Input}placeholder="emdereco" onChangeText={() => {}}/>

        </View>
    )
}
export default Cadrastro