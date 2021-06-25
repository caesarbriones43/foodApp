import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Restaurant = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Restaurant Screen</Text>
      <Button title="go to back" onPress={() => navigation.goBack()}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Restaurant;
