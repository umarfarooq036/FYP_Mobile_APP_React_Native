import React, { useEffect, useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const dummyProducts = [
  {
    _id: '1',
    imageURL: 'https://via.placeholder.com/150',
    brand: 'Sample Brand 1',
    name: 'Product 1',
    rating: 4,
    price: 20,
  },
  {
    _id: '2',
    imageURL: 'https://via.placeholder.com/150',
    brand: 'Sample Brand 2',
    name: 'Product 2',
    rating: 3,
    price: 30,
  },
];

export default function Myproduct({ refresh }) {
  const [Foryouproducts, setForyouproducts] = useState(dummyProducts);
  const [visibleProducts, setVisibleProducts] = useState(12);
  const navigation = useNavigation();

  const loadMoreProducts = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12);
  };

  const redirectToProductDetail = () => {
    navigation.navigate('ProductDetail');
  };

  const handleRemoveItem = async id => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete this item?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'OK',
          onPress: async () => {
            try {
              console.log('Item deleted:', id);
            } catch (error) {
              console.error('Error deleting item:', error);
            }
          },
        },
      ]
    );
  };

  useEffect(() => {
  }, [refresh]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.productContainer}>
        {Foryouproducts.slice(0, visibleProducts).map((product, index) => (
          <View style={styles.product} key={index}>
            <TouchableOpacity onPress={redirectToProductDetail}>
              <Image source={{ uri: product.imageURL }} style={styles.productImage} />
              <View style={styles.productDescription}>
                <Text style={styles.brand}>{product.brand}</Text>
                <Text style={styles.name}>{product.name}</Text>
                <View style={styles.rating}>
                  {Array.from({ length: product.rating }).map((_, index) => (
                    <Icon key={index} name="star" size={16} color="#FFD700" />
                  ))}
                </View>
                <Text style={styles.price}>${product.price}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartButton} onPress={() => handleRemoveItem(product._id)}>
              <Icon name="trash" size={24} color="#ff0000" />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {Foryouproducts.length > visibleProducts && (
        <TouchableOpacity style={styles.loadMoreButton} onPress={loadMoreProducts}>
          <Text style={styles.loadMoreText}>Load More</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  product: {
    width: '48%',
    marginBottom: 20,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  productDescription: {
    paddingTop: 10,
  },
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 14,
    color: '#555',
  },
  rating: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
    elevation: 5,
  },
  loadMoreButton: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  loadMoreText: {
    color: '#fff',
    fontSize: 16,
  },
});
