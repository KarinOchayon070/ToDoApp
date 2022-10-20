import React, { useState } from "react";
import Header from "./Header.js";
import ListItems from "./ListItems.js";
import InputModel from "./InputModel.js";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ todos, setTodos }) => {
  const handelClearTodos = () => {
    AsyncStorage.setItem("storedTodos", JSON.stringify([]))
      .then(() => {
        setTodos([]);
      })
      .catch((error) => console.log(error));
  };

  const [modalVisible, setModalVisible] = useState(false);

  const [todoInputValue, setTodoInputValue] = useState();

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    AsyncStorage.setItem("storedTodos", JSON.stringify(newTodos))
      .then(() => {
        setTodos(newTodos);
        setModalVisible(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header handelClearTodos={handelClearTodos} />
      <ListItems setTodos={setTodos} todos={todos} />
      <InputModel
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        todoInputValue={todoInputValue}
        setTodoInputValue={setTodoInputValue}
        handleAddTodo={handleAddTodo}
        todos={todos}
      />
    </>
  );
};

export default Home;
