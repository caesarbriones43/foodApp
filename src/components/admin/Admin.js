import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const Admin = (props) => {
  return (
    <ScrollView>
      <View style={styles.containerMain}>
        <Text style={styles.titleFont}>Admin Panel</Text>
        <View style={styles.containerButtons}>
          <View style={styles.containerHeaders}>
            <Text style={styles.buttonsHeader}>Manage Users</Text>
          </View>
          <Button
            buttonStyle={styles.buttons}
            title="Users"
            onPress={() => props.navigation.navigate("ListUsers")}
          ></Button>
          {/* <View style={styles.containerHeaders}>
            <Text style={styles.buttonsHeader}>Manage Categories</Text>
          </View>
          <Button
            buttonStyle={styles.buttons}
            title="Categories"
            onPress={() => props.navigation.navigate("CreateCategory")}
          ></Button> */}
          <View style={styles.containerHeaders}>
            <Text style={styles.buttonsHeader}>Manage Dishes</Text>
          </View>
          <Button
            buttonStyle={styles.buttons}
            title="Dishes"
            onPress={() => props.navigation.navigate("ListDish")}
          ></Button>
          <View style={styles.containerHeaders}>
            <Text style={styles.buttonsHeader}>Manage Orders</Text>
          </View>
          <Button
            buttonStyle={styles.buttons}
            title="Orders"
            onPress={() => props.navigation.navigate("ListOrders")}
          ></Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    flexDirection: "column",
    marginTop: 40,
    alignItems: "center",
  },
  containerButtons: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    margin: 20,
    borderWidth: 1,
  },
  containerHeaders: {
    flex: 1,
    padding: 10,
  },
  titleFont: {
    fontSize: 25,
    fontWeight: "bold",
    borderBottomEndRadius: 1,
  },
  buttonsHeader: {
    fontSize: 15,
    fontWeight: "bold",
    borderBottomWidth: 1,
  },
  buttons: {
    backgroundColor: "#5871F2",
    width: 250,
    padding: 5,
  },
});

export default Admin;
