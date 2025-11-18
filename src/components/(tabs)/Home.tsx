import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCalendar,
  faEdit,
  faPlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

export default function HomeScreen() {
  const [todo, setTodo] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('tasks');
        if (storedTasks) setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.log('Error loading tasks:', error);
      }
    };
    loadTasks();
  }, []);

  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        console.log('Error saving tasks:', error);
      }
    };
    saveTasks();
  }, [tasks]);

  const addOrUpdateTask = () => {
    if (todo.trim() === '') return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = todo;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, todo]);
    }

    setTodo('');
  };

  const deleteTask = (index: number) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    if (editIndex === index) setEditIndex(null);
  };

  const editTask = (index: number) => {
    setTodo(tasks[index]);
    setEditIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerCard}>
        <FontAwesomeIcon icon={faCalendar} size={36} color="#007AFF" />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Today's Tasks 👀</Text>
          <Text style={styles.subtitle}>
            {tasks.filter(t => t).length} of {tasks.length} complete
          </Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What needs to be done?"
          placeholderTextColor="#888"
          value={todo}
          onChangeText={setTodo}
        />
        <TouchableOpacity style={styles.addButton} onPress={addOrUpdateTask}>
          <FontAwesomeIcon icon={faPlus} color="#fff" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.taskList}
        renderItem={({ item, index }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.editIcon}
                onPress={() => editTask(index)}
              >
                <FontAwesomeIcon icon={faEdit} color="#fff" size={16} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteTask(index)}
                style={styles.trashIcon}
              >
                <FontAwesomeIcon icon={faTrash} color="#fff" size={16} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 16 },

  headerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1E1E1E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    borderRadius: 12,
  },

  titleContainer: { flexDirection: 'column', marginLeft: 14 },

  title: { fontSize: 22, fontWeight: '700', color: '#fff' },

  subtitle: { fontSize: 15, color: '#A1A1A1', marginTop: 3 },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },

  input: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    color: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
  },

  addButton: {
    marginLeft: 10,
    backgroundColor: '#007AFF',
    padding: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  taskList: { paddingBottom: 20 },

  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },

  taskText: { flex: 1, color: '#fff', fontSize: 16 },

  trashIcon: { justifyContent: 'center', alignItems: 'center', marginLeft: 12 },

  editIcon: { justifyContent: 'center', alignItems: 'center', marginRight: 12 },

  buttonContainer: { flexDirection: 'row' },
});
