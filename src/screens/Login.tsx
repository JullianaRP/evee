import React from 'react';
import { Text, StatusBar, StyleSheet, SafeAreaView, ScrollView, View, Image, TextInput, Button, Alert } from 'react-native';


const Login = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} backgroundColor="#004f7a"></StatusBar>
        <ScrollView style={styles.scrollView}>
          <View style={styles.containerImage}>
            <Image
              style={styles.logoReact}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>
          <Text style={styles.text}>
            Acesse com os mesmos dados que você usa para se logar na Portonet.
          </Text>
          <View>
            <TextInput
              style={styles.textInputBorder}
              placeholder="Digite sua matrícula"></TextInput>
            <TextInput
              style={styles.textInput}
              placeholder="Digite a senha"
              secureTextEntry={true}></TextInput>
          </View>
          <View>
            <Text style={styles.textFooter}>
              Esqueceu a sua senha ou matrícula?
            </Text>
            <Text style={styles.textFooter}>
              Ligue para: <Text style={styles.textPhone}>(11) 3366-3358</Text>
            </Text>
          </View>
          <View style={styles.containerButton}>
            <Button
              onPress={() => Alert.alert('Logou!')}
              title="Entrar"
              color="#00b1fd"
              accessibilityLabel="Botão de entrar no aplicativo"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004f7a',
    justifyContent: 'center',
  },
  scrollView: {
    marginTop: 20,
  },
  containerImage: {
    alignItems: 'center',
    marginBottom: 30,
    marginHorizontal: 15,
  },
  logoReact: {
    width: 50,
    height: 50,
  },
  text: {
    color: 'white',
    width: 'auto',
    fontSize: 16,
    marginBottom: 16,
    marginHorizontal: 15,
  },
  textInputBorder: {
    height: 50,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  textInput: {
    height: 50,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    marginBottom: 30,
  },
  textFooter: {
    color: 'white',
    width: 'auto',
    fontSize: 14,
    marginHorizontal: 15,
  },
  textPhone: {
    textDecorationLine: 'underline',
  },
  containerButton: {
    marginTop: 20,
    marginHorizontal: 15,
  }
});

export default Login;
