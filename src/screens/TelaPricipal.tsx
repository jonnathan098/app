import { View,Text, FlatList, ListRenderItem } from "react-native"
import React from "react"
import Item from "./models/item"
const itens: Item[] = [
    {
        id:1,
        nome:'cachorro-quente',
        descriçao:'lanche grande',
    },
     {
        id:2,
        nome:'coca-cola',
        descriçao:'refrigerante em lata',
    },
    {
        id:3,
        nome:'pudim',
        descriçao:'pudim de leite condesado',
    },
]




const TelaPricipal: React.FC = () => {

    const renderFlatListItem: ListRenderItem<Item>= () => {
        return(
            <Text>nome do item</Text>
        )
    }    
    
    return(
        <View>
            <FlatList renderItem={renderFlatListItem}
            data={itens} />
        </View>
    )
}
export default TelaPricipal