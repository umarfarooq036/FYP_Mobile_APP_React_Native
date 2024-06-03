import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sidebar from '../Components/Sidebar';

export default function SettingsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Sidebar />
      <ScrollView style={styles.main}>
        <View style={styles.settings}>
          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.linkText}>Account Information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('PrivacySecurity')}>
            <Text style={styles.linkText}>Privacy and Security</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('HelpSupport')}>
            <Text style={styles.linkText}>Help and Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 0,
    padding: 0,
    maxWidth: '100%',
  },
  main: {
    marginTop: 58,
  },
  settings: {
    marginHorizontal: 16,
    marginVertical: 20,
  },
  link: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  linkText: {
    fontSize: 16,
  },
});
