import React from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Item from './models/Item';

const itens: Item[] = [
	{
		id: 2,
		nome: 'Coca-cola',
		descriçao: 'Refrigerante em lata.',
	},
	{
		id: 3,
		nome: 'Pudim',
		descriçao: 'Pudim de leite condensado.',
	},
	{
		id: 1,
		nome: 'Cachorro-quente',
		descriçao: 'Lanche grande.',
	},
	{
		id: 2,
		nome: 'Coca-cola',
		descriçao: 'Refrigerante em lata.',
	},
	{
		id: 3,
		nome: 'Pudim',
		descriçao: 'Pudim de leite condensado.',
	},
	{
		id: 1,
		nome: 'Cachorro-quente',
		descriçao: 'Lanche grande.',
	},
	{
		id: 2,
		nome: 'Coca-cola',
		descriçao: 'Refrigerante em lata.',
	},
	{
		id: 3,
		nome: 'Pudim',
		descriçao: 'Pudim de leite condensado.',
	},
	{
		id: 1,
		nome: 'Cachorro-quente',
		descriçao: 'Lanche grande.',
	},
	{
		id: 2,
		nome: 'Coca-cola',
		descriçao: 'Refrigerante em lata.',
	},
	{
		id: 3,
		nome: 'Pudim',
		descriçao: 'Pudim de leite condensado.',
	},
	{
		id: 1,
		nome: 'Cachorro-quente',
		descriçao: 'Lanche grande.',
	},
	{
		id: 2,
		nome: 'Coca-cola',
		descriçao: 'Refrigerante em lata.',
	},
	{
		id: 3,
		nome: 'Pudim',
		descriçao: 'Pudim de leite condensado.',
	},
	{
		id: 1,
		nome: 'Cachorro-quente',
		descriçao: 'Lanche grande.',
	},
	{
		id: 2,
		nome: 'Coca-cola',
		descriçao: 'Refrigerante em lata.',
	},
	{
		id: 3,
		nome: 'Pudim',
		descriçao: 'Pudim de leite condensado.',
	},
	{
		id: 1,
		nome: 'Cachorro-quente',
		descriçao: 'Lanche grande.',
	},
	{
		id: 2,
		nome: 'Coca-cola',
		descriçao: 'Refrigerante em lata.',
	},
	{
		id: 3,
		nome: 'Pudim',
		descriçao: 'Pudim de leite condensado.',
	},
	{
		id: 1,
		nome: 'Cachorro-quente',
		descriçao: 'Lanche grande.',
	},
	{
		id: 2,
		nome: 'Coca-cola',
		descriçao: 'Refrigerante em lata.',
	},
	{
		id: 3,
		nome: 'Pudim',
		descriçao: 'Pudim de leite condensado.',
	},
	{
		id: 1,
		nome: 'Cachorro-quente',
		descriçao: 'Lanche grande.',
	},
	{
		id: 2,
		nome: 'Coca-cola',
		descriçao: 'Refrigerante em lata.',
	},
	{
		id: 3,
		nome: 'Pudim',
		descriçao: 'Pudim de leite condensado.',
	},
	{
		id: 1,
		nome: 'Cachorro-quente',
		descriçao: 'Lanche grande.',
	},
]
const styles = StyleSheet.create({
	listItem: {
		backgroundColor: '#ff0',
		padding: 20,
		marginBottom: 20,
	},

	listItemText: {
		fontSize: 24,
	},

	botao:{
		fontSize : 24,
        borderWidth:1,
        backgroundColor: '#2E8B57',
        borderRadius:8,
		alignItems: 'center',

	}
})
const TelaPricipal: React.FC = () => {
	const renderFlatListItem: ListRenderItem<Item> = ({item}) => {
		return (
			<View style={styles.listItem}>
				<Text style={styles.listItemText}>{item.nome}</Text>
			</View>
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
export default TelaPricipal