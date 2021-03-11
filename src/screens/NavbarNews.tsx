import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const NavbarNews = () => {
  return (
    <>
      <View style={styles.viewColumnsNews}>
        <Text style={styles.columnIconsNews}>Notícias</Text>
        <Text style={styles.columnIconsNews}>Eventos</Text>
        <Text style={styles.columnIconsNews}>Recrutamento</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewColumnsNews: {
    flexDirection: 'row',
  },
  columnIconsNews: {
    width: 160,
    height: 50,
    backgroundColor: 'white',
  },
});

export default NavbarNews;
