import React from 'react';
import {Text, StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';

const ListNews = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Recursos Humanos</Text>
            <Text style={styles.date}>09/03/2021</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              O nosso próximo café virtual está chegando!
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>Saiba mais</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Recursos Humanos</Text>
            <Text style={styles.date}>09/03/2021</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              O nosso próximo café virtual está chegando!
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>Saiba mais</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Recursos Humanos</Text>
            <Text style={styles.date}>09/03/2021</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              O nosso próximo café virtual está chegando!
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>Saiba mais</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Recursos Humanos</Text>
            <Text style={styles.date}>09/03/2021</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              O nosso próximo café virtual está chegando!
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>Saiba mais</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Recursos Humanos</Text>
            <Text style={styles.date}>09/03/2021</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              O nosso próximo café virtual está chegando!
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>Saiba mais</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Recursos Humanos</Text>
            <Text style={styles.date}>09/03/2021</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              O nosso próximo café virtual está chegando!
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>Saiba mais</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    width: 'auto',
    height: 'auto',
    backgroundColor: 'white',
    padding: 10,
    borderLeftWidth: 10,
    borderLeftColor: 'orange',
  },
  cardTitle: {
    flexDirection: 'row',
  },
  column: {
    width: 290,
  },
  date: {
    color: 'gray',
    fontSize: 12,
  },
  header: {
    marginTop: 10,
  },
  cardSubTitle: {
    fontSize: 18,
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row-reverse',
  },
  saibaMais: {
    color: 'gray',
  },
});

export default ListNews;