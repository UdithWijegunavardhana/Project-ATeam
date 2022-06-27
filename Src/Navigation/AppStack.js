import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileEditScreen from '../Screens/ProfileEditScreen';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';
import PostedQuestionScreen from '../Screens/postedQuestionScreen';
import QuestionEditScreen from '../Screens/questionEditScreen';

const Stack = createNativeStackNavigator();
export default function AppStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Posted Questions"
        component={PostedQuestionScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Edit Question"
        component={QuestionEditScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Edit Profile"
        component={ProfileEditScreen}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}
