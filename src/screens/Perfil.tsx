import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Alert} from 'react-native';
import  image from '../../assets/download.jfif.png';
import { Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParams } from './Navegacao';

const style = StyleSheet.create({
    container: {
      flexGrow:1,
      backgroundColor: '#bb0',
     // justifyContent: 'center',
     // alignItems: 'center',

  
    },
    
    mensagem: {
      fontSize:24,
      fontWeight: 'bold'
    },
  
    image: {
      width:200,
      height:200,
      borderRadius:100,
      marginTop:20,
      alignItems: 'flex-start',
      
    },
    perfil:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'flex-start',
      backgroundColor:'#fff'
    },
    button:{
      alignSelf:'center',
    },
    
  })
  type Props = NativeStackScreenProps<StackParams,'Perfil'>;
const perfilScreen: React.FC <Props> = (Props) => {
   const botaoPressionado = () =>{
    Props.navigation.navigate('TelaPricipal');
  }
    return(
     <View style={style.container}>
       <View style={style.perfil}>
      <Image style={style.image} source={image}/>
      <View>
        <Text style={style.mensagem}>bem vindo!</Text>
        <Text>tudo bem !</Text>
      </View>
      </View>
      <Button title='supera' style={style.button} onPress={botaoPressionado} />
    </View>
    )
}
export default perfilScreen