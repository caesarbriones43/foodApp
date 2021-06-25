import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  ActivityIndicator,
  Alert,
  Text,
} from "react-native";
import firebase from "../../database/firebase";

const DishDetails = (props) => {
  const initialState = {
    id: "",
    descriptionDish: "",
    nameDish: "",
    photoDish: "",
    priceDish: "",
    photoFlag: "",
    nameCategory: "",
  };
  const [user, setUser] = useState(initialState);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("dishes").doc(id);
    const doc = await dbRef.get();
    const user = doc.data();
    setUser({
      ...user,
      id: doc.id,
    });
    setLoading(false);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  const handleChangeText = (name, value) => {
    setUser({ ...user, [name]: value });
  };

  const deleteUser = async () => {
    const dbRef = firebase.db
      .collection("dishes")
      .doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate("ListDish");
  };

  const updateUser = async () => {
    const dbRef = firebase.db.collection("dishes").doc(user.id);
    await dbRef.set({
      nameDish: user.nameDish,
      descriptionDish: user.descriptionDish,
      priceDish: user.priceDish,
      photoDish: user.photoDish,
      photoFlag: user.photoFlag,
      nameCategory: user.nameCategory,
    });
    setUser(initialState);
    alert("User updated successfuly");
    props.navigation.navigate("ListDish");
  };

  const openConfirmationAlert = () => {
    Alert.alert("Remove The Dish", "Are you sure?", [
      {
        text: "Yes",
        onPress: () => deleteUser(),
      },
      {
        text: "NO",
        onPress: () => console.log("Cancelado"),
      },
    ]);
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#9e9e9e"></ActivityIndicator>
      </View>
    );
  }

  return (
    // descriptionDish: "",
    // nameDish: "",
    // photoDish: "",
    // priceDish: "",
    // photoFlag: "",
    // nameCategory: "",
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Dishes</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>nameDish</Text>
        <TextInput
          placeholder="nameDish"
          value={user.nameDish}
          onChangeText={(value) => handleChangeText("nameDish", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>descriptionDish</Text>
        <TextInput
          placeholder="descriptionDish"
          value={user.descriptionDish}
          onChangeText={(value) => handleChangeText("descriptionDish", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>priceDish</Text>
        <TextInput
          placeholder="priceDish"
          value={user.priceDish}
          onChangeText={(value) => handleChangeText("priceDish", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>E-photoDish</Text>
        <TextInput
          placeholder="photoDish"
          value={user.photoDish}
          onChangeText={(value) => handleChangeText("photoDish", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>photoFlag</Text>
        <TextInput
          placeholder="photoFlag"
          value={user.photoFlag}
          onChangeText={(value) => handleChangeText("photoFlag", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>nameCategory</Text>
        <TextInput
          placeholder="nameCategory"
          value={user.nameCategory}
          onChangeText={(value) => handleChangeText("nameCategory", value)}
        />
      </View>
      <View style={{ padding: 10 }}>
        <View style={{ padding: 5 }}>
          <Button
            title="Update Dish"
            color="#19AC52"
            onPress={() => updateUser()}
          ></Button>
        </View>
        <View style={{ padding: 5 }}>
          <Button
            title="Delete Dish"
            color="#ff5252"
            onPress={() => openConfirmationAlert()}
          ></Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
});

export default DishDetails;
