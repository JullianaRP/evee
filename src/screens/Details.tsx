import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Details = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor="#004f7a"></StatusBar>
        <View style={styles.viewColumnsMenu}>
          <View style={styles.columnIconsMenu}>
            <Text style={[styles.textNavbar, styles.textNavbarMenu]}>
              <Icon name="angle-left" size={30} color="#43a8bf" />
              Detalhe da notícia
            </Text>
          </View>
        </View>
        <View style={[styles.card, styles.yellow]}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Recursos Humanos</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              O nosso próximo café virtual está chegando!
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>Publicação: 09/03/2021</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  viewColumnsMenu: {
    flexDirection: 'row',
  },
  columnIconsMenu: {
    width: 420,
    height: 50,
    backgroundColor: '#004f7a',
  },
  textNavbar: {
    color: 'white',
    marginTop: 15,
  },
  textNavbarMenu: {
    marginLeft: 10,
  },
  textMenuPortonet: {
    fontSize: 18,
    marginTop: 10,
  },
  card: {
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    width: 'auto',
    height: 'auto',
    backgroundColor: 'white',
    padding: 10,
    borderLeftWidth: 10,
  },
  yellow: {
    borderLeftColor: '#f9c205',
  },
  cardTitle: {
    flexDirection: 'row',
  },
  column: {
    width: 290,
    textTransform: 'uppercase',
    fontSize: 12,
    color: 'black',
    fontWeight: '700',
  },
  date: {
    color: 'gray',
    fontSize: 11,
  },
  header: {
    marginTop: 10,
  },
  cardSubTitle: {
    fontSize: 20,
    color: '#43a8bf',
  },
  footer: {
    marginTop: 10,
  },
  saibaMais: {
    color: 'gray',
    fontSize: 10,
  },
});

export default Details;