import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
const News = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor="#004f7a"></StatusBar>
        <View style={styles.viewLeft}>
          <Text>Menu</Text>
        </View>
        <View style={styles.viewLeft}>
          <Text>PortoNET</Text>
        </View>
        <View>
          <Text>PortoSeguro</Text>
        </View>
        <ScrollView style={styles.scrollView}></ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: 20,
  },
  viewLeft: {
    flexDirection: 'column-reverse'
  }
});

export default News;