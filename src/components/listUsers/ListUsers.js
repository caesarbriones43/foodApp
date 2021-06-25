import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { ScrollView, List } from "react-native-gesture-handler";
import firebase from "../../database/firebase";
import { ListItem, Avatar, SearchBar } from "react-native-elements";

const ListUsers = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];

      querySnapshot.docs.forEach((doc) => {
        const {
          username,
          fullname,
          phone,
          email,
          password,
          adress,
          type,
        } = doc.data();
        users.push({
          id: doc.id,
          username,
          fullname,
          phone,
          email,
          password,
          adress,
          type,
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
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Users</Text>
        </View>
        {/* <Button
        title="Create User"
        onPress={() => props.navigation.navigate("CreateUsers")}
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
                  props.navigation.navigate("UserDetails", {
                    userId: user.id,
                  });
                }}
              >
                <ListItem.Chevron></ListItem.Chevron>
                <Avatar
                  source={{
                    uri:
                      "https://res.cloudinary.com/caesarbrionnes/image/upload/v1606932998/avatar_obexmt.png",
                  }}
                  rounded
                ></Avatar>
                <ListItem.Content>
                  <ListItem.Title>{user.fullname}</ListItem.Title>
                  <ListItem.Subtitle>
                    username: {user.username}
                  </ListItem.Subtitle>
                  <ListItem.Subtitle>
                    type: {user.type}
                  </ListItem.Subtitle>
                  <ListItem.Subtitle>e-mail: {user.email}</ListItem.Subtitle>
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

export default ListUsers;
