import * as React from "react";
import { View, Text , StyleSheet } from "react-native";
import { theme } from "../Core/theme";
import TextInput from "../Components/TextInput";
import { Button } from "react-native-paper";

function SignUpScreenTwo({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View  style={{marginBottom:"45%"}}>
        <Text style={Styles.title}>ATeam</Text>
        <Text style={Styles.title}>Software</Text>
      </View>
      <View style={{ width: "90%", marginTop: "20%" , justifyContent:'flex-end' }}>
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={true}
          style={Styles.input}
        />
        <TextInput
          mode="outlined"
          label="Confirm Password"
          secureTextEntry={true}
          style={Styles.input}
        />
      </View>
      <Button
        style={Styles.Button}
        mode="contained"
        uppercase={false}
        labelStyle={Styles.labelStyle}
        onPress={() => navigation.navigate("Home")}
      >
        Sign Up
      </Button>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
  },
  input: {
    width: "90%",
    height: 43,
    alignSelf: "center",
  },
  buttonContainer: {
    flexDirection: "column",
    width: "75%",
    alignSelf: "center",
  },
  Button: {
    marginTop: 20,
    height: 44,
    width: "60%",
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 10,
    color: theme.colors.white,
  },
});

export default SignUpScreenTwo;
