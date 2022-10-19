import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";

const Header = ({ handelClearTodos }) => {
  return (
    <View style={styles.HeaderView}>
      <Text style={styles.HeaderTitle}>ToDos</Text>
      <TouchableOpacity style={styles.HeaderButton} onPress={handelClearTodos}>
        <Entypo name="trash" size={35} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderView: {
    paddingVertical: 2,
    marginBottom: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 60,
  },

  HeaderTitle: {
    fontSize: 50,
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
