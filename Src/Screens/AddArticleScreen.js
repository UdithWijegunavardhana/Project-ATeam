import * as React from "react";
import { View, Text , StyleSheet } from "react-native";
import { Button , TextInput } from 'react-native-paper';
import {theme} from '../Core/theme';
// import Button from "../Components/Button";

function AddArticleScreen({ navigation }) {

  return (
    <View style={Styles.container}>
      
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "column",
    width: "75%",
    marginTop: "90%",  
  },
  Button: {
    marginTop: '10%',
    height : 46,
    borderRadius: 8,
    backgroundColor: theme.colors.primary,
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 12,
    color: theme.colors.white,
  },
  
});

export default AddArticleScreen;
