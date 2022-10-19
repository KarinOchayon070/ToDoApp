import React, { useState } from "react";
import Header from "./Header.js";
import ListItems from "./ListItems.js";
import InputModel from "./InputModel.js";

const Home = () => {
  const initialTodos = [
    // {
    //   title: "Go to the doctor",
    //   date: "wed, 19 oct 2022 16:30:10 GMT",
    //   key: "1",
    // },
    // {
    //   title: "Check 'Massvid' payment",
    //   date: "wed, 19 oct 2022 16:30:10 GMT",
    //   key: "2",
    // },
    // {
    //   title: "Go to the libary",
    //   date: "wed, 19 oct 2022 16:30:10 GMT",
    //   key: "3",
    // },
  ];

  const [todos, setTodos] = useState(initialTodos);

  const handelClearTodos = () => {
    setTodos([]);
  };

  const [modalVisible, setModalVisible] = useState(false);

  const [todoInputValue, setTodoInputValue] = useState();

  const handleAddTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setModalVisible(false);
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
