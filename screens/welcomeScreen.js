import React, { useState } from "react";
import { View, StyleSheet, Text, Alert, Image} from "react-native";
import LogInForm from "../components/LogInForm";
import SubmitButton from "../components/SubmitButton";
import applogo from "../components/Media/applogo.png";

const WelcomeScreen = ({ navigation }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accountName, setAccountName] = useState("");

  const acceptUser = (email) => {
    setIsLoggedIn(true);
    Alert.alert(`Welcome ${email}!`);
    setAccountName(email);
  };

  const rejectUser = () => {
    setIsLoggedIn(false);
    Alert.alert(`We're sorry, but those aren't valid credentials`);
  };

  return (
    <View style={styles.welcomeScreen}>
    <Image source={applogo}  style={styles.logo}/>
      {!isLoggedIn ? (
        // The user is not logged in.
        <LogInForm acceptUser={acceptUser} rejectUser={rejectUser} />
      ) : (
        // The user has logged in.
        <View>
          <Text style={styles.welcomeText}>{accountName}</Text>
          <SubmitButton whenPressed={() => navigation.navigate("FoodListing" )}>
            Check your recipes
          </SubmitButton>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
    color: "teal",
    marginLeft:10,
    marginRight: 20,
  },
  logo:{
    width: 200,
    height: 200,
    marginBottom: 50,
  }
});

export default WelcomeScreen;
