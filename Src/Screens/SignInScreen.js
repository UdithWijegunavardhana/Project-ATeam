import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInput from '../Components/TextInput';
import {Button} from 'react-native-paper';
import {theme} from '../Core/theme';
import {AuthContext} from '../Core/Utils';

function SignInScreen({navigation}) {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {signIn} = React.useContext(AuthContext);

  function signInPressed() {
    signIn();
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      <View style={{marginTop: '35%'}}>
        <Text style={Styles.title}>ATeam</Text>
        <Text style={Styles.title}>Software</Text>
      </View>
      <View style={{width: '90%', marginTop: '43%'}}>
        <TextInput mode="outlined" style={Styles.input} l label="User Name" />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={true}
          style={Styles.input}
        />
      </View>
      <Button
        style={Styles.Button}
        mode="contained"
        uppercase={false}
        labelStyle={Styles.labelStyle}
        onPress={signInPressed}>
        Sign In
      </Button>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    width: '90%',
    height: 48,
    marginTop: 8,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '75%',
    alignSelf: 'center',
  },
  Button: {
    marginTop: 20,
    height: 46,
    width: '60%',
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 12,
    color: theme.colors.white,
  },
});

export default SignInScreen;
