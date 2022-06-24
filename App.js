import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import LandingScreen from "./Src/Screens/LandingScreen";
import SignInScreen from "./Src/Screens/SignInScreen";
import SignUpScreen from "./Src/Screens/SignUpScreen";
import HomeScreen from "./Src/Screens/ArticleScreen";
import AddArticleScreen from "./Src/Screens/AddArticleScreen";
import { theme } from "./Src/Core/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./Src/Screens/ProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const homeTab = createBottomTabNavigator();

function BottomTab() {
  return (
    <homeTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Articles") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Add Article") {
            iconName = focused ? "add-circle" : "add";
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <homeTab.Screen name="Articles" component={HomeScreen} />
      <homeTab.Screen name="Add Article" component={AddArticleScreen} />
      <homeTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
        }}
      />
    </homeTab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LangingPage"
            component={LandingScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen
            name="Home"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
