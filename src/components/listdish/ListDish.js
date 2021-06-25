import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ScrollView, List } from "react-native-gesture-handler";
import firebase from "../../database/firebase";
import Emoji from "react-native-emoji";
import GradientButton from "react-native-gradient-buttons";
import {
  ListItem,
  Avatar,
  Image,
  Card,
  SearchBar,
} from "react-native-elements";

const ListDish = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    firebase.db.collection("dishes").onSnapshot((querySnapshot) => {
      const users = [];

      querySnapshot.docs.forEach((doc) => {
        const {
          descriptionDish,
          nameDish,
          photoDish,
          priceDish,
          photoFlag,
          nameCategory,
        } = doc.data();
        users.push({
          id: doc.id,
          descriptionDish,
          nameDish,
          photoDish,
          priceDish,
          photoFlag,
          nameCategory,
        });
      });
      setUsers(users);
    });
  }, []);

  // return (
  //   <ScrollView>
  //     <SearchBar placeholder="Type Here..." lightTheme={true} />
  //     <Card>
  //       <Card.Title style={styles.titleCard}>
  //         Our Menu <Emoji name="apple" style={{ fontSize: 25 }} />
  //       </Card.Title>
  //       <Card.Divider />
  //       {users.map((user) => {
  //         return (
  //           <Card>
  //             <Card.Title>
  //               {user.nameDish} - {user.nameCategory}
  //             </Card.Title>
  //             <Card.Divider />
  //             <View>
  //               <View
  //                 style={{
  //                   justifyContent: "center",
  //                   alignItems: "center",
  //                   padding: 5,
  //                 }}
  //               >
  //                 <Image
  //                   source={{ uri: user.photoDish }}
  //                   style={styles.dishimgcontainer}
  //                   onPress={() =>
  //                     props.navigation.navigate("DishDetails", {
  //                       userId: user.id,
  //                     })
  //                   }
  //                 />
  //               </View>
  //               <Card.Divider />
  //               <View
  //                 style={{
  //                   justifyContent: "center",
  //                   alignItems: "center",
  //                   padding: 5,
  //                 }}
  //               >
  //                 <GradientButton
  //                   style={{ marginVertical: 8 }}
  //                   textStyle={{ fontSize: 15 }}
  //                   gradientBegin="#874f00"
  //                   gradientEnd="#f5ba57"
  //                   purpleViolet
  //                   gradientDirection="diagonal"
  //                   height={30}
  //                   width={200}
  //                   impact
  //                   impactStyle="Light"
  //                   onPressAction={() =>
  //                     props.navigation.navigate("DishDetails", {
  //                       userId: user.id,
  //                     })
  //                   }
  //                 >
  //                   More details...
  //                 </GradientButton>
  //                 {/* <GradientButton text="Purple Violet" purpleViolet impact /> */}
  //               </View>
  //             </View>
  //           </Card>
  //         );
  //       })}
  //     </Card>
  //   </ScrollView>
  // );

  //   <Card style={{}}>
  //   <Card.Title>
  //     {user.nameDish} - {user.nameCategory}
  //   </Card.Title>
  //   <Card.Divider />
  //   <View>
  //     <Image
  //       source={{ uri: user.photoDish }}
  //       style={styles.dishimgcontainer}
  //       onPress={() =>
  //         props.navigation.navigate("DishDetails", {
  //           userId: user.id,
  //         })
  //       }
  //     />
  //     {/* <Text style={styles.name}>{u.name}</Text> */}
  //   </View>
  // </Card>

  return (
    <ScrollView>
      <View>
        <View>
          <SearchBar placeholder="Search Here..." lightTheme={false} />
        </View>
        <Button
          title="Create Dish"
          onPress={() => props.navigation.navigate("CreateDishes")}
        ></Button>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Dishes</Text>
        </View>
        <View></View>
        <View>
          {users.map((user) => {
            return (
              <ListItem
                key={user.id}
                style={{ padding: 5 }}
                bottomDivider
                // onPress={() => console.log(user.id)}
                onPress={() => {
                  props.navigation.navigate("DishDetails", {
                    userId: user.id,
                  });
                }}
              >
                <ListItem.Chevron></ListItem.Chevron>
                <Avatar
                  source={{
                    uri: user.photoDish,
                  }}
                  rounded
                ></Avatar>
                <Avatar
                  source={{
                    uri: user.photoFlag,
                  }}
                  rounded
                ></Avatar>
                <ListItem.Content>
                  <ListItem.Title>{user.nameDish}</ListItem.Title>
                  <ListItem.Subtitle>
                    Country: {user.nameCategory}
                  </ListItem.Subtitle>
                  <ListItem.Subtitle>
                    Price: {user.priceDish} $
                  </ListItem.Subtitle>
                  <ListItem.Subtitle>...</ListItem.Subtitle>
                </ListItem.Content>

                {/* <Image
              source={{ uri: user.photoDish }}
              style={{ width: 200, height: 200 }}
            /> */}
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

export default ListDish;
