import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";
import firebase from "firebase" ;
import Spinner from "../components/Spinner";

const AddPetScreen = () => {
    const [ title, setTitle ] = useState( "" );
    const [ image, setImage ] = useState( "" );
    const [ link, setLink ] = useState( "" );
    const [ description, setDescription] = useState( "" );
    const [ message, setMessage ] = useState( "Waiting for your input" );
    const [ isLoading, setIsLoading ] = useState( false );

    const addRecord = () => {
      setIsLoading( true ) ;
      firebase.database().ref( "foods" ).push(
        {
          title,
          image,
          link,
          description,
        }
      )
      .then(
        data => {
          setMessage( `Recipe added!` ) ;
          setIsLoading(false) ;
        }
      )
      .catch(
        error => {
          setMessage( `There was a problem adding your recipe: ${error}` ) ;
          setIsLoading( false ) ;
        }
      )
  }
  const renderButton = () => {
		if ( isLoading ) {
			return <Spinner />
		}
		else {
			return <SubmitButton whenPressed={ addRecord} >Add recipe</SubmitButton>	
    }
	}

	return (
		<View style={ styles.screen }>
			<View style={ styles.inputContainer }>
			<Input
				label="Recipe"
				placeholder="Lassie"
				value={ title }
				onChangeText={
					( title ) => setTitle( title )
				}
			/>
			<Input
				label="Image"
				placeholder="https://example.com/lassie.jpg"
				value={ image }
				onChangeText={
					( image ) => setImage( image )
				}
			/>
			<Input
				label="Web link"
				placeholder="https://en.wikipedia.org/Lassie"
				value={ link }
				onChangeText={
					( link) => setLink( link )
				}
			/>
      <Input
				label="Info"
				placeholder="https://en.wikipedia.org/Lassie"
				value={description }
				onChangeText={
					( description ) => setDescription( description)
				}
			/>
      <View>
        { renderButton() }	
      </View>
		</View>
    <Text style={ styles.message }>{ message }</Text>
  </View>
	);
};

export default AddPetScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        width: "80%",
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#F0F8FF",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonContainer: {
        marginTop: 20,
    },
    message: {
        marginTop: 20,
        fontSize: 18,
        color: "#2C3042",
    },
});