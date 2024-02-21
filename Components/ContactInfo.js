import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function ContactInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Get In Touch With Scrapify</Text>
      <Text style={styles.paragraph}>
        Step into a world of seamless communication with our app. Connect
        effortlessly, share ideas, seek guidance, and forge meaningful
        connections. Every touch brings us closer, every interaction sparks new
        beginnings
      </Text>
      <View style={styles.contactDetailsContainer}>
        <View style={styles.contactDetail}>
          <View style={styles.contactIcon}>
            <Icon name="phone" size={30} color="#088178" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.detailHeading}>Phone</Text>
            <Text style={styles.detailHeddingText}>+92 321 1234567</Text>
          </View>
        </View>
        <View style={styles.contactDetail}>
          <View style={styles.contactIcon}>
            <Icon name="envelope" size={30} color="#088178" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.detailHeading}>Email Address</Text>
            <Text style={styles.email}>info@Scrapify.com</Text>
          </View>
        </View>
        <View style={styles.contactDetail}>
          <View style={styles.contactIcon}>
            <Icon name="map-marker" size={30} color="#088178" />
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.detailHeading}>Office</Text>
            <Text style={styles.detailHeddingText}>
              35 Main Nisbat Road Lahore
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.socialMediaLinks}>
        <Text style={styles.socialMediaText}>Follow Our Social Media :</Text>
        <View style={styles.footerIcons}>
          <Icon name="facebook" size={25} color="#088178" />
          <Icon name="twitter" size={25} color="#088178" />
          <Icon name="instagram" size={25} color="#088178" />
          <Icon name="linkedin" size={25} color="#088178" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: "#E5E5E5",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#088178",
  },
  paragraph: {
    textAlign: "center",
    marginBottom: 20,
    textAlign: "justify",
    fontWeight:"400"
  },
  contactDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  contactDetail: {
    flexDirection: "colomn",
    alignItems: "center",
    width: "30%",
  },
  contactIcon: {
    backgroundColor: "#e7e5fe",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  contactInfo: {
    paddingVertical: 10,
    alignItems: "center",
  },
  detailHeading: {
    fontWeight: "900",
    color: "#088178",
  },
  email: {
    textAlign: "left",
  },
  divider: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#095a55",
    marginBottom: 20,
  },
  socialMediaLinks: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 20,
  },
  socialMediaText: {
    marginBottom: 10,
    fontWeight: "800",
    fontSize: 16,
  },
  footerIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "50%",
  },
});
