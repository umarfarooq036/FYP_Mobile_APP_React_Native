import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = ({ user, rating, starCounts }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: user?.avatarUrl }} style={styles.avatar} />
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.email}>{user?.email}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text>Phone:</Text>
            <Text>{user?.phoneNumber || 'Phone number will be provided soon!'}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text>Address:</Text>
            <Text>{user?.address}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ratingsContainer}>
        <View style={styles.ratingsHeader}>
          <Text style={styles.ratingsTitle}>Ratings</Text>
          <View style={styles.ratingValue}>
            <Text style={styles.ratingNumber}>{rating.toFixed(1)}</Text>
            <Text style={styles.star}>⭐</Text>
          </View>
        </View>
        {Object.keys(starCounts).map(star => (
          <View key={star} style={styles.ratingItem}>
            <Text>{`${star} star`}</Text>
            <Text>{starCounts[star]}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Ratings')}>
          <Text style={styles.buttonText}>See all ratings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  profileContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6c63ff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  ratingsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  ratingsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingsTitle: {
    fontSize: 24,
    color: '#333',
  },
  ratingValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6c63ff',
    marginRight: 5,
  },
  star: {
    color: '#FFD700',
  },
  ratingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f7f7f7',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default ProfilePage;
