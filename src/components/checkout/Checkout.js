import React, { useState, useEffect } from "react";

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
import { color } from "react-native-reanimated";

const Checkout = (props) => {
  const initialState = {
    id: "",
    descriptionDish: "",
    nameDish: "",
    photoDish: "",
    priceDish: "",
    photoFlag: "",
    nameCategory: "",
  };

  const [state, setState] = useState({
    id: "",
    address: "",
    fullname: "",
    cardNumber: "",
    cvv: "",
    dateExpiration: "",
    delivered: "false",
    nameDish: "",
    quantity: 1,
    total: initialState.priceDish,
  });

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

  useEffect(() => {
    getUserById(props.route.params.userId);
  }, []);

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  const saveNewOrder = async () => {
    if (
      state.fullname === "" ||
      state.address === "" ||
      state.cardNumber === "" ||
      state.cvv === "" ||
      state.dateExpiration === "" ||
      state.quantity === ""
    ) {
      alert("All fields are required");
    } else {
      await firebase.db.collection("orders").add({
        fullname: state.fullname,
        address: state.address,
        cardNumber: state.cardNumber,
        cvv: state.cvv,
        dateExpiration: state.dateExpiration,
        delivered: state.delivered,
        nameDish: user.nameDish,
        quantity: state.quantity,
        total: user.priceDish * state.quantity,
      });
      props.navigation.navigate("ShareMedia");
    }
  };

  let total = state.total;
  console.log(total);

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: "center" }}>
        <Text style={styles.Title}>Checkout</Text>
      </View>
      <View style={{ alignItems: "center", padding: 10 }}>
        <Image source={{ uri: user.photoDish }} style={styles.roundendImage} />
      </View>
      <Text style={styles.Dish}>{user.nameDish}</Text>
      <Text style={styles.Price}>
        {user.priceDish} {user.quantity} $
      </Text>
      <Text style={styles.TextSignIn}>Order Details</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.TextFormCard}>Quantity</Text>
        <TextInput
          maxLength={99}
          placeholder="1"
          onChangeText={(value) => handleChangeText("quantity", value)}
        />
      </View>
      <Text style={styles.TextSignIn}>Card infomation</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.TextFormCard}>Full name</Text>
        <TextInput
          maxLength={30}
          placeholder="Juan Doe"
          onChangeText={(value) => handleChangeText("fullname", value)}
        />
        <Text style={styles.TextFormCard}>Card Number</Text>
        <TextInput
          maxLength={16}
          textContentType="creditCardNumber"
          placeholder="1234 1234 1234 1234"
          onChangeText={(value) => handleChangeText("cardNumber", value)}
        />

        <Text style={styles.TextFormCard}>CVV</Text>
        <TextInput
          maxLength={3}
          placeholder="123"
          onChangeText={(value) => handleChangeText("cvv", value)}
        />
        <Text style={styles.TextFormCard}>Date</Text>
        <TextInput
          placeholder="01/25"
          maxLength={5}
          onChangeText={(value) => handleChangeText("dateExpiration", value)}
        />
      </View>
      <Text style={styles.TextSignIn}>Address</Text>
      <View style={styles.inputGroup}>
        <TextInput
          maxLength={60}
          placeholder="San Cayetano 238, San cayetano, 20010"
          onChangeText={(value) => handleChangeText("address", value)}
        />
      </View>
      <View>
        <Button
          title="Confirm your order"
          color="#9D8AC1"
          onPress={() => saveNewOrder()}
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
    alignContent: "center",
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
    fontSize: 25,
    fontWeight: "bold",
    color: "#4E187E",
  },
  Dish: {
    textAlign: "center",
    fontSize: 20,
    color: "#4E187E",
  },
  Price: {
    textAlign: "center",
    fontSize: 20,
    color: "green",
    padding: 10,
  },
  TextSignIn: {
    textAlign: "center",
    color: "#4E187E",
    fontWeight: "bold",
  },
  TextFormCard: {
    color: "#9D8AC1",
  },
  roundendImage: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default Checkout;
