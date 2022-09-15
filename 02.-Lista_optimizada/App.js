import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View, Alert } from 'react-native';
import TaskInputField from './components/TaskInputField';
import TaskItem from './components/TaskItem';

export default function App() {

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return Alert.alert("Ooops!", "Please, enter a task");
    setTasks([...tasks, task]);
    Keyboard.dismiss();
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