import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
} from "react-native";

const ButtonCustom = (props) => {
  return (
    <View style={styles.container}>
      <TouchableNativeFeedback style={styles.buttonSide1} activeOpacity={0.8}>
        <Text style={styles.text}>{props.TextButton}</Text>
      </TouchableNativeFeedback>
      {/* <TouchableOpacity style={styles.buttonSide1} activeOpacity={0.8}>
        <Text style={styles.text}>{props.TextButton}</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  buttonSide1: {
    alignItems: "center",
    backgroundColor: "#FF7FA0",
    padding: 10,
    width: 250,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
  },
});

export default ButtonCustom;
