import * as React from 'react';
import {Image} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import ForumScreen from '../Screens/ForumScreen';
import GraphsScreen from '../Screens/GraphsScreen';
import PackagesScreen from '../Screens/PackagesScreen';
import ArticleBottomTab from './ArticleBottomTabs';
import EventBottomTab from './EventBottomTab';
import CryptoScreen from '../Screens/CryptoScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const Drawer = createDrawerNavigator();

function ProfilePic() {
  return (
    <Image
      style={{width: 37, height: 37, marginRight: 15}}
      source={require('../Assets/Profile.png')}
    />
  );
}

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {/* <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      /> */}
      <DrawerItem
        label="Log Out"
        // onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
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
        name="Articles "
        component={ArticleBottomTab}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Events "
        component={EventBottomTab}
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
        name="Graphs"
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
      <Drawer.Screen
        name="Cripto Type"
        component={CryptoScreen}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation}) => ({
          headerRight: props => <ProfilePic {...props} />,
        })}
      />
    </Drawer.Navigator>
  );
}
