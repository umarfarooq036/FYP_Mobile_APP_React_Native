import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useRoute } from "@react-navigation/native";
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

const CategoryProductList = ({ navigation }) => {
  const route = useRoute();
  const { category } = route.params;

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

  function chunkArray(array, size) {
    return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
      array.slice(index * size, index * size + size)
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products Related to {category.title}</Text>
      {/* <ScrollView >
        {latestProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            onPress={() => {
              redirectToProductDetail(product);
            }}
            activeOpacity={1}
          >
            <View style={styles.product}>
              <Image source={product.imgSrc} style={styles.image} />
              <View style={styles.detailsContainer}>
                <Text style={styles.brand}>{product.brand}</Text>
                <Text style={styles.name}>{product.name}</Text>
                <View style={styles.ratingContainer}>
                  {Array.from({ length: product.rating }, (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      style={styles.starIcon}
                    />
                  ))}
                </View>
                <Text style={styles.price}>${product.price}</Text>
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
        ))}
      </ScrollView> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {chunkArray(latestProducts, 2).map((rowProducts, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {rowProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                // onPress={() => redirectToProductDetail(product)}
                activeOpacity={1}
                style={styles.productContainer}
              >
                <View style={styles.product}>
                  <Image source={product.imgSrc} style={styles.image} />
                  <View style={styles.detailsContainer}>
                    <Text style={styles.brand}>{product.brand}</Text>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.ratingContainer}>
                      {Array.from({ length: product.rating }, (_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          style={styles.starIcon}
                        />
                      ))}
                    </View>
                    <Text style={styles.price}>${product.price}</Text>
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
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

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
    color: "green",
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // paddingHorizontal: 10,
    // marginBottom: 10,
    gap:4
  },
  productContainer: {
    width: '48%', // Adjust as needed with margins or paddings
  },
  product: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    width: 170,
    padding: 10,
    width: 180,
    // marginRight: 10, // Add margin between products
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
    color: "green",
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
    color: "green",
  },
  price: {
    fontWeight: "bold",
    color: "green",
  },
  cartIconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "green",
    borderRadius: 20,
    padding: 5,
  },
  cartIcon: {
    color: "#fff",
  },
});

export default CategoryProductList;
