import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.HeaderView}>
      <Text style={styles.HeaderTitle}>ToDos</Text>
      <TouchableOpacity style={styles.HeaderButton}>
        <Entypo name="trash" size={25} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Header
  HeaderView: {
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  HeaderTitle: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    letterSpacing: 2,
    fontStyle: "italic",
  },

  HeaderButton: {
    fontWeight: "bold",
    color: "black",
  },
});

export default Header;
