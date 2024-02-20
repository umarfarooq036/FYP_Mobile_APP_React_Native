import React from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';

const CategoriesSection = () => {
  const categories = [
    {
      title: 'Fashion',
      image: require('../assets/fashion.jpg'),
      onPress: () => {
        // Handle onPress event for Fashion category
      },
    },
    {
      title: 'Food & Drink',
      image: require('../assets/Fastfood.jpg'),
      onPress: () => {
        // Handle onPress event for Food & Drink category
      },
    },
    {
      title: 'Health & Fitness',
      image: require('../assets/Health-Ftiness.jpg'),
      onPress: () => {
        // Handle onPress event for Health & Fitness category
      },
    },
    {
      title: 'Travel',
      image: require('../assets/Travel.jpg'),
      onPress: () => {
        // Handle onPress event for Travel category
      },
    },
    {
      title: 'Technology',
      image: require('../assets/Techonlogy.jpg'),
      onPress: () => {
        // Handle onPress event for Technology category
      },
    },
    // Add more categories based on your app's theme
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Categories</Text>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category, index) => (
        <TouchableOpacity key={index} onPress={category.onPress} activeOpacity={1}>
          <Card style={styles.card}>
            <Card.Cover source={category.image} style={styles.cardImage}/>
            <Card.Content style={styles.cardContent}>
              <Title style={styles.categoryTitle}>{category.title}</Title>
            </Card.Content>
          </Card>
        </TouchableOpacity>
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color:"green"

  },
  card: {
    marginRight: 10,
    width: 150,
    elevation: 4,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    height: 80,
  },
  cardContent: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    // color:"green"
  },
});

export default CategoriesSection;
