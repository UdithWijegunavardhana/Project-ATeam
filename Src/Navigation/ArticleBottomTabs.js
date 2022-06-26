import * as React from 'react';
import {Image} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {theme} from '../Core/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {IconButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ArticleScreen from '../Screens/ArticleScreen';
import AddArticleScreen from '../Screens/AddArticleScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import EventsScreen from '../Screens/EventScreen';
import ForumScreen from '../Screens/ForumScreen';
import GraphsScreen from '../Screens/GraphsScreen';
import PackagesScreen from '../Screens/PackagesScreen';
import AddEventsScreen from '../Screens/AddEventScreen';

const articleTab = createBottomTabNavigator();

export default function ArticleBottomTab({navigation}) {
  return (
    <articleTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Article') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Add Article') {
            iconName = focused ? 'add-circle' : 'add';
          }
          // else if (route.name === 'Profile') {
          //   iconName = focused ? 'ios-person' : 'ios-person-outline';
          // }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <articleTab.Screen name="Article" component={ArticleScreen} />
      <articleTab.Screen name="Add Article" component={AddArticleScreen} />
      {/* <articleTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      /> */}
    </articleTab.Navigator>
  );
}

const eventTab = createBottomTabNavigator();

function EventBottomTab({navigation}) {
  return (
    <eventTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Article') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Add Article') {
            iconName = focused ? 'add-circle' : 'add';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person' : 'ios-person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <eventTab.Screen name="Articles" component={ArticleScreen} />
      <eventTab.Screen name="Add Article" component={AddArticleScreen} />
      <eventTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </eventTab.Navigator>
  );
}
