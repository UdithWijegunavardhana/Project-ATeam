import * as React from "react";
import { View, Text , StyleSheet } from "react-native";
import { theme } from "../Core/theme";
import TextInput from "../Components/TextInput";
import { Button } from "react-native-paper";

function SignUpScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text style={Styles.title}>ATeam</Text>
        <Text style={Styles.title}>Software</Text>
      </View>
      <View style={{ width: "90%", marginTop: "3%" }}>
        <View style={{flexDirection:'row' , width:"50%"}}>
          <TextInput 
            mode="outlined" 
            style={Styles.firstNameInput} l
            label="First Name" 
          />
          <TextInput 
            mode="outlined" 
            style={Styles.lastNameInput} l
            label="Last Name" 
          />
        </View>
        <TextInput 
          mode="outlined" 
          style={Styles.input} l
          label="Email" 
          keyBoardType="email-address"
        />
        <TextInput 
          mode="outlined" 
          style={Styles.input} l
          label="Date of Birth" 
          keyBoardType="numeric"
        />
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
    height: 48,
    alignSelf: "center",
  },
  firstNameInput: {
    height: 47,
    marginLeft: 17,
  },
  lastNameInput: {
    height: 47,
    marginRight: 17,
  },
  buttonContainer: {
    flexDirection: "column",
    width: "75%",
    alignSelf: "center",
  },
  Button: {
    marginTop: 20,
    height: 46,
    width: "60%",
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: "center",
    marginTop: 12,
    color: theme.colors.white,
  },
});

export default SignUpScreen;
