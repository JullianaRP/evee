import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const Navbar = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor="#004f7a"></StatusBar>
        <View style={styles.viewColumnsMenu}>
          <View style={styles.columnIconsMenu}>
            <Text style={styles.textMenu}>Menu</Text>
          </View>
          <View style={styles.columnIconsMenu}>
            <Text style={styles.textMenu}>PortoNET</Text>
          </View>
          <View style={styles.columnIconsMenu}>
            <Text style={styles.textMenu}>PortoSeguro</Text>
          </View>
        </View>
        <View style={styles.viewColumnsNews}>
          <View style={styles.columnIconsNews}>
            <Text>Notícias</Text>
          </View>
          <View style={styles.columnIconsNews}>
            <Text>Eventos</Text>
          </View>
          <View style={styles.columnIconsNews}>
            <Text>Recrutamento</Text>
          </View>
        </View>
        <ScrollView style={styles.scrollView}></ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: 20,
  },
  viewColumnsMenu: {
    flexDirection: 'row',
    width: 100,
  },
  columnIconsMenu: {
    width: 160,
    height: 40,
    backgroundColor: '#004f7a',
  },
  textMenu: {
    color: "white"
  },
  viewColumnsNews: {
    flexDirection: 'row',
    width: 100,
  },
  columnIconsNews: {
    width: 160,
    height: 50,
    backgroundColor: 'white',
  },
});

export default Navbar;