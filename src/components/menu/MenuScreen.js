import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const MenuScreen = ({ navigation }) => {
  const [images, setimages] = useState([
    require("../../../assets/Food.png"),
    require("../../../assets/Coronavirus.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Coronavirus.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Food.png"),
  ]);
  return (
    <View style={styles.container}>
      <Text>MenuScreen</Text>
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

export default MenuScreen;
