import { View, Text, StyleSheet, Switch } from 'react-native';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowRight,
  faBell,
  faCheck,
  faGear,
  faLock,
  faMoon,
  faSync,
} from '@fortawesome/free-solid-svg-icons';

const Setting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  const toggleSwitch2 = () => {
    setIsEnabled2(previousState => !previousState);
  };
  const toggleSwitch3 = () => {
    setIsEnabled3(previousState => !previousState);
  };

  return (
    <View style={settingStyles.container}>
      {/* header code  */}
      <View style={settingStyles.header}>
        <Text style={settingStyles.setting}>
          <FontAwesomeIcon icon={faGear} color="white" size={24} />
        </Text>

        <Text style={settingStyles.title}>Settings</Text>
      </View>

      {/* body preference section */}
      <View style={settingStyles.preferenceContainer}>
        <Text style={settingStyles.preferenceHeading}>Preference</Text>

        <View style={settingStyles.preferenceData}>
          <View style={settingStyles.preferenceDataRight}>
            <Text style={settingStyles.moon}>
              <FontAwesomeIcon icon={faMoon} color="white" size={18} />
            </Text>

            <Text style={settingStyles.preferenceDataText}>Dark Mode</Text>
          </View>
          <Switch
            style={settingStyles.switchContainer}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={settingStyles.preferenceData}>
          <View style={settingStyles.preferenceDataRight}>
            <Text style={settingStyles.ring}>
              <FontAwesomeIcon icon={faBell} color="white" size={18} />
            </Text>

            <Text style={settingStyles.preferenceDataText}>Notifications</Text>
          </View>
          <Switch
            style={settingStyles.switchContainer}
            trackColor={{ false: '#767577', true: 'yellow' }}
            thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>

        <View style={settingStyles.preferenceData}>
          <View style={settingStyles.preferenceDataRight}>
            <Text style={settingStyles.sync}>
              <FontAwesomeIcon icon={faSync} color="white" size={18} />
            </Text>

            <Text style={settingStyles.preferenceDataText}>Auto Sync</Text>
          </View>
          <Switch
            style={settingStyles.switchContainer}
            trackColor={{ false: '#767577', true: 'green' }}
            thumbColor={isEnabled3 ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch3}
            value={isEnabled3}
          />
        </View>
      </View>

      {/* body action section */}

      <View style={settingStyles.actionContainer}>
        <Text style={settingStyles.preferenceHeading}>Actions</Text>

        <View style={settingStyles.preferenceData}>
          <View style={settingStyles.preferenceDataRight}>
            <Text style={settingStyles.moon}>
              <FontAwesomeIcon icon={faLock} color="white" size={18} />
            </Text>

            <Text style={settingStyles.preferenceDataText}>Share App</Text>
          </View>
          <FontAwesomeIcon icon={faArrowRight} color="white" size={16} />
        </View>

        <View style={settingStyles.preferenceData}>
          <View style={settingStyles.preferenceDataRight}>
            <Text style={settingStyles.sync}>
              <FontAwesomeIcon icon={faCheck} color="white" size={18} />
            </Text>

            <Text style={settingStyles.preferenceDataText}>
              Clear Completed (2)
            </Text>
          </View>
          <FontAwesomeIcon icon={faArrowRight} color="white" size={16} />
        </View>
      </View>
    </View>
  );
};

export default Setting;

const settingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingLeft: 0,
    paddingBottom: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
    borderRadius: 12,
  },
  setting: {
    backgroundColor: 'blue',
    borderRadius: 12,
    padding: 12,
  },
  title: {
    marginLeft: 10,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  preferenceContainer: {
    padding: 20,
    backgroundColor: '#1E1E1E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 12,
  },
  preferenceHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  preferenceData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  preferenceDataRight: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  preferenceDataText: {
    color: 'white',
    fontSize: 14,
  },
  switchContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moon: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 8,
  },

  ring: {
    backgroundColor: 'yellow',
    borderRadius: 5,
    padding: 8,
  },
  sync: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 8,
  },

  actionContainer: {
    padding: 20,
    backgroundColor: '#1E1E1E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 12,
    marginTop: 20,
  },
});
