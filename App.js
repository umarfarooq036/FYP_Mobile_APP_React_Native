import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
} from "react-native";
import Navbar from "./Components/Navbar";
import HomeScreen from "./pages/HomeScreen";

import HeroSection from "./Components/HeroSection";
import CategoriesSection from "./Components/Categories";
import Latest from "./Components/Product_Listings/Latest_Products";
import Trending from "./Components/Product_Listings/Trending_Products";
import Footer from "./Components/Footer";
import ProfilePage from "./pages/ProfilePage";
import Cart from "./pages/Cart/CartPage";
import ContactUs from "./pages/ContactUs";
import SingleProductDetailScreen from "./pages/SingleProduct/SingleProductDetailScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    // <SafeAreaView style={styles.container}>
    //   <ScrollView>
    //     <View style={{ flex: 1 }}>
    //       {/* <Navbar/>
    //       <NavigationContainer>
    //         <Stack.Navigator>
    //           <Stack.Screen name="Home" component={HomeScreen} />
    //           <Stack.Screen name="Profile" component={Profile} />
    //         </Stack.Navigator>
    //       </NavigationContainer> */}
    //       <NavigationContainer>
    //         <Navbar />
    //         <HeroSection />
    //         <CategoriesSection />
    //         <Latest />
    //         <Trending />
    //         <Footer />
    //       </NavigationContainer>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={ProfilePage}/>
        <Stack.Screen name="Cart" component={Cart}/>
        <Stack.Screen name="Contact" component={ContactUs}/>
        <Stack.Screen name="SingleProduct" component={SingleProductDetailScreen}/>
        



      </Stack.Navigator>
    </NavigationContainer>
  );
}