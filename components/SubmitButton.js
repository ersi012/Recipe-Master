import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SubmitButton = props => {
  return(
  <TouchableOpacity onPress={props.whenPressed} style={styles.button}> 
    <Text style={styles.buttonText}>{props.children} </Text>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2C3042",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default SubmitButton;
