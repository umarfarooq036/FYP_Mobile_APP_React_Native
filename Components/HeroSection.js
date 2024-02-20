import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
} from "react-native";

const HeroSection = () => {
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const sliderItems = [
    {
      image:
        "https://images.unsplash.com/photo-1554517222-e8b264ce5a35?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Trending Product 1",
      text: "Some description about the trending product 1.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1530736563750-5705fa77c26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fDEyMDAlMjB4JTIwNDAwfGVufDB8MHwwfHx8Mg%3D%3D",
      title: "Trending Product 2",
      text: "Some description about the trending product 2.",
    },
    {
      image:
        "https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Trending Product 3",
      text: "Some description about trending product 3.",
    },
    {
      image:
        "https://images.pexels.com/photos/8355599/pexels-photo-8355599.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        <View key={index} style={styles.slide}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.caption}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
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
    borderRadius:20,
  },
  caption: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    alignItems:'center'
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
