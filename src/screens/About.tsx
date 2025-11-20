import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function About({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About Page</Text>

      <Text style={styles.text}>
        This is the About page of the app. You can put any information about
        your app here.
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Todos')}
      >
        <Text style={styles.buttonText}>Go back to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#121212',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  text: { fontSize: 16, textAlign: 'center', marginBottom: 20, color: 'white' },
  button: { backgroundColor: 'blue', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', fontSize: 16 },
});
