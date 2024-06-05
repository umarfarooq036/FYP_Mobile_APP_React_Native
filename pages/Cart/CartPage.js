import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
  ToastAndroid
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CartBanner from "./CartBanner";

let productsData = [
  {
    id: 1,
    name: "Advanced White AirPods",
    price: 2399,
    image: require("../../assets/img/products/D1.jpg"),
  },
  {
    id: 2,
    name: "Chic Puffer Jacket",
    price: 8999,
    image: require("../../assets/img/products/D2.jpg"),
  },
  {
    id: 3,
    name: "Trendy Thick Sole Sneakers",
    price: 4400,
    image: require("../../assets/img/products/D3.jpg"),
  },
  {
    id: 4,
    name: "Handmade Wall Hanging DIY kit",
    price: 3831,
    image: require("../../assets/img/products/D4.jpg"),
  },
];

export default function Cart({navigation}) {
  const [quantities, setQuantities] = useState(
    productsData.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {})
  );

  const removeProduct = (productId) => {
    productsData = productsData.filter((item) => item.id != productId);
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      delete updatedQuantities[productId];
      return updatedQuantities;
    });
  };

  const increaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  };

  const decreaseQuantity = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(0, prevQuantities[productId] - 1),
    }));
  };

  const getTotalBill = () => {
    return Object.values(quantities).reduce(
      (total, quantity, index) => total + quantity * productsData[index].price,
      0
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CartBanner />
        <View style={styles.content}>
          <Text style={styles.header}>Your Cart</Text>
          {productsData.length > 0 ? (
            productsData.map((product) => (
              <View key={product.id} style={styles.productContainer}>
                <TouchableOpacity
                  onPress={() => removeProduct(product.id)}
                  style={styles.removeButton}
                >
                  <MaterialIcons name="delete" size={24} color="#333" />
                </TouchableOpacity>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>Rs. {product.price}</Text>
                <View style={styles.quantityContainer}>
                  <TouchableOpacity
                    onPress={() => decreaseQuantity(product.id)}
                  >
                    <MaterialIcons name="remove" size={24} color="#007bff" />
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{quantities[product.id]}</Text>
                  <TouchableOpacity
                    onPress={() => increaseQuantity(product.id)}
                  >
                    <MaterialIcons name="add" size={24} color="#007bff" />
                  </TouchableOpacity>
                </View>
                <Text style={styles.productTotal}>
                  Total: Rs. {product.price * quantities[product.id]}
                </Text>
              </View>
            ))
          ) : (
            <>
              <Text style={{ fontSize: 50, textAlign:'center' }}>OOPS!...{'\n'}No product available</Text>
              <TouchableOpacity style={{width:100 ,alignSelf:'center' , paddingVertical:20}}>
                <Button
                  title="Add Product"
                  onPress={() => navigation.goBack()}
                />
              </TouchableOpacity>
            </>
          )}
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total Bill:</Text>
            <Text style={styles.totalAmount}>Rs. {getTotalBill()}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton} onPress={()=>{ToastAndroid.show("Proceed to ChekcOut!",ToastAndroid.SHORT)}}>
            <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  productContainer: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    position: "relative",
  },
  removeButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 1,
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
    borderRadius: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  productPrice: {
    marginBottom: 5,
    color: "#666",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
    color: "#333",
  },
  productTotal: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#007bff",
  },
  checkoutButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
