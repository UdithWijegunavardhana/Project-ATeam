import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from './Src/Core/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import AuthStack from './Src/Navigation/AuthNavigator';
import AppDrawer from './Src/Navigation/DrawerNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {/* <AuthStack /> */}
        <AppDrawer />
      </NavigationContainer>
    </PaperProvider>
  );
}
