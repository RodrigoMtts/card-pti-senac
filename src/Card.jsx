import { StyleSheet, Text, View, Image } from 'react-native';

export default function Card({props}) {
  return (
    <View style={styles.container}>
      <View style={styles.areaTexto}>
        <Text style={styles.titulo}>{props.nome}</Text>
        <View style={styles.containerCaloriasFogo}>
          <Image style={styles.fogo} source={require('./img/chamas.png')}/>
          <Text style={styles.info}>{props.calorias} Calorias</Text>
        </View>
        <Text style={styles.preco}>R${props.preco}</Text>
      </View>
      <View style={styles.areaImagem}>
        <Image style={styles.imagem} source={props.imagem}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 17
  },
  containerCaloriasFogo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  areaTexto: {
    marginRight: 20
  },
  areaImagem: {
    marginLeft: 20
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 22
  },
  preco: {
    color: '#fac432',
    fontWeight: 'bold',
    fontSize: 18
  },
  info: {
    color: '#d3d3d3',
    fontSize: 18
  },  
  imagem: {
    width: 150,
    height: 120,
    margin: 10
  },
  fogo: {
    width: 16,
    height: 21,
    margin: 3
  }
});
