import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import HomeScreen from "./pages/HomeScreen";
import ProfilePage from "./pages/ProfilePage";
import Cart from "./pages/Cart/CartPage";
import ContactUs from "./pages/ContactUs";
import SingleProductDetailScreen from "./pages/SingleProduct/SingleProductDetailScreen";
import ShopsScreen from "./pages/ShopsScreen";
import CategoryProductList from "./Components/CategoryFiles/CategoryProductList";
import MyProduct from "./pages/SingleShopPage/MyProduct";
import AddNewProduct from "./pages/SingleShopPage/AddNewProduct";
import ShopPage from "./pages/SingleShopPage/ShopePage";

import store from "./data/store";
import UserProfileScreen from "./pages/UserProfileScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}> {/* Wrap the entire NavigationContainer with Provider */}
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfilePage} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Contact" component={ContactUs} />
            <Stack.Screen name="SingleProduct" component={SingleProductDetailScreen} />
            <Stack.Screen name="Shops" component={ShopsScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CategoryProductList" component={CategoryProductList} />
            <Stack.Screen name="MyProduct" component={MyProduct} />
            <Stack.Screen name="AddNewProduct" component={AddNewProduct} />
            <Stack.Screen name="ShopePage" component={ShopPage} options={{ title: 'Shop Details' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
