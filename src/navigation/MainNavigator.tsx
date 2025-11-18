import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import HomeScreen from '../components/(tabs)/Home';
// import ProfileScreen from '../screens/Profile';
// import About from '../screens/About';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabNavigator from './TabNavigator';

// const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <Stack.Navigator
          // screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: 'Profile Page' }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ title: 'About Page' }}
          />
        </Stack.Navigator> */}

        <TabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
