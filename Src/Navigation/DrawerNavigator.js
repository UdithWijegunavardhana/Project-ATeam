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
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import ArticleScreen from '../Screens/ArticleScreen';
import AddArticleScreen from '../Screens/AddArticleScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import EventsScreen from '../Screens/EventsScreen';
import ForumScreen from '../Screens/ForumScreen';
import GraphsScreen from '../Screens/GraphsScreen';
import PackagesScreen from '../Screens/PackagesScreen';

const homeTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function ProfilePic() {
  return (
    <Image
      style={{width: 37, height: 37, marginRight: 15}}
      source={require('../Assets/Profile.png')}
    />
  );
}

function BottomTab({navigation}) {
  return (
    <homeTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Articles') {
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
      <homeTab.Screen name="Article" component={ArticleScreen} />
      <homeTab.Screen name="Add Article" component={AddArticleScreen} />
      <homeTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </homeTab.Navigator>
  );
}

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

export default function AppDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="Articles"
        component={BottomTab}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Events"
        component={EventsScreen}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Forum"
        component={ForumScreen}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Graph"
        component={GraphsScreen}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Packages"
        component={PackagesScreen}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
    </Drawer.Navigator>
  );
}
