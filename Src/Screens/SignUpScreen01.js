import * as React from "react";
import { View, Text , StyleSheet } from "react-native";
import { theme } from "../Core/theme";
import TextInput from "../Components/TextInput";
import { Button } from "react-native-paper";

function SignUpScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{marginBottom:"45%"}}>
        <Text style={Styles.title}>ATeam</Text>
        <Text style={Styles.title}>Software</Text>
      </View>
      <View style={{ width: "90%"}}>
        <View style={{flexDirection:'row' , width:"50%"}}>
          <TextInput 
            mode="outlined" 
            style={Styles.firstNameInput} 
            label="First Name" 
          />
          <TextInput 
            mode="outlined" 
            style={Styles.lastNameInput} 
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
      </View>
      <Button
        style={Styles.Button}
        mode="contained"
        uppercase={false}
        labelStyle={Styles.labelStyle}
        onPress={() => navigation.navigate("SignUpSecond")}
      >
        Next
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
  firstNameInput: {
    height: 43,
    marginLeft: 17,
  },
  lastNameInput: {
    height: 43,
    marginRight: 17,
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

export default SignUpScreen;
