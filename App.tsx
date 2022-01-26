import { StyleSheet, Text, View } from 'react-native';
import ListaProdutos from './src/components/ListaProdutos';

export default function App() {
  return (
    <>
      <View style={styles.containerHeader}>
        <Text style={styles.headerText} >Lista de produtos</Text>
      </View>
      <View style={styles.containerList}>
        <ListaProdutos />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerText: {
    alignItems: 'center',
    paddingTop: 20,
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 25,
  },
  containerHeader: {
    marginBottom: 15,
    backgroundColor: '#f0f0f0'
  },
  containerList: {
    marginBottom: 25,
    paddingBottom: 200
  }
});