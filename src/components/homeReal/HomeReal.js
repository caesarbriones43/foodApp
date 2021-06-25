import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ScrollView, List } from "react-native-gesture-handler";
import firebase from "../../database/firebase";
import Emoji from "react-native-emoji";
import GradientButton from "react-native-gradient-buttons";
import ImagesSwiper from "react-native-image-swiper";

import {
  ListItem,
  Avatar,
  Image,
  Card,
  SearchBar,
} from "react-native-elements";

const HomeReal = (props) => {
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

  const customImg = [
    "https://res.cloudinary.com/caesarbrionnes/image/upload/v1605586767/1_d1o06n.png",
    "https://res.cloudinary.com/caesarbrionnes/image/upload/v1605586887/3_flevh9.jpg",
    "https://res.cloudinary.com/caesarbrionnes/image/upload/v1605587019/4_i3eksu.jpg",
    "https://res.cloudinary.com/caesarbrionnes/image/upload/v1605586762/2_evklne.jpg",
  ];

  return (
    <View style={{backgroundColor:"#FFFFFF"}}>
      <ScrollView>
        <View>
          <SearchBar placeholder="Search Here..." lightTheme={false} />
        </View>
        <View>
          <ImagesSwiper
            images={customImg}
            autoplay={true}
            autoplayTimeout={3}
            showsPagination={true}
            width={null}
            height={150}
          />
        </View>
        <Card>
          <Card.Title style={styles.titleCard}>
            Our Menu <Emoji name="apple" style={{ fontSize: 25 }} />
          </Card.Title>
          <Card.Divider />
          {users.map((user) => {
            return (
              <Card>
                <Card.Title>
                  {user.nameDish} - {user.nameCategory}
                </Card.Title>
                <Card.Divider />
                <View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <Image
                      source={{ uri: user.photoDish }}
                      style={styles.dishimgcontainer}
                      onPress={() =>
                        props.navigation.navigate("MoreDetails", {
                          userId: user.id,
                        })
                      }
                    />
                  </View>
                  <Card.Divider />
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 5,
                    }}
                  >
                    <GradientButton
                      style={{ marginVertical: 8 }}
                      textStyle={{ fontSize: 15 }}
                      gradientBegin="#874f00"
                      gradientEnd="#f5ba57"
                      purpleViolet
                      gradientDirection="diagonal"
                      height={30}
                      width={200}
                      impact
                      impactStyle="Light"
                      onPressAction={() =>
                        props.navigation.navigate("MoreDetails", {
                          userId: user.id,
                        })
                      }
                    >
                      More details...
                    </GradientButton>
                    {/* <GradientButton text="Purple Violet" purpleViolet impact /> */}
                  </View>
                </View>
              </Card>
            );
          })}
        </Card>
      </ScrollView>
    </View>
  );

  <Card style={{}}>
    <Card.Title>
      {user.nameDish} - {user.nameCategory}
    </Card.Title>
    <Card.Divider />
    <View>
      <Image
        source={{ uri: user.photoDish }}
        style={styles.dishimgcontainer}
        onPress={() =>
          props.navigation.navigate("DishDetails", {
            userId: user.id,
          })
        }
      />
      {/* <Text style={styles.name}>{u.name}</Text> */}
    </View>
  </Card>;

  // return (
  //   <ScrollView>
  //     <Button
  //       title="Create Dish"
  //       onPress={() => props.navigation.navigate("CreateDishes")}
  //     ></Button>
  //     {users.map((user) => {
  //       return (
  //         <ListItem
  //           key={user.id}
  //           bottomDivider
  //           // onPress={() => console.log(user.id)}
  //           onPress={() => {
  //             props.navigation.navigate("DishDetails", {
  //               userId: user.id,
  //             });
  //           }}
  //         >
  //           <ListItem.Chevron></ListItem.Chevron>
  //           <Avatar
  //             source={{
  //               uri: user.photoDish,
  //             }}
  //             rounded
  //           ></Avatar>
  //           <Avatar
  //             source={{
  //               uri: user.photoFlag,
  //             }}
  //             rounded
  //           ></Avatar>
  //           <ListItem.Content>
  //             <ListItem.Title>{user.nameDish}</ListItem.Title>
  //             <ListItem.Subtitle>
  //               Country: {user.nameCategory}
  //             </ListItem.Subtitle>
  //             <ListItem.Subtitle>Price: {user.priceDish} $</ListItem.Subtitle>
  //             <ListItem.Subtitle>...</ListItem.Subtitle>
  //           </ListItem.Content>

  //           {/* <Image
  //             source={{ uri: user.photoDish }}
  //             style={{ width: 200, height: 200 }}
  //           /> */}
  //         </ListItem>
  //       );
  //     })}
  //   </ScrollView>
  // );
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

export default HomeReal;
