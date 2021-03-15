import React from 'react';
import Login from './screens/Login';
import Navbar from './screens/Navbar';
import DetailsNew from './screens/DetailsNew';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Navbar" component={Navbar} />
          <Stack.Screen name="DetailsNew" component={DetailsNew} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
