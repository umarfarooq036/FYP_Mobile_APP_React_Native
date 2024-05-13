import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";

import HomeScreen from "./pages/HomeScreen";
import ProfilePage from "./pages/ProfilePage";
import Cart from "./pages/Cart/CartPage";
import ContactUs from "./pages/ContactUs";
import SingleProductDetailScreen from "./pages/SingleProduct/SingleProductDetailScreen";
import ShopsScreen from "./pages/ShopsScreen";
import CategoryProductList from "./Components/CategoryFiles/CategoryProductList";
import BottomNavBar from "./Components/Navigation/BottomNavBar";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={ProfilePage} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Contact" component={ContactUs} />
          <Stack.Screen
            name="SingleProduct"
            component={SingleProductDetailScreen}
          />
          <Stack.Screen name="Shops" component={ShopsScreen} />
          <Stack.Screen
            name="CategoryProductList"
            component={CategoryProductList}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
