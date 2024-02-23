// import React from 'react';
// import { View, Text,TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
// import { Feather } from '@expo/vector-icons';

// const Navbar = ({ routeName, navigation }) => {
//   return (
//     <View style={styles.container}>
//       {/* First Line */}
//       <View style={styles.firstLineContainer}>
//         <View style={styles.brandContainer}>
//           {/* <Image source={require('./icon.png')} style={styles.logo} /> */}
//           <Text style={styles.brandName}>Scrapify</Text>
//         </View>
//         <View style={styles.searchContainer}>
//           <Feather name="search" size={20} color="#ccc" />
//           <TextInput input style={styles.search} placeholder='Search' caretHidden={true}></TextInput>
//         </View>
//         <View style={styles.iconsContainer}>
//           <TouchableOpacity style={styles.iconContainer}>
//             <Feather name="shopping-cart" size={25} color="#333" onPress={()=>navigation.navigate("Cart")}/>
//             <View style={styles.badge}>
//               <Text style={styles.badgeText}>4</Text>
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.iconContainer} onPress={()=>navigation.navigate("Profile")}>
//             <Feather name="user" size={25} color="#333" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Second Line */}
//       <View style={styles.routesContainer}>
//         <TouchableOpacity style={styles.routeContainer} onPress={() => navigation.navigate('Home')}>
//           <Text style={styles.routeText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.routeContainer} onPress={() => navigation.navigate('Shop')}>
//           <Text style={styles.routeText}>Shop</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.routeContainer} onPress={() => navigation.navigate('scrapyard')}>
//           <Text style={styles.routeText}>Scrapyard</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.routeContainer} onPress={() => navigation.navigate('Digitalassets')}>
//           <Text style={styles.routeText}>DigitalAssets</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.routeContainer} onPress={() => navigation.navigate("Contact")}>
//           <Text style={styles.routeText}>Contact</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//     // paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     paddingBottom:12,
//     marginBottom:12
//   },
//   firstLineContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginVertical:10
//   },
//   brandContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logo: {
//     width: 32,
//     height: 32,
//   },
//   brandName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginLeft: 8,
//     color:"#088178"
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     backgroundColor: '#eee',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     marginLeft: 8,
//     maxWidth:200
//   },
//   search: {
//     paddingLeft: 8,
//     fontSize: 16,
//   },
//   iconsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     gap:10

//   },
//   iconContainer: {
//     position: 'relative',
//   },
//   badge: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: '#fff',
//     fontSize: 12,
//     fontWeight: 'bold'
//   },
//   routesContainer: {
//     flexDirection: 'row',
//     justifyContent:'center',
//     marginTop:15,
//     marginBottom:5
//   },
//   routeContainer: {
//     marginHorizontal: 10,
//   },
//   routeText: {
//     fontSize: 16,
//   }
// });

// export default Navbar;

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

  // const inputQuery = (text) => {
  //   setInputText(text);
  //   console.log(inputText);
  // };

  const handleProfileOptionSelect = (option) => {
    // Handle the profile dropdown option selection here
    // For example, navigate to different screens based on the option selected
    // You can customize this as per your requirement
    if (option === "Edit Profile") {
      navigation.navigate("Profile");
    } else if (option === "Logout") {
      // Handle logout functionality
      ToastAndroid.show("Login not Implemented", ToastAndroid.SHORT);
    }
    setProfileDropdownVisible(false); // Close dropdown after selection
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleSubmitEditing = () => {
    // if(inputText === '/login')
    // {

    // }
    // else if(inputText === '/register')
    // {

    // }
    Alert.alert("Text submitted", inputText);
    setInputText("");
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <View style={styles.container}>
      {/* First Line */}
      <View style={styles.firstLineContainer}>
        <View style={styles.brandContainer}>
          {/* <Image source={require('./icon.png')} style={styles.logo} /> */}
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
            // onPress={toggleProfileDropdown}
          >
            <Feather
              name="user"
              size={25}
              color="#333"
              onPress={() => navigation.navigate("Profile")}
            />
            {/* {profileDropdownVisible && (
              <View style={styles.dropdown}>
                <TouchableOpacity
                  style={styles.dropdownOption}
                  onPress={() => handleProfileOptionSelect("Edit Profile")}
                >
                  <Text>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dropdownOption}
                  onPress={() => handleProfileOptionSelect("Logout")}
                >
                  <Text>LogIn</Text>
                </TouchableOpacity>
              </View>
            )} */}
          </TouchableOpacity>
        </View>
      </View>

      {/* Second Line */}
      {/* <View style={styles.routesContainer}>
        <TouchableOpacity
          style={styles.routeContainer}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.routeText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeContainer}
          onPress={() => navigation.navigate("Shops")}
        >
          <Text style={styles.routeText}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeContainer}
          onPress={() => navigation.navigate("scrapyard")}
        >
          <Text style={styles.routeText}>Scrapyard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeContainer}
          onPress={() => navigation.navigate("Digitalassets")}
        >
          <Text style={styles.routeText}>DigitalAssets</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.routeContainer}
          onPress={() => navigation.navigate("Contact")}
        >
          <Text style={styles.routeText}>Contact</Text>
        </TouchableOpacity>
      </View> */}
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
  // dropdown: {
  //   position: "absolute",
  //   top: 35, // Adjust as needed
  //   right: 0, // Adjust as needed
  //   backgroundColor: "#FFFF",
  //   borderRadius: 10,
  //   shadowColor: "#000",
  //   // shadowOffset: {
  //   //   width: 0,
  //   //   height: 2,
  //   // },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 10,
  //   zIndex: 999, // Set a higher zIndex value
  // },

  // dropdownOption: {
  //   width: 90,
  //   padding: 10,
  //   backgroundColor: "#FFFF",
  // },

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
