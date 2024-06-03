import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { auth } from '../pages/hooks/auth';

export default function Sidebar() {
  const navigation = useNavigation();
  const user = auth();
  const [userData, setUserData] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const fetchData = () => {
    axios.get(`http://localhost:3002/users/${user.id}`)
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.sidebarContainer}>
      <TouchableOpacity style={styles.toggler} onPress={toggleSidebar}>
        <Text style={styles.togglerText}>☰</Text>
      </TouchableOpacity>
      {sidebarCollapsed && (
        <ScrollView style={styles.sidebar}>
          <View style={styles.profileContainer}>
            <Image
              style={styles.profileImage}
              source={{ uri: userData?.imageUrl || 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp' }}
            />
            <Text style={styles.profileName}>{user?.firstName.toUpperCase()}</Text>
          </View>
          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Profile')}>
            <Text style={styles.linkText}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Analytics')}>
            <Text style={styles.linkText}>Analytics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('MyShop')}>
            <Text style={styles.linkText}>My Shop</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('OrderHistory')}>
            <Text style={styles.linkText}>Order History</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Wallet')}>
            <Text style={styles.linkText}>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Settings')}>
            <Text style={[styles.linkText, styles.activeLink]}>Settings</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebarContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toggler: {
    padding: 10,
    backgroundColor: '#eee',
  },
  togglerText: {
    fontSize: 24,
  },
  sidebar: {
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 18,
    marginVertical: 10,
  },
  link: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  linkText: {
    fontSize: 16,
  },
  activeLink: {
    color: 'blue',
  },
});
