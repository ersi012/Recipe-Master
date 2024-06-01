 import React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import InfoButton from './InfoButton';

const Card = (props) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: props.image
        }}
        style={styles.logo}
      />
      <View style={styles.content}>
        <Text style={styles.foodTitle}>{props.title}</Text>
        <InfoButton
          navigation={props.navigation}
          title={props.title}
          image={props.image}
          link={props.link}
          description={props.description}
        />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logo: {
    width:250, // Full width
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10, 
  },
  content: {
    padding: 10,
  },
  foodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3042',
    marginBottom: 8,
    alignSelf: "center"
  },
});
