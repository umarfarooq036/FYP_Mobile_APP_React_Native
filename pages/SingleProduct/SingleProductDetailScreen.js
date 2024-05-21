// import { useRoute } from "@react-navigation/native";
// import React, { useState, useEffect, useRef } from "react";
// import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
// import { styles } from "./style.module";
// import ThumbnailList from "./ThumbnailList";

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
//   const [quantity, setQuantity] = useState(1);
//   const flatListRef = useRef(null);

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
//     flatListRef.current.scrollToOffset({ offset: 0, animated: true });
//     setMainImage(data.imgSrc);
//   }, [data]);

//   const thumbnailImages = [
//     data.imgSrc,
//     prod01Full,
//     prod01Full02,
//     prod01Full03,
//     prod01Full04,
//   ];

//   const redirectToProductDetail = (product) => {
//     navigation.navigate("SingleProduct", { data: product });
//   };

//   return (
//     <FlatList
//       ref={flatListRef}
//       data={[{ key: "mainView" }]}
//       renderItem={({ item }) => (
//         <View style={styles.container}>
//           <View style={styles.productDetailsContainer}>
//             <View style={styles.mainImageContainer}>
//               <Image source={mainImage} style={styles.mainImage} />
//             </View>

//             <ThumbnailList
//               thumbnailImages={thumbnailImages}
//               onThumbnailClick={handleThumbnailClick}
//             />
//             <Text style={styles.productName}>ELLEGANCE FLORA - GREEN</Text>
//             <Text style={styles.productPrice}>PKR 9,845.00</Text>
//             <View style={styles.sizeOptionsContainer}>
//               <TouchableOpacity style={styles.sizeOption}>
//                 <Text style={styles.sizeOptionText}>S</Text>
//               </TouchableOpacity>
//             </View>
//             <View style={styles.quantityContainer}>
//               <TouchableOpacity onPress={handleDecreaseQuantity}>
//                 <Text style={styles.quantityButton}>-</Text>
//               </TouchableOpacity>
//               <Text style={styles.quantityButton}>{quantity}</Text>
//               <TouchableOpacity onPress={handleIncreaseQuantity}>
//                 <Text style={styles.quantityButton}>+</Text>
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity style={styles.addToCartButton}>
//               <Text style={styles.addToCartButtonText}>Add to Cart</Text>
//             </TouchableOpacity>
//             <Text style={styles.productDescription}>Product Details:</Text>
//             <Text style={styles.productDetailsText}>
//               Ellegance Flora {"\n"}
//               <Text style={{ fontWeight: "bold" }}>Shirt:</Text> Embroidered
//               Cotton Karandi Sp 2.50 Meter {"\n"}
//               <Text style={{ fontWeight: "bold" }}>Dupatta:</Text> Embroidered
//               Chiffon Self 2.50 Meter {"\n"}
//               <Text style={{ fontWeight: "bold" }}>Shalwar:</Text> Plain Cotton
//               Karandi Sp 2.50 Meter
//             </Text>
//           </View>
//           <YouMayLike navigation={navigation} />
//         </View>
//       )}
//       keyExtractor={(item) => item.key}
//     />
//   );
// };

// export default SingleProductDetailScreen;




