import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useRoute } from '@react-navigation/native';

const BottomNavBar = ({ navigation }) => {
  const route = useRoute();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon name="home" style={[styles.icon, route.name === 'Home' && styles.activeIcon]} />
        <Text style={[styles.text, route.name === 'Home' && styles.activeText]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Shops")}
      >
        <Icon name="store" style={[styles.icon, route.name === 'Shops' && styles.activeIcon]} />
        <Text style={[styles.text, route.name === 'Shops' && styles.activeText]}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Scrapyard")}
      >
        <Icon name="recycle" style={[styles.icon, route.name === 'Scrapyard' && styles.activeIcon]} />
        <Text style={[styles.text, route.name === 'Scrapyard' && styles.activeText]}>Scrapyard</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("DigitalAssets")}
      >
        <Icon name="file" style={[styles.icon, route.name === 'DigitalAssets' && styles.activeIcon]} />
        <Text style={[styles.text, route.name === 'DigitalAssets' && styles.activeText]}>Digital Assets</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => navigation.navigate("Contact")}
      >
        <Icon name="email" style={[styles.icon, route.name === 'Contact' && styles.activeIcon]} />
        <Text style={[styles.text, route.name === 'Contact' && styles.activeText]}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    elevation: 8, // For Android elevation
    shadowColor: "#000", // For iOS shadow
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
  },
  icon: {
    fontSize: 24,
    color: "#333",
  },
  activeIcon: {
    color: "#088178", // Change color for active icon
  },
  text: {
    fontSize: 12,
    color: "#333",
    marginTop: 5,
  },
  activeText: {
    color: "#088178", // Change color for active text
  },
});

export default BottomNavBar;
