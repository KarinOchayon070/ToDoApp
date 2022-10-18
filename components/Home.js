import React, { useState } from "react";
import { Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import Header from "./Header.js";
import ListItems from "./ListItems.js";

const Home = () => {
  const initialTodos = [
    {
      title: "Go to the doctor",
      date: "wed, 19 oct 2022 16:30:10 GMT",
      key: "1",
    },
    {
      title: "Check 'Massvid' payment",
      date: "wed, 19 oct 2022 16:30:10 GMT",
      key: "2",
    },
    {
      title: "Go to the libary",
      date: "wed, 19 oct 2022 16:30:10 GMT",
      key: "3",
    },
  ];

  const [todos, setTodos] = useState(initialTodos);

  return (
    <>
      <Header />
      <ListItems setTodos={setTodos} todos={todos} />
    </>
  );
};

export default Home;
