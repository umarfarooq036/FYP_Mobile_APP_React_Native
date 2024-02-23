import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from "react-native";

const HeroSection = ({ navigation }) => {
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const sliderItems = [
    {
      imgSrc: require("../assets/img/prod-1.jpg"),
      title: "Trending Product 1",
      text: "Some description about the trending product 1.",
    },
    {
      imgSrc: require("../assets/img/prod-2.jpg"),
      title: "Trending Product 2",
      text: "Some description about the trending product 2.",
    },
    {
      imgSrc: require("../assets/img/prod-3.jpg"),
      title: "Trending Product 3",
      text: "Some description about trending product 3.",
    },
    {
      imgSrc: require("../assets/img/prod-4.jpg"),
      title: "Trending Product 4",
      text: "Some description about product 4.",
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate the index of the next slide
      const nextIndex =
        Math.floor((scrollX._value + 1) / Dimensions.get("window").width) %
        sliderItems.length;
      // Calculate the target scroll position
      const targetScrollX = Dimensions.get("window").width * (nextIndex + 1);
      // Scroll to the next item with animation
      scrollViewRef.current.scrollTo({
        x: targetScrollX,
        animated: true,
      });
      if (nextIndex === sliderItems.length - 1) {
        setTimeout(() => {
          scrollViewRef.current.scrollTo({ x: 0, animated: false });
        }, 300);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const productDetail = (item) => {
    navigation.navigate("SingleProduct", { data: item });
  };
  return (
    // <View style={styles.carouselContainer}>
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      )}
    >
      {sliderItems.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            style={styles.slide}
            activeOpacity={0.8}
            onPress={() => {
              productDetail(item);
            }}
          >
            <Image source={item.imgSrc} style={styles.image} />
            <View style={styles.caption}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.text}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    margin: 2,
  },
  slide: {
    width: Dimensions.get("window").width,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 20,
  },
  caption: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontSize: 14,
  },
});

export default HeroSection;
