import React from "react";
import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";

const CartBanner = () => {
  return (
    <ImageBackground
      source={require("../../assets/img/banner/b5.jpg")}
      style={styles.imageBackground}
    >
      <View style={styles.overlay}>
        <Text style={styles.headerText}>#Treat yo' self</Text>
        <Text style={styles.subHeaderText}>
          It's an "ADD TO CART" kinda DAY!!
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: "100%",
    padding: 14,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  subHeaderText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 8,
  },
});

export default CartBanner;
