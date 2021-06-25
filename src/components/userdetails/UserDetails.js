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

const UserDetails = (props) => {
  const initialState = {
    id: "",
    username: "",
    fullname: "",
    phone: "",
    email: "",
    password: "",
    adress: "",
    type: "user",
  };
  const [user, setUser] = useState(initialState);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("users").doc(id);
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
      .collection("users")
      .doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate("ListUsers");
  };

  const updateUser = async () => {
    const dbRef = firebase.db.collection("users").doc(user.id);
    await dbRef.set({
      username: user.username,
      fullname: user.fullname,
      phone: user.phone,
      email: user.email,
      password: user.password,
      adress: user.adress,
      type: user.type,
    });
    setUser(initialState);
    alert("User updated successfuly");
    props.navigation.navigate("ListUsers");
  };

  const openConfirmationAlert = () => {
    Alert.alert("Remove The User", "Are you sure?", [
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

  console.log(user.type);

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Users</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>Username</Text>
        <TextInput
          placeholder="username"
          value={user.username}
          onChangeText={(value) => handleChangeText("username", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>Fullname</Text>
        <TextInput
          placeholder="fullname"
          value={user.fullname}
          onChangeText={(value) => handleChangeText("fullname", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>Phone</Text>
        <TextInput
          placeholder="phone"
          value={user.phone}
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>E-mail</Text>
        <TextInput
          placeholder="email"
          value={user.email}
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>Password</Text>
        <TextInput
          placeholder="password"
          value={user.password}
          onChangeText={(value) => handleChangeText("password", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>Delivery Adress</Text>
        <TextInput
          placeholder="adress"
          value={user.adress}
          onChangeText={(value) => handleChangeText("adress", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>Type User</Text>
        <TextInput
          placeholder="user type"
          value={user.type}
          onChangeText={(value) => handleChangeText("type", value)}
        />
      </View>
      <View style={{ padding: 10 }}>
        <View style={{ padding: 5 }}>
          <Button
            title="Update User"
            color="#19AC52"
            onPress={() => updateUser()}
          ></Button>
        </View>
        <View style={{ padding: 5 }}>
          <Button
            title="Delete User"
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

export default UserDetails;
