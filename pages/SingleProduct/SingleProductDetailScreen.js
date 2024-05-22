import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect, useRef } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style.module";
import ThumbnailList from "./ThumbnailList";

import prod01Full from "../../assets/img/prod-01-full.jpg";
import prod01Full02 from "../../assets/img/prod-01-full(02).jpg";
import prod01Full03 from "../../assets/img/prod-01-full(03).jpg";
import prod01Full04 from "../../assets/img/prod-01-full(04).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import YouMayLike from "../../Components/Product_Listings/YouMayLike";

const SingleProductDetailScreen = ({ navigation }) => {
  const route = useRoute();
  const { data } = route.params;
  const [mainImage, setMainImage] = useState(data.imgSrc);
  const [quantity, setQuantity] = useState(1);
  const flatListRef = useRef(null);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    flatListRef.current.scrollToOffset({ offset: 0, animated: true });
    setMainImage(data.imgSrc);
  }, [data]);

  const thumbnailImages = [
    data.imgSrc,
    prod01Full,
    prod01Full02,
    prod01Full03,
    prod01Full04,
  ];

  const redirectToProductDetail = (product) => {
    navigation.navigate("SingleProduct", { data: product });
  };

  return (
    <FlatList
      ref={flatListRef}
      data={[{ key: "mainView" }]}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.productDetailsContainer}>
            <View style={styles.mainImageContainer}>
              <Image source={mainImage} style={styles.mainImage} />
            </View>

            <ThumbnailList
              thumbnailImages={thumbnailImages}
              onThumbnailClick={handleThumbnailClick}
            />
            <Text style={styles.productName}>ELLEGANCE FLORA - GREEN</Text>
            <Text style={styles.productPrice}>PKR 9,845.00</Text>
            <View style={styles.sizeOptionsContainer}>
              <TouchableOpacity style={styles.sizeOption}>
                <Text style={styles.sizeOptionText}>S</Text>
              </TouchableOpacity>
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
              <Text style={{ fontWeight: "bold" }}>Shirt:</Text> Embroidered
              Cotton Karandi Sp 2.50 Meter {"\n"}
              <Text style={{ fontWeight: "bold" }}>Dupatta:</Text> Embroidered
              Chiffon Self 2.50 Meter {"\n"}
              <Text style={{ fontWeight: "bold" }}>Shalwar:</Text> Plain Cotton
              Karandi Sp 2.50 Meter
            </Text>
          </View>
          <YouMayLike navigation={navigation} />
        </View>
      )}
      keyExtractor={(item) => item.key}
    />
  );
};

export default SingleProductDetailScreen;