// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
// import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
// import img1 from "../../assets/img/prod-10.jpg";
// import img2 from "../../assets/img/prod-13.jpg";
// import img3 from "../../assets/img/prod-6.jpg";
// import img4 from "../../assets/img/prod-12.jpg";
// import img5 from "../../assets/img/prod-9.jpg";
// import img6 from "../../assets/img/prod-8.jpg";
// import img7 from "../../assets/img/prod-1.jpg";
// import img8 from "../../assets/img/prod-5.jpg";

// const latestProducts = [
//   {
//     id: 1,
//     imgSrc: img1,
//     brand: "Khaadi",
//     name: "Basic Winter Clothes",
//     rating: 4,
//     price: 50,
//   },
//   {
//     id: 2,
//     imgSrc: img2,
//     brand: "Handicrafts",
//     name: "Pure Craft Hand Bag",
//     rating: 5,
//     price: 20,
//   },
//   {
//     id: 3,
//     imgSrc: img3,
//     brand: "Wall Hangings",
//     name: "Eye Mandala Set",
//     rating: 4,
//     price: 60,
//   },
//   {
//     id: 4,
//     imgSrc: img4,
//     brand: "ROLEX",
//     name: "Luxury Men Watch",
//     rating: 5,
//     price: 435,
//   },
//   {
//     id: 5,
//     imgSrc: img5,
//     brand: "Embroided",
//     name: "Coral Block Silver Print - Coat",
//     rating: 4,
//     price: 66.76,
//   },
//   {
//     id: 6,
//     imgSrc: img6,
//     brand: "Candle Holders",
//     name: "Candle Holder Candlestick",
//     rating: 4.5,
//     price: 134,
//   },
//   {
//     id: 7,
//     imgSrc: img7,
//     brand: "Tealight Candle Holders",
//     name: "Decorative Light Glass",
//     rating: 4,
//     price: 140,
//   },
//   {
//     id: 8,
//     imgSrc: img8,
//     brand: "Handicrafts",
//     name: "Crystal Handicrafted Royal Cart",
//     rating: 5,
//     price: 1330,
//   },
// ];
// export default function Latest() {
//   const redirectToProductDetail = () => {
//     // Implement navigation to product detail screen
//   };

//   return (
//     // <View>
//     //   <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Latest Products</Text>
//     //   <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
//     //     {/* Map over products and render each product */}
//     //     {latestProducts.map(product => (
//     //       <TouchableOpacity key={product.id} onPress={redirectToProductDetail}>
//     //         <View style={{ marginBottom: 20 }}>
//     //           <Image source={product.imgSrc} style={{ width: 150, height: 150 }} />
//     //           <View style={{ marginTop: 10 }}>
//     //             <Text style={{ fontWeight: 'bold' }}>{product.brand}</Text>
//     //             <Text>{product.name}</Text>
//     //             <View style={{ flexDirection: 'row' }}>
//     //               {/* Render star icons based on rating */}
//     //               {Array.from({ length: product.rating }, (_, index) => (
//     //                 <FontAwesomeIcon key={index} icon={faStar} />
//     //               ))}
//     //             </View>
//     //             <Text>${product.price}</Text>
//     //           </View>
//     //           <TouchableOpacity style={{ position: 'absolute', top: 10, right: 10 }} onPress={() => console.log('Add to cart')}>
//     //             <FontAwesomeIcon icon={faCartPlus} size={20} />
//     //           </TouchableOpacity>
//     //         </View>
//     //       </TouchableOpacity>
//     //     ))}
//     //   </View>
//     // </View>

//     <View style={styles.container}>
//       <Text style={styles.heading}>Latest Products</Text>
//       <View style={styles.productsContainer}>
//         {/* Map over products and render each product */}
//         {latestProducts.map((product) => (
//           <TouchableOpacity
//             key={product.id}
//             onPress={redirectToProductDetail}
//             activeOpacity={1}
//           >
//             <View style={styles.product}>
//               <Image source={product.imgSrc} style={styles.image} />
//               <View style={styles.detailsContainer}>
//                 <Text style={styles.brand}>{product.brand}</Text>
//                 <Text style={styles.name}>{product.name}</Text>
//                 <View style={styles.ratingContainer}>
//                   {/* Render star icons based on rating */}
//                   {Array.from({ length: product.rating }, (_, index) => (
//                     <FontAwesomeIcon
//                       key={index}
//                       icon={faStar}
//                       style={styles.starIcon}
//                     />
//                   ))}
//                 </View>
//                 <Text style={styles.price}>${product.price}</Text>
//               </View>
//               <TouchableOpacity
//                 style={styles.cartIconContainer}
//                 onPress={() => console.log("Add to cart")}
//               >
//                 <FontAwesomeIcon
//                   icon={faCartPlus}
//                   size={20}
//                   style={styles.cartIcon}
//                 />
//               </TouchableOpacity>
//             </View>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f0f0f0",
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 10,
//     color: "green",
//   },
//   productsContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//   },
//   product: {
//     marginBottom: 20,
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     overflow: "hidden",
//     elevation: 3,
//     width: 170,
//     padding: 10,
//     width: 180,
//   },
//   image: {
//     width: "100%",
//     height: 150,
//   },
//   detailsContainer: {
//     marginTop: 10,
//   },
//   brand: {
//     fontWeight: "bold",
//     color: "green",
//   },
//   name: {
//     marginBottom: 5,
//   },
//   ratingContainer: {
//     flexDirection: "row",
//     marginBottom: 5,
//   },
//   starIcon: {
//     marginRight: 2,
//     color: "green",
//   },
//   price: {
//     fontWeight: "bold",
//     color: "green",
//   },
//   cartIconContainer: {
//     position: "absolute",
//     bottom: 10,
//     right: 10,
//     backgroundColor: "green",
//     borderRadius: 20,
//     padding: 5,
//   },
//   cartIcon: {
//     color: "#fff",
//   },
// });




