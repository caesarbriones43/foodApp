import React, { useState } from "react";

import firebase from "../../database/firebase";

import {
  StyleSheet,
  View,
  Button,
  TextInput,
  ScrollView,
  Text,
  Image,
} from "react-native";

const CreateDishes = (props) => {
  const [state, setState] = useState({
    nameDish: "",
    descriptionDish: "",
    photoDish: "",
    nameCategory: "",
    priceDish: "",
    photoFlag: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewDish = async () => {
    if (state.nameDish === "") {
      alert("Please provide a name dish!");
    } else {
      await firebase.db.collection("dishes").add({
        nameDish: state.nameDish,
        descriptionDish: state.descriptionDish,
        photoDish: state.photoDish,
        priceDish: state.priceDish,
        photoFlag: state.photoFlag,
        nameCategory: state.nameCategory,
      });
      alert("Guardado!");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.Title}>Create a Dish</Text>
      </View>
      <Image
        style={styles.imageLogin}
        source={require("../../../assets/vault.png")}
      />
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="nameDish"
          onChangeText={(value) => handleChangeText("nameDish", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="descriptionDish"
          onChangeText={(value) => handleChangeText("descriptionDish", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="photoDish"
          onChangeText={(value) => handleChangeText("photoDish", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="priceDish"
          onChangeText={(value) => handleChangeText("priceDish", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="photoFlag"
          onChangeText={(value) => handleChangeText("photoFlag", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="nameCategory"
          onChangeText={(value) => handleChangeText("nameCategory", value)}
        />
      </View>
      <View>
        <Button title="Saver dish" onPress={() => saveNewDish()}></Button>
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

export default CreateDishes;
