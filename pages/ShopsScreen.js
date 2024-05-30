import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { groupedShops } from '../data/shopsData';
import BottomNavBar from '../Components/Navigation/BottomNavBar';

const Background = () => (
  <View style={{ flexDirection: 'column' }}>
    <ImageBackground
      source={require('../assets/img/bg-image.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.heading}>#stay at Home - SHOP</Text>
      </View>
    </ImageBackground>
  </View>
);


const ShopsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Background />
        {Object.entries(groupedShops).map(([category, shops]) => (
          <View key={category}>
            <Text style={styles.category}>{category}</Text>
            <FlatList
              data={shops}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ShopPage', { shop: item })}
                >
                  <View style={styles.card}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        ))}
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#088178',
    paddingVertical: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
    width: 150,
    elevation: 2,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#088178',
  },
  description: {
    fontSize: 12,
    fontWeight: '500',
  },
  background: {
    width: '100%',
    height: 200,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 14,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default ShopsScreen;
