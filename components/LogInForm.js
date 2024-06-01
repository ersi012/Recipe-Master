import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import SubmitButton from "./SubmitButton";
import Input from "./Input";
import firebase from 'firebase';

const LogInForm = props => {
 const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const logInUser = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.acceptUser(email);
      })
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            props.acceptUser(email);
          })
          .catch(() => {
            props.rejectUser();
            firebase.auth().signOut();
          });
      });
  };
  return (
    <SafeAreaView>
      <View>
        <Input
            label="Email"
            value={ email }
            placeholder="mary@example.com"
            onChangeText={ email => setEmail( email )}
        />
        <Input
            label="Password"
            value={ password }
            placeholder="******"
            secureTextEntry={ true }
            onChangeText={ password => setPassword( password )}
        />
        <SubmitButton whenPressed={ logInUser}>
          Login or Register!
        </SubmitButton>
      </View>
    </SafeAreaView>
  );
};
export default LogInForm;