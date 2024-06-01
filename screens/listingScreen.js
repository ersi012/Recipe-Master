import React, { useState, useEffect } from "react";
import { View, Button, ScrollView, StyleSheet, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import firebase from "firebase";
import Card from '../components/Card'; 

export default function FoodsScreen() {
    const navigation = useNavigation();
    const [foods, setFoods] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        firebase
            .database()
            .ref("foods")
            .limitToLast(10)
            .on(
                "value",
                (snapshot) => {
                    setFoods(snapshot.toJSON());
                    setIsLoading(false);
                }
            );
    }, []);

    const foodObjects = Object.values(foods).reverse();

    const renderFoods = () => {
        if (isLoading) {
            return <Text style={styles.loadingMessage}>Loading foods...</Text>;
        } else {
            return foodObjects.map((food) => (
                <Card
                    navigation={navigation}
                    title={food.title}
                    image={food.image}
                    link={food.link}
                    description={food.description}
                />
            ));
        }
    };

    return (
        <View style={styles.container}>
            <Button
                title="Add Recipe"
                color="#2C3042"
                onPress={() => navigation.navigate("AddFood")}
            />
            <ScrollView>{renderFoods()}</ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
