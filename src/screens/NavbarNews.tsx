import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavbarNews = () => {
  return (
    <>
      <View style={styles.viewColumnsNews}>
        <Text style={styles.columnIconsNews}>
          <Icon name="home" size={18} color="#999" />
        </Text>
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
