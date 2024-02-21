import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/img/prod-10.jpg";
import img2 from "../../assets/img/prod-13.jpg";
import img3 from "../../assets/img/prod-6.jpg";
import img4 from "../../assets/img/prod-12.jpg";
import img5 from "../../assets/img/prod-9.jpg";
import img6 from "../../assets/img/prod-8.jpg";
import img7 from "../../assets/img/prod-1.jpg";
import img8 from "../../assets/img/prod-5.jpg";

const latestProducts = [
  {
    id: 1,
    imgSrc: img1,
    brand: "Khaadi",
    name: "Basic Winter Clothes",
    rating: 4,
    price: 50,
  },
  {
    id: 2,
    imgSrc: img2,
    brand: "Handicrafts",
    name: "Pure Craft Hand Bag",
    rating: 5,
    price: 20,
  },
  {
    id: 3,
    imgSrc: img3,
    brand: "Wall Hangings",
    name: "Eye Mandala Set",
    rating: 4,
    price: 60,
  },
  {
    id: 4,
    imgSrc: img4,
    brand: "ROLEX",
    name: "Luxury Men Watch",
    rating: 5,
    price: 435,
  },
  {
    id: 5,
    imgSrc: img5,
    brand: "Embroided",
    name: "Coral Block Silver Print - Coat",
    rating: 4,
    price: 66.76,
  },
  {
    id: 6,
    imgSrc: img6,
    brand: "Candle Holders",
    name: "Candle Holder Candlestick",
    rating: 4.5,
    price: 134,
  },
  {
    id: 7,
    imgSrc: img7,
    brand: "Tealight Candle Holders",
    name: "Decorative Light Glass",
    rating: 4,
    price: 140,
  },
  {
    id: 8,
    imgSrc: img8,
    brand: "Handicrafts",
    name: "Crystal Handicrafted Royal Cart",
    rating: 5,
    price: 1330,
  },
];

export default function YouMayLike({ navigation }) {

  const redirectToProductDetail = (product) => {
    navigation.navigate('SingleProduct', { data: product });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => { redirectToProductDetail(item) }}
      activeOpacity={1}
      style={{ flex: 1, marginBottom: 20 }}
    >
      <View style={styles.product}>
        <Image source={item.imgSrc} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.ratingContainer}>
            {Array.from({ length: item.rating }, (_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                style={styles.starIcon}
              />
            ))}
          </View>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <TouchableOpacity
          style={styles.cartIconContainer}
          onPress={() => console.log("Add to cart")}
        >
          <FontAwesomeIcon
            icon={faCartPlus}
            size={20}
            style={styles.cartIcon}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>You May Also Like</Text>
      <FlatList
        data={latestProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#095a55",
  },
  product: {
    // marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    width: "90%",
    // height:"60%",
    padding: 10,
    // marginRight: 10,
  },
  image: {
    width: "100%",
    height: 150,
  },
  detailsContainer: {
    marginTop: 10,
  },
  brand: {
    fontWeight: "bold",
    color: "#095a55",
  },
  name: {
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  starIcon: {
    marginRight: 2,
    color: "#095a55",
  },
  price: {
    fontWeight: "bold",
    color: "#095a55",
  },
  cartIconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#095a55",
    borderRadius: 20,
    padding: 5,
  },
  cartIcon: {
    color: "#fff",
  },
  flatListContainer: {
    paddingBottom: 20,
  },
});
