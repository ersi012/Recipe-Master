import React from "react";
import { View, Text, TextInput } from "react-native";

const Input= (props) => {
  return (
  <View style={styles.inputRow}>
    <View>
      <Text style={styles.label}>{props.label}</Text>
    </View>
    <View>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  </View>
  );
}

export default Input;

const styles = {
  inputRow: {
    flexDirection: "row",
    height: 40,
    width: '80',
    marginBottom: 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    alignSelf: "flex-start",
    color: "teal"
  },
  input: {
    color: "black",
    paddingHorizontal: 5,
    fontSize: 18,
    alignSelf: "flex-end",
    height: 24,
    width: 230,
    backgroundColor: "azure",
    maxWidth: "70%",
  }
};



