import React from "react";
import { Text, View, StyleSheet,Image, Button } from "react-native";
import icon from '../components/Media/icon.png';

const Account = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to your account!</Text>
      <Image source={icon} style={styles.logo}/>
      <Button title="Settings"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  logo:{
    width: 100,
    height: 100,
    marginBottom: 200,
  }
});

export default Account;
