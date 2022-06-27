import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import TextInput from '../Components/TextInput';

export default function QuestionEditScreen() {
  const [textInput, setTextInput] = useState('');
  const onSave = () => {};
  return (
    <SafeAreaView>
      <View>
        <TextInput
          multiline
          style={Styles.input}
          placeholder="Enter Your Question Here..."
          numberOfLines={7}
          maxLength={200}
          onChangeText={text => setTextInput(text)}
        />
        <View style={{alignItems: 'flex-end', marginRight: 12}}>
          <Button mode="contained" style={{width: '30%'}} onPress={onSave}>
            POST
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = {
  input: {
    margin: 12,
  },
};
