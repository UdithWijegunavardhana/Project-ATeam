import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import MassagesScreen from "./Src/Screens/MassagesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider > 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Massages" component={MassagesScreen}/>
          <Stack.Screen 
            name="Chat" 
            component={ChatScreen} 
            options={({route}) => ({
              title: route.params.userName,
              headerBackTitleVisible: false,
            })}
          />       
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
