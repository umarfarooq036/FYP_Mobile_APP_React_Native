import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Toast from "react-native-toast-message";

export default function SignupScreen() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    birthday: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckbox = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    setTimeout(async () => {
      try {
        const response = await axios.post(
          "http://localhost:3002/signup",
          formData
        );

        if (response.status === 200) {
          console.log("User registered successfully:", response.data);
          Toast.show({
            type: "success",
            text1: "User registered successfully",
          });
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            birthday: "",
            email: "",
            password: "",
          });
          navigation.navigate("Signin");
        } else {
          console.log("Error registering user:", response.data);
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
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={formData.firstName}
        onChangeText={(value) => handleInputChange("firstName", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={formData.lastName}
        onChangeText={(value) => handleInputChange("lastName", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="03124567890"
        value={formData.phone}
        onChangeText={(value) => handleInputChange("phone", value)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Birthday"
        value={formData.birthday}
        onChangeText={(value) => handleInputChange("birthday", value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={formData.password}
          onChangeText={(value) => handleInputChange("password", value)}
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
          <Text style={styles.buttonText}>Sign Up</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.signinText}>
        Already have an account?{" "}
        <Text
          style={styles.signinLink}
          onPress={() => navigation.navigate("Signin")}
        >
          Log In
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
  signinText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  signinLink: {
    color: "blue",
    fontWeight: "bold",
  },
});
