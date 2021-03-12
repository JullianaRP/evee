import React from 'react';
import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';

const DetailsTextNew = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.cardDetails}>
            <Text style={styles.cardTitle}>
              Dia 8/4 acontece mais um Café com Colaboradores virtual. Passe o
              seu café e venha conversar!
            </Text>
            <Text style={styles.cardDescription}>
              A nossa saudade continua grande por aqui. Por isso, convidamos
              você para participar do nosso próximo Café com Colaboradores que
              será no dia 8 de abril, das 8h30 às 10h. Continuaremos no formato
              virtual.
            </Text>
            <Text style={styles.cardDescription}>
              Aproveite este momento para tomar um café e matar a saudade,
              colocar a conversa em dia, interagir com colegas e líderes e
              discutir sobre assuntos importantes da Companhia.
            </Text>
            <Text style={styles.cardDescription}>
              Não esqueça que você está representando também seus colegas. Veja
              se eles tem dúvidas ou elogios que você poderá ser porta-voz nesse
              bate-papo. É claro, prepare suas perguntas e comentários que quer
              trazer para essa conversa.
            </Text>
            <Text style={styles.cardDescription}>
              Para participar, increva-se em <Text style={styles.textEvents}>Eventos</Text>, na Portonet, até 19/3. Os
              sorteados receberão o convite por e-mail em 24/3, já com o link
              para a participação no encontro.
            </Text>
            <Text style={styles.cardDescription}>
              Capriche no café!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cardDetails: {
    padding: 20,
  },
  cardTitle: {
    width: 280,
    fontSize: 16,
    color: '#43a8bf',
    marginBottom: 12
  },
  cardDescription: {
    color: 'black',
    marginBottom: 14,
    width: 340
  },
  textEvents: {
    color: '#1cbadd',
    textDecorationLine: 'underline',
  }
});


export default DetailsTextNew;