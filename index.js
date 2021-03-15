// import 'react-native-gesture-handler';

// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';

// const App = () => {
//   return (
//     <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
//   );
// };

// export default App;

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);