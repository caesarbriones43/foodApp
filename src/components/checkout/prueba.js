import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert,
  Image,
} from "react-native";
import firebase from "../../database/firebase";
import { Container, Content, Card, CardItem, Text } from "native-base";

import { Form, Item, Input } from "native-base";
import { Button } from "react-native-elements";

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
    <ScrollView>
      <Container style={styles.container}>
        <Card>
          <View style={styles.imageHeader}>
            <Image
              source={{ uri: user.photoDish }}
              style={styles.roundendImage}
            />
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {user.nameDish}
            </Text>
            <Text style={{ fontSize: 15, color: "green" }}>
              {user.priceDish} $
            </Text>
          </View>
          <CardItem>
            <Container>
              <Content>
                <View style={styles.containerHeaders}>
                  <Text style={styles.titleCard}>Pay whit card</Text>
                </View>
                <View style={styles.containerForm}>
                  <Form>
                    <Text style={styles.textHeader}>Full Name</Text>
                    <Item>
                      <Input placeholder="Juan Doe" />
                    </Item>
                    <Text style={styles.textHeader}>Email</Text>
                    <Item>
                      <Input placeholder="john_doe@mail.cm" />
                    </Item>
                    <Text style={styles.textHeader}>Card information</Text>
                    <Item>
                      <Input placeholder="1234 1234 1234 1234" />
                    </Item>
                    <Item>
                      <Input placeholder="MM/YY" />
                      <Input placeholder="CVV" />
                    </Item>
                    <Text style={styles.textHeader}>Country or region</Text>
                    <Item>
                      <Input placeholder="Mexico,Aguascalientes" />
                    </Item>
                  </Form>
                </View>

                <View style={styles.containerHeaders}>
                  <Button
                    buttonStyle={styles.button}
                    title="Pay now!"
                    onPress={() =>
                      // alert("Thank you, your order has been placed!")
                      props.navigation.navigate("ShareMedia")
                    }
                  ></Button>
                </View>
              </Content>
            </Container>
          </CardItem>
        </Card>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  imageHeader: {
    alignItems: "center",
    padding: 20,
  },
  roundendImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  textHeader: {
    color: "#005b96",
    fontWeight: "bold",
  },
  titleCard: {
    color: "#03396c",
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#66ff99",
    width: 250,
    padding: 5,
  },
  containerHeaders: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    padding: 10,
  },
});

export default Checkout;
