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
        <View style={styles.columnIconsMenu}>
          <View style={styles.viewColumnsMenu}>
            <Text
              onPress={() => Alert.alert('Menu!')}
              style={[styles.textNavbar, styles.textNavbarMenu]}>
              <Icon name="navicon" size={20} color="white" />
            </Text>
            <Text style={[styles.textNavbar, styles.textMenuPortonet]}>
              Porto<Text style={{fontWeight: '700'}}>net</Text>
            </Text>
            <Text style={[styles.textNavbar, styles.textMenuPortoSeguro]}>
              PortoSeguro
            </Text>
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
    width: 'auto',
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
    marginLeft: 145,
  },
  textMenuPortoSeguro: {
    marginLeft: 80,
  },
});

export default Navbar;