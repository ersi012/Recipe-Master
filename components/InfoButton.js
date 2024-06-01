import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";  
import { useNavigation } from '@react-navigation/native';

const InfoButton = props => {
  const navigation = useNavigation();
  const { title, image, description, link} = props;
  
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FoodDetail', 
      {
         title ,image, description, link
      }
      )}
      style={styles.button}>
        <Text style={styles.buttonText}>i</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,
    alignSelf: "center",
    backgroundColor: "#2C3042",
    borderRadius: 20,
    marginLeft: 19,
    marginRight: 5,
    marginTop:7,
  },
  buttonText: {
    fontFamily: "Palatino-BoldItalic",
    alignSelf: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",

  }
});

export default InfoButton;
