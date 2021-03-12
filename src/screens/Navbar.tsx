import React from 'react';
import {Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import NavbarNews from './NavbarNews';
import ListNews from './ListNews';
import Icon from 'react-native-vector-icons/FontAwesome';

const Navbar = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor="#004f7a"></StatusBar>
        <View style={styles.viewColumnsMenu}>
          <View style={styles.columnIconsMenu}>
            <Text
              onPress={() => Alert.alert('Menu!')}
              style={[styles.textNavbar, styles.textNavbarMenu]}>
              <Icon name="navicon" size={20} color="white" />
            </Text>
          </View>
          <View style={styles.columnIconsMenu}>
            <Text style={[styles.textMenuPortonet, styles.textNavbar]}>
              Porto<Text style={{fontWeight: '700'}}>net</Text>
            </Text>
          </View>
          <View style={styles.columnIconsMenu}>
            <Text style={styles.textNavbar}>PortoSeguro</Text>
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
    height: 50,
    backgroundColor: '#004f7a',
  },
  textNavbar: {
    color: 'white',
    marginTop: 15
  },
  textNavbarMenu: {
    marginLeft: 10
  },
  textMenuPortonet: {
    fontSize: 18,
    marginTop: 10
  },
});

export default Navbar;