import React from "react";
import { View, Image, StyleSheet } from "react-native";

const displayImage = (props) => {
  const {src} = props;
  console.log("PROPS:",props)
  return (
    <View style={styles.container}>
      <Image
          source={require('../../../../assets/Food.png')}
        />
      {/* <Image
        style={styles.normal}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
  normal:{
    width:300,
    height:300
  }
});

export default displayImage;
