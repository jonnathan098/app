import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Item from './models/Item';
import { StackParams } from './Navegacao';

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
type Props = NativeStackScreenProps<StackParams,'TelaPricipal'>;

const TelaPricipalScreen: React.FC <Props> = (Props) => {
	 	const botaoLoginPressionado = () => {
		Props.navigation.navigate('PaginaItem');
	}
		const renderFlatListItem: ListRenderItem<Item> = ({item}) => {
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