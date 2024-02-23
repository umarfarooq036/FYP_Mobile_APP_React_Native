// // SingleProductDetailScreen.js
// import React, { useEffect, useState, useRef } from "react";
// import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
// import { styles } from "./style.module";
// import { useRoute } from "@react-navigation/native";
// // Sample product images
// import prod01Full from "../../assets/img/prod-01-full.jpg";
// import prod01Full02 from "../../assets/img/prod-01-full(02).jpg";
// import prod01Full03 from "../../assets/img/prod-01-full(03).jpg";
// import prod01Full04 from "../../assets/img/prod-01-full(04).jpg";
// import Latest from "../../Components/Product_Listings/Latest_Products";
// import YouMayLike from "../../Components/Product_Listings/YouMayLike";

// const SingleProductDetailScreen = ({ navigation }) => {
//   const route = useRoute();
//   const { data } = route.params;
//   const [mainImage, setMainImage] = useState(prod01Full);
//   const thumbnailImages = [
//     data.imgSrc,
//     prod01Full,
//     prod01Full02,
//     prod01Full03,
//     prod01Full04,
//   ];
//   const scrollViewRef = useRef();
//   const [quantity, setQuantity] = useState(1);

//   const handleThumbnailClick = (image) => {
//     setMainImage(image);
//   };

//   const handleIncreaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };
//   useEffect(() => {
//     scrollViewRef.current.scrollTo({ y: 0, animated: true });
//     setMainImage(data.imgSrc);
//   }, [data]);

//   return (
//     <ScrollView style={styles.container} ref={scrollViewRef}>
//       <View style={styles.mainImageContainer}>
//         <Image
//           source={mainImage}
//           style={styles.mainImage}
//           resizeMode="contain"
//         />
//       </View>
//       <View style={styles.thumbnailContainer}>
//         {thumbnailImages.map((image, index) => (
//           <TouchableOpacity
//             key={index}
//             onPress={() => handleThumbnailClick(image)}
//           >
//             <Image
//               source={image}
//               style={styles.thumbnailImage}
//               resizeMode="cover"
//             />
//           </TouchableOpacity>
//         ))}
//       </View>
//       <View style={styles.productDetailsContainer}>
//         <Text style={styles.productName}>ELLEGANCE FLORA - GREEN</Text>
//         <Text style={styles.productPrice}>PKR 9,845.00</Text>
//         <View style={styles.sizeOptionsContainer}>
//           <TouchableOpacity style={styles.sizeOption}>
//             <Text style={styles.sizeOptionText}>S</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sizeOption}>
//             <Text style={styles.sizeOptionText}>M</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sizeOption}>
//             <Text style={styles.sizeOptionText}>L</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sizeOption}>
//             <Text style={styles.sizeOptionText}>XL</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.quantityContainer}>
//           <TouchableOpacity onPress={handleDecreaseQuantity}>
//             <Text style={styles.quantityButton}>-</Text>
//           </TouchableOpacity>
//           <Text style={styles.quantityButton}>{quantity}</Text>
//           <TouchableOpacity onPress={handleIncreaseQuantity}>
//             <Text style={styles.quantityButton}>+</Text>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity style={styles.addToCartButton}>
//           <Text style={styles.addToCartButtonText}>Add to Cart</Text>
//         </TouchableOpacity>
//         <Text style={styles.productDescription}>Product Details:</Text>
//         <Text style={styles.productDetailsText}>
//           Ellegance Flora {"\n"}
//           <Text style={{ fontWeight: "bold" }}>Shirt:</Text> Embroidered Cotton
//           Karandi Sp 2.50 Meter {"\n"}
//           <Text style={{ fontWeight: "bold" }}>Dupatta:</Text> Embroidered
//           Chiffon Self 2.50 Meter {"\n"}
//           <Text style={{ fontWeight: "bold" }}>Shalwar:</Text> Plain Cotton
//           Karandi Sp 2.50 Meter
//         </Text>
//       </View>
//       <YouMayLike navigation={navigation} />
//     </ScrollView>
//   );
// };

// export default SingleProductDetailScreen;

// This is the second working code>>>>>>>......................................

// import React, { useState, useRef, useEffect } from "react";
// import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
// import { styles } from "./style.module";
// import { useRoute } from "@react-navigation/native";
// import ThumbnailList from "./ThumbnailList"; // Import ThumbnailList component
// // // Sample product images
// import prod01Full from "../../assets/img/prod-01-full.jpg";
// import prod01Full02 from "../../assets/img/prod-01-full(02).jpg";
// import prod01Full03 from "../../assets/img/prod-01-full(03).jpg";
// import prod01Full04 from "../../assets/img/prod-01-full(04).jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import YouMayLike from "../../Components/Product_Listings/YouMayLike";

