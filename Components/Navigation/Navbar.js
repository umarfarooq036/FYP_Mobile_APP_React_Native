import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const Navbar = ({ routeName, navigation }) => {
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const toggleProfileDropdown = () => {
    setProfileDropdownVisible(!profileDropdownVisible);
  };

  const handleProfileOptionSelect = (option) => {
    if (option === "Edit Profile") {
      navigation.navigate("Profile");
    } else if (option === "Logout") {
      ToastAndroid.show("Login not Implemented", ToastAndroid.SHORT);
    }
    setProfileDropdownVisible(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleSubmitEditing = () => {
    Alert.alert("Text submitted", inputText);
    setInputText("");
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.firstLineContainer}>
        <View style={styles.brandContainer}>
          <Text style={styles.brandName}>Scrapify</Text>
        </View>
        <View style={styles.searchContainer}>
          <Feather name="search" size={20} color="#ccc" onPress={handleSubmitEditing}/>
          <TextInput
            value={inputText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            input
            style={styles.search}
            placeholder="Search"
            caretHidden={!isFocused}
            onChangeText={setInputText}
            onSubmitEditing={handleSubmitEditing}
          ></TextInput>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Feather
              name="shopping-cart"
              size={25}
              color="#333"
              onPress={() => navigation.navigate("Cart")}
            />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
          >
            <Feather
              name="user"
              size={25}
              color="#333"
              onPress={() => navigation.navigate("Profile")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 12,
    marginBottom: 12,
  },
  firstLineContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  brandContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  brandName: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
    color: "#088178",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#eee",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: 8,
    maxWidth: 200,
  },
  search: {
    paddingLeft: 8,
    fontSize: 16,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  iconContainer: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  routesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 5,
  },
  routeContainer: {
    marginHorizontal: 10,
  },
  routeText: {
    fontSize: 16,
  },
});

export default Navbar;
