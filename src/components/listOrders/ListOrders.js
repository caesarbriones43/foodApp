import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ScrollView, List } from "react-native-gesture-handler";
import firebase from "../../database/firebase";

import {
  ListItem,
  Avatar,
  Image,
  Card,
  SearchBar,
} from "react-native-elements";

const ListOrders = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    firebase.db.collection("orders").onSnapshot((querySnapshot) => {
      const users = [];

      querySnapshot.docs.forEach((doc) => {
        const {
          fullname,
          nameDish,
          cardNumber,
          cvv,
          dateExpiration,
          delivered,
        } = doc.data();
        users.push({
          id: doc.id,
          fullname,
          nameDish,
          cardNumber,
          cvv,
          dateExpiration,
          delivered,
        });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <View>
        <View>
          <SearchBar placeholder="Search Here..." lightTheme={false} />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Orders</Text>
        </View>
        {/* <Button
        title="Create Order"
        onPress={() => props.navigation.navigate("CreateDishes")}
      ></Button> */}
        <View>
          {users.map((user) => {
            return (
              <ListItem
                style={{ padding: 5 }}
                key={user.id}
                bottomDivider
                // onPress={() => console.log(user.id)}
                onPress={() => {
                  props.navigation.navigate("OrderDetails", {
                    userId: user.id,
                  });
                }}
              >
                <Avatar
                  source={{
                    uri:
                      "https://res.cloudinary.com/caesarbrionnes/image/upload/v1606932998/avatar_obexmt.png",
                  }}
                  rounded
                ></Avatar>
                <ListItem.Content>
                  <ListItem.Title>{user.nameDish}</ListItem.Title>
                  <ListItem.Subtitle>Order Id: {user.id}</ListItem.Subtitle>
                  <ListItem.Subtitle>
                    Name on card: {user.fullname}
                  </ListItem.Subtitle>
                  <ListItem.Subtitle>
                    Status: {user.delivered}
                  </ListItem.Subtitle>
                  <ListItem.Subtitle>...</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titleCard: {
    fontSize: 20,
    flex: 1,
  },
  textCard: {
    fontSize: 15,
    flex: 1,
    color: "black",
  },
  dishimgcontainer: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    // overflow: "hidden",
    // borderWidth: 2,
    // borderColor: "#c75643",
  },
});

export default ListOrders;
