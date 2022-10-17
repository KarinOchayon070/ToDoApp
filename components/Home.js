import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Header.js";

const Home = () => {
  const [number, setNumber] = useState(5);

  const karinArray = [
    { firstName: "yovel", lastName: "ovadia" },
    { firstName: "karin", lastName: "ochayon" },
    { firstName: "elad", lastName: "ovadia" },
  ];

  const incrementNumber = () => {
    if (number !== 10) {
      setNumber(number + 1);
    }
  };

  const decrmentNumber = () => {
    if (number !== 0) {
      setNumber(number - 1);
    }
  };

  return (
    <View>
      <Header />
      {/* <TouchableOpacity onPress={incrementNumber} style={styles.MamiButton}>
        <Text>Press me to increment the number</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrmentNumber} style={styles.MamiButton}>
        <Text>Press me to decrement the number</Text>
      </TouchableOpacity>
      <Text>{number}</Text> */}

      {karinArray.map((object) => {
        return (
          <Text style={{ color: "red" }}>
            {object.firstName + " " + object.lastName}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  MamiButton: {
    fontWeight: "bold",
    color: "black",
    fontSize: 50,
    backgroundColor: "yellow",
    alignItems: "center",
    padding: 50,
    justifyContent: "center",
  },
});

export default Home;
