import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { Entypo } from "@expo/vector-icons";

const ListItems = ({ todos, setTodos }) => {
  const [swipedRow, setSwipedRow] = useState(null);

  const handleDeleteTodo = (rowMap, rowKey) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((todo) => todo.key === rowKey);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      {todos.length == 0 && (
        <Text style={styles.NoTodoText}>You have no todos today</Text>
      )}
      <SwipeListView
        data={todos}
        renderItem={(data) => {
          const RowText =
            data.item.key == swipedRow
              ? styles.SwipedTodoText
              : styles.TodoText;
          return (
            <View
              style={styles.ListView}
              underlayColor="black"
              onPress={() => {}}
            >
              <Text style={RowText}>{data.item.title}</Text>
              <Text style={styles.TodoDate}>{data.item.date}</Text>
            </View>
          );
        }}
        renderHiddenItem={(data, rowMap) => {
          return (
            <View style={styles.ListViewHidden}>
              <TouchableOpacity
                style={styles.HiddenButton}
                onPress={() => handleDeleteTodo(rowMap, data.item.key)}
              >
                <Entypo name="trash" size={25} color="#e6ccff" />
              </TouchableOpacity>
            </View>
          );
        }}
        leftOpenValue={80}
        previewRowKey={"1"}
        previewOpenValue={10}
        previewOpenDelay={30}
        disableLeftSwipe={true}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingBottom: 30,
          marginBottom: 40,
        }}
        onRowOpen={(rowKey) => {
          setSwipedRow(rowKey);
        }}
        onRowClose={() => {
          setSwipedRow(null);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  ListView: {
    backgroundColor: "#e6ccff",
    marginRight: 15,
    marginLeft: 15,
    marginTop: 15,
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "#e6ccff",
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },

  TodoText: {
    fontSize: 16,
    letterSpacing: 1,
    color: "black",
  },

  TodoDate: {
    fontSize: 10,
    letterSpacing: 1,
    color: "black",
    textAlign: "right",
    textTransform: "uppercase",
  },

  ListViewHidden: {
    backgroundColor: "black",
    marginRight: 20,
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 2,
    paddingTop: 25,
    paddingBottom: 30,
    borderRadius: 10,
    borderWidth: 0,
  },

  HiddenButton: {
    width: 80,
    alignItems: "center",
  },

  SwipedTodoText: {
    color: "black",
    fontStyle: "italic",
    textDecorationLine: "line-through",
  },

  NoTodoText: {
    fontSize: 20,
    letterSpacing: 1,
    color: "black",
    fontStyle: "italic",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default ListItems;
