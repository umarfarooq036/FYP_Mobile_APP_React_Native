import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const Products = () => {
  const cardData = [
    {
      image: 'https://via.placeholder.com/300',
      title: 'Product 1',
      description: 'Description for Product 1',
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Product 2',
      description: 'Description for Product 2',
    },
    {
      image: 'https://via.placeholder.com/300',
      title: 'Product 3',
      description: 'Description for Product 3',
    },
    // Add more product data as needed
  ];

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.cardImage} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          {/* Add buttons for Share and Learn More here */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending Products</Text>
      <Carousel
        data={cardData}
        renderItem={renderItem}
        sliderWidth={400} // This is the width of each item in the carousel
        itemWidth={300}
        loop={false}
        autoplay
        autoplayDelay={500}
        autoplayInterval={3000}
        layout={'default'}
        horizontal={true}
        style={styles.carouselContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  carouselContainer: {
    // Add styles to control the width of the carousel
    alignSelf: 'center', // Center the carousel horizontally
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    marginBottom: 10,
    marginRight: 10,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default Products;
