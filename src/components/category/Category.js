import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  TouchableOpacity,
  Toast,
} from "native-base";
// import { Image } from "react-native-elements";
import { Button, Rating, AirbnbRating } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import HoverImage from "react-hover-image";
import SwitchButton from "./SwitchButton";
import { SearchBar } from "react-native-elements";

const Category = ({ navigation }) => {
  const [images, setimages] = useState([
    require("../../../assets/foodAssets/hamburguer.jpg"),
    require("../../../assets/foodAssets/enchiladas.jpg"),
    require("../../../assets/foodAssets/hotdog.png"),
    require("../../../assets/foodAssets/pizza.jpg"),
    require("../../../assets/foodAssets/spaguetti.jpg"),
    require("../../../assets/foodAssets/tacos.jpg"),
  ]);

  const [ingredients, setIngredients] = useState([
    require("../../../assets/foodIngredients/carne.jpg"),
    require("../../../assets/foodIngredients/cebolla.jpg"),
    require("../../../assets/foodIngredients/champi.jpg"),
    require("../../../assets/foodIngredients/lechuga.jpg"),
    require("../../../assets/foodIngredients/pan.jpg"),
    require("../../../assets/foodIngredients/queso.jpg"),
    require("../../../assets/foodIngredients/tomates.jpg"),
  ]);

  const dishesXD = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Mexicana",
      ingredientsPhotos: [
        require("../../../assets/foodAssets/hamburguer.jpg"),
        require("../../../assets/foodAssets/enchiladas.jpg"),
        require("../../../assets/foodAssets/hotdog.png"),
        require("../../../assets/foodAssets/pizza.jpg"),
        require("../../../assets/foodAssets/spaguetti.jpg"),
        require("../../../assets/foodAssets/tacos.jpg"),
      ],
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Sushi",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "China",
    },
  ];

  const [search, setSearch] = useState("");
  return (
    <View>
      <SearchBar
        placeholder="Search Here..."
        onChangeText={setSearch}
        value={search}
        lightTheme={true}
      />
      {/* <Text>asdasd</Text> */}
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <Card>
            <CardItem header>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                name_dish_api by name_restaurant
              </Text>
            </CardItem>
            <CardItem>
              <Body style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 15 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas a placerat augue, vel viverra orci. Nulla in ornare
                  nisi, vel scelerisque arcu. Aliquam ornare sagittis nisi, sed
                  tristique orci auctor at. Sed sed lacus eu eros ultrices
                  pellentesque. Vivamus bibendum in magna nec ultricies. Aliquam
                  pulvinar bibendum odio sed efficitur.
                </Text>

                <Image
                  source={item}
                  key={index}
                  style={styles.drag}
                  onPress={() => navigation.push("Category")}
                />
                <View>
                  <AirbnbRating
                    count={5}
                    reviews={[
                      "Terrible >:(",
                      "Bad :/",
                      "OK D:",
                      "Good :)",
                      "Awsome :D",
                    ]}
                    defaultRating={5}
                    size={20}
                  />
                </View>
                <Text
                  style={{
                    color: "black",
                    fontSize: 15,
                    justifyContent: "center",
                    alignContent: "center",
                    fontWeight: "bold",
                  }}
                >
                  Ingredients
                </Text>
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={ingredients}
                  renderItem={({ item, index }) => (
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 5,
                        // backgroundColor: "#DCDCDC",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "#eee",
                          borderRadius: 10,
                          overflow: "hidden",
                        }}
                      >
                        <View>
                          <Image
                            source={item}
                            style={{
                              height: 145,
                              width: 165,
                            }}
                          />
                        </View>
                        <View style={{ padding: 10, width: 155 }}>
                          <Text>name_ingredient</Text>
                          <SwitchButton
                            text1="yes"
                            text2="no"
                            switchWidth={140}
                            switchHeight={20}
                            switchSpeedChange={500}
                            switchBackgroundColor="#fff"
                            btnBorderColor="#00a4b9"
                            btnBackgroundColor="#24a0ed"
                            fontColor="black"
                            activeFontColor="#fff"
                          />
                        </View>
                      </View>
                    </View>
                  )}
                />
                <Text
                  style={{
                    color: "green",
                    fontSize: 20,
                    justifyContent: "center",
                    alignContent: "center",
                  }}
                >
                  $ 000.000 MXN
                </Text>
              </Body>
            </CardItem>
            <CardItem footer style={{ justifyContent: "space-around" }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 10,
                }}
              >
                <Button
                  icon={<Icon name="money" size={15} color="white" />}
                  iconRight
                  title="Order "
                  buttonStyle={{ width: 159 }}
                  onPress={() => {
                    console.log("ORDER PRESSED");
                  }}
                />
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 10,
                }}
              >
                <Button
                  // buttonStyle={{ backgroundColor: "red" }}
                  icon={<Icon name="shopping-cart" size={15} color="white" />}
                  iconRight
                  title="Add to card "
                  buttonStyle={{ width: 150 }}
                  onPress={() => console.log("Added")}
                  // onPress={() =>
                  //   Toast.show({
                  //     text: "Succesfully added to the card!",
                  //     buttonText:'Okay'
                  //   })
                  // }
                />
              </View>
              {/* <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 10,
                }}
              >
                <Button
                  icon={<Icon name="heart" size={15} color="white" />}
                  iconRight
                  title="Add to favorites "
                />
              </View> */}
            </CardItem>
          </Card>
        )}
      />

      {/* <Button title="go to back" onPress={() => navigation.goBack()}></Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    width: 400,
    height: 300,
    padding: 5,
  },
  drag: {
    width: 335,
    height: 200,
    margin: 10,
    // backgroundColor: "#64FCD9",
  },
  drag2: {
    width: 100,
    height: 100,
    margin: 10,
    // backgroundColor: "#64FCD9",
  },
  headline: {
    textAlign: "center", // <-- the magic
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 0,
    width: 200,
    backgroundColor: "yellow",
  },
});

export default Category;
