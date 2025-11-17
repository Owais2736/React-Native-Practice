import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen({ route }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is {route.params.name}'s profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});
