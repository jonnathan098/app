import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
		descriçao: ' kunoichi de Amegakure',
	},
	{
		id: 3,
		nome: 'Orochimaru',
		descriçao: ' Lendários Sannin,',
	},
	{
		id: 1,
		nome: 'Yahiko',
		descriçao: ' shinobi de Amegakure ',
	},

]
const styles = StyleSheet.create({
	listItem: {
		backgroundColor: '#000000',
		padding: 20,
		marginBottom: 20,
	},

	listItemText: {
		fontSize: 24,
		color:'#FF0000'
	},

	botao:{
		fontSize : 24,
        borderWidth:1,
        backgroundColor: '#2E8B57',
        borderRadius:8,
		alignItems: 'center',

	}
})
type Props = NativeStackScreenProps<StackParams,'TelaPricipal'>;

const TelaPricipalScreen: React.FC <Props> = (Props) => {
		const renderFlatListItem: ListRenderItem<Item> = ({item}) => {
			const botaoLoginPressionado = () => {
				Props.navigation.navigate('PaginaItem', {item: item});
			}
			return (
			<TouchableOpacity style={styles.listItem} onPress={botaoLoginPressionado}>
				<Text style={styles.listItemText}>{item.nome}</Text>
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