import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import CustomTagInput from './CustomTagInput'; // Adjust the path accordingly

export default function AddNewProduct({ close }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    stockQuantity: 0,
    imageURL: '',
    brand: '',
    weight: '',
    length: 0,
    width: 0,
    height: 0,
    color: '',
    material: '',
    keywords: [],
    rating: 0,
    discounts: '',
    availabilityStatus: 'available',
    vendorId: '', // Set this appropriately
  });
  const [tags, setTags] = useState([]);
  const [suggestions] = useState([
    { id: 'electronics', text: 'Electronics' },
    { id: 'clothing', text: 'Clothing' },
    { id: 'home', text: 'Home' },
  ]);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:3002/products/', formData);
      close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={formData.name}
          onChangeText={(text) => handleChange('name', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.input}
          value={formData.price.toString()}
          onChangeText={(text) => handleChange('price', parseFloat(text))}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Stock Quantity:</Text>
        <TextInput
          style={styles.input}
          value={formData.stockQuantity.toString()}
          onChangeText={(text) => handleChange('stockQuantity', parseInt(text))}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          value={formData.description}
          onChangeText={(text) => handleChange('description', text)}
          multiline
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Category:</Text>
        <TextInput
          style={styles.input}
          value={formData.category}
          onChangeText={(text) => handleChange('category', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Brand:</Text>
        <TextInput
          style={styles.input}
          value={formData.brand}
          onChangeText={(text) => handleChange('brand', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Image URL:</Text>
        <TextInput
          style={styles.input}
          value={formData.imageURL}
          onChangeText={(text) => handleChange('imageURL', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Weight:</Text>
        <TextInput
          style={styles.input}
          value={formData.weight}
          onChangeText={(text) => handleChange('weight', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Length:</Text>
        <TextInput
          style={styles.input}
          value={formData.length.toString()}
          onChangeText={(text) => handleChange('length', parseFloat(text))}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Width:</Text>
        <TextInput
          style={styles.input}
          value={formData.width.toString()}
          onChangeText={(text) => handleChange('width', parseFloat(text))}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Height:</Text>
        <TextInput
          style={styles.input}
          value={formData.height.toString()}
          onChangeText={(text) => handleChange('height', parseFloat(text))}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Discounts:</Text>
        <TextInput
          style={styles.input}
          value={formData.discounts}
          onChangeText={(text) => handleChange('discounts', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Rating:</Text>
        <TextInput
          style={styles.input}
          value={formData.rating.toString()}
          onChangeText={(text) => handleChange('rating', parseFloat(text))}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Keywords:</Text>
        <CustomTagInput tags={tags} setTags={setTags} suggestions={suggestions} />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Color:</Text>
        <TextInput
          style={styles.input}
          value={formData.color}
          onChangeText={(text) => handleChange('color', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Material:</Text>
        <TextInput
          style={styles.input}
          value={formData.material}
          onChangeText={(text) => handleChange('material', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Availability Status:</Text>
        <TextInput
          style={styles.input}
          value={formData.availabilityStatus}
          onChangeText={(text) => handleChange('availabilityStatus', text)}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

