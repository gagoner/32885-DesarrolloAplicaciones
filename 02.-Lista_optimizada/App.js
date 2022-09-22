<<<<<<< HEAD
import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';
=======
import React, { useState } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from "react-native";
import Task from "./components/task";
>>>>>>> 9737b85 (Desafío 3)

export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return Alert.alert("Ooops!", "Please, enter a task");
    setTasks([...tasks, task]);
    Keyboard.dismiss();
<<<<<<< HEAD
  }

  const deleteTask = (deleteIndex) => {
    Alert.alert("Delete Item", "Are you sure you want to delete this item?", [
      {
        text: "Cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          setTasks(tasks.filter((value, index) => index != deleteIndex));
        },
      },
    ]);
  }

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>
          TODO LIST
        </Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TaskItem index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
=======
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  const handleDeleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };


  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleDeleteTask(index)}
              >
                <Task text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavor={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write your task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        {/* <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity> */}
      </KeyboardAvoidingView>
>>>>>>> 9737b85 (Desafío 3)
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 80,
    marginBottom: 10,
    marginLeft: 20,
    textAlign: "center",
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});