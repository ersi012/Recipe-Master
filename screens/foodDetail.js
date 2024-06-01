import { StyleSheet, View, Image, Text, Button, Linking } from "react-native";

const FoodDetail = ({ route }) => {
  const {title, image, description, link } = route.params;
  return (
    <View style={styles.detailScreen}>
      <Text style={styles.foodHeading}>Food ingredients</Text>
      <View style={styles.foodDetailRow}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.foodDetailColumn}>
          <Text style={styles.foodName}>{title}</Text>
          <Text style={styles.foodDescription}>{description}</Text>
          <Button 
            title="More..."
            onPress={() =>
            Linking.openURL(link)
            }
            />
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;

const styles = StyleSheet.create({
  detailScreen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#2C3042",
  },
  foodHeading: {
    fontSize: 27,
    marginVertical: 20,
    color: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  foodDetailRow: {
    flexDirection: "row",
    alignSelf: "stretch",
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#4175B0",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
  },
  foodDetailColumn: {
    width: 186,
    justifyContent: "space-between",
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginLeft:8,
  },
  foodDescription: {
    fontSize: 16,
    marginVertical: 4,
    color: "white",
    marginLeft:8,
    marginRight:11,
  },
});
