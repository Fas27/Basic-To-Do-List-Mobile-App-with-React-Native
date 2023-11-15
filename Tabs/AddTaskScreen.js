// AddTaskScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { addTask } from '../Database/Database';

const AddTaskScreen = ({ navigation }) => {
  const [taskText, setTaskText] = useState('');

  const handleAddTask = () => {
    if (taskText.trim() === '') {
      return;
    }

    navigation.navigate('Home', { taskText });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#5ee0c2', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <TextInput
        placeholder="Write the Task here..."
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
        style={{ backgroundColor: '#FFF', padding: 10, marginBottom: 10, borderRadius: 5, width: '100%', fontSize: 18 }}
      />
      <Button
        title="Add"
        onPress={handleAddTask}
        color="#0d6b55"
        style={{ borderRadius: 20, fontSize: 50, width: '80%', height: 50 }} 
      />
    </View>
  );
};

export default AddTaskScreen;





