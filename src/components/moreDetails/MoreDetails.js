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
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";
import { AirbnbRating, Rating } from "react-native-elements";

import ReactStars from "react-rating-stars-component";

import GradientButton from "react-native-gradient-buttons";

const MoreDetails = (props) => {
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
      <Header />
      <View>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: user.photoFlag }} />
              <Body>
                <Text>{user.nameDish}</Text>
                <Text note>{user.nameCategory}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: user.photoDish }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  textAlign: "center",
                }}
              >
                {user.descriptionDish}
              </Text>
            </View>
          </CardItem>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontWeight: "bold", color: "green", fontSize: 20 }}>
              {user.priceDish} $ MXN
            </Text>
          </View>

          {/* <CardItem>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Rating
                type="heart"
                ratingCount={5}
                imageSize={30}
                showRating
                readonly={true}
              />
            </View>
          </CardItem> */}
          <CardItem>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <GradientButton
                style={{ marginVertical: 8 }}
                textStyle={{ fontSize: 20 }}
                gradientBegin="#0f9200"
                gradientEnd="#4ae54a"
                gradientDirection="diagonal"
                height={45}
                width={350}
                radius={20}
                impact
                // impactStyle="Light"
                onPressAction={() =>
                  props.navigation.navigate("Checkout", {
                    userId: user.id,
                    orderId: initialState.id,
                  })
                }
              >
                Order now!
              </GradientButton>
            </View>
          </CardItem>
        </Card>
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
  descriptionText: {
    justifyContent: "center",
  },
});

export default MoreDetails;
