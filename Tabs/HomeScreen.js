// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Task from '../TasksComponents/Task';
import { createTable, addTask, deleteTask, getAllTasks, updateTask } from '../Database/Database';

const HomeScreen = ({ route, navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    createTables();
    fetchTasks();
  }, [route.params]);

  const createTables = () => {
    createTable();
  };
  
  const fetchTasks = () => {
    getAllTasks((result) => setTasks(result));
  };

  const addTaskToDatabase = (text) => {
    const newTask = { id: Math.random().toString(), text, completed: false };
    addTask(newTask);
    fetchTasks();
  };

  const deleteTaskFromDatabase = (taskId) => {
    deleteTask(taskId);
    fetchTasks();
  };

  const toggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    updateTask(updatedTasks.find((task) => task.id === taskId));
  };

  const editTask = (task) => {
    navigation.navigate('EditTask', { task });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#5ee0c2', padding: 20 }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Task
              task={item}
              onDelete={() => deleteTaskFromDatabase(item.id)}
              onToggle={() => toggleTask(item.id)}
              onEdit={() => editTask(item)}
            />
          </View>
        )}
        style={{ marginBottom: 20 }}
      />
    </View>
  );
};

export default HomeScreen;