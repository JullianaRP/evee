import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListNews = () => {
  return (
    <>
      <ScrollView>
        <View style={[styles.card, styles.yellow]}>
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
            <Text style={styles.saibaMais}>
              Saiba mais {' '} <Icon name="plus" size={11} color="gray" />
            </Text>
          </View>
        </View>
        <View style={[styles.card, styles.green]}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Responsabilidade Ambiental</Text>
            <Text style={styles.date}>09/03/2021</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              Nós Podemos - Edição #3: Nossa vida na Terra enfrenta o seu maior
              desafio. Mas podemos superá-lo
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>
              Saiba mais {' '} <Icon name="plus" size={11} color="gray" />
            </Text>
          </View>
        </View>
        <View style={[styles.card, styles.gray]}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Produto</Text>
            <Text style={styles.date}>09/03/2021</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              Chegou o Plano Alcance da Porto Seguro Consórcio!
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>
              Saiba mais {' '} <Icon name="plus" size={11} color="gray" />
            </Text>
          </View>
        </View>
        <View style={[styles.card, styles.blue]}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Corporativo</Text>
            <Text style={styles.date}>08/03/2021</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              Está procurando conforto para o seu escritório?
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>
              Saiba mais {' '}<Icon name="plus" size={11} color="gray" />
            </Text>
          </View>
        </View>
        <View style={[styles.card, styles.orange]}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Qualidade de vida</Text>
            <Text style={styles.date}>09/03/2021</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              Veja as tendências que estão na moda para uma qualidade de vida
              melhor!
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>
              Saiba mais {' '} <Icon name="plus" size={11} color="gray" />
            </Text>
          </View>
        </View>
        <View style={[styles.card, styles.pink, {marginBottom: 14}]}>
          <View style={styles.cardTitle}>
            <Text style={styles.column}>Produtividade</Text>
            <Text style={styles.date}>27/02/2021</Text>
          </View>
          <View style={styles.header}>
            <Text style={styles.cardSubTitle}>
              Veja as dicas para ser mais produtivo no dia-a-dia
            </Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.saibaMais}>
              Saiba mais {' '} <Icon name="plus" size={11} color="gray" />
            </Text>
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
  },
  yellow: {
    borderLeftColor: '#f9c205',
  },
  green: {
    borderLeftColor: '#45b098',
  },
  gray: {
    borderLeftColor: '#818594',
  },
  blue: {
    borderLeftColor: '#0f5798',
  },
  orange: {
    borderLeftColor: '#ed7f06',
  },
  pink: {
    borderLeftColor: 'pink',
  },
  cardTitle: {
    flexDirection: 'row',
  },
  column: {
    width: 290,
    textTransform: 'uppercase',
    fontSize: 12,
    color: '#848484',
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
    fontSize: 18,
    color: '#43a8bf',
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row-reverse',
  },
  saibaMais: {
    color: 'gray',
    textTransform: 'uppercase',
    fontSize: 12,
  },
});

export default ListNews;