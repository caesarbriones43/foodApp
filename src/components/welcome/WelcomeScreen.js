import React from "react";
import {StyleSheet, View, Image, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { Container, Content, Text } from "native-base";
import { Button } from "react-native-elements";

var { height } = Dimensions.get("window");

var box_count = 3;
var box_height = height / box_count;

const WelcomeScreen = ({ navigation }) => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <Container style={styles.container}>
        <Content>
          <View style={[styles.box, styles.box1]}>
            <Image source={require("../../../assets/welcome.png")} />
          </View>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box, styles.box3, styles.centrar]}>
            <Text style={styles.textTitle4}>Welcome to our family</Text>
            <Text style={styles.text}>
              We are very happy to have you here, in our family thanks for
              belive in us!
            </Text>
            <Container>
              <Content>
                <Button
                  title="Sing up now!"
                  buttonStyle={{ backgroundColor: "#7CF868", width: 300 }}
                  onPress={() => navigation.navigate("Register")}
                ></Button>
              </Content>
            </Container>
          </View>
        </Content>
      </Container>
      <Container style={styles.container}>
        <Content>
          <View style={[styles.box, styles.box1]}>
            <Image source={require("../../../assets/Food.png")} />
          </View>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box, styles.box3, styles.centrar]}>
            <Text style={styles.textTitle1}>Order your favorites</Text>
            <Text style={styles.text}>
              When you order Eat street, we'll look you up whit exclusive
              coupons, special sand rewards
            </Text>
            <Container>
              <Content>
                <Button
                  title="Get Started"
                  buttonStyle={{ backgroundColor: "#FC6464", width: 300 }}
                  onPress={() => navigation.navigate("HomeReal")}
                ></Button>
              </Content>
            </Container>
          </View>
        </Content>
      </Container>

      <Container style={styles.container}>
        <Content>
          <View style={[styles.box, styles.box1]}>
            <Image source={require("../../../assets/Service.png")} />
          </View>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box, styles.box3, styles.centrar]}>
            <Text style={styles.textTitle3}>Food pick up</Text>
            <Text style={styles.text}>
              We provide door to door service in mean time whit best quality of
              food
            </Text>
            <Container>
              <Content>
                <Button
                  title="Get Started"
                  buttonStyle={{ backgroundColor: "#5871F2", width: 300 }}
                  onPress={() => navigation.navigate("HomeReal")}
                ></Button>
              </Content>
            </Container>
          </View>
        </Content>
      </Container>
      <Container style={styles.container}>
        <Content>
          <View style={[styles.box, styles.box1]}>
            <Image source={require("../../../assets/Coronavirus.png")} />
          </View>
          <View style={[styles.box, styles.box2]}></View>
          <View style={[styles.box, styles.box3, styles.centrar]}>
            <Text style={styles.textTitle2}>We care about you</Text>
            <Text style={styles.text}>
              Each ingredient is washed and each of our kitchen utensils is
              sterilized
            </Text>
            <Container>
              <Content>
                <Button
                  title="Get Started"
                  buttonStyle={{ backgroundColor: "#FFB61D", width: 300 }}
                  onPress={() => navigation.navigate("HomeReal")}
                ></Button>
              </Content>
            </Container>
          </View>
        </Content>
      </Container>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  textTitle1: {
    color: "#FC6464",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  textTitle2: {
    color: "#FFB61D",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },

  textTitle3: {
    color: "#5871F2",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  textTitle4: {
    color: "#7CF868",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  text: {
    color: "#000000",
    fontSize: 18,
    textAlign: "center",
    lineHeight: 21,
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
  box: {
    height: box_height,
  },
  box1: {
    flex: 1,
    backgroundColor: "#2196F3",
  },
  box2: {
    flex: 10,
  },
  box3: {
    flex: 0.5,
  },
  centrar: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
