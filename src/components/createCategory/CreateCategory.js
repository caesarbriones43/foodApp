import React, { useState } from "react";

import firebase from "../../database/firebase";

import {
  ImageBackground,
  StyleSheet,
  View,
  Button,
  TextInput,
  ScrollView,
  Text,
  Image,
  Alert,
} from "react-native";

const CreateCategory = (props) => {
  const [state, setState] = useState({
    photoCategory: "",
    nameCategory: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewCategory = async () => {
    if (state.nameCategory === "") {
      alert("Please provide a nameCategory!");
    } else {
      await firebase.db.collection("categories").add({
        nameCategory: state.nameCategory,
        photoCategory: state.photoCategory,
      });
      alert("Guardado!");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.Title}>Create a Category</Text>
      </View>
      <Image
        style={styles.imageLogin}
        source={require("../../../assets/vault.png")}
      />
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="nameCategory"
          onChangeText={(value) => handleChangeText("nameCategory", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="photoCategory"
          onChangeText={(value) => handleChangeText("photoCategory", value)}
        />
      </View>
      <View>
        <Button title="Saver user" onPress={() => saveNewCategory()}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: "#FFFFFF",
  },
  inputGroup: {
    // backgroundColor: "#FFFFFF",
    flex: 1,
    padding: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#9D8AC1",
  },
  imageLogin: {
    flex: 1,
    height: 230,
  },
  Title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#4E187E",
  },
  TextSignIn: {
    textAlign: "center",
    color: "blue",
  },
});

export default CreateCategory;
