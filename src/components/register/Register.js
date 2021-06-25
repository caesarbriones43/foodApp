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

const Register = (props) => {
  const [state, setState] = useState({
    username: "",
    fullname: "",
    phone: "",
    email: "",
    password: "",
    adress: "",
    type: "user",
  });

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (
      state.name === "" ||
      state.fullname === "" ||
      state.phone === "" ||
      state.email === "" ||
      state.password === "" ||
      state.adress === ""
    ) {
      alert("All fields are required");
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
      props.navigation.navigate("HomeReal");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.Title}>Sign up now , it's free and secure</Text>
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
          maxLength={30}
          placeholder="Full Name"
          onChangeText={(value) => handleChangeText("fullname", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          maxLength={15}
          placeholder="Phone Number"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <TextInput
          maxLength={20}
          placeholder="Email Adress"
          onChangeText={(value) => handleChangeText("email", value)}
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
      <View style={styles.inputGroup}>
        <TextInput
          maxLength={100}
          placeholder="Home Address"
          onChangeText={(value) => handleChangeText("adress", value)}
        />
      </View>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={styles.TextSignIn}
          onPress={() => props.navigation.navigate("Login")}
        >
          Already have an account? Sing in
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          color="#9D8AC1"
          title="Sing up"
          onPress={() => saveNewUser()}
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

export default Register;