// const SingleProductDetailScreen = ({ navigation }) => {
//   const route = useRoute();
//   const { data } = route.params;
//   const [mainImage, setMainImage] = useState(data.imgSrc);
//   const scrollViewRef = useRef();
//   const [quantity, setQuantity] = useState(1);

//   const handleThumbnailClick = (image) => {
//     setMainImage(image);
//   };

//   const handleIncreaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   useEffect(() => {
//     scrollViewRef.current.scrollTo({ y: 0, animated: true });
//     setMainImage(data.imgSrc);
//   }, [data]);

//   return (
//     <ScrollView style={styles.container} ref={scrollViewRef}>
//       <View style={styles.mainImageContainer}>
//         <Image
//           source={mainImage}
//           style={styles.mainImage}
//           resizeMode="contain"
//         />
//       </View>
//       <ThumbnailList
//         thumbnailImages={[
//           data.imgSrc,
//           prod01Full,
//           prod01Full02,
//           prod01Full03,
//           prod01Full04,
//         ]}
//         onThumbnailClick={handleThumbnailClick}
//       />
//       <View style={styles.productDetailsContainer}>
//         <Text style={styles.productName}>ELLEGANCE FLORA - GREEN</Text>
//         <Text style={styles.productPrice}>PKR 9,845.00</Text>
//         {/* Add size options, quantity selector, add to cart button, and product description here */}
//         <View style={styles.sizeOptionsContainer}>
//           <TouchableOpacity style={styles.sizeOption}>
//             <Text style={styles.sizeOptionText}>S</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sizeOption}>
//             <Text style={styles.sizeOptionText}>M</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sizeOption}>
//             <Text style={styles.sizeOptionText}>L</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.sizeOption}>
//             <Text style={styles.sizeOptionText}>XL</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.quantityContainer}>
//           <TouchableOpacity onPress={handleDecreaseQuantity}>
//             <Text style={styles.quantityButton}>-</Text>
//           </TouchableOpacity>
//           <Text style={styles.quantityButton}>{quantity}</Text>
//           <TouchableOpacity onPress={handleIncreaseQuantity}>
//             <Text style={styles.quantityButton}>+</Text>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity style={styles.addToCartButton}>
//           <Text style={styles.addToCartButtonText}>Add to Cart</Text>
//         </TouchableOpacity>
//         <Text style={styles.productDescription}>Product Details:</Text>
//         <Text style={styles.productDetailsText}>
//           Ellegance Flora {"\n"}
//           <Text style={{ fontWeight: "bold" }}>Shirt:</Text> Embroidered Cotton
//           Karandi Sp 2.50 Meter {"\n"}
//           <Text style={{ fontWeight: "bold" }}>Dupatta:</Text> Embroidered
//           Chiffon Self 2.50 Meter {"\n"}
//           <Text style={{ fontWeight: "bold" }}>Shalwar:</Text> Plain Cotton
//           Karandi Sp 2.50 Meter
//         </Text>
//       </View>
//       <YouMayLike navigation={navigation} />
//     </ScrollView>
//   );
// };

// export default SingleProductDetailScreen;

// THis is the flatlist replaced by ScrollView

import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect , useRef} from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./style.module";
import ThumbnailList from "./ThumbnailList"; // Import ThumbnailList component
// Sample product images
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
    // scrollViewRef.current.scrollTo({ y: 0, animated: true });
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
      data={[{ key: "mainView" }]} // Only one item for the main view
      renderItem={({ item }) => (
        <View style={styles.container}>
          <View style={styles.productDetailsContainer}>
            <Image
              source={mainImage}
              style={styles.mainImage}
              resizeMode="contain"
            />
            <ThumbnailList
              thumbnailImages={thumbnailImages}
              onThumbnailClick={handleThumbnailClick}
            />
            <Text style={styles.productName}>ELLEGANCE FLORA - GREEN</Text>
            <Text style={styles.productPrice}>PKR 9,845.00</Text>
            {/* Add size options, quantity selector, add to cart button, and product description here */}
            <View style={styles.sizeOptionsContainer}>
              <TouchableOpacity style={styles.sizeOption}>
                <Text style={styles.sizeOptionText}>S</Text>
              </TouchableOpacity>
              {/* Add other size options */}
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
