import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';
import  image from '../../assets/thumb-1920-604626.png';
import item from './item';
import Item from './models/Item';
import { StackParams } from './Navegacao';

const itens: Item[] = [
	{
		id: 2,
		nome: 'Itachi Uchiha',
		descriçao: 'clã Uchiha de Konoha',
	},
	{
		id: 3,
		nome: 'Nagato',
		descriçao: 'um órfão de Amegakure',
	},
	{
		id: 1,
		nome: 'Deidara',
		descriçao: 'Unidade de Explosão',
	},
	{
		id: 2,
		nome: 'Obito Uchiha',
		descriçao: ' clã Uchiha de Konoha.',
	},
	{
		id: 3,
		nome: 'Hidan',
		descriçao: 'Yugakure',
	},
	{
		id: 1,
		nome: 'Zetsu',
		descriçao: 'Exército de Zetsu Branco,',
	},
	{
		id: 2,
		nome: 'Kisame Hoshigaki',
		descriçao: 'Monstro da Névoa Oculta ',
	},
	{
		id: 3,
		nome: 'Kakuzu',
		descriçao: ' Takigakure',
	},
	{
		id: 1,
		nome: 'Sasori',
		descriçao: 'era um shinobi de Sunagakure ',
	},
	{
		id: 2,
		nome: 'Konan',
		descriçao: 'kunoichi de Amegakure',
	},
	{
		id: 3,
		nome: 'Orochimaru',
		descriçao: 'Lendários Sannin,',
	},
	{
		id: 1,
		nome: 'Yahiko',
		descriçao: 'shinobi de Amegakure ',
	},

]
const styles = StyleSheet.create({
	listItem: {
		backgroundColor: '#000000',
		padding: 20,
		marginBottom: 20,
	
	},
	listItemText: {
		alignItems: 'center',	
		fontSize: 24,
		color:'#FF0000',
	},
	botao:{
		fontSize : 24,
        borderWidth:1,
        backgroundColor: '#2E8B57',
        borderRadius:8,
		alignItems: 'center',	
	},
	aliamendo:{
		alignItems: 'flex-end',	
	},
	aliamendo01:{
		alignItems: 'center',
	},
	image: {
		width:100,
		height:55,
	},
})
type Props = NativeStackScreenProps<StackParams,'TelaPricipal'>;

const TelaPricipalScreen: React.FC <Props> = (Props) => {
		const renderFlatListItem: ListRenderItem<Item> = ({item}) => {
			const botaoLoginPressionado = () => {
				Props.navigation.navigate('PaginaItem', {item: item});
			}
			return (
			<TouchableOpacity style={styles.listItem} onPress={botaoLoginPressionado}>
		    	<View style={styles.aliamendo}>
					<Image style={styles.image} source={image}/>
		    	</View>	
				<Image style={styles.image} source={image}/>
				<View style={styles.aliamendo01}>
					<Text style={styles.listItemText}>{item.nome}</Text>
				</View>
			</TouchableOpacity>
		)
		}
	return (
		<View>
			<FlatList renderItem={renderFlatListItem} data={itens}/>
			<View>
				<TouchableOpacity style={styles.botao} onPress={() => {}}>
				<Text>cria novo componede</Text>
				</TouchableOpacity>
	        </View>
		</View>
	)
}
export default TelaPricipalScreen