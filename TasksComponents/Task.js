// Task.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Task = ({ task, onDelete, onToggle, onEdit }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onToggle(task.id)}>
        <Text style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <TouchableOpacity onPress={() => onEdit(task)} style={{ backgroundColor: 'maroon', padding: 10, marginRight: 5, width: 80, alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(task.id)} style={{ backgroundColor: 'maroon', padding: 10, width: 80, alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task;





