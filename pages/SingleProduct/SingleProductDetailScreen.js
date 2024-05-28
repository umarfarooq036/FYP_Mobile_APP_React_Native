import { useRoute } from "@react-navigation/native";
import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, Animated, StyleSheet } from "react-native";
import { Platform } from 'react-native';
import YouMayLike from "../../Components/Product_Listings/YouMayLike";

const prod01Full = require("../../assets/img/prod-01-full.jpg");
const prod01Full02 = require("../../assets/img/prod-01-full(02).jpg");
const prod01Full03 = require("../../assets/img/prod-01-full(03).jpg");
const prod01Full04 = require("../../assets/img/prod-01-full(04).jpg");

const { width } = Dimensions.get("window");

const SingleProductDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const { data } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Beige");
  const [selectedSize, setSelectedSize] = useState(null);
  const [addToCartPressed, setAddToCartPressed] = useState(false);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const addToCart = (item) => {
    console.log("Item added to cart:", item);
  };

  const colors = [
    { id: 'Green', color: '#767762' },
    { id: 'Black', color: '#000000' },
    { id: 'Maroon', color: '#8B2943' },
    { id: 'Blue', color: '#82A5AD' }
  ];

  const sizes = ['XS', 'S', 'M', 'L'];

  const thumbnailImages = [
    { id: 'main', src: data.imgSrc },
    { id: '1', src: prod01Full },
    { id: '2', src: prod01Full02 },
    { id: '3', src: prod01Full03 },
    { id: '4', src: prod01Full04 },
  ];

  useEffect(() => {
    console.log(thumbnailImages);
  }, [data]);

  const handleIncreaseQuantity = () => {
    if (quantity < 6) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const getColorName = (colorId) => {
    switch (colorId) {
      case 'Green':
        return 'Green';
      case 'Black':
        return 'Black';
      case 'Maroon':
        return 'Maroon';
      case 'Blue':
        return 'Blue';
      default:
        return 'Color';
    }
  };

  const handleAddToCartPress = () => {
    const newItem = {
      id: data.id,
      name: data.name,
      price: data.price,
      quantity: quantity,
      color: selectedColor,
      size: selectedSize,
    };
    addToCart(newItem);
    setAddToCartPressed(true);
  };
  
  return (
    <FlatList
      data={[{ key: "mainView" }]}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.mainImageContainer}>
            <FlatList
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              data={thumbnailImages}
              renderItem={({ item }) => (
                <Image source={item.src} style={styles.mainImage} />
              )}
              keyExtractor={(item) => item.id}
              ref={flatListRef}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
            />
            <View style={styles.indicatorContainer}>
              {thumbnailImages.map((_, index) => {
                const widthInterpolation = scrollX.interpolate({
                  inputRange: [
                    width * (index - 1),
                    width * index,
                    width * (index + 1),
                  ],
                  outputRange: [10, 20, 10],
                  extrapolate: "clamp",
                });
                return (
                  <Animated.View
                    key={index}
                    style={[styles.indicator, { width: widthInterpolation }]}
                  />
                );
              })}
            </View>
          </View>
          <View style={styles.productDetailsContainer}>
            <Text style={styles.productName}>ELLEGANCE FLORA - GREEN</Text>
            <View style={styles.priceAndRatingContainer}>
              <Text style={styles.productPrice}>PKR 9,845.00</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.starRating}>★★★★☆</Text>
                <Text style={styles.reviewCount}>(18)</Text>
              </View>
            </View>
            <Text style={styles.sectionTitle}>Color: {getColorName(selectedColor)}</Text>
            <View style={styles.colorOptionsContainer}>
              {colors.map((color) => (
                <TouchableOpacity
                  key={color.id}
                  style={[
                    styles.colorOption,
                    selectedColor === color.id && styles.selectedColorOption,
                    { backgroundColor: color.color }
                  ]}
                  onPress={() => setSelectedColor(color.id)}
                />
              ))}
            </View>
            <Text style={styles.sectionTitle}>Size: {selectedSize}</Text>
            <View style={styles.sizeOptionsContainer}>
              {sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  style={[
                    styles.sizeOption,
                    selectedSize === size && styles.selectedSizeOption,
                  ]}
                  onPress={() => setSelectedSize(size)}
                >
                  <Text style={styles.sizeOptionText}>{size}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={handleDecreaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <View style={styles.quantityBox}>
                <Text style={styles.quantityText}>{quantity}</Text>
              </View>
              <TouchableOpacity onPress={handleIncreaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>           
            <TouchableOpacity
              onPress={handleAddToCartPress}
              activeOpacity={1}
              style={[
                styles.addToCartButton,
                addToCartPressed && { backgroundColor: '#0c520f' }, // Change background color to green if pressed
                addToCartPressed && { elevation: 5 } // Add elevation when pressed
              ]}
            >
              <Text style={[styles.addToCartButtonText, { color: addToCartPressed ? '#fff' : '#fff' }]}>
                Add to Cart
              </Text>
            </TouchableOpacity>
            <Text style={styles.productDescription}>Product Details:</Text>
            <Text style={styles.productDetailsText}>
              Ellegance Flora {"\n"}
              <Text style={{ fontWeight: "bold" }}>Shirt:</Text> Embroidered Cotton Karandi Sp 2.50 Meter {"\n"}
              <Text style={{ fontWeight: "bold" }}>Dupatta:</Text> Embroidered Chiffon Self 2.50 Meter {"\n"}
              <Text style={{ fontWeight: "bold" }}>Shalwar:</Text> Plain Cotton Karandi Sp 2.50 Meter
            </Text>
          </View>
          <YouMayLike navigation={navigation} />
        </View>
      )}
      keyExtractor={(item) => item.key}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainImageContainer: {
    height: 400,
  },
  mainImage: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  indicator: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#EDDFD1',
    marginHorizontal: 5,
  },
  productDetailsContainer: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  priceAndRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    color: '#888',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starRating: {
    fontSize: 18,
    color: '#000',
  },
  reviewCount: {
    fontSize: 14,
    color: '#888',
    marginLeft: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  colorOptionsContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  colorOption: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
    width: 40,
    height: 40,
  },
  selectedColorOption: {
    borderColor: '#777777',
    borderWidth: 2,
  },
  sizeOptionsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  sizeOption: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 50,
    padding: 10,
    marginHorizontal: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedSizeOption: {
    borderColor: '#777777',
    borderWidth: 2,
  },
  sizeOptionText: {
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  quantityButton: {
    backgroundColor: '#ddd',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  addToCartButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  productDescription: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productDetailsText: {
    fontSize: 16,
    color: '#666',
  },
});

export default SingleProductDetailScreen;
