import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Toast from "react-native-toast-message";

export default function SigninScreen() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckbox = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const response = await axios.post(
          "http://localhost:3002/login",
          formData,
          { withCredentials: true }
        );

        if (response.status === 200) {
          console.log("User logged in successfully:", response.data);
          //dispatch(setUser(response.data.user)); // Uncomment if you use Redux
          navigation.navigate("Profile");
          Toast.show({
            type: "success",
            text1: "User Login successfully",
          });
        } else {
          console.log("Error logging in:", response.data);
          Toast.show({
            type: "error",
            text1: response.data,
          });
        }
      } catch (error) {
        console.error("Error:", error.message);
        Toast.show({
          type: "error",
          text1: error.message,
        });
      } finally {
        setIsLoading(false);
      }
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>WELCOME TO</Text>
      <Text style={styles.webnameText}>SCRAPIFY</Text>
      <Text style={styles.formText}>
        Log in to get in the moment updates on the things that interest you
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={formData.email}
        onChangeText={(value) => handleChange("email", value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={formData.password}
          onChangeText={(value) => handleChange("password", value)}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={handleCheckbox}>
          <Text>{showPassword ? "Hide" : "Show"}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Log In</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.signupText}>
        Don't have an account?{" "}
        <Text
          style={styles.signupLink}
          onPress={() => navigation.navigate("Signup")}
        >
          Register Now
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  welcomeText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  },
  webnameText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  formText: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  signupText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  signupLink: {
    color: "blue",
    fontWeight: "bold",
  },
});
