import ContactInfo from "../Components/ContactInfo";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNavBar from "../Components/Navigation/BottomNavBar";

const ContactUs = ({navigation}) => {
  return (
    <>
      <ScrollView style={{ backgroundColor: "#E5E5E5" }}>
        <ContactInfo />
        <View style={styles.section}>
          <View style={styles.container}>
            <View style={styles.contactInfo}>
              <Text style={styles.heading}>Contact Info</Text>
              <View style={styles.info}>
                <View style={styles.infoItem}>
                  <Image
                    source={require("../assets/img/location.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.infoText}>
                    C-II Block C 2,Phase 1 Johar Town,Lahore, Punjab
                  </Text>
                </View>
                <View style={styles.infoItem}>
                  <Image
                    source={require("../assets/img/email.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.infoText}>info@scrapify.com</Text>
                </View>
                <View style={styles.infoItem}>
                  <Image
                    source={require("../assets/img/phone.png")}
                    style={styles.icon}
                  />
                  <Text style={styles.infoText}>+92 42 35212801-10</Text>
                </View>
                <View style={styles.socialMediaLinks}>
                  <Text style={styles.socialMediaText}>
                    Follow Our Social Media
                  </Text>
                  <View style={styles.footerIcons}>
                    <Icon name="facebook" size={25} color="#088178" />
                    <Icon name="twitter" size={25} color="#088178" />
                    <Icon name="instagram" size={25} color="#088178" />
                    <Icon name="linkedin" size={25} color="#088178" />
                  </View>
                </View>
              </View>
              <View style={styles.social}></View>
            </View>

            <View style={styles.contactForm}>
              <Text style={styles.heading}>Message Now</Text>
              <View style={styles.formBox}>
                <View style={[styles.inputBox, styles.w50]}>
                  <TextInput style={styles.input} placeholder="First Name" />
                </View>
                <View style={[styles.inputBox, styles.w50]}>
                  <TextInput style={styles.input} placeholder="Last Name" />
                </View>
                <View style={[styles.inputBox, styles.w50]}>
                  <TextInput style={styles.input} placeholder="Email Address" />
                </View>
                <View style={[styles.inputBox, styles.w50]}>
                  <TextInput style={styles.input} placeholder="Phone" />
                </View>
                <View style={[styles.inputBox, styles.w100]}>
                  <TextInput
                    style={[styles.input, styles.messageInput]}
                    placeholder="Write your message here..."
                    multiline
                  />
                </View>
                <TouchableOpacity style={[styles.inputBox, styles.w100]}>
                  <Text style={styles.submitBtn}>Send Message</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNavBar navigation={navigation} />
    </>
  );
};
// --STYLING --
const styles = StyleSheet.create({
  section: {
    marginTop: 20,
    backgroundColor: "#E5E5E5",
    flex: 1,
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: "colomn",
    flexWrap: "wrap",
  },
  contactInfo: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    elevation: 10,
    marginBottom: 20,
    alignItems: "center",
  },
  heading: {
    color: "#088178",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
  },
  info: {
    marginTop: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    tintColor: "#088178",
  },
  infoText: {
    color: "#555555",
    fontSize: 16,
    fontWeight: "800",
  },
  social: {
    flexDirection: "row",
    marginTop: 20,
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    tintColor: "#088178",
  },
  contactForm: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    elevation: 10,
  },
  formBox: {
    flexDirection: "colomn",
    flexWrap: "wrap",
    marginTop: 20,
  },
  inputBox: {
    marginBottom: 20,
    width: "100%",
  },
  w50: {
    width: "100%",
  },
  w100: {
    width: "100%",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
  },
  messageInput: {
    height: 120,
    textAlignVertical: "top",
  },
  submitBtn: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#088178",
    color: "#FFFF",
    textAlign: "center",
    borderRadius: 5,
    overflow: "hidden",
  },
  socialMediaLinks: {
    alignItems: "center",
    marginTop: 20,
    gap: 10,
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

export default ContactUs;
