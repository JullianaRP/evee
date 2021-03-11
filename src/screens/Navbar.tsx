import React from 'react';
import { Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import NavbarNews from './NavbarNews';
import ListNews from './ListNews';

const Navbar = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor="#004f7a"></StatusBar>
          <View style={styles.viewColumnsMenu}>
            <View style={styles.columnIconsMenu}>
              <Text
                onPress={() => Alert.alert('Menu!')}
                style={styles.textMenu}>
                Menu
              </Text>
            </View>
            <View style={styles.columnIconsMenu}>
              <Text style={styles.textMenu}>PortoNET</Text>
            </View>
            <View style={styles.columnIconsMenu}>
              <Text style={styles.textMenu}>PortoSeguro</Text>
            </View>
          </View>
          <NavbarNews />
          <ListNews />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  viewColumnsMenu: {
    flexDirection: 'row',
  },
  columnIconsMenu: {
    width: 160,
    height: 40,
    backgroundColor: '#004f7a',
  },
  textMenu: {
    color: "white"
  },
});

export default Navbar;