import React, { useState, useEffect, useRef } from 'react';
import {
    StyleSheet, Button, View, StatusBar, ToastAndroid, Dimensions, Image, TouchableOpacity,
    FlatList, Animated, Easing, Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import ThumbnailList from "./ThumbnailList";
import YouMayLike from "../../Components/Product_Listings/YouMayLike";

import prod01Full from "../../assets/img/prod-01-full.jpg";
import prod01Full02 from "../../assets/img/prod-01-full(02).jpg";
import prod01Full03 from "../../assets/img/prod-01-full(03).jpg";
import prod01Full04 from "../../assets/img/prod-01-full(04).jpg";

const SingleProductDetailScreen = ({ navigation }) => {
    const route = useRoute();
    const { data } = route.params;

    const [mainImage, setMainImage] = useState(data.imgSrc);
    const [quantity, setQuantity] = useState(1);
    const [products, setProducts] = useState([]);
    const flatListRef = useRef(null);
    const width = Dimensions.get('window').width;
    const scrollX = new Animated.Value(0);
    const position = Animated.divide(scrollX, width);

    useEffect(() => {
        flatListRef.current.scrollToOffset({ offset: 0, animated: true });
        setMainImage(data.imgSrc);
        const unsubscribe = navigation.addListener('focus', () => {
            loadProducts();
        });
        return unsubscribe;
    }, [data, navigation]);

    const loadProducts = async () => {
        let values = await AsyncStorage.getItem('products');
        values = JSON.parse(values);
        setProducts(values || []);
    };

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

    const addToCart = async (product) => {
        let cartItems = await AsyncStorage.getItem('cartItems');
        cartItems = JSON.parse(cartItems) || [];
        
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.productPrice += product.productPrice;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }

        try {
            await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));
            ToastAndroid.show('Item Added Successfully to cart', ToastAndroid.SHORT);
            navigation.navigate('Home');
        } catch (error) {
            console.error(error);
        }
    };

    const thumbnailImages = [
        data.imgSrc,
        prod01Full,
        prod01Full02,
        prod01Full03,
        prod01Full04,
    ];

    return (
        <FlatList
            ref={flatListRef}
            data={[{ key: "mainView" }]}
            renderItem={() => (
                <View style={styles.container}>
                    <View style={styles.productDetailsContainer}>
                        <FlatList
                            data={products.productImageList}
                            horizontal
                            renderItem={({ item }) => (
                                <View style={styles.imageContainer}>
                                    <Image source={item} style={styles.mainImage} />
                                </View>
                            )}
                            showsHorizontalScrollIndicator={false}
                            decelerationRate={0.8}
                            snapToInterval={width}
                            bounces={false}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                { useNativeDriver: false },
                            )}
                        />
                        <View style={styles.indicatorContainer}>
                            {products.productImageList && products.productImageList.map((_, index) => {
                                let opacity = position.interpolate({
                                    inputRange: [index - 1, index, index + 1],
                                    outputRange: [0.2, 1, 0.2],
                                    extrapolate: 'clamp',
                                });
                                return (
                                    <Animated.View
                                        key={index}
                                        style={{ ...styles.indicator, opacity }}
                                    />
                                );
                            })}
                        </View>

                        <ThumbnailList
                            thumbnailImages={thumbnailImages}
                            onThumbnailClick={handleThumbnailClick}
                        />

                        <Text style={styles.productName}>{products.productName}</Text>
                        <Text style={styles.productPrice}>&#x20b9; {products.productPrice}</Text>

                        <View style={styles.quantityContainer}>
                            <TouchableOpacity onPress={handleDecreaseQuantity}>
                                <Text style={styles.quantityButton}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.quantityButton}>{quantity}</Text>
                            <TouchableOpacity onPress={handleIncreaseQuantity}>
                                <Text style={styles.quantityButton}>+</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity
                            onPress={() => addToCart(products)}
                            style={styles.addToCartButton}>
                            <Text style={styles.addToCartButtonText}>
                                {products.isAvailable ? 'Add to cart' : 'Not Available'}
                            </Text>
                        </TouchableOpacity>

                        <Text style={styles.productDescription}>Product Details:</Text>
                        <Text style={styles.productDetailsText}>{products.description}</Text>
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
        backgroundColor: '#EFF1F0',
    },
    productDetailsContainer: {
        padding: 20,
    },
    mainImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
    },
    mainImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    imageContainer: {
        width: Dimensions.get('window').width,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        marginTop: 32,
    },
    indicator: {
        width: '16%',
        height: 2.4,
        backgroundColor: 'black',
        marginHorizontal: 4,
        borderRadius: 100,
    },
    productName: {
        fontSize: 30,
        color: 'black',
        marginVertical: 10,
    },
    productPrice: {
        fontSize: 30,
        color: 'black',
        marginVertical: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    quantityButton: {
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: 1,
        color: '#000',
        marginHorizontal: 10,
    },
    addToCartButton: {
        width: '86%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    addToCartButtonText: {
        fontSize: 20,
        fontWeight: '500',
        letterSpacing: 1,
        color: '#fff',
        textTransform: 'uppercase',
    },
    productDescription: {
        fontSize: 20,
        color: 'black',
        marginVertical: 10,
    },
    productDetailsText: {
        fontSize: 15,
        color: '#777A76',
    },
});

export default SingleProductDetailScreen;
