import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

import FashionImg1 from "../assets/Category-Fashion/fashion1.jpg";
import FashionImg2 from "../assets/Category-Fashion/fashion2.jpg";
import FashionImg3 from "../assets/Category-Fashion/fashion3.jpg";
import FashionImg4 from "../assets/Category-Fashion/fashion4.jpg";
import FDImg1 from "../assets/Category-Food&Drink/food&drink1.jpg";
import FDImg2 from "../assets/Category-Food&Drink/food&drink2.jpg";
import FDImg3 from "../assets/Category-Food&Drink/food&drink3.jpg";

// Sample data representing shops
const shops = [
  {
    id: 1,
    name: "Fashion Store 1",
    category: "Fashion",
    description: "Description of Fashion Store 1",
    image: FashionImg1,
  },
  {
    id: 2,
    name: "Fashion Store 2",
    category: "Fashion",
    description: "Description of Fashion Store 2",
    image: FashionImg2,
  },
  {
    id: 3,
    name: "Food & Drink Shop 1",
    category: "Food & Drink",
    description: "Description of Food & Drink Shop 1",
    image: FDImg1,
  },
  {
    id: 4,
    name: "Food & Drink Shop 2",
    category: "Food & Drink",
    description: "Description of Food & Drink Shop 2",
    image: FDImg2,
  },
  {
    id: 5,
    name: "Health & Fitness Center 1",
    category: "Health & Fitness",
    description: "Description of Health & Fitness Center 1",
    image: FashionImg1,
  },
  {
    id: 6,
    name: "Health & Fitness Center 2",
    category: "Health & Fitness",
    description: "Description of Health & Fitness Center 2",
    image: FashionImg2,
  },
  {
    id: 7,
    name: "Travel Agency 1",
    category: "Travel",
    description: "Description of Travel Agency 1",
    image: FDImg1,
  },
  {
    id: 8,
    name: "Travel Agency 2",
    category: "Travel",
    description: "Description of Travel Agency 2",
    image: FDImg2,
  },
  {
    id: 9,
    name: "Technology Store 1",
    category: "Technology",
    description: "Description of Technology Store 1",
    image: FashionImg1,
  },
  {
    id: 10,
    name: "Technology Store 2",
    category: "Technology",
    description: "Description of Technology Store 2",
    image: FashionImg2,
  },
  {
    id: 11,
    name: "Fashion Store 3",
    category: "Fashion",
    description: "Description of Fashion Store 3",
    image: FashionImg3,
  },
  {
    id: 12,
    name: "Food & Drink Shop 3",
    category: "Food & Drink",
    description: "Description of Food & Drink Shop 3",
    image: FDImg3,
  },
  {
    id: 13,
    name: "Health & Fitness Center 3",
    category: "Health & Fitness",
    description: "Description of Health & Fitness Center 3",
    image: FashionImg3,
  },
  {
    id: 14,
    name: "Travel Agency 3",
    category: "Travel",
    description: "Description of Travel Agency 3",
    image: FDImg3,
  },
  {
    id: 15,
    name: "Technology Store 3",
    category: "Technology",
    description: "Description of Technology Store 3",
    image: FashionImg3,
  },
];

// Group shops by category
const groupedShops = shops.reduce((groups, shop) => {
  const { category } = shop;
  if (!groups[category]) {
    groups[category] = [];
  }
  groups[category].push(shop);
  return groups;
}, {});

const ShopCard = ({ shop }) => {
  return (
    <View style={styles.card}>
      <Image source={shop.image} style={styles.image} />
      <Text style={styles.name}>{shop.name}</Text>
      <Text style={styles.description}>{shop.description}</Text>
    </View>
  );
};

const ShopsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ flexDirection: "column" }}>
        <ImageBackground
          source={require("../assets/img/bg-image.jpg")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.heading}>#stay at Home - SHOP</Text>
          </View>
        </ImageBackground>
      </View>
      {Object.entries(groupedShops).map(([category, shops]) => (
        <View key={category}>
          <Text style={styles.category}>{category}</Text>
          <FlatList
            data={shops}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ShopCard shop={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#088178",
    paddingVertical: 10,
    marginTop: 10,
    textAlign: "center",
  },
  card: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 5,
    width: 150,
    elevation: 2, // for Android shadow
    backgroundColor: "#fff", // background color of cards
  },
  image: {
    width: "100%",
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    color: "#088178",
  },
  description: {
    fontSize: 12,
    fontWeight: "500",
  },
  background: {
    width: "100%",
    height: 200, // Adjust the height as needed
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
    padding: 14,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

export default ShopsScreen;
