// EditTaskScreen.js
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { updateTask } from '../Database/Database';


const EditTaskScreen = ({ route, navigation }) => {
  const [taskText, setTaskText] = useState(route.params?.task?.text || '');

  useEffect(() => {
    navigation.setOptions({ title: `Edit Task` });
  }, [navigation]);

  const handleEditTask = () => {
    if (!route.params?.task) {
      return;
    }

    if (taskText.trim() === '') {
      return;
    }

    navigation.navigate('Home', { editedTask: { ...route.params.task, text: taskText } });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#5ee0c2', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <TextInput
        placeholder="Edit.."
        value={taskText}
        onChangeText={(text) => setTaskText(text)}
        style={{ backgroundColor: '#FFF', padding: 10, marginBottom: 10, borderRadius: 5, width: '100%', fontSize: 18 }}
      />
      <Button
        title="Save"
        onPress={handleEditTask}
        color="#0d6b55"
        style={{ borderRadius: 5, width: '80%' }}
      />
    </View>
  );
};

export default EditTaskScreen;