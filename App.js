import { StyleSheet, Text, View } from 'react-native';
import Card from './src/Card'

const card = {
  nome: 'Burgão',
  calorias: 150,
  preco: 35.00,
  imagem: require('./src/img/podrao.png')
}

export default function App() {
  return (
    <View style={styles.container}>
      <Card props={card}></Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaa'
  },
});
