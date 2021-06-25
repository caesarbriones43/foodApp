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

const OrderDetails = (props) => {
  const initialState = {
    id: "",
    fullname: "",
    nameDish: "",
    cardNumber: "",
    cvv: "",
    dateExpiration: "",
    delivered: "",
  };
  const [user, setUser] = useState(initialState);

  const getUserById = async (id) => {
    const dbRef = firebase.db.collection("orders").doc(id);
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
      .collection("orders")
      .doc(props.route.params.userId);
    await dbRef.delete();
    props.navigation.navigate("ListDish");
  };

  const updateUser = async () => {
    const dbRef = firebase.db.collection("orders").doc(user.id);
    await dbRef.set({
      id: user.id,
      nameDish: user.nameDish,
      fullname: user.fullname,
      cvv: user.cvv,
      cardNumber: user.cardNumber,
      dateExpiration: user.dateExpiration,
      delivered: user.delivered,
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
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>Order Detail</Text>
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>nameDish</Text>
        <TextInput
          placeholder="nameDish"
          value={user.nameDish}
          editable={false}
          onChangeText={(value) => handleChangeText("nameDish", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>fullname</Text>
        <TextInput
          editable={false}
          placeholder="fullname"
          value={user.fullname}
          onChangeText={(value) => handleChangeText("fullname", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>cvv</Text>
        <TextInput
          editable={false}
          placeholder="cvv"
          value={user.cvv}
          onChangeText={(value) => handleChangeText("cvv", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>cardNumber</Text>
        <TextInput
          editable={false}
          placeholder="cardNumber"
          value={user.cardNumber}
          onChangeText={(value) => handleChangeText("cardNumber", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>dateExpiration</Text>
        <TextInput
          editable={false}
          placeholder="dateExpiration"
          value={user.dateExpiration}
          onChangeText={(value) => handleChangeText("dateExpiration", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>delivered</Text>
        <TextInput
          placeholder="delivered"
          value={user.delivered}
          onChangeText={(value) => handleChangeText("delivered", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={{ fontWeight: "bold" }}>order id</Text>
        <TextInput
          editable={false}
          placeholder="order id"
          value={user.id}
          onChangeText={(value) => handleChangeText("id", value)}
        />
      </View>
      <View style={{ padding: 10 }}>
        <View style={{ padding: 5 }}>
          <Button
            title="Update Order"
            color="#19AC52"
            onPress={() => updateUser()}
          ></Button>
        </View>
        <View style={{ padding: 5 }}>
          <Button
            title="Delete Order"
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

export default OrderDetails;
