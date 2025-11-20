import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/(tabs)/Home';
import Settings from '../components/(tabs)/Setting';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faGear,
  faHashtag,
  faListCheck,
} from '@fortawesome/free-solid-svg-icons';
import Counter from '../components/(tabs)/Counter';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopWidth: 1,
          borderTopColor: '#1E1E1E',
          height: 60,
          paddingBottom: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Todos"
        component={HomeScreen}
        options={{
          title: 'Todos',
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faListCheck} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faGear} color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Counter"
        component={Counter}
        options={{
          title: 'Counter',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faHashtag} color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
