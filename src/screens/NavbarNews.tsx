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
        <View style={styles.columnIconsNews}>
          <View style={styles.contentMenu}>
            <Icon
              style={styles.iconN}
              name="newspaper-o"
              size={20}
              color="#43a8bf"
            />
            <Text style={styles.textNews}>Notícias</Text>
          </View>
        </View>
        <View style={styles.columnIconsNews}>
          <View style={styles.contentMenuE}>
            <Icon
              style={styles.iconE}
              name="calendar"
              size={20}
              color="#43a8bf"
            />
            <Text style={styles.textNews}>Eventos</Text>
          </View>
        </View>
        <View style={styles.columnIconsNews}>
          <View style={styles.contentMenu}>
            <Icon
              style={styles.iconR}
              name="handshake-o"
              size={20}
              color="#43a8bf"
            />
            <Text style={styles.textNews}>Recrutamento</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewColumnsNews: {
    flexDirection: 'row',
  },
  columnIconsNews: {
    width: 140,
    height: 60,
    backgroundColor: 'white',
  },
  contentMenu: {
    marginLeft: 40,
  },
  contentMenuE: {
    marginLeft: 46,
  },
  iconN: {
    marginTop: 14,
    marginLeft: 10,
  },
  iconE: {
    marginTop: 14,
    marginLeft: 10,
  },
  iconR: {
    marginTop: 14,
    marginLeft: 26,
  },
  textNews: {
    color: '#43a8bf',
    fontSize: 12,
  },
});

export default NavbarNews;
