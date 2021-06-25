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

const LoginAdmin = (props) => {
  const [state, setState] = useState({
    username: "",
    fullname: "",
    phone: "",
    email: "",
    password: "",
    adress: "",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("Please provide a name!");
    } else {
      await firebase.db.collection("users").add({
        username: state.username,
        fullname: state.fullname,
        phone: state.phone,
        email: state.email,
        password: state.password,
        adress: state.adress,
        type: state.type,
      });
      alert("Guardado!");
      props.navigation.navigate("HomeScreen");
    }
  };

  // console.log("username:",state.username);
  // console.log("password:",state.password);

  const authUser = () => {
    // let usuario = state.username;
    // let password = state.password;
    // let authRef = firebase.db.collection("users");
    // let query = authRef.where("username", "==", "Cesar");
    // console.log(query);
    firebase.db
      .collection("users")
      .where("username", "==", state.username)
      .where("password", "==", state.password)
      .where("type", "==", "admin")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          props.navigation.navigate("Admin");

          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          // alert("Logged");
          // props.navigation.navigate("HomeReal");
          // console.log(state.password);
        });
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
        // alert("Wrong password or username");
      });
  };

  console.log("####", state.type);

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.Title}>Login</Text>
      </View>
      <Image
        style={styles.imageLogin}
        source={require("../../../assets/vault.png")}
      />
      <View style={styles.inputGroup}>
        <TextInput
          maxLength={10}
          placeholder="Username"
          onChangeText={(value) => handleChangeText("username", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          maxLength={14}
          placeholder="Password"
          onChangeText={(value) => handleChangeText("password", value)}
          secureTextEntry={true}
        />
      </View>
      <Text
        style={styles.TextSignIn}
        onPress={() => props.navigation.navigate("Login")}
      >
        Login as User
      </Text>
      <View style={{ padding: 10 }}>
        <Button
          color="#9D8AC1"
          title="Sing in"
          onPress={() => authUser()}
          // onPress={() => props.navigation.navigate("HomeScreen")}
        ></Button>
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

export default LoginAdmin;
