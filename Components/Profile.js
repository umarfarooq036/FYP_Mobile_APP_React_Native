import React from 'react';
import { SafeAreaView, View, Text, Pressable, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#121212' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
        <Image
          source={{ uri: 'https://source.unsplash.com/random' }}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <Text style={{ color: '#ffffff', fontSize: 24, fontWeight: 'bold' }}>Joe Bloggs</Text>
          <Text style={{ color: '#ffffff', fontSize: 16 }}>joe@bloggs.com</Text>
        </View>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 20 }}>
        <Pressable style={{ flexDirection: 'row', alignItems: 'center', padding: 10, marginBottom: 10 }}>
          <Ionicons name="settings-outline" size={24} color="#ffffff" />
          <Text style={{ color: '#ffffff', fontSize: 18, marginLeft: 10 }}>Settings</Text>
        </Pressable>
        <Pressable style={{ flexDirection: 'row', alignItems: 'center', padding: 10, marginBottom: 10 }}>
          <Ionicons name="help-buoy-outline" size={24} color="#ffffff" />
          <Text style={{ color: '#ffffff', fontSize: 18, marginLeft: 10 }}>Help</Text>
        </Pressable>
        <Pressable style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <MaterialIcons name="logout" size={24} color="#ffffff" />
          <Text style={{ color: '#ffffff', fontSize: 18, marginLeft: 10 }}>Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};


export default Profile;