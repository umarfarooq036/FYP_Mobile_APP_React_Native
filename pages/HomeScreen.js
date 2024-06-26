import HeroSection from "../Components/HeroSection";
import CategoriesSection from "../Components/CategoryFiles/Categories";
import Latest from "../Components/Product_Listings/Latest_Products";
import Footer from "../Components/Footer";
import Trending from "../Components/Product_Listings/Trending_Products";
import Navbar from "../Components/Navigation/Navbar";
import { selectUser } from "../redux/user/userSlice";

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
} from "react-native";
import BottomNavBar from "../Components/Navigation/BottomNavBar";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1 }}>
            <Navbar navigation={navigation}/>
            <HeroSection navigation={navigation}/>
            <CategoriesSection navigation={navigation}/>
            <Latest navigation={navigation}/>
            <Trending navigation={navigation}/>
            <Footer navigation={navigation}/>
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation}/>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 15 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
