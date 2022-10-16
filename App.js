import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./components/Home";

//import { Container } from "./styles/appStyles";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE7FA",
    //alignItems: "center",
    //justifyContent: "center",
  },

  text: {
    fontSize: 50,
    color: "blue",
  },
});
