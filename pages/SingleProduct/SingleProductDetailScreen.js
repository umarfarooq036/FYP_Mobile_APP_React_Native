import { useRoute } from "@react-navigation/native";
import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, Animated, StyleSheet } from "react-native";
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
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const thumbnailImages = [
      { id: 'main', src: data.imgSrc },
      { id: '1', src: prod01Full },
      { id: '2', src: prod01Full02 },
      { id: '3', src: prod01Full03 },
      { id: '4', src: prod01Full04 },
    ];
    console.log(thumbnailImages);
  }, [data]);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const thumbnailImages = [
    { id: 'main', src: data.imgSrc },
    { id: '1', src: prod01Full },
    { id: '2', src: prod01Full02 },
    { id: '3', src: prod01Full03 },
    { id: '4', src: prod01Full04 },
  ];

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
            <Text style={styles.productPrice}>PKR 9,845.00</Text>
            <View style={styles.sizeOptionsContainer}>
              <TouchableOpacity style={styles.sizeOption}>
                <Text style={styles.sizeOptionText}>S</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sizeOption}>
                <Text style={styles.sizeOptionText}>M</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.sizeOption}>
                <Text style={styles.sizeOptionText}>L</Text>
              </TouchableOpacity>
              {/* Add more size options as needed */}
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={handleDecreaseQuantity}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityButton}>{quantity}</Text>
              <TouchableOpacity onPress={handleIncreaseQuantity}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText}>Add to Cart</Text>
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
  productPrice: {
    fontSize: 20,
    color: '#888',
    marginVertical: 10,
  },
  sizeOptionsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  sizeOption: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  sizeOptionText: {
    fontSize: 14,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  quantityButton: {
    fontSize: 18,
    paddingHorizontal: 10,
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
