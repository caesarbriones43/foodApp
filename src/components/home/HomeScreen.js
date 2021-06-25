import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import axios from "axios";
// import { Image } from "react-native-elements";
import ImagesSwiper from "react-native-image-swiper";
var { height, width } = Dimensions.get("window");

const customImg = [
  // "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda",
  // "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68",
  // "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c",
  // "https://i.picsum.photos/id/791/200/200.jpg?hmac=bPVayqOX5aUzsnsX99AgWaxWB3WzWqwaiSDJ-lNHUk4",
  // "https://i.picsum.photos/id/524/300/300.jpg?blur=5&hmac=Zs2QIjo_fVJGNu-WvOD6EdWsKS3m-NxyELeW43v94eM",
  // "https://loremflickr.com/320/240",
  "https://res.cloudinary.com/caesarbrionnes/image/upload/v1605586767/1_d1o06n.png",
  "https://res.cloudinary.com/caesarbrionnes/image/upload/v1605586887/3_flevh9.jpg",
  // "https://res.cloudinary.com/caesarbrionnes/image/upload/v1605586762/2_evklne.jpg",
  "https://res.cloudinary.com/caesarbrionnes/image/upload/v1605587019/4_i3eksu.jpg",
  // "https://res.cloudinary.com/caesarbrionnes/image/upload/v1605586762/2_evklne.jpg",
  "https://res.cloudinary.com/caesarbrionnes/image/upload/v1605586762/2_evklne.jpg",
  // "https://res.cloudinary.com/caesarbrionnes/image/upload/v1605586762/2_evklne.jpg",
];
// import { MenuScreen } from './Index';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [last_name, setLastname] = useState("");

  // const DATA = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     title: "Mexicana",
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     title: "Sushi",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "China",
  //   },
  // ];

  const [images, setimages] = useState([
    require("../../../assets/Food.png"),
    require("../../../assets/Coronavirus.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Coronavirus.png"),
    require("../../../assets/Food.png"),
    require("../../../assets/Food.png"),
  ]);

  const [flag, setFlag] = useState([
    // require("../../../assets/flagAssets/china.png"),
    // require("../../../assets/flagAssets/colombian.svg"),
    require("../../../assets/flagAssets/italian.jpeg"),
    require("../../../assets/flagAssets/japan.png"),
    require("../../../assets/flagAssets/mexicain.jpg"),
    require("../../../assets/flagAssets/china.png"),
    require("../../../assets/flagAssets/peru.png"),
    require("../../../assets/flagAssets/colombia.png"),
    require("../../../assets/flagAssets/francia.png"),
  ]);

  const [dishes, setDishes] = useState([
    require("../../../assets/foodAssets/hamburguer.jpg"),
    require("../../../assets/foodAssets/enchiladas.jpg"),
    require("../../../assets/foodAssets/hotdog.png"),
    require("../../../assets/foodAssets/pizza.jpg"),
    require("../../../assets/foodAssets/spaguetti.jpg"),
    require("../../../assets/foodAssets/tacos.jpg"),
  ]);

  const handleSubmit = () => {
    console.log("API PRESSED");
    let formData = new FormData();
    formData.append("option", "loginQuery");
    formData.append("name", name);
    formData.append("lastname", last_name);

    // console.log(formData);

    axios({
      method: "post",
      url: "http://localhost/pruebaConexion/conexion.php",
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 20 }}>What are you up for today?</Text> */}
      <Text
        style={{
          fontSize: 20,
          padding: 30,
        }}
      >
        ────── Category ──────
      </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={flag}
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
                  key={index}
                  style={{
                    height: 145,
                    width: 165,
                  }}
                />
              </View>
              <View style={{ padding: 10, width: 155 }}>
                <Text onPress={() => navigation.push("Category")}>
                  title_category_api
                </Text>
                {/* <Text style={{ color: "#777", paddingTop: 5 }}>
                  Lorem impusum
                </Text> */}
              </View>
            </View>
          </View>
        )}
      />
      <ScrollView>
        <ImagesSwiper
          images={customImg}
          autoplay={true}
          autoplayTimeout={2}
          showsPagination={true}
          width={width}
          height={height - 650}
        />
      </ScrollView>
      {/* <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({ item, index }) => (
          <Image
            source={item}
            key={index}
            style={styles.drag}
            onPress={() => navigation.push("Category")}
          />
        )}
      /> */}
      {/* <Text style={{ fontSize: 20 }}> ──── Restaurants ──── </Text> */}
      {/* <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        renderItem={({ item, index }) => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
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
                <View style={{ padding: 10, width: 155 }}>
                  <Text>title_restaurant_api</Text>
                </View>
                <Image
                  source={require("../../../assets/Coronavirus.png")}
                  style={{
                    height: 135,
                    width: 155,
                  }}
                />
              </View>
            </View>
          </View>
        )}
      /> */}

      <Text style={{ fontSize: 20, padding: 30 }}>
        ──── Featured Dishes ────
      </Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={dishes}
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
                <Text>title_dish_api</Text>
                <Text style={{ color: "#777", paddingTop: 5 }}>
                  Lorem impusum
                </Text>
              </View>
            </View>
          </View>
        )}
      />

      {/* <Text>Que se te antoja hoy?</Text>
      <Button
        title="go to menu"
        onPress={() => navigation.navigate("MenuScreen")}
      ></Button>
      <Button
        title="go to welcome"
        onPress={() => navigation.navigate("WelcomeScreen")}
      ></Button>
      <Button title="API" onPress={() => handleSubmit()}></Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "space-between",
    // flexDirection: "row",
    flexWrap: "wrap",
    width: 400,
    height: 300,
    padding: 20,
  },
  drag: {
    width: 100,
    height: 100,
    margin: 10,
    // backgroundColor: "#64FCD9",
  },
  drag2: {
    width: 200,
    height: 100,
    margin: 10,
    // backgroundColor: "#5871F2",
  },
  drag3: {
    width: 100,
    height: 100,
    margin: 10,
    // backgroundColor: "#FF7FA0",
  },
  // titulo: {
  //   width: 200,
  //   height: 100,
  //   fontSize: 20,
  // },
});

export default HomeScreen;
