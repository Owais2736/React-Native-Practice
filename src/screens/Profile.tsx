import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import {
  faCalendar,
  faCamera,
  faEye,
  faMailBulk,
  faMobile,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const screenWidth = Dimensions.get('screen').width;

export default function ProfileScreen({ route }: any) {
  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.header}>
        <Text style={profileStyles.text}>{route.params.name}</Text>

        <View style={profileStyles.iconWrapper}>
          <FontAwesomeIcon icon={faUser} color="purple" size={32} />
        </View>
      </View>

      <ScrollView contentContainerStyle={profileStyles.bodyContainer}>
        <View style={profileStyles.dataContainer}>
          <FontAwesomeIcon icon={faUser} color="purple" size={24} />
          <Text style={profileStyles.bodyText}>Owais Ali</Text>
        </View>
        <View style={profileStyles.dataContainer}>
          <FontAwesomeIcon icon={faCalendar} color="purple" size={24} />
          <Text style={profileStyles.bodyText}>Birthday</Text>
        </View>
        <View style={profileStyles.dataContainer}>
          <FontAwesomeIcon icon={faMobile} color="purple" size={24} />
          <Text style={profileStyles.bodyText}>8181234567</Text>
        </View>
        <View style={profileStyles.dataContainer}>
          <FontAwesomeIcon icon={faCamera} color="purple" size={24} />
          <Text style={profileStyles.bodyText}>Instagram account</Text>
        </View>
        <View style={profileStyles.dataContainer}>
          <FontAwesomeIcon icon={faMailBulk} color="purple" size={24} />
          <Text style={profileStyles.bodyText}>owaisali72359@gmail.com</Text>
        </View>
        <View style={profileStyles.dataContainer}>
          <FontAwesomeIcon icon={faEye} color="purple" size={24} />
          <Text style={profileStyles.bodyText}>Password</Text>
        </View>

        <TouchableOpacity style={profileStyles.button}>
          <Text style={profileStyles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: screenWidth * 1.2,
    height: 300,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    paddingTop: 20,
    borderRadius: 40,
    top: '-20%',
    left: '-7%',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 60,
  },
  iconWrapper: {
    position: 'absolute',
    bottom: -34,
    alignSelf: 'center',
    width: 90,
    height: 90,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  bodyContainer: {
    paddingTop: 200,
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: 30,
    borderBottomColor: 'purple',
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  bodyText: {
    color: 'purple',
    fontSize: 16,
  },
  button: {
    backgroundColor: 'purple',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
