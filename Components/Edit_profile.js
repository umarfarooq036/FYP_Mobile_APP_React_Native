import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Image, StyleSheet, ActivityIndicator, TouchableOpacity, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";
import { selectUser } from "../data/userSlice";
import { useNavigation } from '@react-navigation/native';

export default function EditProfile() {
  const navigation = useNavigation();
  const currentUser = useSelector(selectUser); // Retrieve user data (contains at least name and ID) from Redux store
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    bio: "",
    imageUrl: "",
    imageFile: null,
  });

  useEffect(() => {
    if (currentUser) {
      // Fetch full user data from backend using user ID
      axios
        .get(`http://localhost:3002/users/${currentUser.id}`)
        .then((response) => {
          const userData = response.data; // Assuming response.data contains user's full information
          const { firstName, lastName, email, phone, address, bio, imageUrl } = userData;
          setFormData({
            firstName,
            lastName,
            email,
            phone,
            address,
            bio,
            imageUrl,
            imageFile: null,
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setLoading(false);
        });
    }
  }, [currentUser]);

  const handleInputChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, imageFile: file, imageUrl: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, address, bio, imageUrl, imageFile } = formData;

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", firstName);
    formDataToSend.append("lastName", lastName);
    formDataToSend.append("email", email);
    formDataToSend.append("phone", phone);
    formDataToSend.append("address", address);
    formDataToSend.append("bio", bio);

    if (imageUrl) {
      formDataToSend.append("imageUrl", imageUrl);
    } else if (imageFile) {
      formDataToSend.append("imageFile", imageFile);
    }

    axios
      .patch(`http://localhost:3002/users/${currentUser.id}`, formDataToSend)
      .then((response) => {
        console.log("Profile updated successfully:", response.data);
        navigation.navigate('Profile');
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={formData.firstName}
          onChangeText={(text) => handleInputChange('firstName', text)}
          required
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          value={formData.lastName}
          onChangeText={(text) => handleInputChange('lastName', text)}
          required
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
          keyboardType="email-address"
          required
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          value={formData.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
          keyboardType="phone-pad"
          required
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          value={formData.address}
          onChangeText={(text) => handleInputChange('address', text)}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>About</Text>
        <TextInput
          style={styles.textArea}
          value={formData.bio}
          onChangeText={(text) => handleInputChange('bio', text)}
          multiline
        />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Profile Image</Text>
        <TouchableOpacity style={styles.button} onPress={() => { /* handle image upload */ }}>
          <Text style={styles.buttonText}>Upload Image</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Enter Image URL"
          value={formData.imageUrl}
          onChangeText={(text) => handleInputChange('imageUrl', text)}
        />
        <TouchableOpacity style={styles.clearButton} onPress={() => setFormData({ ...formData, imageUrl: "" })}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
        {formData.imageUrl && (
          <View style={styles.imagePreview}>
            <Text>Uploaded Image Preview:</Text>
            <Image
              source={{ uri: formData.imageUrl }}
              style={styles.image}
            />
          </View>
        )}
      </View>
      <Button title="Save Changes" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    height: 100,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  clearButton: {
    marginVertical: 10,
  },
  clearButtonText: {
    color: '#007bff',
    textAlign: 'center',
  },
  imagePreview: {
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});