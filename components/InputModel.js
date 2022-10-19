import React from "react";
import { Modal } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const InputModel = ({
  modalVisible,
  setModalVisible,
  todoInputValue,
  setTodoInputValue,
  handleAddTodo,
  todos,
}) => {
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleSubmit = () => {
    handleAddTodo({
      title: todoInputValue,
      date: new Date().toUTCString(),
      key: `${
        (todos[todos.length - 1] &&
          parseInt(todos[todos.length - 1].key) + 1) ||
        1
      }`,
    });
    alert("Todo task submitted succesfully!");
    setTodoInputValue("");
  };
  return (
    <>
      <TouchableOpacity
        style={styles.ModalButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <AntDesign name="plus" size={50} color="#dab3ff"></AntDesign>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.ModalContainer}>
          <View style={styles.modalView}>
            <View style={styles.ModalIcon}>
              <Text style={styles.HeaderTitle}>ToDos</Text>
              <AntDesign name="edit" size={50} color="black"></AntDesign>
            </View>
            <TextInput
              style={styles.styledInput}
              placeholder="Add a todo"
              placeholderTextColor="white"
              selectionColor="white"
              autoFocus={true}
              onChangeText={(text) => setTodoInputValue(text)}
              value={todoInputValue}
              onSubmitEditing={handleSubmit}
            ></TextInput>

            <View style={styles.modalActionGroup}>
              <TouchableOpacity
                style={styles.modalAction}
                onPress={handleCloseModal}
              >
                <AntDesign name="close" size={28} color="#e6ccff" />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalAction}
                onPress={handleSubmit}
              >
                <AntDesign name="check" size={28} color="#e6ccff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  HeaderTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
    letterSpacing: 2,
    fontStyle: "italic",
    textAlign: "center",
  },

  ModalButton: {
    width: 50,
    height: 50,
    backgroundColor: "black",
    borderRadius: 50,
    justifycontent: "center",
    alignItems: "center",
    alignSelf: "center",
    position: "relative",
    bottom: 50,
  },

  ModalContainer: {
    padding: 180,
    justifycontent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#dab3ff",
  },

  ModalIcon: {
    alignItems: "center",
    marginBottom: 1,
  },

  styledInput: {
    width: 300,
    height: 50,
    backgroundColor: "black",
    padding: 10,
    fontsize: 16,
    borderradius: 10,
    color: "white",
    letterSpacing: 1,
    borderRadius: 10,
    borderWidth: 0,
    marginTop: -165,
  },

  modalActionGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  modalAction: {
    width: 60,
    height: 60,
    backgroundColor: "black",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: -180,
    marginHorizontal: 20,
  },

  modalView: {
    backgroundColor: "#e6ccff",
    borderRadius: 10,
    padding: 30,
    marginHorizontal: 20,
    paddingHorizontal: 40,
    height: 350,
  },
});

export default InputModel;