import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/img/prod-10.jpg";
import img2 from "../../assets/img/prod-13.jpg";
import img3 from "../../assets/img/prod-6.jpg";
import img4 from "../../assets/img/prod-12.jpg";
import img5 from "../../assets/img/prod-9.jpg";
import img6 from "../../assets/img/prod-8.jpg";
import img7 from "../../assets/img/prod-1.jpg";
import img8 from "../../assets/img/prod-5.jpg";

const latestProducts = [
  {
    id: 1,
    imgSrc: img1,
    brand: "Khaadi",
    name: "Basic Winter Clothes",
    rating: 4,
    price: 50,
  },
  {
    id: 2,
    imgSrc: img2,
    brand: "Handicrafts",
    name: "Pure Craft Hand Bag",
    rating: 5,
    price: 20,
  },
  {
    id: 3,
    imgSrc: img3,
    brand: "Wall Hangings",
    name: "Eye Mandala Set",
    rating: 4,
    price: 60,
  },
  {
    id: 4,
    imgSrc: img4,
    brand: "ROLEX",
    name: "Luxury Men Watch",
    rating: 5,
    price: 435,
  },
  {
    id: 5,
    imgSrc: img5,
    brand: "Embroided",
    name: "Coral Block Silver Print - Coat",
    rating: 4,
    price: 66.76,
  },
  {
    id: 6,
    imgSrc: img6,
    brand: "Candle Holders",
    name: "Candle Holder Candlestick",
    rating: 4.5,
    price: 134,
  },
  {
    id: 7,
    imgSrc: img7,
    brand: "Tealight Candle Holders",
    name: "Decorative Light Glass",
    rating: 4,
    price: 140,
  },
  {
    id: 8,
    imgSrc: img8,
    brand: "Handicrafts",
    name: "Crystal Handicrafted Royal Cart",
    rating: 5,
    price: 1330,
  },
];
export default function Latest({navigation}) {

  
  const redirectToProductDetail = (product) => {

    navigation.navigate('SingleProduct' ,{data:product});
    // Implement navigation to product detail screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Latest</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {latestProducts.map((product) => (
          <TouchableOpacity
            key={product.id}
            onPress={()=>{redirectToProductDetail(product)}}
            activeOpacity={1}
          >
            <View style={styles.product}>
              <Image source={product.imgSrc} style={styles.image} />
              <View style={styles.detailsContainer}>
                <Text style={styles.brand}>{product.brand}</Text>
                <Text style={styles.name}>{product.name}</Text>
                <View style={styles.ratingContainer}>
                  {Array.from({ length: product.rating }, (_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      style={styles.starIcon}
                    />
                  ))}
                </View>
                <Text style={styles.price}>${product.price}</Text>
              </View>
              <TouchableOpacity
                style={styles.cartIconContainer}
                onPress={() => console.log("Add to cart")}
              >
                <FontAwesomeIcon
                  icon={faCartPlus}
                  size={20}
                  style={styles.cartIcon}
                />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    marginVertical: 10,
    paddingTop:10,
    paddingHorizontal: 20,
    // paddingStart:22
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "green",
  },
  product: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    width: 170,
    padding: 10,
    width: 180,
    marginRight: 10, // Add margin between products
  },
  image: {
    width: "100%",
    height: 150,
  },
  detailsContainer: {
    marginTop: 10,
  },
  brand: {
    fontWeight: "bold",
    color: "green",
  },
  name: {
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  starIcon: {
    marginRight: 2,
    color: "green",
  },
  price: {
    fontWeight: "bold",
    color: "green",
  },
  cartIconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "green",
    borderRadius: 20,
    padding: 5,
  },
  cartIcon: {
    color: "#fff",
  },
});
