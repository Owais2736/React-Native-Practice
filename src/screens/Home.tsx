import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <>
      <View style={styles.container}>
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile', { name: 'Owais' })}
        />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>

      <View style={styles.container}>
        <Text> Owais Ali</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
