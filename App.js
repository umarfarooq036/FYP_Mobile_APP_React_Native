// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { Provider } from "react-redux";

// import HomeScreen from "./pages/HomeScreen";
// import ProfilePage from "./pages/ProfilePage";
// import Cart from "./pages/Cart/CartPage";
// import ContactUs from "./pages/ContactUs";
// import SingleProductDetailScreen from "./pages/SingleProduct/SingleProductDetailScreen";
// import ShopsScreen from "./pages/ShopsScreen";
// import CategoryProductList from "./Components/CategoryFiles/CategoryProductList";
// import MyProduct from "./pages/SingleShopPage/MyProduct";
// import AddNewProduct from "./pages/SingleShopPage/AddNewProduct";
// import ShopPage from "./pages/SingleShopPage/ShopePage";

// import store from "./data/store";
// import UserProfileScreen from "./pages/UserProfileScreen";
// import Signin from "./pages/signin";
// import Signup from "./pages/signup";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <Provider store={store}>
//       <SafeAreaProvider>
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName="Home">
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Profile" component={ProfilePage} />
//             <Stack.Screen name="Cart" component={Cart} />
//             <Stack.Screen name="Contact" component={ContactUs} />
//             <Stack.Screen name="SingleProduct" component={SingleProductDetailScreen} />
//             <Stack.Screen name="Shops" component={ShopsScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="CategoryProductList" component={CategoryProductList} />
//             <Stack.Screen name="MyProduct" component={MyProduct} />
//             <Stack.Screen name="AddNewProduct" component={AddNewProduct} />
//             <Stack.Screen name="ShopPage" component={ShopPage} options={{ title: 'Shop Details' }} />
//             <Stack.Screen name="Signup" component={Signup} />
//             <Stack.Screen name="Signin" component={Signin} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </SafeAreaProvider>
//     </Provider>
//   );
// }


import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider, useDispatch, useSelector } from 'react-redux';

import store from './data/store';
import { selectUser, setUser } from './redux/user/userSlice';
import { auth } from './hooks/auth';

import HomeScreen from './pages/HomeScreen';
import ProfilePage from './pages/ProfilePage';
import Cart from './pages/Cart/CartPage';
import ContactUs from './pages/ContactUs';
import SingleProductDetailScreen from './pages/SingleProduct/SingleProductDetailScreen';
import ShopsScreen from './pages/ShopsScreen';
import CategoryProductList from './components/CategoryFiles/CategoryProductList';
import MyProduct from './pages/SingleShopPage/MyProduct';
import AddNewProduct from './pages/SingleShopPage/AddNewProduct';
import ShopPage from './pages/SingleShopPage/ShopePage';
import UserProfileScreen from './pages/UserProfileScreen';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Analytics from './pages/Analytics';
import EditProfile from './components/EditProfile';
import OrderHistory from './pages/OrderHistory';
import Settings from './pages/Settings';
import Wallet from './pages/Wallet';
import Scrapyard from './pages/Scrapyard';
import DigitalAssets from './pages/DigitalAssets';
import PrivacySecurity from './components/PrivacySecurity';
import PrivacyPolicies from './components/PrivacyPolicies';
import ChangePassword from './components/ChangePassword';
import HelpAndSupport from './components/HelpAndSupport';
import SingleShop from './pages/SingleShop';
import ProtectedRoute from './components/authMiddleware/ProtectedRoute';
import Checkout from './pages/Checkout';
import LatestProduct from './pages/LatestProduct';
import OrderConfirmationPage from './pages/OrderConfirmationPage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = () => {
      try {
        const user = auth();
        dispatch(setUser(user));
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();

    return () => {};
  }, [dispatch]);

  return (
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
      <Stack.Screen name="ShopPage" component={ShopPage} options={{ title: 'Shop Details' }} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Analytics" component={Analytics} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="OrderHistory" component={OrderHistory} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Scrapyard" component={Scrapyard} />
      <Stack.Screen name="DigitalAssets" component={DigitalAssets} />
      <Stack.Screen name="PrivacySecurity" component={PrivacySecurity} />
      <Stack.Screen name="PrivacyPolicies" component={PrivacyPolicies} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
      <Stack.Screen name="SingleShop" component={SingleShop} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="LatestProduct" component={LatestProduct} />
      <Stack.Screen name="OrderConfirmation" component={OrderConfirmationPage} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
