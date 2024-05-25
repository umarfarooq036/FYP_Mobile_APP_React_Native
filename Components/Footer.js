import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Footer() {
  const [buttonPressed, setButtonPressed] = useState(false);

  const handlePressIn = () => {
    setButtonPressed(true);
  };

  const handlePressOut = () => {
    setButtonPressed(false);
  };

  return (
    <View style={styles.footerContainer}>
      <View style={styles.footerContent}>
        <View style={styles.footerSection}>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignItems: "flex-start",
              backgroundColor: "#0f625c",
              paddingLeft: 10,
              paddingTop: 10,
              marginTop: -10,
              width: 165,
            }}
          >
            <Text
              style={{
                ...styles.footerHeading,
                borderBottomWidth: 2,
                borderBottomColor: "#cacaca",
                marginHorizontal: 30,
                paddingBottom: 5,
              }}
            >
              Scrapify
            </Text>
            <View style={styles.addressContainer}>
              <Svg width={14} height={14} viewBox="0 0 16 16">
                <Path
                  fill="#FFC208"
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
                />
              </Svg>
              <Text style={styles.addressText}>35 Main Nisbat Road Lahore</Text>
            </View>
            <View style={styles.addressContainer}>
              <Svg width={14} height={14} viewBox="0 0 16 16">
                <Path
                  fill="#FFC208"
                  d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"
                />
              </Svg>
              <Text style={styles.addressText}>abcxyzjh@gmail.com</Text>
            </View>
            <View style={styles.addressContainer}>
              <Svg width={14} height={14} viewBox="0 0 16 16">
                <Path
                  fill="#FFC208"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                />
              </Svg>
              <Text style={styles.addressText}>(+92) 321 4247 165</Text>
            </View>
          </View>
        </View>
        <View style={styles.footerSection}>
          <View style={{ paddingLeft: 50 }}>
            <Text style={styles.footerHeading}>Quick Links</Text>
            <View>
              <Text style={{color: "white"}}>Home</Text>
              <Text style={{color: "white"}}>About Us</Text>
              <Text style={{color: "white"}}>Services</Text>
              <Text style={{color: "white"}}>Projects</Text>
              <Text style={{color: "white"}}>Contact Us</Text>
            </View>
          </View>
        </View>
        <View style={styles.footerSection}>
          <Text style={styles.newsletterHeading}>Newsletter</Text>
          <View style={styles.newsletterContainer}>
            <TextInput
              style={styles.input}
              placeholder="Your Email Address"
              placeholderTextColor="grey"
            />
            {/* <TouchableOpacity
              style={[
                styles.subscribeButton,
                // buttonPressed ? styles.subscribeButtonPressed : null,
                buttonPressed && styles.subscribeButtonTextPressed
              ]}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
            >
              <Text
                style={
                  buttonPressed
                    ? styles.subscribeButtonTextPressed
                    : styles.subscribeButtonText
                }
              >
                Subscribe
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
      style={[styles.subscribeButton, buttonPressed && styles.subscribeButtonPressed]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text
        style={[
          styles.subscribeButtonText,
          buttonPressed && styles.subscribeButtonTextPressed
        ]}
      >
        Subscribe
      </Text>
    </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: "column", alignItems: "center" }}>
        <Text style={{ color: "#cacaca", paddingTop: 10 }}>
          Get Latest Updates at:{" "}
        </Text>
        <View style={styles.socialIcons}>
          <Icon name="facebook" size={30} color="#3b5998" />
          <Icon name="twitter" size={30} color="#1da1f2" />
          <Icon name="instagram" size={30} color="#bc2a8d" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#088178",
    paddingVertical: 20,
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  footerSection: {
    flex: 1,
    alignItems: "flex-start",
  },
  footerHeading: {
    textAlign: "center",
    fontWeight: "900",
    marginBottom: 10,
    color: "#fff",
  },
  newsletterHeading: {
    textAlign: "center",
    fontWeight: "900",
    marginBottom: 10,
    color: "#fff",
    alignSelf: "center", // Center the "Newsletter" heading
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 5,
  },
  addressText: {
    fontSize: 12,
    lineHeight: 16,
    color: "#cacaca",
    flexWrap: "wrap",
    flexShrink: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    color: "#000",
    width: "100%",
  },
  subscribeButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  subscribeButtonPressed: {
    backgroundColor: "#FFC208",
    // Add text color change
    color: "#000",
  },
  subscribeButtonText: {
    color: "#088178",
  },
  subscribeButtonTextPressed: {
    color: "#000",
  },
  newsletterContainer: {
    width: "100%",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
  },
});






// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
// } from "react-native";
// import Svg, { Path } from "react-native-svg";
// import Icon from "react-native-vector-icons/FontAwesome";

// export default function Footer() {
//   const [buttonPressed, setButtonPressed] = useState(false);

//   const handlePressIn = () => {
//     setButtonPressed(true);
//   };

//   const handlePressOut = () => {
//     setButtonPressed(false);
//   };

//   return (
//     <View style={styles.footerContainer}>
//       <View style={styles.footerContent}>
//         {/* Your other content */}
//         <TouchableOpacity
//           style={[
//             styles.subscribeButton,
//             buttonPressed && styles.subscribeButtonPressed,
//           ]}
//           onPressIn={handlePressIn}
//           onPressOut={handlePressOut}
//         >
//           <Text
//             style={[
//               styles.subscribeButtonText,
//               buttonPressed && styles.subscribeButtonTextPressed,
//             ]}
//           >
//             Subscribe
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // Your existing styles
//   subscribeButton: {
//     backgroundColor: "#fff",
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: "center",
//     marginBottom: 10,
//     width: "100%",
//   },
//   subscribeButtonPressed: {
//     backgroundColor: "#FFC208",
//   },
//   subscribeButtonText: {
//     color: "#088178",
//   },
//   subscribeButtonTextPressed: {
//     color: "#000",
//   },
// });
