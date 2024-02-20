import HeroSection from "../Components/HeroSection";
import CategoriesSection from "../Components/Categories";
import Latest from "../Components/Product_Listings/Latest_Products";
import Footer from "../Components/Footer";
import Trending from "../Components/Product_Listings/Trending_Products";
import Navbar from "../Components/Navbar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    // <>
    //   <Navbar navigation={navigation} />
    //   <HeroSection />
    //   <CategoriesSection />
    //   <Latest />
    //   <Trending />
    //   <Footer />
    // </>
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1 }}>
            <Navbar navigation={navigation}/>
            <HeroSection />
            <CategoriesSection />
            <Latest />
            <Trending />
            <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 15 : 0, // Adjust the padding for Android devices
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
