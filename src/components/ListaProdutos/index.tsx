import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ScrollView, VirtualizedList, Text } from 'react-native';
import ItemProduto from '../ItemProduct';
import { Produto } from '../../types/produto';

export default function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>();

    useEffect(() => {
        axios.get('https://produtos-marcos.herokuapp.com/api/produtos').then(response => {
            setProdutos(response.data);
        })
    }, []);

    return (

        <View>
            <Text style={styles.label}>Quantidade total de produtos: {produtos?.length}</Text>

            <FlatList
                data={produtos}
                renderItem={({ item }) => (
                    <ItemProduto
                        id={item.id}
                        nome={item.nome}
                        quantidade={item.quantidade}
                        valor={item.valor}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 30,
        padding: 30
    },
    label: {
        fontSize: 20,
        fontWeight: '900',
        color: 'red',
        margin: 15
    }
});
