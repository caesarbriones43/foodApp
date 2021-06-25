import React from "react";
import {
  Card,
  ListItem,
  Button,
  SocialIcon,
  Image,
} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

import { View, Text, Linking } from "react-native";

const ShareMedia = (props) => {
  return (
    // <View style={{ backgroundColor: "#f9e4ff", flex: 1 }}>
    <View style={{ flex: 1 }}>
      {/* <Card style={{ backgroundColor: "red" }}> */}
      <Card.Title style={{ fontWeight: "bold", fontSize: 20, padding: 20 }}>
        Thank you, for belive in us!
      </Card.Title>

      <Image
        source={{
          uri:
            "https://res.cloudinary.com/caesarbrionnes/image/upload/v1607545207/donuit-kawaii_iwntxq.png",
        }}
        I
        style={{ width: null, height: 350 }}
      />
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "black",
            fontWeight: "bold",
          }}
        >
          Follow Us...
        </Text>
        <Card.Divider />
        <View>
          <SocialIcon
            title="@xoilth_foods"
            button
            type="facebook"
            onPress={() => {
              Linking.openURL("https://www.facebook.com/caesarbriones43/");
            }}
          />
          <SocialIcon
            title="@xoilth_foods01"
            button
            type="twitter"
            onPress={() => {
              Linking.openURL("https://aboutreact.com");
            }}
          />
          <SocialIcon
            title="@xoilth_foods"
            button
            type="instagram"
            onPress={() => {
              Linking.openURL(
                "https://www.instagram.com/caesarbriones/?hl=es-la"
              );
            }}
          />
        </View>
      </View>
      <Card.Divider />
      <View style={{ padding: 10 }}>
        <Button
          buttonStyle={{ borderRadius: 30, backgroundColor: "#ff5c5c" }}
          icon={<Icon name="home" size={20} color="white" />}
          title=" Return to Home"
          iconRight={false}
          onPress={() => {
            props.navigation.navigate("HomeReal");
          }}
        />
      </View>
    </View>
  );
};

export default ShareMedia;
