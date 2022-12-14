import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./components/Home";

import AsyncStorage from "@react-native-async-storage/async-storage";
import AppLoading from "expo-app-loading";

export default function App() {
  const [ready, setReady] = useState(false);

  const initialTodos = [];

  const [todos, setTodos] = useState(initialTodos);
  const LoadTodos = () => {
    AsyncStorage.getItem("storedTodos")
      .then((data) => {
        if (data !== null) {
          setTodos(JSON.parse(data));
        }
      })
      .catch((error) => console.log(error));
  };

  if (!ready) {
    return (
      <AppLoading
        startAsync={LoadTodos}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Home todos={todos} setTodos={setTodos} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dab3ff",
  },
});
